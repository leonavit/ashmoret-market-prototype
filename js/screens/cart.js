import { getProduct } from "../data/catalog.js";
import { getCommerce } from "../data/commerce.js";
import { cartTotals, getCart, lineTotal } from "../state/cart.js";
import { esc, money, moneyText } from "../lib/format.js";
import { photoImg, productPhoto } from "../components/product-photo.js";

const tagIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle></svg>`;

export function savedNote(saved) {
  const icon = tagIcon.replace("<svg ", `<svg class="cart-saved-icon" data-lottie="coins-jump" data-lottie-play="loop" `);
  return saved > 0 ? `<p class="cart-saved">${icon}<span>חסכת <strong>${money(saved)}</strong> בקנייה הזו</span></p>` : "";
}

export function couponForm(coupon, message = "") {
  if (coupon) {
    return `<div class="coupon-applied">
      <span>${tagIcon}קופון <strong>${esc(coupon.code)}</strong> · ${esc(coupon.label)}</span>
      <button type="button" class="coupon-remove" data-coupon-remove>הסרה</button>
    </div>`;
  }
  return `<form class="coupon-form" data-coupon-form novalidate>
      <label class="sr-only" for="coupon-code">קוד קופון</label>
      <input id="coupon-code" name="code" autocomplete="off" placeholder="קוד קופון" aria-describedby="coupon-hint">
      <button type="submit" class="btn btn-line">הפעלה</button>
      <p id="coupon-hint" class="coupon-hint" data-coupon-message aria-live="polite">${esc(message || "להדגמה: ASHMORET10")}</p>
    </form>`;
}

export function renderCart() {
  const items = getCart().items
    .map((item) => ({ ...item, product: getProduct(item.id), commerce: getCommerce(item.id) }))
    .filter((item) => item.product && item.commerce);

  if (!items.length) {
    return `<article class="wrap py-16 text-center">
      <h1 class="text-3xl font-extrabold">הסל ריק</h1>
      <p class="mt-2 text-muted">אפשר להתחיל מהמוצרים הנבחרים בדף הבית.</p>
      <a class="btn mt-6" href="#/">לדף הבית</a>
    </article>`;
  }

  const totals = cartTotals();

  return `<article class="wrap py-8">
    <h1 class="text-3xl font-extrabold">סל הקניות</h1>
    <div class="mt-6 grid items-start gap-8 lg:grid-cols-[1fr_320px]">
      <ul class="grid gap-4">
        ${items.map((item) => `<li class="grid grid-cols-[88px_1fr] gap-4 rounded-2xl border border-line bg-white p-3">
          <a href="#/p/${esc(item.product.id)}" class="card-media${productPhoto(item.product) ? " has-photo" : ""}" tabindex="-1" aria-hidden="true">
            ${photoImg(item.product) || `<span class="block h-full w-full"></span>`}
          </a>
          <div>
            <h2 class="font-extrabold"><a href="#/p/${esc(item.product.id)}">${esc(item.product.name)}</a></h2>
            <p class="text-sm text-muted">${esc(item.product.weight)}</p>
            <p class="cart-price">${money(item.commerce.price)}${item.commerce.compareAt ? `<s aria-label="במקום ${moneyText(item.commerce.compareAt)}">${money(item.commerce.compareAt)}</s>` : ""}</p>
            <div class="mt-3 flex flex-wrap items-center gap-3">
              <div class="flex items-center rounded-full border border-line" dir="ltr">
                <button type="button" class="icon-btn" data-cart-step="-1" data-id="${esc(item.product.id)}" aria-label="הפחתת כמות">−</button>
                <span class="w-8 text-center font-bold">${item.qty}</span>
                <button type="button" class="icon-btn" data-cart-step="1" data-id="${esc(item.product.id)}" aria-label="הגדלת כמות">+</button>
              </div>
              <p class="font-extrabold">${money(lineTotal(item))}</p>
              <button type="button" class="cart-dock-remove" data-remove="${esc(item.product.id)}" aria-label="הסרה"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16"></path><path d="M9 7V5h6v2"></path><path d="M7 7l1 13h8l1-13"></path><path d="M10 11v5M14 11v5"></path></svg></button>
            </div>
          </div>
        </li>`).join("")}
      </ul>
      <aside class="rounded-2xl bg-paper p-5">
        <h2 class="text-lg font-extrabold">סיכום</h2>
        ${couponForm(totals.coupon)}
        <dl class="mt-4 grid gap-2 text-sm">
          <div class="flex justify-between"><dt>סה״כ:</dt><dd>${money(totals.goods)}</dd></div>
          ${totals.discount ? `<div class="flex justify-between cart-discount"><dt>קופון ${esc(totals.coupon.code)}</dt><dd>−${money(totals.discount)}</dd></div>` : ""}
          <div class="flex justify-between"><dt>עלות משלוח:</dt><dd>${money(totals.delivery)}</dd></div>
          <div class="flex justify-between border-t border-line pt-2 text-base font-extrabold"><dt>סה״כ לתשלום:</dt><dd>${money(totals.total)}</dd></div>
        </dl>
        ${savedNote(totals.saved)}
        <p class="mt-3 text-xs text-muted">המחירים ודמי המשלוח הם נתוני הדגמה, לא חישוב אמיתי.</p>
        <a class="btn mt-5 w-full" href="#/checkout">המשך לתשלום</a>
      </aside>
    </div>
  </article>`;
}
