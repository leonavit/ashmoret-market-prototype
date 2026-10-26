import { prefersReducedMotion } from "../lib/format.js";

const AUTOPLAY_MS = 5000;

const slides = [
  { kicker: "סופר אשמורת", title: "באנר מתחלף לקמפיין", text: "מקום לתמונה רחבה של מבצע או קטגוריה.", href: "#/d/super", tone: "#e6e6e6" },
  { kicker: "חד פעמי וכלי בית", title: "באנר מתחלף למוצר מקודם", text: "מקום לתמונה רחבה של מוצר או מותג.", href: "#/d/home", tone: "#dcdcdc" },
  { kicker: "קניון אשמורת", title: "באנר מתחלף למחלקה", text: "מקום לתמונה רחבה של מחלקה או אירוע.", href: "#/d/electronics", tone: "#ececec" },
  { kicker: "מבצעים", title: "באנר מתחלף למבצע", text: "מקום לתמונה רחבה של מבצע עונתי.", href: "#/d/offers", tone: "#e1e1e1" },
];

let embla = null;
let timer = 0;
let paused = false;

function markup() {
  return `<div class="wrap pt-6">
    <div class="hero-slider" data-hero-slider>
      <div class="hero-slider-viewport">
        <div class="hero-slider-track">
          ${slides.map((slide, index) => `<div class="hero-slide" role="group" aria-roledescription="שקופית" aria-label="${index + 1} מתוך ${slides.length}" ${index === 0 ? "" : 'aria-hidden="true"'}>
            <a class="hero-slide-link" href="${slide.href}" style="--slide-tone:${slide.tone}" ${index === 0 ? "" : 'tabindex="-1"'}>
              <span class="proto-label" aria-hidden="true">באנר מתחלף ${index + 1}/${slides.length}</span>
              <span class="hero-slide-copy">
                <span class="text-xs font-bold text-muted">${slide.kicker}</span>
                <span class="hero-slide-title">${slide.title}</span>
                <span class="text-muted">${slide.text}</span>
                <span class="hero-cta mt-4">הנעה לפעולה</span>
              </span>
              <span class="hero-slide-media" aria-hidden="true"></span>
            </a>
          </div>`).join("")}
        </div>
      </div>
      <div class="hero-dots" role="group" aria-label="דפדוף בין השקופיות">
        ${slides.map((_, index) => `<button type="button" class="hero-dot" data-hero-dot="${index}" aria-label="שקופית ${index + 1} מתוך ${slides.length}" ${index === 0 ? 'aria-current="true"' : ""}></button>`).join("")}
      </div>
    </div>
  </div>`;
}

function stop() {
  window.clearInterval(timer);
  timer = 0;
}

function start() {
  stop();
  if (!embla || paused || prefersReducedMotion()) return;
  timer = window.setInterval(() => embla?.scrollNext(), AUTOPLAY_MS);
}

function syncSlides(root) {
  const current = embla.selectedScrollSnap();
  root.querySelectorAll(".hero-dot").forEach((dot, index) => {
    if (index === current) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });
  root.querySelectorAll(".hero-slide").forEach((slide, index) => {
    const active = index === current;
    slide.toggleAttribute("aria-hidden", !active);
    slide.querySelector("a")?.setAttribute("tabindex", active ? "0" : "-1");
  });
}

export function setHeroSlider(visible) {
  const root = document.getElementById("hero-slider");
  if (!root) return;
  root.hidden = !visible;
  if (!visible) {
    stop();
    embla?.destroy();
    embla = null;
    root.innerHTML = "";
    return;
  }
  if (embla) return;
  const Embla = window.EmblaCarousel;
  root.innerHTML = markup();
  if (!Embla) return;
  const slider = root.querySelector("[data-hero-slider]");
  embla = Embla(slider.querySelector(".hero-slider-viewport"), {
    loop: true,
    direction: "rtl",
    duration: prefersReducedMotion() ? 0 : 30,
  });
  embla.on("select", () => {
    syncSlides(slider);
    start();
  });
  slider.querySelectorAll("[data-hero-dot]").forEach((dot) => {
    dot.addEventListener("click", () => embla?.scrollTo(Number(dot.dataset.heroDot)));
  });
  const pause = (value) => () => {
    paused = value;
    if (value) stop();
    else start();
  };
  slider.addEventListener("mouseenter", pause(true));
  slider.addEventListener("mouseleave", pause(false));
  slider.addEventListener("focusin", pause(true));
  slider.addEventListener("focusout", (event) => {
    if (!slider.contains(event.relatedTarget)) pause(false)();
  });
  paused = false;
  start();
}
