import { getProduct } from "../data/catalog.js";
import { getCommerce, deliveryFee } from "../data/commerce.js";
import { getCart, lineTotal, subtotal } from "../state/cart.js";
import { esc, money } from "../lib/format.js";

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

  const goods = subtotal();
  const total = goods + deliveryFee;

  return `<article class="wrap py-8">
    <h1 class="text-3xl font-extrabold">סל הקניות</h1>
    <div class="mt-6 grid items-start gap-8 lg:grid-cols-[1fr_320px]">
      <ul class="grid gap-4">
        ${items.map((item) => `<li class="grid grid-cols-[88px_1fr] gap-4 rounded-2xl border border-line p-3">
          <a href="#/p/${esc(item.product.id)}" class="card-media">
            <span class="block h-full w-full" aria-hidden="true"></span>
          </a>
          <div>
            <h2 class="font-extrabold"><a href="#/p/${esc(item.product.id)}">${esc(item.product.name)}</a></h2>
            <p class="text-sm text-muted">${esc(item.product.weight)}</p>
            <p class="mt-1 font-bold">${money(item.commerce.price)}</p>
            <div class="mt-3 flex flex-wrap items-center gap-3">
              <div class="flex items-center rounded-full border border-line">
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
        <dl class="mt-4 grid gap-2 text-sm">
          <div class="flex justify-between"><dt>מוצרים</dt><dd>${money(goods)}</dd></div>
          <div class="flex justify-between"><dt>מחיר משלוח</dt><dd>${money(deliveryFee)}</dd></div>
          <div class="flex justify-between border-t border-line pt-2 text-base font-extrabold"><dt>לתשלום</dt><dd>${money(total)}</dd></div>
        </dl>
        <p class="mt-3 text-xs text-muted">המחירים ודמי המשלוח הם נתוני הדגמה, לא חישוב אמיתי.</p>
        <a class="btn mt-5 w-full" href="#/checkout">המשך לתשלום</a>
      </aside>
    </div>
  </article>`;
}
