import { prefersReducedMotion } from "../lib/format.js";
import { offerBanners, sideBanners } from "../data/banners.js";
import { getTheme } from "./theme-options.js";

const AUTOPLAY_MS = 5000;

let mounted = [];

const heroSlides = [
  {
    image: "assets/images/banners/hero-pantry.webp?v=2",
    size: [1024, 512],
    fade: "#ffffff",
    kicker: "מוצרי מזווה",
    title: "כל מה שצריך",
    sub: "למזווה במקום אחד",
    text: "פסטה, אורז, קטניות, שמנים, שימורים ותבלינים – במבחר גדול ובקנייה נוחה.",
    cta: { href: "#/d/super", label: "לקנייה עכשיו" },
  },
  {
    image: "assets/images/banners/hero-home.webp?v=2",
    size: [1024, 512],
    fade: "#ffffff",
    kicker: "לבית ולמטבח",
    title: `<span class="whitespace-nowrap">חד־פעמי</span> וכלי בית`,
    sub: "לשימוש יומיומי ולאירוח",
    text: "מגוון רחב של מוצרים לשימוש יומיומי בבית, במטבח ובאירוח.",
    cta: { href: "#/d/home", label: "למגוון המלא" },
  },
  {
    image: "assets/images/banners/hero-appliances.webp?v=2",
    size: [1024, 512],
    fade: "#ffffff",
    kicker: "מכשירי חשמל",
    title: "מכשירי חשמל",
    sub: "שמשדרגים את הבית",
    text: "מגוון פתרונות חכמים למטבח ולבית במקום אחד, לקנייה נוחה.",
    cta: { href: "#/d/electronics", label: "לצפייה במוצרים" },
  },
];

const SLIDES = heroSlides.length;

function heroSlide(slide, index) {
  const heading = index === 0 ? "h1" : "h2";
  return `<div class="promo-slide promo-hero" style="--hero-fade:${slide.fade}" role="group" aria-roledescription="שקופית" aria-label="${index + 1} מתוך ${SLIDES}" ${index === 0 ? "" : 'aria-hidden="true"'}>
    <img class="promo-hero-img" src="${slide.image}" alt="" width="${slide.size[0]}" height="${slide.size[1]}" decoding="async">
    <div class="promo-hero-copy" ${index === 0 ? "data-hero-copy" : ""}>
      <div class="promo-hero-head">
        <p class="promo-hero-kicker">${slide.kicker}</p>
        <${heading} class="promo-hero-title">${slide.title}<br><span class="promo-hero-sub">${slide.sub}</span></${heading}>
      </div>
      <div class="promo-hero-body">
        <p class="promo-hero-text">${slide.text}</p>
        <a class="promo-hero-cta" href="${slide.cta.href}" ${index === 0 ? "" : 'tabindex="-1"'}>${slide.cta.label}</a>
      </div>
    </div>
  </div>`;
}

const sideSlides = () => (getTheme().banners === "v2" ? offerBanners : sideBanners);

const pauseIcon = `<svg class="autoplay-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg>`;
const playIcon = `<svg class="autoplay-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"></path></svg>`;

export function autoplayToggle() {
  return `<button type="button" class="autoplay-toggle" data-autoplay-toggle aria-pressed="false" aria-label="עצירת ההחלפה האוטומטית">${pauseIcon}${playIcon}</button>`;
}

export function bindAutoplayToggle(root, onChange) {
  const button = root.querySelector("[data-autoplay-toggle]");
  if (!button) return;
  if (prefersReducedMotion()) {
    button.hidden = true;
    return;
  }
  button.addEventListener("click", () => {
    const stopped = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(stopped));
    button.setAttribute("aria-label", stopped ? "הפעלת ההחלפה האוטומטית" : "עצירת ההחלפה האוטומטית");
    onChange(stopped);
  });
}

