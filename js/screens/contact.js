import { esc } from "../lib/format.js";

export const contactTopics = ["הזמנות ומשלוחים", "תמיכה טכנית", "אחר"];

export function contactFields({ values = {}, errors = {} } = {}, prefix = "") {
  const id = (name) => `${prefix}${name}`;
  const describe = (name) => errors[name] ? `aria-describedby="${id(name)}-error"` : "";
  const error = (name) => errors[name] ? `<span id="${id(name)}-error" class="field-error">${esc(errors[name])}</span>` : "";
  const field = (name, label, type = "text", extra = "") => `<label class="field">
    <span class="text-sm font-semibold">${label}</span>
    <input name="${name}" type="${type}" value="${esc(values[name] || "")}" ${extra} aria-invalid="${errors[name] ? "true" : "false"}" ${describe(name)}>
    ${error(name)}
  </label>`;

  return `<label class="field">
      <span class="text-sm font-semibold">נושא הפנייה</span>
      <select name="topic" required aria-invalid="${errors.topic ? "true" : "false"}" ${describe("topic")}>
        <option value="">בחירת נושא</option>
        ${contactTopics.map((topic) => `<option value="${esc(topic)}" ${values.topic === topic ? "selected" : ""}>${esc(topic)}</option>`).join("")}
      </select>
      ${error("topic")}
    </label>
    ${field("name", "שם מלא", "text", `autocomplete="name" required`)}
    ${field("phone", "טלפון", "tel", `autocomplete="tel" dir="ltr" required`)}
    ${field("email", "אימייל", "email", `autocomplete="email" dir="ltr"`)}
    <label class="field">
      <span class="text-sm font-semibold">הודעה</span>
      <textarea name="message" rows="4" required aria-invalid="${errors.message ? "true" : "false"}" ${describe("message")}>${esc(values.message || "")}</textarea>
      ${error("message")}
    </label>`;
}

export function renderContact({ sent = false, values = {}, errors = {} } = {}) {
  if (sent) {
    return `<article class="wrap max-w-2xl py-12">
      <h1 class="text-3xl font-extrabold">יצירת קשר</h1>
      <p class="mt-4 rounded-2xl border border-line bg-white p-5 text-base" role="status">הפנייה נשמרה בהדגמה. לא נשלח מייל אמיתי.</p>
      <a class="btn mt-6" href="#/">חזרה לדף הבית</a>
    </article>`;
  }

  return `<article class="wrap max-w-2xl py-12">
    <h1 class="text-3xl font-extrabold">טופס יצירת קשר</h1>
    <p class="mt-2 text-muted">הטופס להדגמה בלבד. אפשר גם להתקשר ל־<a href="tel:03-000-0000" dir="ltr">03-000-0000</a> או לפנות ב<a href="https://wa.me/97230000000" target="_blank" rel="noopener noreferrer">ווטסאפ</a>.</p>
    <form id="contact-form" class="mt-6 grid gap-4 rounded-2xl border border-line bg-white p-5" novalidate>
      ${contactFields({ values, errors })}
      <button class="btn" type="submit">שליחת פנייה</button>
    </form>
  </article>`;
}

export function validateContact(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const values = {
    topic: String(data.topic || ""),
    name: String(data.name || "").trim(),
    phone: String(data.phone || "").trim(),
    email: String(data.email || "").trim(),
    message: String(data.message || "").trim(),
  };
  const errors = {};
  if (!contactTopics.includes(values.topic)) errors.topic = "נא לבחור נושא פנייה.";
  if (values.name.length < 2) errors.name = "נא למלא שם מלא.";
  const phone = values.phone.replace(/[^\d]/g, "");
  if (!/^0\d{8,9}$/.test(phone)) errors.phone = "נא למלא טלפון ישראלי.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "נא למלא אימייל תקין.";
  if (values.message.length < 5) errors.message = "נא לכתוב הודעה.";
  return { values: { ...values, phone }, errors };
}
