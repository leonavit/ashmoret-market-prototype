import { isElectronicsProduct } from "../data/departments.js";
import { getCommerce } from "../data/commerce.js";
import { esc, money } from "../lib/format.js";

function productAnchor(product, attrs, inner) {
  const pop = isElectronicsProduct(product) ? "" : ` data-product-pop="${esc(product.id)}"`;
  return `<a href="#/p/${esc(product.id)}"${pop} ${attrs}>${inner}</a>`;
}

function cardParts(product) {
  const commerce = getCommerce(product.id);
  const badge = commerce?.compareAt ? `<span class="sale-badge">מבצע</span>` : "";
  const price = commerce
    ? `<p class="price">${money(commerce.price)}${commerce.compareAt ? `<s>${money(commerce.compareAt)}</s>` : ""}</p>`
    : `<p class="text-sm font-semibold text-muted">מחיר יעודכן</p>`;
  return { badge, price };
}

export function buyRow(id, { flat = false } = {}) {
  return `<div class="buy-row${flat ? " is-flat" : ""}" data-buy>
    <div class="qty-step" dir="ltr">
      <button type="button" data-qty="-1" aria-label="הפחתת כמות">−</button>
      <span class="qty-unit">יח׳</span>
      <input data-qty-input inputmode="numeric" maxlength="2" value="1" aria-label="כמות">
      <button type="button" data-qty="1" aria-label="הגדלת כמות">+</button>
    </div>
    <button type="button" class="buy-add" data-add="${esc(id)}">הוספה</button>
  </div>`;
}

export function productCard(product) {
  return shelfCard(product);
}

export function shelfCard(product) {
  const { badge, price } = cardParts(product);
  return `<article class="card card-shelf">
    ${productAnchor(product, `class="card-media"`, badge)}
    <p class="card-brand">${esc(product.brand)}</p>
    <h3 class="card-name" title="${esc(product.name)}">${productAnchor(product, ``, esc(product.name))}</h3>
    <p class="card-meta">${esc(product.weight)} · ${esc(product.unitsPerPack)} יח׳ במארז</p>
    <div class="card-buy">
      ${price}
      ${buyRow(product.id)}
    </div>
  </article>`;
}

export function dealCard(product) {
  const commerce = getCommerce(product.id);
  const price = commerce
    ? `<p class="price">${money(commerce.price)}${commerce.compareAt ? `<s>${money(commerce.compareAt)}</s>` : ""}</p>`
    : `<p class="text-sm font-semibold text-muted">מחיר יעודכן</p>`;
  return `<article class="deal-card">
    ${productAnchor(product, `class="deal-media" aria-hidden="true" tabindex="-1"`, "")}
    <div class="deal-body">
      <h3 class="leading-5">${productAnchor(product, ``, esc(product.name))}</h3>
      <div class="card-buy">
        ${price}
        ${buyRow(product.id)}
      </div>
    </div>
  </article>`;
}

export function productGrid(items) {
  if (!items.length) {
    return `<p class="rounded-2xl bg-paper px-5 py-10 text-center font-semibold">לא נמצאו מוצרים להצגה.</p>`;
  }
  return `<ul class="grid grid-cols-2 product-grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">${items
    .map((product) => `<li>${shelfCard(product)}</li>`)
    .join("")}</ul>`;
}
