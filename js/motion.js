import { prefersReducedMotion } from "./lib/format.js";

export function playHero(root) {
  const gsap = window.gsap;
  const copy = root.querySelector("[data-hero-copy]");
  if (!gsap || !copy || prefersReducedMotion()) return;
  gsap.fromTo(copy, { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" });
}

export function revealLogo() {
  const root = document.documentElement;
  if (!root.classList.contains("is-logo-curtain")) return;
  const gsap = window.gsap;
  const link = document.querySelector(".header-logo");
  const img = link?.querySelector("img");
  if (!gsap || !img || prefersReducedMotion()) {
    root.classList.remove("is-logo-curtain");
    return;
  }
  const curtain = document.createElement("span");
  curtain.className = "logo-curtain";
  curtain.setAttribute("aria-hidden", "true");
  curtain.innerHTML = `<span class="logo-curtain-half is-left"></span><span class="logo-curtain-half is-right"></span>`;
  link.append(curtain);
  gsap.set(img, { opacity: 0 });
  root.classList.remove("is-logo-curtain");
  gsap.timeline({ delay: 0.15, onComplete: () => curtain.remove() })
    .to(curtain.querySelector(".is-left"), { xPercent: -100, duration: 1, ease: "power3.inOut" }, 0)
    .to(curtain.querySelector(".is-right"), { xPercent: 100, duration: 1, ease: "power3.inOut" }, 0)
    .fromTo(img, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)", clearProps: "opacity,transform" }, 0.5);
}

let shimmers = [];

export function shimmerButtons(root) {
  shimmers = shimmers.filter((tween) => {
    if (tween.targets()[0]?.isConnected) return true;
    tween.kill();
    return false;
  });
  const gsap = window.gsap;
  if (!gsap || prefersReducedMotion()) return;
  root.querySelectorAll(".promo-hero-cta, .hero-cta").forEach((button, index) => {
    if (button.classList.contains("has-shimmer")) return;
    button.classList.add("has-shimmer");
    shimmers.push(gsap.fromTo(button, { "--shimmer-x": "260%" }, {
      "--shimmer-x": "-130%",
      duration: 1.1,
      ease: "power2.inOut",
      repeat: -1,
      repeatDelay: 2.8,
      delay: 0.8 + index * 0.35,
    }));
  });
}

export function rollQty(el, direction) {
  if (!el || prefersReducedMotion()) return;
  el.classList.remove("is-rolling-up", "is-rolling-down");
  void el.offsetWidth;
  el.classList.add(direction > 0 ? "is-rolling-up" : "is-rolling-down");
  el.addEventListener("animationend", () => el.classList.remove("is-rolling-up", "is-rolling-down"), { once: true });
}

export function sparkAt(event, target) {
  if (prefersReducedMotion()) return;
  const rect = target.getBoundingClientRect();
  const fromPointer = event.detail > 0;
  const burst = document.createElement("span");
  burst.className = "click-spark";
  burst.setAttribute("aria-hidden", "true");
  const x = fromPointer ? event.clientX : rect.left + rect.width / 2;
  const y = fromPointer ? event.clientY : rect.top + rect.height / 2;
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;
  const rays = 8;
  for (let i = 0; i < rays; i += 1) {
    const ray = document.createElement("i");
    ray.style.setProperty("--spark-angle", `${(360 / rays) * i + Math.random() * 14 - 7}deg`);
    burst.appendChild(ray);
  }
  (target.closest("dialog[open]") || document.body).appendChild(burst);
  const placed = burst.getBoundingClientRect();
  if (Math.abs(placed.left - x) > 0.5 || Math.abs(placed.top - y) > 0.5) {
    burst.style.left = `${2 * x - placed.left}px`;
    burst.style.top = `${2 * y - placed.top}px`;
  }
  window.setTimeout(() => burst.remove(), 600);
}

function visibleCartIcon() {
  const icon = document.querySelector(".cart-dock-icon");
  const box = icon?.getBoundingClientRect();
  return box && box.width && box.bottom > 0 && box.top < window.innerHeight ? icon : null;
}

function flyLayer(button) {
  const dialog = button.closest("dialog[open]");
  if (!dialog) return document.body;
  if (typeof HTMLElement.prototype.showPopover !== "function") return dialog;
  const layer = document.createElement("div");
  layer.className = "fly-layer";
  layer.popover = "manual";
  document.body.appendChild(layer);
  layer.showPopover();
  return layer;
}

export function flyToCart(button) {
  const gsap = window.gsap;
  if (!gsap || !button || prefersReducedMotion()) return;
  const source = button.closest(".card, .deal-card, .product-pop, .product-page")?.querySelector("img[data-photo]");
  const target = visibleCartIcon();
  if (!source || !target) return;
  const from = source.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  if (!from.width || !from.height) return;
  const size = Math.min(from.width, from.height);
  const ghost = source.cloneNode();
  ghost.removeAttribute("loading");
  ghost.removeAttribute("data-photo");
  ghost.className = "fly-ghost";
  ghost.setAttribute("aria-hidden", "true");
  Object.assign(ghost.style, {
    left: `${from.left + (from.width - size) / 2}px`,
    top: `${from.top + (from.height - size) / 2}px`,
    width: `${size}px`,
    height: `${size}px`,
    transition: "none",
  });
  const layer = flyLayer(button);
  layer.appendChild(ghost);
  const placed = ghost.getBoundingClientRect();
  ghost.style.left = `${2 * parseFloat(ghost.style.left) - placed.left}px`;
  ghost.style.top = `${2 * parseFloat(ghost.style.top) - placed.top}px`;
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  const end = Math.max(0.08, (to.width * 0.9) / size);
  gsap.timeline({
    onComplete: () => {
      ghost.remove();
      if (layer.matches(".fly-layer")) layer.remove();
      const mark = visibleCartIcon()?.closest(".cart-dock-mark");
      if (!mark) return;
      sparkAt({ detail: 0 }, mark);
      gsap.fromTo(mark, { scale: 1 }, { scale: 1.3, duration: 0.14, delay: 0.08, ease: "power2.out", yoyo: true, repeat: 1, transformOrigin: "50% 50%", clearProps: "transform" });
    },
  })
    .to(ghost, { scale: 1.12, duration: 0.18, ease: "power2.out" })
    .to(ghost, { x: dx, duration: 0.75, ease: "power1.inOut" }, ">")
    .to(ghost, { y: dy, duration: 0.75, ease: "power3.in" }, "<")
    .to(ghost, { scale: end, opacity: 0.85, duration: 0.75, ease: "power2.in" }, "<");
}

export function pulseAdd(button) {
  const gsap = window.gsap;
  if (!gsap || !button || prefersReducedMotion()) return;
  gsap.fromTo(button, { scale: 0.96 }, { scale: 1, duration: 0.28, ease: "back.out(2)" });
}