function carouselControls(count) {
  const dots = Array.from({ length: count }, (_, index) => `<button type="button" class="hero-dot" data-promo-dot="${index}" aria-label="שקופית ${index + 1} מתוך ${count}" ${index === 0 ? 'aria-current="true"' : ""}></button>`).join("");
  return `<button type="button" class="cat-arrow promo-arrow is-prev" data-promo-prev aria-label="השקופית הקודמת">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
    </button>
    <button type="button" class="cat-arrow promo-arrow is-next" data-promo-next aria-label="השקופית הבאה">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>
    </button>
    <div class="hero-dots" role="group" aria-label="דפדוף בין השקופיות">${dots}${autoplayToggle()}</div>`;
}

export function promoCarousel() {
  const slides = heroSlides.map(heroSlide).join("");
  const fade = getTheme().heroEffect === "v2" ? " data-promo-fade" : "";
  return `<div class="home-block promo-carousel${fade ? " is-fade" : ""} overflow-hidden rounded-[12px] border border-line bg-surface lg:col-span-2 lg:row-span-2 lg:min-h-[520px]" data-promo-carousel${fade} aria-roledescription="קרוסלה" aria-label="אייטמים מקודמים">
    <div class="promo-viewport"><div class="promo-track">${slides}</div></div>
    ${carouselControls(SLIDES)}
  </div>`;
}

function sideSlide(slide, index, slides) {
  const count = slides.length;
  const media = slide.image
    ? `<img class="side-slide-media" src="${slide.image}" alt="" width="${slide.size[0]}" height="${slide.size[1]}" decoding="async">`
    : `<span class="proto-label" aria-hidden="true">באנר מתחלף ${index + 1}/${count}</span><span class="side-slide-media" aria-hidden="true"></span>`;
  return `<div class="promo-slide side-slide" role="group" aria-roledescription="שקופית" aria-label="${index + 1} מתוך ${count}" ${index === 0 ? "" : 'aria-hidden="true"'}>
    <a class="side-slide-link${slide.image ? " has-image" : ""}" href="${slide.href}" aria-label="${slide.label}" ${index === 0 ? "" : 'tabindex="-1"'}>
      ${media}
    </a>
  </div>`;
}

export function sideCarousel() {
  const slides = sideSlides();
  return `<div class="home-block promo-carousel side-carousel overflow-hidden rounded-[12px] border border-line bg-white lg:col-start-3 lg:row-span-2" data-promo-carousel data-promo-fade aria-roledescription="קרוסלה" aria-label="באנרים מתחלפים">
    <div class="promo-viewport"><div class="promo-track">${slides.map(sideSlide).join("")}</div></div>
    ${carouselControls(slides.length)}
  </div>`;
}

function fadeEngine(root) {
  const slides = [...root.querySelectorAll(".promo-slide")];
  const listeners = [];
  let current = 0;
  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, n) => slide.classList.toggle("is-active", n === current));
    listeners.forEach((listener) => listener());
  };
  slides[0]?.classList.add("is-active");

  const track = root.querySelector(".promo-track") || root;
  let startX = 0;
  let startY = 0;
  let dragging = false;
  let horizontal = false;
  let swiped = false;
  const begin = (x, y) => {
    dragging = true;
    horizontal = false;
    swiped = false;
    startX = x;
    startY = y;
  };
  const finish = (x, y) => {
    if (!dragging) return;
    dragging = false;
    const dx = x - startX;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(y - startY)) return;
    swiped = true;
    show(dx > 0 ? current + 1 : current - 1);
  };
  const onDown = (event) => {
    if (event.pointerType === "touch" || event.button > 0) return;
    begin(event.clientX, event.clientY);
  };
  const onUp = (event) => {
    if (event.pointerType === "touch") return;
    finish(event.clientX, event.clientY);
  };
  const onTouchStart = (event) => {
    const touch = event.touches[0];
    if (event.touches.length === 1) begin(touch.clientX, touch.clientY);
    else dragging = false;
  };
  const onTouchMove = (event) => {
    if (!dragging) return;
    const touch = event.touches[0];
    const dx = Math.abs(touch.clientX - startX);
    const dy = Math.abs(touch.clientY - startY);
    if (!horizontal && dx > 8 && dx > dy) horizontal = true;
    if (!horizontal && dy > 8 && dy >= dx) dragging = false;
    if (horizontal && event.cancelable) event.preventDefault();
  };
  const onTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    if (touch) finish(touch.clientX, touch.clientY);
  };
  const onTouchCancel = () => {
    dragging = false;
  };
  const onClick = (event) => {
    if (!swiped) return;
    event.preventDefault();
    event.stopPropagation();
    swiped = false;
  };
  const onDragStart = (event) => event.preventDefault();
  track.addEventListener("pointerdown", onDown);
  window.addEventListener("pointerup", onUp);
  track.addEventListener("touchstart", onTouchStart, { passive: true });
  track.addEventListener("touchmove", onTouchMove, { passive: false });
  track.addEventListener("touchend", onTouchEnd);
  track.addEventListener("touchcancel", onTouchCancel);
  track.addEventListener("click", onClick, true);
  track.addEventListener("dragstart", onDragStart);

  return {
    scrollNext: () => show(current + 1),
    scrollPrev: () => show(current - 1),
    scrollTo: show,
    selectedScrollSnap: () => current,
    on: (event, listener) => {
      if (event === "select") listeners.push(listener);
    },
    destroy: () => {
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove", onTouchMove);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("touchcancel", onTouchCancel);
      track.removeEventListener("click", onClick, true);
      track.removeEventListener("dragstart", onDragStart);
    },
  };
}

