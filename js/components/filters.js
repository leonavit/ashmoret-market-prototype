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

export function listingControls({ brands, categories, query }) {
  const brandOptions = [`<option value="">כל המותגים</option>`]
    .concat(brands.map((brand) => `<option value="${esc(brand)}"${query.brand === brand ? " selected" : ""}>${esc(brand)}</option>`))
    .join("");
  const categoryOptions = categories
    ? [`<option value="">כל הקטגוריות</option>`]
        .concat(categories.map((category) => `<option value="${esc(category.slug)}"${query.category === category.slug ? " selected" : ""}>${esc(category.name)}</option>`))
        .join("")
    : "";
  const sorts = [
    ["name", "שם"],
    ["price-asc", "מחיר, מהנמוך"],
    ["price-desc", "מחיר, מהגבוה"],
  ];

  return `<form class="mb-6 grid gap-3 md:grid-cols-4" data-listing-form>
    ${categories ? `<label class="field"><span class="text-sm font-semibold">קטגוריה</span><select name="category">${categoryOptions}</select></label>` : ""}
    <label class="field"><span class="text-sm font-semibold">מותג</span><select name="brand">${brandOptions}</select></label>
    <label class="field"><span class="text-sm font-semibold">מיון</span><select name="sort">${sorts
      .map(([value, label]) => `<option value="${value}"${(query.sort || "name") === value ? " selected" : ""}>${label}</option>`)
      .join("")}</select></label>
    <label class="flex items-end gap-2 pb-3 text-sm font-semibold">
      <input type="checkbox" name="offers" value="1"${query.offers === "1" ? " checked" : ""}>
      מבצעים בלבד
    </label>
  </form>`;
}

export function visibleSlice(items, query) {
  if (query.all === "1" || items.length <= 24) return { shown: items, more: 0 };
  return { shown: items.slice(0, 24), more: items.length - 24 };
}
