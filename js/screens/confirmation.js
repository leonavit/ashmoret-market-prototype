import { getProduct } from "../data/catalog.js";
import { getOrder } from "../state/orders.js";
import { esc, money } from "../lib/format.js";
import { itemCountLabel, orderLines } from "../components/order-lines.js";

export function renderConfirmation(id) {
  const order = getOrder(id);
  if (!order) {
    return `<article class="wrap py-16 text-center">
      <h1 class="text-3xl font-extrabold">ההזמנה לא נמצאה</h1>
      <p class="mt-2 text-muted">אישורי ההדגמה נשמרים רק בדפדפן הזה.</p>
      <a class="btn mt-6" href="#/">לדף הבית</a>
    </article>`;
  }
  const when = new Date(order.createdAt).toLocaleString("he-IL", { dateStyle: "medium", timeStyle: "short" });
  const lines = order.items.map((item) => ({
    product: getProduct(item.id),
    name: item.name,
    weight: getProduct(item.id)?.weight || "",
    qty: item.qty,
    total: item.price * item.qty,
  }));
  return `<article class="wrap py-10">
    <p class="font-bold text-pink">ההזמנה נרשמה בהדגמה</p>
    <h1 class="mt-2 text-4xl font-extrabold">תודה, ${esc(order.customer.name)}</h1>
    <p class="mt-2 text-muted">מספר הזמנה <strong dir="ltr">${esc(order.id)}</strong> · ${esc(when)}</p>
    <p class="mt-4 max-w-xl">זהו אישור חזותי בלבד. לא בוצע תשלום, לא חושב משלוח אמיתי, ולא נפתחה הזמנה במערכת.</p>
    <section class="checkout-card order-summary-card mt-8" aria-labelledby="order-items">
      <div class="checkout-summary-head">
        <h2 id="order-items" class="checkout-card-title">הפריטים</h2>
        <span>${itemCountLabel(lines)}</span>
      </div>
      ${orderLines(lines)}
      <dl class="summary-totals">
        <div><dt>מוצרים</dt><dd>${money(order.subtotal)}</dd></div>
        ${order.discount ? `<div class="cart-discount"><dt>קופון ${esc(order.coupon || "")}</dt><dd>−${money(order.discount)}</dd></div>` : ""}
        <div><dt>עלות משלוח</dt><dd>${money(order.delivery)}</dd></div>
        <div class="is-total"><dt>סה״כ</dt><dd>${money(order.total)}</dd></div>
      </dl>
      <p class="mt-4 text-sm text-muted">משלוח אל ${esc(order.customer.street)} ${esc(order.customer.house)}, ${esc(order.customer.city)}</p>
    </section>
    <a class="btn mt-8" href="#/">המשך בקניות</a>
  </article>`;
}
