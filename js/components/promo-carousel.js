import { prefersReducedMotion } from "../lib/format.js";
import { offerBanners, sideBanners } from "../data/banners.js";
import { getTheme } from "./theme-options.js";

const AUTOPLAY_MS = 5000;

let mounted = [];

const heroSlides = [
  {
    image: "assets/images/banners/hero-pantry.webp",
    size: [1024, 539],
    fade: "#f7f2e9",
    kicker: "מוצרי מזווה",
    title: "כל מה שצריך",
    sub: "למזווה במקום אחד",
    text: "פסטה, אורז, קטניות, שמנים, שימורים ותבלינים – במבחר גדול ובקנייה נוחה.",
    cta: { href: "#/d/super", label: "לקנייה עכשיו" },
  },
  {
    image: "assets/images/banners/hero-home.webp",
    size: [1024, 539],
    fade: "#f7f2e9",
    kicker: "לבית ולמטבח",
    title: `<span class="whitespace-nowrap">חד־פעמי</span> וכלי בית`,
    sub: "לשימוש יומיומי ולאירוח",
    text: "מגוון רחב של מוצרים לשימוש יומיומי בבית, במטבח ובאירוח.",
    cta: { href: "#/d/home", label: "למגוון המלא" },
  },
  {
    image: "assets/images/banners/hero-appliances.webp",
    size: [1024, 539],
    fade: "#f7f2e9",
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
      <p class="promo-hero-kicker">${slide.kicker}</p>
      <${heading} class="promo-hero-title">${slide.title}<br><span class="promo-hero-sub">${slide.sub}</span></${heading}>
      <p class="promo-hero-text">${slide.text}</p>
      <a class="promo-hero-cta" href="${slide.cta.href}" ${index === 0 ? "" : 'tabindex="-1"'}>${slide.cta.label}</a>
    </div>
  </div>`;
}

const sideSlides = () => (getTheme().banners === "v2" ? offerBanners : sideBanners);

function carouselControls(count) {
  const dots = Array.from({ length: count }, (_, index) => `<button type="button" class="hero-dot" data-promo-dot="${index}" aria-label="שקופית ${index + 1} מתוך ${count}" ${index === 0 ? 'aria-current="true"' : ""}></button>`).join("");
  return `<button type="button" class="cat-arrow promo-arrow is-prev" data-promo-prev aria-label="השקופית הקודמת">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
    </button>
    <button type="button" class="cat-arrow promo-arrow is-next" data-promo-next aria-label="השקופית הבאה">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>
    </button>
    <div class="hero-dots" role="group" aria-label="דפדוף בין השקופיות">${dots}</div>`;
}

export function promoCarousel() {
  const slides = heroSlides.map(heroSlide).join("");
  return `<div class="home-block promo-carousel overflow-hidden rounded-[12px] border border-line bg-surface lg:col-span-2 lg:row-span-2 lg:min-h-[520px]" data-promo-carousel aria-roledescription="קרוסלה" aria-label="אייטמים מקודמים">
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
  return {
    scrollNext: () => show(current + 1),
    scrollPrev: () => show(current - 1),
    scrollTo: show,
    selectedScrollSnap: () => current,
    on: (event, listener) => {
      if (event === "select") listeners.push(listener);
    },
    destroy: () => {},
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
      slide.querySelectorAll("a").forEach((link) => link.setAttribute("tabindex", index === current ? "0" : "-1"));
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
