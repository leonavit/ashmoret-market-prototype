import { productsByCategory } from "../data/catalog.js";
import { shelfCard } from "./product-card.js";
import { esc } from "../lib/format.js";
import { prefersReducedMotion } from "../lib/format.js";

export const catalogTabs = [
  ["breadcrumbs", "פירורי לחם"],
  ["grains", "דגנים וקטניות"],
  ["rice", "אורז"],
  ["pasta", "פסטות ופתיתים"],
  ["tortillas", "טורטיות"],
  ["cans", "שימורים"],
  ["oils", "שמנים ורטבים"],
  ["spices", "תבלינים"],
  ["more", "חד פעמי וכלי בית"],
];

function loopSlides(items) {
  if (!items.length) return [];
  const copies = Math.max(2, Math.ceil(15 / items.length));
  return Array.from({ length: copies }, (_, copy) => items.map((product) => ({ product, copy }))).flat();
}

function slidesHtml(slug) {
  const items = productsByCategory(slug);
  if (!items.length) {
    return `<p class="catalog-empty">אין מוצרים להצגה בקטגוריה הזו.</p>`;
  }
  return loopSlides(items).map(({ product, copy }) => {
    const hidden = copy === 0 ? "" : ` aria-hidden="true"`;
    return `<div class="embla__slide"${hidden}>${shelfCard(product)}</div>`;
  }).join("");
}

function gridHtml(slug) {
  const items = productsByCategory(slug).slice(0, 10);
  if (!items.length) {
    return `<p class="catalog-empty">אין מוצרים להצגה בקטגוריה הזו.</p>`;
  }
  return `<ul class="catalog-grid">${items.map((product) => `<li>${shelfCard(product)}</li>`).join("")}</ul>`;
}

function catalogTabButtons(tabs, attribute) {
  return tabs.map(([slug, name], index) => {
    const selected = index === 0 ? "true" : "false";
    return `<button type="button" role="tab" ${attribute}="${esc(slug)}" aria-selected="${selected}">${esc(name)}</button>`;
  }).join("");
}

export function catalogGridSection({ id, title, href, tabs, className = "pb-12" }) {
  const first = tabs[0]?.[0];
  const panel = first ? gridHtml(first) : `<p class="catalog-empty">אין מוצרים להצגה בקטגוריה הזו.</p>`;
  const tabList = tabs.length
    ? `<div class="catalog-tabs" role="tablist" aria-label="קטגוריות ${esc(title)}">${catalogTabButtons(tabs, "data-catalog-grid-tab")}</div>`
    : "";
  return `<section class="${esc(className)}" data-catalog-grid aria-labelledby="${esc(id)}">
    <div class="catalog-head">
      <h2 id="${esc(id)}" class="text-2xl font-extrabold"><a href="${esc(href)}"><span class="cat-heart" aria-hidden="true"></span>${esc(title)}</a></h2>
      ${tabList}
    </div>
    <div data-catalog-grid-panel>${panel}</div>
  </section>`;
}

export function catalogSection() {
  const tabs = catalogTabButtons(catalogTabs, "data-catalog-tab");

  return `<section class="pb-12" data-catalog aria-labelledby="catalog-title">
    <div class="catalog-head">
      <h2 id="catalog-title" class="text-2xl font-extrabold">קטלוג מוצרים</h2>
      <div class="catalog-tabs" role="tablist" aria-label="קטגוריות הקטלוג">${tabs}</div>
    </div>
    <div class="catalog-rail">
      <button type="button" class="cat-arrow" data-catalog-prev aria-label="הקודם">
        <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
      </button>
      <div class="embla__viewport catalog-viewport">
        <div class="embla__container" data-catalog-track>${slidesHtml("breadcrumbs")}</div>
      </div>
      <button type="button" class="cat-arrow" data-catalog-next aria-label="הבא">
        <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>
      </button>
    </div>
  </section>`;
}

function bindCatalogRail(section) {
  if (!section || section.dataset.ready === "true") return;
  section.dataset.ready = "true";
  const viewport = section.querySelector(".catalog-viewport");
  const track = section.querySelector("[data-catalog-track]");
  const Embla = window.EmblaCarousel;
  let embla = null;

  const start = () => {
    if (embla) {
      embla.destroy();
      embla = null;
    }
    if (!Embla || !track.querySelector(".embla__slide")) return;
    embla = Embla(viewport, {
      loop: true,
      direction: "rtl",
      align: "start",
      containScroll: false,
      duration: prefersReducedMotion() ? 0 : 25,
    });
  };

  section.querySelector("[data-catalog-prev]").addEventListener("click", () => embla?.scrollPrev());
  section.querySelector("[data-catalog-next]").addEventListener("click", () => embla?.scrollNext());
  section.querySelectorAll("[data-catalog-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.getAttribute("aria-selected") === "true") return;
      section.querySelectorAll("[data-catalog-tab]").forEach((tab) => tab.setAttribute("aria-selected", "false"));
      button.setAttribute("aria-selected", "true");
      track.innerHTML = slidesHtml(button.dataset.catalogTab);
      start();
    });
  });
  start();
}

function bindCatalogGrid(grid) {
  if (!grid || grid.dataset.ready === "true") return;
  grid.dataset.ready = "true";
  const panel = grid.querySelector("[data-catalog-grid-panel]");
  grid.querySelectorAll("[data-catalog-grid-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.getAttribute("aria-selected") === "true") return;
      grid.querySelectorAll("[data-catalog-grid-tab]").forEach((tab) => tab.setAttribute("aria-selected", "false"));
      button.setAttribute("aria-selected", "true");
      panel.innerHTML = gridHtml(button.dataset.catalogGridTab);
    });
  });
}

export function mountCatalog(root) {
  root.querySelectorAll("[data-catalog]").forEach(bindCatalogRail);
  root.querySelectorAll("[data-catalog-grid]").forEach(bindCatalogGrid);
}
