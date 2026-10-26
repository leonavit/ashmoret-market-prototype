import { getProduct } from "../data/catalog.js";
import { getCommerce, deliveryFee } from "../data/commerce.js";
import { getCart, subtotal } from "../state/cart.js";
import { esc, money } from "../lib/format.js";
import { itemCountLabel, orderLines } from "../components/order-lines.js";

const lockIcon = `<svg class="pay-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg>`;

function luhn(digits) {
  let sum = 0;
  [...digits].reverse().forEach((char, index) => {
    let value = Number(char);
    if (index % 2) {
      value *= 2;
      if (value > 9) value -= 9;
    }
    sum += value;
  });
  return sum % 10 === 0;
}

function validExpiry(value) {
  const match = /^(0[1-9]|1[0-2])\/?(\d{2})$/.exec(value);
  if (!match) return false;
  const now = new Date();
  const year = 2000 + Number(match[2]);
  const month = Number(match[1]);
  return year > now.getFullYear() || (year === now.getFullYear() && month >= now.getMonth() + 1);
}

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
  const payField = (name, label, attrs, keep = false) => `<label class="field">
    <span class="text-sm font-semibold">${label}</span>
    <input name="${name}" ${attrs} dir="ltr" value="${keep ? esc(values[name] || "") : ""}" aria-invalid="${errors[name] ? "true" : "false"}" ${errors[name] ? `aria-describedby="${name}-error"` : ""}>
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
        <section class="checkout-card" aria-labelledby="checkout-payment-title">
          <div class="checkout-pay-head">
            <h2 id="checkout-payment-title" class="checkout-card-title">תשלום בכרטיס אשראי</h2>
            <span class="pay-secure">${lockIcon}תשלום מאובטח · Hyp</span>
          </div>
          <img class="pay-cards" src="assets/images/payment-methods.png" alt="כרטיסים נתמכים: Visa, CB, American Express, Maestro, Mastercard, PayPal" width="282" height="25">
          <div class="hyp-frame">
            <span class="proto-label" aria-hidden="true">טופס Hyp · הדגמה</span>
            <div class="form-row">
              ${payField("ccName", "שם בעל הכרטיס", `type="text" autocomplete="cc-name"`, true)}
              ${payField("ccId", "תעודת זהות של בעל הכרטיס", `type="text" inputmode="numeric" autocomplete="off" maxlength="9"`)}
            </div>
            ${payField("ccNumber", "מספר כרטיס", `type="text" inputmode="numeric" autocomplete="cc-number" maxlength="23" placeholder="0000 0000 0000 0000"`)}
            <div class="form-row">
              ${payField("ccExp", "תוקף", `type="text" inputmode="numeric" autocomplete="cc-exp" maxlength="5" placeholder="MM/YY"`, true)}
              ${payField("ccCvv", "CVV", `type="password" inputmode="numeric" autocomplete="cc-csc" maxlength="4"`)}
            </div>
          </div>
          <p class="text-sm text-muted">הדגמה בלבד: לא מתבצע חיוב, ופרטי הכרטיס לא נשמרים. כרטיס בדיקה: <span dir="ltr">4111 1111 1111 1111</span>.</p>
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
        <button class="btn checkout-submit" type="submit">${lockIcon}תשלום ${money(goods + deliveryFee)} · הדגמה</button>
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
  const card = String(data.ccNumber || "").replace(/\D/g, "");
  if (String(data.ccName || "").trim().length < 2) errors.ccName = "נא למלא את השם שמופיע על הכרטיס.";
  if (!/^\d{9}$/.test(String(data.ccId || "").replace(/\D/g, ""))) errors.ccId = "נא למלא תעודת זהות בת 9 ספרות.";
  if (card.length < 12 || card.length > 19 || !luhn(card)) errors.ccNumber = "נא למלא מספר כרטיס תקין.";
  if (!validExpiry(String(data.ccExp || "").trim())) errors.ccExp = "נא למלא תוקף בפורמט MM/YY.";
  if (!/^\d{3,4}$/.test(String(data.ccCvv || ""))) errors.ccCvv = "נא למלא 3 או 4 ספרות.";
  return { data: { ...data, phone }, errors };
}
