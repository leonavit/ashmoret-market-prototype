import { prefersReducedMotion } from "../lib/format.js";

const AUTOPLAY_MS = 5000;
const SLIDES = 3;

let mounted = [];

export function promoCarousel() {
  const slides = Array.from({ length: SLIDES }, (_, index) => {
    const heading = index === 0 ? "h1" : "h2";
    return `<div class="promo-slide" role="group" aria-roledescription="שקופית" aria-label="${index + 1} מתוך ${SLIDES}" ${index === 0 ? "" : 'aria-hidden="true"'}>
      <a href="#/m/tozeret" class="promo-slide-link" ${index === 0 ? "" : 'tabindex="-1"'}>
        <div class="hero-panel relative z-10 p-6 text-ink lg:flex lg:min-h-[520px] lg:items-center" ${index === 0 ? "data-hero-copy" : ""}>
          <div class="max-w-md lg:p-8">
            <${heading} class="text-4xl font-extrabold leading-tight lg:text-5xl">אייטם מקודם</${heading}>
            <p class="mt-3 text-lg text-muted">אורז, קטניות, פסטה, שימורים, שמנים ותבלינים. קטלוג תוצרת, במקום אחד.</p>
            <span class="btn btn-line mt-6">הנעה לפעולה</span>
          </div>
        </div>
      </a>
    </div>`;
  }).join("");
  const dots = Array.from({ length: SLIDES }, (_, index) => `<button type="button" class="hero-dot" data-promo-dot="${index}" aria-label="שקופית ${index + 1} מתוך ${SLIDES}" ${index === 0 ? 'aria-current="true"' : ""}></button>`).join("");
  return `<div class="home-block promo-carousel overflow-hidden rounded-[18px] border border-line bg-[#ececec] lg:col-span-2 lg:row-span-2 lg:min-h-[520px]" data-promo-carousel aria-roledescription="קרוסלה" aria-label="אייטמים מקודמים">
    <div class="promo-viewport"><div class="promo-track">${slides}</div></div>
    <button type="button" class="cat-arrow promo-arrow is-prev" data-promo-prev aria-label="השקופית הקודמת">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
    </button>
    <button type="button" class="cat-arrow promo-arrow is-next" data-promo-next aria-label="השקופית הבאה">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>
    </button>
    <div class="hero-dots" role="group" aria-label="דפדוף בין השקופיות">${dots}</div>
  </div>`;
}

function mountOne(root) {
  const Embla = window.EmblaCarousel;
  if (!Embla || root.dataset.ready === "true") return;
  root.dataset.ready = "true";
  const embla = Embla(root.querySelector(".promo-viewport"), {
    loop: true,
    direction: "rtl",
    duration: prefersReducedMotion() ? 0 : 30,
  });
  const entry = { root, embla, timer: 0, paused: false };
  const stop = () => {
    window.clearInterval(entry.timer);
    entry.timer = 0;
  };
  const start = () => {
    stop();
    if (entry.paused || prefersReducedMotion()) return;
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
      slide.querySelector("a")?.setAttribute("tabindex", index === current ? "0" : "-1");
    });
    start();
  });
  root.querySelector("[data-promo-prev]")?.addEventListener("click", () => embla.scrollPrev());
  root.querySelector("[data-promo-next]")?.addEventListener("click", () => embla.scrollNext());
  root.querySelectorAll("[data-promo-dot]").forEach((dot) => {
    dot.addEventListener("click", () => embla.scrollTo(Number(dot.dataset.promoDot)));
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