function mountOne(root) {
  const Embla = window.EmblaCarousel;
  if (!Embla || root.dataset.ready === "true") return;
  root.dataset.ready = "true";
  const embla = root.hasAttribute("data-promo-fade")
    ? fadeEngine(root)
    : Embla(root.querySelector(".promo-viewport"), {
      loop: true,
      direction: "rtl",
      duration: prefersReducedMotion() ? 0 : 30,
    });
  const entry = { root, embla, timer: 0, paused: false, stopped: false };
  const stop = () => {
    window.clearInterval(entry.timer);
    entry.timer = 0;
  };
  const start = () => {
    stop();
    if (entry.paused || entry.stopped || prefersReducedMotion()) return;
    entry.timer = window.setInterval(() => embla.scrollNext(), AUTOPLAY_MS);
  };
  entry.stop = stop;
  embla.on("select", () => {
    const current = embla.selectedScrollSnap();
    root.querySelectorAll("[data-promo-dot]").forEach((dot, index) => {
      if (index === current) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    root.querySelectorAll(".promo-slide").forEach((slide, index) => {
      slide.toggleAttribute("aria-hidden", index !== current);
      slide.querySelectorAll("a").forEach((link) => link.setAttribute("tabindex", index === current ? "0" : "-1"));
    });
    start();
  });
  root.querySelector("[data-promo-prev]")?.addEventListener("click", () => embla.scrollPrev());
  root.querySelector("[data-promo-next]")?.addEventListener("click", () => embla.scrollNext());
  root.querySelectorAll("[data-promo-dot]").forEach((dot) => {
    dot.addEventListener("click", () => embla.scrollTo(Number(dot.dataset.promoDot)));
  });
  bindAutoplayToggle(root, (stopped) => {
    entry.stopped = stopped;
    start();
  });
  const pause = (value) => {
    entry.paused = value;
    if (value) stop();
    else start();
  };
  root.addEventListener("mouseenter", () => pause(true));
  root.addEventListener("mouseleave", () => pause(false));
  root.addEventListener("focusin", () => pause(true));
  root.addEventListener("focusout", (event) => {
    if (!root.contains(event.relatedTarget)) pause(false);
  });
  start();
  mounted.push(entry);
}

export function mountPromoCarousels(...roots) {
  mounted = mounted.filter((entry) => {
    if (entry.root.isConnected) return true;
    entry.stop();
    entry.embla.destroy();
    return false;
  });
  roots.filter(Boolean).forEach((root) => root.querySelectorAll("[data-promo-carousel]").forEach(mountOne));
}
