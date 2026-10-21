import { getProduct, productsByCategory } from "../data/catalog.js";
import { deliveryFee, getCommerce } from "../data/commerce.js";
import { carousel } from "../components/carousel.js";
import { productFolds, productGallery } from "../components/product-view.js";
import { esc, money } from "../lib/format.js";

const sep = `<svg class="product-sep" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;
const truck = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path><circle cx="7" cy="18" r="1.4"></circle><circle cx="17" cy="18" r="1.4"></circle></svg>`;
const tag = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 3H5v7l8.5 8.5a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8z"></path><circle cx="8.5" cy="8.5" r="1.1" fill="currentColor"></circle></svg>`;
const phone = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M11 18h2"></path></svg>`;

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
          <h1>${esc(product.name)}</h1>
          ${price}
          <p class="product-lead">${esc(product.brand)}. אריזה של ${esc(product.weight)}, ${esc(String(product.unitsPerPack))} יחידות במארז.</p>
        </div>
        <div class="product-fields">
          ${field("משקל", product.weight)}
          ${field("יח׳ במארז", String(product.unitsPerPack))}
        </div>
        <div class="product-buy" data-buy>
          <p class="product-label">כמות</p>
          <div class="product-buy-row">
            <div class="product-qty" dir="ltr">
              <button type="button" data-qty="-1" aria-label="הפחתת כמות">−</button>
              <input data-qty-input inputmode="numeric" maxlength="2" value="1" aria-label="כמות">
              <button type="button" data-qty="1" aria-label="הגדלת כמות">+</button>
            </div>
            <button type="button" class="product-add" data-add="${esc(product.id)}">הוספה לסל</button>
          </div>
          <button type="button" class="product-now" data-buy-now="${esc(product.id)}">קנייה עכשיו</button>
        </div>
        <div class="product-meta">
          <p><span>מקט</span> <b dir="ltr">${esc(product.id)}</b></p>
          <p><span>ברקוד</span> <b dir="auto">${esc(product.barcode)}</b></p>
          <p><span>קטגוריה</span> <a href="#/c/${esc(product.categorySlug)}">${esc(product.categoryName)}</a></p>
        </div>
        <ul class="product-trust">
          <li>${truck}<span><strong>משלוח עד הבית</strong><span>מחיר משלוח ${money(deliveryFee)}</span></span></li>
          <li>${tag}<span><strong>מחירים להדגמה</strong><span>אינו מחיר קטלוג</span></span></li>
          <li class="is-wide">${phone}<span><strong>שירות לקוחות</strong><span dir="ltr">03-000-0000</span></span></li>
        </ul>
        ${productFolds(product)}
        ${previous || following ? `<nav class="product-neighbors" aria-label="מוצרים סמוכים">${neighbor(previous, "המוצר הקודם")}${neighbor(following, "המוצר הבא")}</nav>` : ""}
      </div>
    </div>
    ${related.length ? `<section class="product-related" aria-labelledby="related-title"><h2 id="related-title">אולי יעניין אותך</h2>${carousel(related, "מוצרים קשורים")}</section>` : ""}
  </article>`;
}

function field(label, value) {
  return `<div class="product-field"><p>${esc(label)}: ${esc(value)}</p><div class="product-field-box" dir="auto">${esc(value)}</div></div>`;
}

function neighbor(product, label) {
  if (!product) return `<span class="product-neighbor is-empty"></span>`;
  return `<a class="product-neighbor" href="#/p/${esc(product.id)}"><span>${esc(label)}</span><strong>${esc(product.name)}</strong></a>`;
}

