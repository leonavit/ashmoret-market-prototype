import { shelfCard } from "./product-card.js";
import { esc } from "../lib/format.js";
import { prefersReducedMotion } from "../lib/format.js";

export function carousel(items, label) {
  return `<div class="embla catalog-rail" data-carousel aria-label="${esc(label)}">
    <button type="button" class="cat-arrow" data-carousel-prev aria-label="הקודם">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
    </button>
    <div class="embla__viewport catalog-viewport">
      <div class="embla__container">
        ${items.map((product) => `<div class="embla__slide">${shelfCard(product)}</div>`).join("")}
      </div>
    </div>
    <button type="button" class="cat-arrow" data-carousel-next aria-label="הבא">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>
    </button>
  </div>`;
}

export function mountCarousels(root) {
  const Embla = window.EmblaCarousel;
  if (!Embla) return;
  root.querySelectorAll("[data-carousel]").forEach((node) => {
    if (node.dataset.ready === "true") return;
    const viewport = node.querySelector(".embla__viewport");
    const carousel = Embla(viewport, {
      direction: "rtl",
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
    });
    node.dataset.ready = "true";
    const prev = node.querySelector("[data-carousel-prev]");
    const next = node.querySelector("[data-carousel-next]");
    const sync = () => {
      prev.disabled = !carousel.canScrollPrev();
      next.disabled = !carousel.canScrollNext();
    };
    prev.addEventListener("click", () => carousel.scrollPrev());
    next.addEventListener("click", () => carousel.scrollNext());
    carousel.on("select", sync);
    carousel.on("reInit", sync);
    sync();
    if (prefersReducedMotion()) carousel.reInit({ duration: 0 });
  });
}
