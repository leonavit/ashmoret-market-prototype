import { getProduct } from "../data/catalog.js";
import { getCommerce } from "../data/commerce.js";
import { isElectronicsProduct } from "../data/departments.js";
import { mountProductGalleries, productFolds, productGallery } from "./product-view.js";
import { esc, money } from "../lib/format.js";

function ensureDialog() {
  let dialog = document.getElementById("product-pop");
  if (dialog) return dialog;
  dialog = document.createElement("dialog");
  dialog.id = "product-pop";
  dialog.className = "product-pop";
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest("[data-pop-close]")) dialog.close();
  });
  document.body.appendChild(dialog);
  return dialog;
}

function field(label, value) {
  return `<p class="product-pop-spec">${esc(label)}: ${esc(value)}</p>`;
}

function markup(product) {
  const commerce = getCommerce(product.id);
  const price = commerce
    ? `<p class="product-price">${money(commerce.price)}${commerce.compareAt ? `<s>${money(commerce.compareAt)}</s>` : ""}</p>`
    : `<p class="product-price is-pending">מחיר יעודכן</p>`;
  return `<div class="product-pop-bar">
      <button type="button" class="auth-close" data-pop-close aria-label="סגירה">×</button>
    </div>
    <div class="product-pop-layout">
      ${productGallery(product, commerce?.compareAt ? `<span class="sale-badge">מבצע</span>` : "")}
      <div class="product-info">
        <div class="product-head">
          <h2 id="product-pop-title">${esc(product.name)}</h2>
          <p class="product-pop-barcode">ברקוד <span dir="ltr">7350013220547</span></p>
          ${price}
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
        ${productFolds(product, { openDescription: false, shipping: false })}
      </div>
    </div>`;
}

export function openProductPopup(id) {
  const product = getProduct(id);
  if (!product || isElectronicsProduct(product)) return;
  const dialog = ensureDialog();
  dialog.innerHTML = markup(product);
  dialog.setAttribute("aria-labelledby", "product-pop-title");
  mountProductGalleries(dialog);
  if (!dialog.open) dialog.showModal();
  dialog.querySelector("[data-pop-close]")?.focus();
}
