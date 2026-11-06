import { getProduct } from "../data/catalog.js";
import { getCommerce, deliveryFee } from "../data/commerce.js";
import { getCart, subtotal } from "../state/cart.js";
import { esc, money } from "../lib/format.js";
import { itemCountLabel, orderLines } from "../components/order-lines.js";

const lockIcon = `<svg class="pay-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg>`;

const payPrograms = [
  ["ashmoret", "מחזיקי כרטיס אשראי אשמורת בלבד"],
  ["general", "כלל הלקוחות"],
];

function selectPayTab(tab, focus) {
  const tabs = [...tab.closest("[role=tablist]").querySelectorAll("[data-pay-tab]")];
  tabs.forEach((item) => {
    const on = item === tab;
    item.setAttribute("aria-selected", String(on));
    item.tabIndex = on ? 0 : -1;
  });
  const panel = document.getElementById("pay-panel");
  panel?.setAttribute("aria-labelledby", tab.id);
  const input = panel?.querySelector("[data-pay-program]");
  if (input) input.value = tab.dataset.payTab;
  if (focus) tab.focus();
}

export function bindCheckout() {
  document.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-pay-tab]");
    if (tab) selectPayTab(tab, false);
  });
  document.addEventListener("keydown", (event) => {
    const tab = event.target.closest?.("[data-pay-tab]");
    if (!tab) return;
    const tabs = [...tab.closest("[role=tablist]").querySelectorAll("[data-pay-tab]")];
    const index = tabs.indexOf(tab);
    const keys = { ArrowLeft: index + 1, ArrowRight: index - 1, Home: 0, End: tabs.length - 1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    selectPayTab(tabs[(keys[event.key] + tabs.length) % tabs.length], true);
  });
}

export function renderCheckout(errors = {}, values = {}) {
  const rows = getCart().items.filter((item) => getProduct(item.id) && getCommerce(item.id));
  if (!rows.length) {
    return `<article class="wrap py-16 text-center"><h1 class="text-3xl font-extrabold">הסל ריק</h1><a class="btn mt-6" href="#/">לדף הבית</a></article>`;
  }
  const goods = subtotal();
  const program = payPrograms.some(([id]) => id === values.cardProgram) ? values.cardProgram : payPrograms[0][0];
  const lines = rows.map((item) => {
    const product = getProduct(item.id);
    return { product, name: product.name, weight: product.weight, qty: item.qty, total: getCommerce(item.id).price * item.qty };
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
            ${field("firstName", "שם פרטי", "text", "given-name")}
            ${field("lastName", "שם משפחה", "text", "family-name")}
          </div>
          <div class="form-row">
            ${field("phone", "טלפון", "tel", "tel")}
            ${field("city", "עיר", "text", "address-level2")}
          </div>
          <div class="form-row">
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
          <div class="pay-box">
            <div class="pay-tabs" role="tablist" aria-label="סוג לקוח">
              ${payPrograms.map(([id, label]) => `<button type="button" role="tab" id="pay-tab-${id}" aria-controls="pay-panel" aria-selected="${id === program}" tabindex="${id === program ? "0" : "-1"}" data-pay-tab="${id}">${label}</button>`).join("")}
            </div>
            <div class="hyp-frame" id="pay-panel" role="tabpanel" aria-labelledby="pay-tab-${program}">
              <input type="hidden" name="cardProgram" value="${program}" data-pay-program>
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
          </div>
          <p class="text-sm text-muted">הדגמה בלבד: לא מתבצע חיוב, ופרטי הכרטיס לא נשמרים. אפשר להקליד כל ערך.</p>
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

const required = {
  firstName: "נא למלא שם פרטי.",
  lastName: "נא למלא שם משפחה.",
  phone: "נא למלא טלפון.",
  city: "נא למלא עיר.",
  street: "נא למלא רחוב.",
  house: "נא למלא מספר בית.",
  ccName: "נא למלא את השם שעל הכרטיס.",
  ccId: "נא למלא תעודת זהות.",
  ccNumber: "נא למלא מספר כרטיס.",
  ccExp: "נא למלא תוקף.",
  ccCvv: "נא למלא CVV.",
};

export function validateCheckout(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const errors = {};
  Object.entries(required).forEach(([name, message]) => {
    if (!String(data[name] || "").trim()) errors[name] = message;
  });
  const firstName = String(data.firstName || "").trim();
  const lastName = String(data.lastName || "").trim();
  return { data: { ...data, name: `${firstName} ${lastName}`.trim(), phone: String(data.phone || "").trim() }, errors };
}
