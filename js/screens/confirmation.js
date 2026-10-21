import { getOrder } from "../state/orders.js";
import { esc, money } from "../lib/format.js";

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
  return `<article class="wrap py-10">
    <p class="font-bold text-pink">ההזמנה נרשמה בהדגמה</p>
    <h1 class="mt-2 text-4xl font-extrabold">תודה, ${esc(order.customer.name)}</h1>
    <p class="mt-2 text-muted">מספר הזמנה <strong dir="ltr">${esc(order.id)}</strong> · ${esc(when)}</p>
    <p class="mt-4 max-w-xl">זהו אישור חזותי בלבד. לא בוצע תשלום, לא חושב משלוח אמיתי, ולא נפתחה הזמנה במערכת.</p>
    <section class="mt-8 max-w-xl rounded-2xl border border-line p-5" aria-labelledby="order-items">
      <h2 id="order-items" class="font-extrabold">הפריטים</h2>
      <ul class="mt-3 grid gap-2 text-sm">
        ${order.items.map((item) => `<li class="flex justify-between gap-3"><span>${esc(item.name)} × ${item.qty}</span><span>${money(item.price * item.qty)}</span></li>`).join("")}
      </ul>
      <dl class="mt-4 grid gap-2 border-t border-line pt-3 text-sm">
        <div class="flex justify-between"><dt>מוצרים</dt><dd>${money(order.subtotal)}</dd></div>
        <div class="flex justify-between"><dt>מחיר משלוח</dt><dd>${money(order.delivery)}</dd></div>
        <div class="flex justify-between font-extrabold"><dt>סה״כ</dt><dd>${money(order.total)}</dd></div>
      </dl>
      <p class="mt-4 text-sm text-muted">משלוח אל ${esc(order.customer.street)} ${esc(order.customer.house)}, ${esc(order.customer.city)}</p>
    </section>
    <a class="btn mt-8" href="#/">המשך בקניות</a>
  </article>`;
}
