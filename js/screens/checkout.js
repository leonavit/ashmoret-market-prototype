import { getProduct } from "../data/catalog.js";
import { getCommerce, deliveryFee } from "../data/commerce.js";
import { getCart, subtotal } from "../state/cart.js";
import { esc, money } from "../lib/format.js";

export function renderCheckout(errors = {}, values = {}) {
  const rows = getCart().items.filter((item) => getProduct(item.id) && getCommerce(item.id));
  if (!rows.length) {
    return `<article class="wrap py-16 text-center"><h1 class="text-3xl font-extrabold">הסל ריק</h1><a class="btn mt-6" href="#/">לדף הבית</a></article>`;
  }
  const goods = subtotal();
  const field = (name, label, type = "text", extra = "") => `<label class="field">
    <span class="text-sm font-semibold">${label}</span>
    <input name="${name}" type="${type}" autocomplete="${extra}" value="${esc(values[name] || "")}" aria-invalid="${errors[name] ? "true" : "false"}" ${errors[name] ? `aria-describedby="${name}-error"` : ""}>
    ${errors[name] ? `<span id="${name}-error" class="field-error">${esc(errors[name])}</span>` : ""}
  </label>`;

  return `<article class="wrap py-8">
    <h1 class="text-3xl font-extrabold">תשלום</h1>
    <form id="checkout-form" class="mt-6 grid items-start gap-8 lg:grid-cols-[1fr_320px]" novalidate>
      <div class="grid gap-4">
        <h2 class="text-xl font-extrabold">פרטי משלוח</h2>
        ${field("name", "שם מלא", "text", "name")}
        ${field("phone", "טלפון", "tel", "tel")}
        <div class="grid gap-4 sm:grid-cols-2">
          ${field("city", "עיר", "text", "address-level2")}
          ${field("street", "רחוב", "text", "address-line1")}
        </div>
        ${field("house", "מספר בית", "text", "on")}
        <label class="field">
          <span class="text-sm font-semibold">הערות לשליח</span>
          <textarea name="note">${esc(values.note || "")}</textarea>
        </label>
        <section class="rounded-2xl border border-dashed border-line p-4" aria-label="תשלום וזיהוי">
          <h2 class="font-extrabold">תשלום וזיהוי לקוח</h2>
          <p class="mt-2 text-sm text-muted">ההחלטה על אופן הזיהוי ועל אמצעי התשלום עדיין פתוחה. האזור הזה שמור לה, בלי לבחור שיטה.</p>
        </section>
      </div>
      <aside class="rounded-2xl bg-paper p-5">
        <h2 class="font-extrabold">ההזמנה</h2>
        <ul class="mt-3 grid gap-2 text-sm">
          ${rows.map((item) => {
            const product = getProduct(item.id);
            return `<li class="flex justify-between gap-3"><span>${esc(product.name)} × ${item.qty}</span><span>${money(getCommerce(item.id).price * item.qty)}</span></li>`;
          }).join("")}
        </ul>
        <dl class="mt-4 grid gap-2 border-t border-line pt-3 text-sm">
          <div class="flex justify-between"><dt>מוצרים</dt><dd>${money(goods)}</dd></div>
          <div class="flex justify-between"><dt>מחיר משלוח</dt><dd>${money(deliveryFee)}</dd></div>
          <div class="flex justify-between font-extrabold"><dt>לתשלום</dt><dd>${money(goods + deliveryFee)}</dd></div>
        </dl>
        <button class="btn mt-5 w-full" type="submit">אישור ההזמנה, הדגמה</button>
      </aside>
    </form>
  </article>`;
}

export function validateCheckout(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const errors = {};
  if (!String(data.name || "").trim() || String(data.name).trim().length < 2) errors.name = "נא למלא שם מלא.";
  const phone = String(data.phone || "").replace(/[^\d]/g, "");
  if (!/^0\d{8,9}$/.test(phone)) errors.phone = "נא למלא טלפון ישראלי.";
  if (!String(data.city || "").trim()) errors.city = "נא למלא עיר.";
  if (!String(data.street || "").trim()) errors.street = "נא למלא רחוב.";
  if (!String(data.house || "").trim()) errors.house = "נא למלא מספר בית.";
  return { data: { ...data, phone }, errors };
}
