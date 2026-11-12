import { getCommerce } from "../data/commerce.js";
import { esc } from "../lib/format.js";

export function applyListing(list, query) {
  let items = list.slice();
  if (query.brand) items = items.filter((product) => product.brand === query.brand);
  if (query.category) items = items.filter((product) => product.categorySlug === query.category);
  if (query.offers === "1") items = items.filter((product) => getCommerce(product.id)?.compareAt);
  const sort = query.sort || "name";
  items.sort((a, b) => {
    if (sort === "price-asc") return (getCommerce(a.id)?.price || 0) - (getCommerce(b.id)?.price || 0);
    if (sort === "price-desc") return (getCommerce(b.id)?.price || 0) - (getCommerce(a.id)?.price || 0);
    return a.name.localeCompare(b.name, "he");
  });
  return items;
}

export function listingControls({ categories, query, count }) {
  const categoryOptions = categories
    ? [`<option value="">כל הקטגוריות</option>`]
        .concat(categories.map((category) => `<option value="${esc(category.slug)}"${query.category === category.slug ? " selected" : ""}>${esc(category.name)}</option>`))
        .join("")
    : "";
  const sorts = [
    ["name", "שם"],
    ["price-asc", "מחיר, מהנמוך"],
    ["price-desc", "מחיר, מהגבוה"],
    ["offers", "מבצעים בלבד"],
  ];
  const current = query.offers === "1" ? "offers" : query.sort || "name";

  return `<form class="listing-bar" data-listing-form>
    <div class="listing-filters">
      ${categories ? `<label class="listing-select"><span>קטגוריה</span><select name="category">${categoryOptions}</select></label>` : ""}
      ${count ? `<p class="listing-count"><span class="listing-count-num">(${count.total})</span> ${count.total === 1 ? "מוצר" : "מוצרים"} ${count.where}</p>` : ""}
    </div>
    <label class="listing-select listing-sort"><span>מיון</span><select name="sort">${sorts
      .map(([value, label]) => `<option value="${value}"${current === value ? " selected" : ""}>${label}</option>`)
      .join("")}</select></label>
  </form>`;
}

function pageSize() {
  return window.matchMedia("(min-width: 1280px)").matches ? 25 : 24;
}

export function visibleSlice(items, query) {
  const limit = pageSize();
  if (query.all === "1" || items.length <= limit) return { shown: items, more: 0 };
  return { shown: items.slice(0, limit), more: items.length - limit };
}
