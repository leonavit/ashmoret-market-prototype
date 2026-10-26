import { getProduct, productsByCategory } from "../data/catalog.js";
import { getCommerce } from "../data/commerce.js";
import { carousel } from "../components/carousel.js";
import { productBuy, productDescription, productGallery, productTabs } from "../components/product-view.js";
import { esc, money } from "../lib/format.js";

const sep = `<svg class="product-sep" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;

export function renderProduct(id) {
  const product = getProduct(id);
  if (!product) {
    return `<article class="wrap py-16 text-center"><h1 class="text-3xl font-extrabold">המוצר לא נמצא</h1><a class="btn mt-6" href="#/">חזרה לדף הבית</a></article>`;
  }
  const commerce = getCommerce(product.id);
  const siblings = productsByCategory(product.categorySlug);
  const index = siblings.findIndex((item) => item.id === product.id);
  const previous = index > 0 ? siblings[index - 1] : null;
  const following = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : null;
  const related = siblings.filter((item) => item.id !== product.id).slice(0, 8);
  const price = commerce
    ? `<p class="product-price">${money(commerce.price)}${commerce.compareAt ? `<s>${money(commerce.compareAt)}</s>` : ""}</p>`
    : `<p class="product-price is-pending">מחיר יעודכן</p>`;

  return `<article class="product-page wrap">
    <nav class="product-crumbs" aria-label="מיקום">
      <a href="#/">דף הבית</a>
      ${sep}
      <a href="#/c/${esc(product.categorySlug)}">${esc(product.categoryName)}</a>
      ${sep}
      <span aria-current="page">${esc(product.name)}</span>
    </nav>
    <div class="product-layout">
      ${productGallery(product, commerce?.compareAt ? `<span class="sale-badge">מבצע</span>` : "")}
      <div class="product-info">
        <div class="product-head">
          <p class="product-brand">${esc(product.brand)}</p>
          <h1>${esc(product.name)}</h1>
          ${price}
        </div>
        ${productBuy(product)}
        ${productDescription(product)}
      </div>
    </div>
    ${productTabs(product)}
    ${previous || following ? `<nav class="product-neighbors" aria-label="מוצרים סמוכים">${neighbor(previous, "המוצר הקודם")}${neighbor(following, "המוצר הבא")}</nav>` : ""}
    ${related.length ? `<section class="product-related" aria-labelledby="related-title"><h2 id="related-title">אולי יעניין אותך</h2>${carousel(related, "מוצרים קשורים")}</section>` : ""}
  </article>`;
}

function neighbor(product, label) {
  if (!product) return `<span class="product-neighbor is-empty"></span>`;
  return `<a class="product-neighbor" href="#/p/${esc(product.id)}"><span>${esc(label)}</span><strong>${esc(product.name)}</strong></a>`;
}

