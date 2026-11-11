import { productsByCategory } from "../data/catalog.js";
import { shelfCard } from "./product-card.js";
import { carousel, mountCarousels } from "./carousel.js";
import { esc } from "../lib/format.js";
import { mountLottieIcons } from "./topbar-icons.js";
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

function railHtml(slug, label) {
  const items = productsByCategory(slug);
  if (!items.length) {
    return `<p class="catalog-empty">אין מוצרים להצגה בקטגוריה הזו.</p>`;
  }
  return carousel(items, label);
}

function panelHtml(layout, slug, label) {
  return layout === "rail" ? railHtml(slug, label) : gridHtml(slug);
}

function tabId(sectionId, slug) {
  return `${sectionId}-panel-tab-${slug}`;
}

function catalogTabButtons(tabs, attribute, sectionId) {
  return tabs.map(([slug, name], index) => {
    const selected = index === 0;
    return `<button type="button" role="tab" id="${esc(tabId(sectionId, slug))}" aria-controls="${esc(sectionId)}-panel" ${attribute}="${esc(slug)}" aria-selected="${selected}" tabindex="${selected ? "0" : "-1"}">${esc(name)}</button>`;
  }).join("");
}

function panelAttrs(sectionId, tabs) {
  const first = tabs[0]?.[0];
  const labelledBy = first ? ` aria-labelledby="${esc(tabId(sectionId, first))}"` : "";
  return `id="${esc(sectionId)}-panel" role="tabpanel"${labelledBy}`;
}

function selectTab(tabs, tab, panel, focus) {
  tabs.forEach((item) => {
    const on = item === tab;
    item.setAttribute("aria-selected", String(on));
    item.tabIndex = on ? 0 : -1;
  });
  panel.setAttribute("aria-labelledby", tab.id);
  if (focus) tab.focus({ preventScroll: true });
  const list = tab.parentElement;
  if (list && list.scrollWidth > list.clientWidth) {
    const tabBox = tab.getBoundingClientRect();
    const listBox = list.getBoundingClientRect();
    const offset = tabBox.left + tabBox.width / 2 - (listBox.left + listBox.width / 2);
    list.scrollBy({ left: offset, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
}

function bindTabKeys(tablist, tabs, activate) {
  tablist?.addEventListener("keydown", (event) => {
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    const keys = { ArrowLeft: index + 1, ArrowRight: index - 1, Home: 0, End: tabs.length - 1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    activate(tabs[(keys[event.key] + tabs.length) % tabs.length]);
  });
}

const subChevron = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;

function showCatalogSub(grid, button) {
  const sub = grid.querySelector("[data-catalog-sub]");
  if (!sub) return;
  sub.href = `#/c/${button.dataset.catalogGridTab}`;
  sub.querySelector("[data-catalog-sub-name]").textContent = button.textContent.trim();
  const gsap = window.gsap;
  if (!gsap || prefersReducedMotion()) return;
  gsap.fromTo(sub,
    { opacity: 0, x: -28, skewX: 18 },
    { opacity: 1, x: 0, skewX: 0, duration: 0.55, ease: "power3.out", overwrite: true, clearProps: "transform,opacity" });
}

export function catalogGridSection({ id, title, href, tabs, className = "pb-12", layout = "grid", showTabs = true, icon = "" }) {
  const mark = icon ? `<span class="nav-icon is-${esc(icon)}" aria-hidden="true"></span>` : `<span class="cat-heart" aria-hidden="true"></span>`;
  const first = tabs[0]?.[0];
  const panel = first ? panelHtml(layout, first, title) : `<p class="catalog-empty">אין מוצרים להצגה בקטגוריה הזו.</p>`;
  const tabList = showTabs && tabs.length
    ? `<div class="catalog-tabs" role="tablist" aria-label="קטגוריות ${esc(title)}">${catalogTabButtons(tabs, "data-catalog-grid-tab", id)}</div>`
    : "";
  const subLink = showTabs && first
    ? `<a class="catalog-sub" href="#/c/${esc(first)}" data-catalog-sub>${subChevron}<span data-catalog-sub-name>${esc(tabs[0][1])}</span></a>`
    : "";
  return `<section class="${esc(className)}" data-catalog-grid data-catalog-layout="${esc(layout)}" data-catalog-label="${esc(title)}" aria-labelledby="${esc(id)}">
    <div class="catalog-head">
      <div class="catalog-title">
        <h2 id="${esc(id)}"><a href="${esc(href)}">${mark}${esc(title)}</a></h2>
        ${subLink}
      </div>
      ${tabList}
    </div>
    <div data-catalog-grid-panel ${showTabs ? panelAttrs(id, tabs) : ""}>${panel}</div>
  </section>`;
}

export function catalogSection() {
  const tabs = catalogTabButtons(catalogTabs, "data-catalog-tab", "catalog-title");

  return `<section class="pb-12" data-catalog aria-labelledby="catalog-title">
    <div class="catalog-head">
      <h2 id="catalog-title">קטלוג מוצרים</h2>
      <div class="catalog-tabs" role="tablist" aria-label="קטגוריות הקטלוג">${tabs}</div>
    </div>
    <div class="catalog-rail" ${panelAttrs("catalog-title", catalogTabs)}>
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
  const panel = section.querySelector(".catalog-rail");
  const tabs = [...section.querySelectorAll("[data-catalog-tab]")];
  const activate = (button, focus = true) => {
    const changed = button.getAttribute("aria-selected") !== "true";
    selectTab(tabs, button, panel, focus);
    if (!changed) return;
    track.innerHTML = slidesHtml(button.dataset.catalogTab);
    mountLottieIcons(track);
    start();
  };
  tabs.forEach((button) => button.addEventListener("click", () => activate(button, false)));
  bindTabKeys(section.querySelector("[role=tablist]"), tabs, activate);
  start();
}

function bindCatalogGrid(grid) {
  if (!grid || grid.dataset.ready === "true") return;
  grid.dataset.ready = "true";
  const panel = grid.querySelector("[data-catalog-grid-panel]");
  const tabs = [...grid.querySelectorAll("[data-catalog-grid-tab]")];
  const activate = (button, focus = true) => {
    const changed = button.getAttribute("aria-selected") !== "true";
    selectTab(tabs, button, panel, focus);
    if (!changed) return;
    const { catalogLayout: layout, catalogLabel: label } = grid.dataset;
    panel.innerHTML = panelHtml(layout, button.dataset.catalogGridTab, label);
    mountLottieIcons(panel);
    if (layout === "rail") mountCarousels(panel);
    showCatalogSub(grid, button);
  };
  tabs.forEach((button) => button.addEventListener("click", () => activate(button, false)));
  bindTabKeys(grid.querySelector("[role=tablist]"), tabs, activate);
}

export function mountCatalog(root) {
  root.querySelectorAll("[data-catalog]").forEach(bindCatalogRail);
  root.querySelectorAll("[data-catalog-grid]").forEach(bindCatalogGrid);
}
