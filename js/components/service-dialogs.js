import { deliveryFee } from "../data/commerce.js";
import { esc, money } from "../lib/format.js";
import { wait } from "../state/session.js";
import { contactFields, validateContact } from "../screens/contact.js";

const LOAD_MS = 700;

let delivery = { city: "", street: "", error: "", result: "", pending: false };
let service = { values: {}, errors: {}, sent: false, pending: false };

function ensureDialog(id) {
  let dialog = document.getElementById(id);
  if (dialog) return dialog;
  dialog = document.createElement("dialog");
  dialog.id = id;
  dialog.className = "auth-dialog service-dialog";
  dialog.setAttribute("aria-labelledby", `${id}-title`);
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest("[data-service-close]")) dialog.close();
  });
  document.body.appendChild(dialog);
  return dialog;
}

function head(id, title) {
  return `<div class="auth-dialog-bar">
    <div>
      <p class="text-sm font-bold text-muted">הדגמה בלבד</p>
      <h2 id="${id}-title" class="mt-1 text-2xl font-extrabold">${title}</h2>
    </div>
    <button class="auth-close" type="button" data-service-close aria-label="סגירה">×</button>
  </div>`;
}

function deliveryMarkup() {
  const bad = (name) => delivery.error && name === "city";
  return `${head("delivery-dialog", "משלוח עד הבית")}
  <section class="service-block" aria-labelledby="delivery-terms-title">
    <h3 id="delivery-terms-title" class="font-extrabold">תנאי שילוח</h3>
    <ul class="service-list">
      <li>ההזמנה מגיעה עד הדלת.</li>
      <li>דמי משלוח: ${money(deliveryFee)} להזמנה.</li>
      <li>מועד האספקה נקבע בתיאום טלפוני לאחר ההזמנה.</li>
      <li>אזורי החלוקה ומועדי האספקה יפורסמו בגרסה הפעילה.</li>
    </ul>
  </section>
  <form id="delivery-check" class="mt-5 grid gap-4" novalidate>
    <h3 class="font-extrabold">האם מגיעים אליך?</h3>
    <label class="field">
      <span class="text-sm font-semibold">עיר או יישוב</span>
      <input name="city" value="${esc(delivery.city)}" autocomplete="address-level2" required aria-invalid="${bad("city") ? "true" : "false"}" ${bad("city") ? `aria-describedby="delivery-city-error"` : ""} data-service-focus>
      ${delivery.error ? `<span id="delivery-city-error" class="field-error">${esc(delivery.error)}</span>` : ""}
    </label>
    <label class="field">
      <span class="text-sm font-semibold">רחוב ומספר בית</span>
      <input name="street" value="${esc(delivery.street)}" autocomplete="street-address">
    </label>
    <button class="btn" type="submit" ${delivery.pending ? "disabled" : ""}>${delivery.pending ? "בודקים…" : "בדיקת כתובת"}</button>
    ${delivery.result ? `<p class="service-result" role="status">${esc(delivery.result)}</p>` : ""}
  </form>`;
}

function serviceMarkup() {
  const contact = `<ul class="service-contact">
    <li><a href="tel:03-000-0000"><strong dir="ltr">03-000-0000</strong><small>טלפון שירות לקוחות</small></a></li>
    <li><a href="https://wa.me/97230000000" target="_blank" rel="noopener noreferrer"><strong>ווטסאפ</strong><small>שירות לקוחות</small></a></li>
  </ul>`;
  if (service.sent) {
    return `${head("service-dialog", "שירות לקוחות")}
    ${contact}
    <p class="service-result mt-5" role="status">הפנייה נשמרה בהדגמה. לא נשלח מייל אמיתי.</p>
    <button class="btn mt-5" type="button" data-service-close>סגירה</button>`;
  }
  return `${head("service-dialog", "שירות לקוחות")}
  ${contact}
  <form id="service-form" class="mt-5 grid gap-4" novalidate>
    <h3 class="font-extrabold">השארת פנייה</h3>
    ${contactFields(service, "service-")}
    <button class="btn" type="submit" ${service.pending ? "disabled" : ""}>${service.pending ? "שולחים…" : "שליחת פנייה"}</button>
  </form>`;
}

function paintDelivery(focus = "[data-service-focus]") {
  const dialog = ensureDialog("delivery-dialog");
  dialog.innerHTML = deliveryMarkup();
  dialog.querySelector(focus)?.focus();
}

function paintService(focus = "select[name='topic']") {
  const dialog = ensureDialog("service-dialog");
  dialog.innerHTML = serviceMarkup();
  dialog.querySelector(focus)?.focus();
}

export function openDelivery() {
  delivery = { city: "", street: "", error: "", result: "", pending: false };
  paintDelivery();
  const dialog = document.getElementById("delivery-dialog");
  if (!dialog.open) dialog.showModal();
  dialog.querySelector("[data-service-focus]")?.focus();
}

export function openService() {
  service = { values: {}, errors: {}, sent: false, pending: false };
  paintService();
  const dialog = document.getElementById("service-dialog");
  if (!dialog.open) dialog.showModal();
  dialog.querySelector("select[name='topic']")?.focus();
}

export function bindServiceDialogs() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-delivery]")) openDelivery();
    else if (event.target.closest("[data-open-service]")) openService();
  });

  document.addEventListener("submit", async (event) => {
    const form = event.target;
    if (form.id === "delivery-check") {
      event.preventDefault();
      if (delivery.pending) return;
      const data = new FormData(form);
      delivery.city = String(data.get("city") || "").trim();
      delivery.street = String(data.get("street") || "").trim();
      delivery.result = "";
      if (delivery.city.length < 2) {
        delivery.error = "נא למלא עיר או יישוב.";
        paintDelivery("input[name='city']");
        return;
      }
      delivery.error = "";
      delivery.pending = true;
      paintDelivery("button[type='submit']");
      await wait(LOAD_MS);
      if (!document.getElementById("delivery-dialog")?.open) return;
      delivery.pending = false;
      const place = delivery.street ? `${delivery.street}, ${delivery.city}` : delivery.city;
      delivery.result = `מגיעים אליך! המשלוח ל־${place} זמין. בהדגמה כל כתובת מקבלת תשובה חיובית.`;
      paintDelivery("button[type='submit']");
      return;
    }

    if (form.id === "service-form") {
      event.preventDefault();
      if (service.pending) return;
      const { values, errors } = validateContact(form);
      service.values = values;
      service.errors = errors;
      if (Object.keys(errors).length) {
        paintService("[aria-invalid='true']");
        return;
      }
      service.pending = true;
      paintService("button[type='submit']");
      await wait(LOAD_MS);
      if (!document.getElementById("service-dialog")?.open) return;
      service = { values: {}, errors: {}, sent: true, pending: false };
      paintService("[data-service-close].btn");
    }
  });
}
