import { categories, getCategory, products, productsByCategory, searchProducts } from "../data/catalog.js";
import { getDepartment } from "../data/departments.js";
import { getCommerce } from "../data/commerce.js";
import { getManufacturer } from "../data/manufacturers.js";
import { applyListing, listingControls, visibleSlice } from "../components/filters.js";
import { productGrid } from "../components/product-card.js";
import { inSupplierScope } from "../components/suppliers.js";
import { esc } from "../lib/format.js";

function crumbs(items) {
  return `<nav class="mb-4 text-sm text-muted" aria-label="מיקום">${items
    .map((item, index) => index === items.length - 1
      ? `<span aria-current="page">${esc(item.label)}</span>`
      : `<a class="font-semibold text-blue" href="${esc(item.href)}">${esc(item.label)}</a>`)
    .join('<span aria-hidden="true"> / </span>')}</nav>`;
}

function moreButton(more) {
  if (!more) return "";
  return `<button type="button" class="btn btn-line mx-auto mt-6" data-show-all>הצגת כל המוצרים, עוד ${more}</button>`;
}

export function renderCategory(slug, query) {
  if (slug === "electronics") {
    return `<article class="wrap py-8">
      ${crumbs([{ href: "#/", label: "דף הבית" }, { label: "קניון אשמורת" }])}
      <h1 class="text-3xl font-extrabold">קניון אשמורת</h1>
      <p class="mt-2 text-muted">אין מוצרים להצגה.</p>
    </article>`;
  }
  const category = getCategory(slug);
  if (!category) return renderMissing("הקטגוריה לא נמצאה");
  const source = productsByCategory(slug);
  const items = applyListing(source, query);
  const view = visibleSlice(items, query);
  return `<article class="wrap py-8">
    ${crumbs([{ href: "#/", label: "דף הבית" }, { label: category.name }])}
    <h1 class="text-3xl font-extrabold">${esc(category.name)}</h1>
    <p class="mt-2 text-muted">${items.length} מוצרים בקטלוג תוצרת</p>
    <div class="mt-6">
      ${listingControls({ categories: null, query })}
      ${productGrid(view.shown)}
      ${moreButton(view.more)}
    </div>
  </article>`;
}

export function renderManufacturer(id, query) {
  const manufacturer = getManufacturer(id);
  if (!manufacturer) return renderMissing("היצרן לא נמצא");
  const source = manufacturer.sample ? [] : products.filter((product) => product.manufacturerId === manufacturer.id);
  const items = applyListing(source, query);
  const view = visibleSlice(items, query);
  const mark = `<span class="grid size-20 place-items-center rounded-full border border-line bg-white" aria-hidden="true"></span>`;
  return `<article>
    <section class="relative min-h-72 overflow-hidden border-b border-line bg-surface text-ink">
      <div class="wrap relative flex min-h-72 items-end gap-4 py-8">
        ${mark}
        <div>
          ${crumbs([{ href: "#/", label: "דף הבית" }, { href: "#/market", label: "יצרנים" }, { label: manufacturer.name }])}
          <h1 class="text-4xl font-extrabold">${esc(manufacturer.name)}</h1>
          <p class="mt-2 max-w-xl text-muted">${esc(manufacturer.blurb)}</p>
        </div>
      </div>
    </section>
    <div class="wrap py-8">
      <section class="mb-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]" aria-label="תוכן היצרן">
        <div class="rounded-2xl bg-paper p-6">
          <h2 class="text-2xl font-extrabold">${esc(manufacturer.bannerTitle)}</h2>
          <p class="mt-2 text-muted">${esc(manufacturer.bannerText)}</p>
        </div>
        <div class="rounded-2xl border border-line p-6">
          <h2 class="font-extrabold">קטגוריות</h2>
          ${manufacturer.sample
            ? `<p class="mt-2 text-sm text-muted">אין קטגוריות להצגה.</p>`
            : `<ul class="mt-3 flex flex-wrap gap-2">${categories.map((category) => `<li><a class="inline-flex min-h-10 items-center rounded-full border border-line px-3 text-sm font-semibold hover:border-blue" href="#/c/${esc(category.slug)}">${esc(category.name)}</a></li>`).join("")}</ul>`}
        </div>
      </section>
      <section aria-labelledby="maker-grid">
        <h2 id="maker-grid" class="mb-4 text-2xl font-extrabold">המוצרים</h2>
        ${manufacturer.sample ? `<p class="rounded-2xl bg-paper px-5 py-8 font-semibold">ליצרן הזה אין קטלוג. התבנית מוכנה לנתונים.</p>` : `
          ${listingControls({ categories, query })}
          ${productGrid(view.shown)}
          ${moreButton(view.more)}
        `}
      </section>
    </div>
  </article>`;
}

export function renderDepartment(id, query) {
  const department = getDepartment(id);
  if (!department) return renderMissing("המחלקה לא נמצאה");
  const sections = department.slugs
    .map((slug) => getCategory(slug))
    .filter(Boolean);
  const source = department.offers
    ? products.filter((product) => getCommerce(product.id)?.compareAt)
    : department.slugs.flatMap((slug) => productsByCategory(slug));
  if (!source.length) {
    return `<article class="wrap py-8">
      ${crumbs([{ href: "#/", label: "דף הבית" }, { label: department.name }])}
      <h1 class="text-3xl font-extrabold">${esc(department.name)}</h1>
      <p class="mt-2 text-muted">אין מוצרים להצגה.</p>
    </article>`;
  }
  const items = applyListing(source, query);
  const view = visibleSlice(items, query);
  const chips = sections.length > 1
    ? `<ul class="mt-5 flex flex-wrap gap-2">${sections.map((section) => `<li><a class="inline-flex min-h-10 items-center rounded-full border border-line px-3 text-sm font-semibold" href="#/c/${esc(section.slug)}">${esc(section.name)}</a></li>`).join("")}</ul>`
    : "";
  return `<article class="wrap py-8">
    ${crumbs([{ href: "#/", label: "דף הבית" }, { label: department.name }])}
    <h1 class="flex items-center gap-3 text-3xl font-extrabold"><span class="nav-icon is-${esc(department.id)} h-8" aria-hidden="true"></span>${esc(department.name)}</h1>
    <p class="mt-2 text-muted">${items.length} מוצרים במחלקה</p>
    ${chips}
    <div class="mt-6">
      ${listingControls({ categories: null, query })}
      ${productGrid(view.shown)}
      ${moreButton(view.more)}
    </div>
  </article>`;
}

export function renderSearch(query) {
  const text = (query.q || "").trim();
  const source = (text ? searchProducts(text) : products).filter(inSupplierScope);
  const items = applyListing(source, query);
  const view = visibleSlice(items, query);
  return `<article class="wrap py-8">
    ${crumbs([{ href: "#/", label: "דף הבית" }, { label: "חיפוש" }])}
    <h1 class="text-3xl font-extrabold">${text ? `תוצאות עבור „${esc(text)}”` : "חיפוש בקטלוג"}</h1>
    <p class="mt-2 text-muted">${items.length} מוצרים</p>
    <div class="mt-6">
      ${listingControls({ categories: null, query })}
      ${productGrid(view.shown)}
      ${moreButton(view.more)}
    </div>
  </article>`;
}

function renderMissing(title) {
  return `<article class="wrap py-16 text-center">
    <h1 class="text-3xl font-extrabold">${esc(title)}</h1>
    <a class="btn mt-6" href="#/">חזרה לדף הבית</a>
  </article>`;
}
