import { getProduct } from "../data/catalog.js";
import { getCommerce, deliveryFee } from "../data/commerce.js";
import { getCart, subtotal } from "../state/cart.js";
import { esc, money } from "../lib/format.js";
import { itemCountLabel, orderLines } from "../components/order-lines.js";

export function renderCheckout(errors = {}, values = {}) {
  const rows = getCart().items.filter((item) => getProduct(item.id) && getCommerce(item.id));
  if (!rows.length) {
    return `<article class="wrap py-16 text-center"><h1 class="text-3xl font-extrabold">הסל ריק</h1><a class="btn mt-6" href="#/">לדף הבית</a></article>`;
  }
  const goods = subtotal();
  const lines = rows.map((item) => {
    const product = getProduct(item.id);
    return { name: product.name, weight: product.weight, qty: item.qty, total: getCommerce(item.id).price * item.qty };
  });
  const field = (name, label, type = "text", extra = "") => `<label class="field">
    <span class="text-sm font-semibold">${label}</span>
    <input name="${name}" type="${type}" autocomplete="${extra}" value="${esc(values[name] || "")}" aria-invalid="${errors[name] ? "true" : "false"}" ${errors[name] ? `aria-describedby="${name}-error"` : ""}>
    ${errors[name] ? `<span id="${name}-error" class="field-error">${esc(errors[name])}</span>` : ""}
  </label>`;

  return `<article class="wrap checkout-page py-8">
    <h1 class="text-3xl font-extrabold">תשלום</h1>
    <form id="checkout-form" class="checkout-layout mt-6" novalidate>
      <div class="checkout-main">
        <section class="checkout-card" aria-labelledby="checkout-delivery-title">
          <h2 id="checkout-delivery-title" class="checkout-card-title">פרטי משלוח</h2>
          <div class="form-row">
            ${field("name", "שם מלא", "text", "name")}
            ${field("phone", "טלפון", "tel", "tel")}
          </div>
          <div class="form-row-address">
            ${field("city", "עיר", "text", "address-level2")}
            ${field("street", "רחוב", "text", "address-line1")}
            ${field("house", "מספר בית", "text", "on")}
          </div>
          <label class="field">
            <span class="text-sm font-semibold">הערות לשליח</span>
            <textarea name="note">${esc(values.note || "")}</textarea>
          </label>
        </section>
        <section class="checkout-card is-reserved" aria-label="תשלום וזיהוי">
          <h2 class="checkout-card-title">תשלום וזיהוי לקוח</h2>
          <p class="text-sm text-muted">ההחלטה על אופן הזיהוי ועל אמצעי התשלום עדיין פתוחה. האזור הזה שמור לה, בלי לבחור שיטה.</p>
        </section>
      </div>
      <aside class="checkout-card checkout-summary" aria-labelledby="checkout-summary-title">
        <div class="checkout-summary-head">
          <h2 id="checkout-summary-title" class="checkout-card-title">ההזמנה</h2>
          <span>${itemCountLabel(lines)}</span>
        </div>
        ${orderLines(lines, { scroll: true })}
        <dl class="summary-totals">
          <div><dt>מוצרים</dt><dd>${money(goods)}</dd></div>
          <div><dt>מחיר משלוח</dt><dd>${money(deliveryFee)}</dd></div>
          <div class="is-total"><dt>לתשלום</dt><dd>${money(goods + deliveryFee)}</dd></div>
        </dl>
        <button class="btn checkout-submit" type="submit">אישור ההזמנה, הדגמה</button>
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
