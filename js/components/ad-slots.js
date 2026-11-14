import { prefersReducedMotion } from "../lib/format.js";

const FLOATING_EXCLUDE = ["checkout", "login", "order", "legal"];
const STORE = "ashmoret-ad";
const VIEWS = `${STORE}-views`;
const INTRUSIVE = `${STORE}-intrusive`;
const mobile = window.matchMedia("(max-width: 767px)");

export const adSlots = [
  { id: "top-strip", type: "strip", label: "באנר עליון 1/1", enabled: false, delayMs: 400, autoCloseSec: 0, frequency: "session", excludeRoutes: [] },
  { id: "corner-peek", type: "peek", label: "באנר פינה 1/1", enabled: false, delayMs: 3000, autoCloseSec: 5, frequency: "session", excludeRoutes: FLOATING_EXCLUDE, intrusive: true },
  { id: "bottom-center", type: "bottom", label: "באנר תחתון 1/1", enabled: false, delayMs: 1500, autoCloseSec: 5, frequency: "session", excludeRoutes: FLOATING_EXCLUDE },
  { id: "interstitial", type: "modal", label: "באנר מסך מלא 1/1", enabled: false, delayMs: 4000, autoCloseSec: 5, frequency: "day", excludeRoutes: FLOATING_EXCLUDE, intrusive: true, onMobile: false, skipFirstView: true },
  { id: "pre-footer", type: "inline", label: "באנר לפני הפוטר 1/1", enabled: false, delayMs: 0, autoCloseSec: 0, frequency: "always", excludeRoutes: [] },
];

const closeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>`;
const tabIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;

const live = new Map();
const pending = new Map();
const dismissed = new Set();
let settings = { enabled: {}, timers: true };
let lastHash = null;
let lastRoute = null;
let bound = false;

function storage(slot) {
  return slot.frequency === "day" ? localStorage : sessionStorage;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function wasClosed(slot) {
  if (slot.frequency === "always") return dismissed.has(slot.id);
  try {
    const value = storage(slot).getItem(`${STORE}:${slot.id}`);
    return slot.frequency === "day" ? value === today() : value === "1";
  } catch {
    return false;
  }
}

function rememberClosed(slot) {
  if (slot.frequency === "always") {
    dismissed.add(slot.id);
    return;
  }
  try {
    storage(slot).setItem(`${STORE}:${slot.id}`, slot.frequency === "day" ? today() : "1");
  } catch {
    /* storage unavailable */
  }
}

function readSession(key) {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* storage unavailable */
  }
}

function eligible(slot, route) {
  if (!settings.enabled[slot.id]) return false;
  if (slot.excludeRoutes.includes(route.name)) return false;
  if (slot.onMobile === false && mobile.matches) return false;
  if (slot.skipFirstView && Number(readSession(VIEWS) || 0) < 2) return false;
  if (slot.intrusive) {
    const lock = readSession(INTRUSIVE);
    if (lock && lock !== slot.id) return false;
  }
  return !wasClosed(slot);
}

function timerSec(slot) {
  return settings.timers ? slot.autoCloseSec : 0;
}

function cardMarkup(slot) {
  const seconds = timerSec(slot);
  const bar = seconds && !prefersReducedMotion() ? `<span class="ad-progress" aria-hidden="true"><span></span></span>` : "";
  const count = seconds ? `<span class="ad-count" data-ad-count>ייסגר בעוד ${seconds}</span>` : "";
  const titleId = `ad-${slot.id}-title`;
  return `<div class="ad-card">
    <span class="proto-label">${slot.label}</span>
    <div class="ad-copy">
      <p class="ad-title" id="${titleId}">שטח פרסום</p>
      <p class="ad-text">כאן יופיע באנר של מבצע או מותג.</p>
      <a class="ad-link" href="#/d/offers">למבצעים</a>
    </div>
    <div class="ad-tools">${count}<button type="button" class="ad-close" data-ad-close aria-label="סגירה">${closeIcon}</button></div>
    ${bar}
  </div>`;
}

function build(slot) {
  const el = document.createElement(slot.type === "modal" ? "div" : "aside");
  el.className = `ad-slot ad-${slot.type}`;
  el.dataset.adSlot = slot.id;
  if (slot.type === "modal") {
    el.innerHTML = `<div class="ad-modal-box" role="dialog" aria-modal="true" aria-labelledby="ad-${slot.id}-title" tabindex="-1">${cardMarkup(slot)}</div>`;
  } else {
    el.setAttribute("aria-label", "פרסומת");
    if (slot.type === "inline") el.classList.add("wrap");
    const inner = slot.type === "strip"
      ? `<div class="ad-strip-inner"><div class="wrap">${cardMarkup(slot)}</div></div>`
      : slot.type === "inline" ? `<div class="ad-inline-inner">${cardMarkup(slot)}</div>` : cardMarkup(slot);
    el.innerHTML = slot.type === "peek"
      ? `<button type="button" class="ad-peek-tab" data-ad-open aria-label="פתיחת הבאנר">${tabIcon}</button>${inner}`
      : inner;
  }
  return el;
}

function mountPoint(slot, el) {
  if (slot.type === "strip") document.querySelector(".site-header")?.before(el);
  else if (slot.type === "inline") document.querySelector(".site-footer")?.before(el);
  else document.body.append(el);
}

function layoutStack() {
  const root = document.documentElement;
  const center = live.get("bottom-center");
  const peek = live.get("corner-peek");
  const centerH = center?.open ? center.el.offsetHeight + parseFloat(getComputedStyle(center.el).bottom) + 12 : 0;
  const peekBar = peek?.open && mobile.matches ? peek.el.getBoundingClientRect().height : 0;
  root.style.setProperty("--ad-center-h", `${centerH}px`);
  root.style.setProperty("--ad-stack", `${centerH + peekBar}px`);
}

function startTimer(inst) {
  const seconds = timerSec(inst.slot);
  if (!seconds) return;
  const total = seconds * 1000;
  const count = inst.el.querySelector("[data-ad-count]");
  const fill = inst.el.querySelector(".ad-progress > span");
  let elapsed = 0;
  let last = performance.now();
  let paused = false;
  let shown = seconds;
  const card = inst.el.querySelector(".ad-card");
  const pause = () => {
    paused = true;
  };
  const resume = (event) => {
    if (event?.relatedTarget && card.contains(event.relatedTarget)) return;
    if (card.matches(":hover") || card.contains(document.activeElement)) return;
    paused = false;
  };
  card.addEventListener("pointerenter", pause);
  card.addEventListener("focusin", pause);
  card.addEventListener("pointerleave", resume);
  card.addEventListener("focusout", resume);
  const tick = (now) => {
    const delta = Math.min(now - last, 100);
    last = now;
    if (!paused) elapsed += delta;
    const left = Math.max(0, total - elapsed);
    const next = Math.ceil(left / 1000);
    if (next !== shown && count) {
      shown = next;
      count.textContent = `ייסגר בעוד ${next}`;
    }
    if (fill) fill.style.transform = `scaleX(${Math.min(1, elapsed / total)})`;
    if (left <= 0) {
      close(inst.slot.id, "timer");
      return;
    }
    inst.raf = requestAnimationFrame(tick);
  };
  inst.raf = requestAnimationFrame((now) => {
    last = now;
    tick(now);
  });
}

function focusables(root) {
  return [...root.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter((item) => item.getClientRects().length);
}

function openModal(inst) {
  const box = inst.el.querySelector(".ad-modal-box");
  inst.returnFocus = document.activeElement;
  document.documentElement.classList.add("ad-scroll-lock");
  inst.el.addEventListener("click", (event) => {
    if (event.target === inst.el) close(inst.slot.id, "overlay");
  });
  inst.el.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const items = focusables(box);
    if (!items.length) return;
    const first = items[0];
    const lastItem = items[items.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === box)) {
      event.preventDefault();
      lastItem.focus();
    } else if (!event.shiftKey && document.activeElement === lastItem) {
      event.preventDefault();
      first.focus();
    }
  });
  box.focus({ preventScroll: true });
}

function show(slot) {
  pending.delete(slot.id);
  if (live.has(slot.id) || !lastRoute || !eligible(slot, lastRoute)) return;
  if (slot.type !== "strip" && slot.type !== "inline" && document.querySelector(".cookie-notice")) {
    waitForCookieNotice(slot);
    return;
  }
  if (slot.intrusive) writeSession(INTRUSIVE, slot.id);
  const el = build(slot);
  const inst = { slot, el, open: false, raf: 0 };
  live.set(slot.id, inst);
  mountPoint(slot, el);
  el.addEventListener("click", (event) => {
    if (event.target.closest("[data-ad-close]")) close(slot.id, "button");
    if (event.target.closest("[data-ad-open]")) expand(inst);
  });
  const reduce = prefersReducedMotion();
  void el.offsetWidth;
  if (slot.type === "peek") {
    el.classList.add("is-peek");
    inst.expandTimer = window.setTimeout(() => expand(inst), reduce ? 0 : 900);
    return;
  }
  el.classList.add("is-open");
  inst.open = true;
  if (slot.type === "modal") openModal(inst);
  layoutStack();
  startTimer(inst);
}

function expand(inst) {
  window.clearTimeout(inst.expandTimer);
  if (inst.open) return;
  inst.open = true;
  inst.el.classList.remove("is-peek");
  inst.el.classList.add("is-open");
  layoutStack();
  startTimer(inst);
}

function waitForCookieNotice(slot) {
  const observer = new MutationObserver(() => {
    if (document.querySelector(".cookie-notice")) return;
    observer.disconnect();
    pending.delete(slot.id);
    schedule(slot, 600);
  });
  observer.observe(document.body, { childList: true });
  pending.set(slot.id, { cancel: () => observer.disconnect() });
}

function schedule(slot, delay = slot.delayMs) {
  if (pending.has(slot.id) || live.has(slot.id)) return;
  const id = window.setTimeout(() => show(slot), delay);
  pending.set(slot.id, { cancel: () => window.clearTimeout(id) });
}

function unschedule(id) {
  pending.get(id)?.cancel();
  pending.delete(id);
}

function teardown(inst, animate) {
  cancelAnimationFrame(inst.raf);
  window.clearTimeout(inst.expandTimer);
  live.delete(inst.slot.id);
  const { el } = inst;
  if (inst.slot.type === "modal") {
    document.documentElement.classList.remove("ad-scroll-lock");
    if (inst.returnFocus?.isConnected) inst.returnFocus.focus({ preventScroll: true });
  } else if (el.contains(document.activeElement)) {
    (document.querySelector("#app h1") || document.getElementById("app"))?.focus({ preventScroll: true });
  }
  layoutStack();
  if (!animate || prefersReducedMotion()) {
    el.remove();
    return;
  }
  el.classList.remove("is-open", "is-peek");
  el.classList.add("is-closing");
  window.setTimeout(() => el.remove(), 400);
}

function close(id, reason) {
  const inst = live.get(id);
  if (!inst) return;
  if (reason) rememberClosed(inst.slot);
  teardown(inst, true);
}

function topmostOpen() {
  const order = ["interstitial", "bottom-center", "corner-peek"];
  return order.find((id) => live.get(id)?.open);
}

function onKeydown(event) {
  if (event.key !== "Escape") return;
  const modal = live.get("interstitial");
  if (modal) {
    event.preventDefault();
    close("interstitial", "escape");
    return;
  }
  const owner = document.activeElement?.closest?.("[data-ad-slot]");
  if (owner) {
    close(owner.dataset.adSlot, "escape");
    return;
  }
  if (document.querySelector("dialog[open], .theme-panel.is-open, .mobile-menu.is-open, .cart-dock.is-open")) return;
  const id = topmostOpen();
  if (id) close(id, "escape");
}

function bind() {
  if (bound) return;
  bound = true;
  document.addEventListener("keydown", onKeydown);
  mobile.addEventListener("change", () => {
    layoutStack();
    if (lastRoute) updateAdSlots(lastRoute, settings);
  });
  window.addEventListener("resize", layoutStack);
}

export function updateAdSlots(route, next = settings) {
  bind();
  settings = next;
  const hash = location.hash || "#/";
  const routeChanged = hash !== lastHash;
  if (routeChanged) {
    lastHash = hash;
    dismissed.clear();
    writeSession(VIEWS, String(Number(readSession(VIEWS) || 0) + 1));
  }
  lastRoute = route;
  adSlots.forEach((slot) => {
    const ok = live.has(slot.id)
      ? settings.enabled[slot.id] && !slot.excludeRoutes.includes(route.name)
      : eligible(slot, route);
    if (!ok) {
      unschedule(slot.id);
      const inst = live.get(slot.id);
      if (inst) teardown(inst, false);
      return;
    }
    schedule(slot);
  });
}

export function replayAdSlots(route, next = settings) {
  adSlots.forEach((slot) => {
    unschedule(slot.id);
    const inst = live.get(slot.id);
    if (inst) teardown(inst, false);
    try {
      sessionStorage.removeItem(`${STORE}:${slot.id}`);
      localStorage.removeItem(`${STORE}:${slot.id}`);
    } catch {
      /* storage unavailable */
    }
  });
  try {
    sessionStorage.removeItem(INTRUSIVE);
    sessionStorage.setItem(VIEWS, String(Math.max(2, Number(readSession(VIEWS) || 0))));
  } catch {
    /* storage unavailable */
  }
  dismissed.clear();
  lastHash = location.hash || "#/";
  updateAdSlots(route, next);
}
