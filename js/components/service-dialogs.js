import { deliveryFee } from "../data/commerce.js";
import { esc, money } from "../lib/format.js";
import { wait } from "../state/session.js";
import { parseHash } from "../router.js";
import { contactFields, validateContact } from "../screens/contact.js";
import { showToast } from "./toast.js";

const LOAD_MS = 700;

const kinds = {
  delivery: { title: "משלוח עד הבית", path: "#/delivery", dialogId: "delivery-dialog", focus: "[data-service-focus]" },
  service: { title: "שירות לקוחות", path: "#/service", dialogId: "service-dialog", focus: "select[name='topic']" },
};

const phoneIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3h2.5l1.2 3.2-1.7 1a12 12 0 0 0 6.8 6.8l1-1.7 3.2 1.2V16a2 2 0 0 1-2.2 2A16 16 0 0 1 6 6.2 2 2 0 0 1 8 4z"></path></svg>`;
const whatsappIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3zm0 1.6a7.4 7.4 0 1 1-3.8 13.8l-.3-.2-2.6.7.7-2.5-.2-.3A7.4 7.4 0 0 1 12 4.6zm4.3 10.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6 6 0 0 1-3-2.6c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.6 2.6 0 0 0-.8 1.9 4.5 4.5 0 0 0 1 2.4 10.3 10.3 0 0 0 3.9 3.5c1.5.6 2 .7 2.7.6a2.3 2.3 0 0 0 1.5-1.1 1.9 1.9 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3z"></path></svg>`;
const shareIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path></svg>`;
const pageIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;

const fresh = {
  delivery: () => ({ city: "", street: "", error: "", result: "", pending: false }),
  service: () => ({ values: {}, errors: {}, sent: false, pending: false }),
};

const state = { delivery: fresh.delivery(), service: fresh.service() };

export function serviceTitle(kind) {
  return kinds[kind]?.title || "";
}

function shareButton(kind) {
  return `<button type="button" class="share-link" data-share-link="${kind}">${shareIcon}<span>שליחת קישור</span></button>`;
}

function dialogHead(kind) {
  const { title, path, dialogId } = kinds[kind];
  return `<div class="auth-dialog-bar">
    <div>
      <p class="text-sm font-bold text-muted">הדגמה בלבד</p>
      <h2 id="${dialogId}-title" class="mt-1 text-2xl font-extrabold"><a class="service-title-link" href="${path}">${title}${pageIcon}</a></h2>
    </div>
    <div class="service-dialog-actions">
      ${shareButton(kind)}
      <button class="auth-close" type="button" data-service-close aria-label="סגירה">×</button>
    </div>
  </div>`;
}

function deliveryBody() {
  const delivery = state.delivery;
  const bad = Boolean(delivery.error);
  return `<section class="service-block" aria-labelledby="delivery-terms-title">
    <h3 id="delivery-terms-title" class="font-extrabold">תנאי שילוח</h3>
    <ul class="service-list">
      <li>ההזמנה מגיעה עד הדלת.</li>
      <li>דמי משלוח: ${money(deliveryFee)} להזמנה.</li>
      <li>מועד האספקה נקבע בתיאום טלפוני לאחר ההזמנה.</li>
      <li>אזורי החלוקה ומועדי האספקה יפורסמו בגרסה הפעילה.</li>
    </ul>
  </section>
  <form class="mt-5 grid gap-4" data-service-form="delivery" novalidate>
    <h3 class="font-extrabold">האם מגיעים אליך?</h3>
    <label class="field">
      <span class="text-sm font-semibold">עיר או יישוב</span>
      <input name="city" value="${esc(delivery.city)}" autocomplete="address-level2" required aria-invalid="${bad ? "true" : "false"}" ${bad ? `aria-describedby="delivery-city-error"` : ""} data-service-focus>
      ${bad ? `<span id="delivery-city-error" class="field-error">${esc(delivery.error)}</span>` : ""}
    </label>
    <label class="field">
      <span class="text-sm font-semibold">רחוב ומספר בית</span>
      <input name="street" value="${esc(delivery.street)}" autocomplete="street-address">
    </label>
    <button class="btn" type="submit" ${delivery.pending ? "disabled" : ""}>${delivery.pending ? "בודקים…" : "בדיקת כתובת"}</button>
    ${delivery.result ? `<p class="service-result" role="status">${esc(delivery.result)}</p>` : ""}
  </form>`;
}

function serviceBody(inPage) {
  const service = state.service;
  const contact = `<ul class="service-contact">
    <li><a href="tel:03-000-0000">
      <span class="service-contact-icon">${phoneIcon}</span>
      <span class="service-contact-text"><strong><span dir="ltr">03-000-0000</span></strong><small>טלפון שירות לקוחות</small></span>
    </a></li>
    <li><a href="https://wa.me/97230000000" target="_blank" rel="noopener noreferrer">
      <span class="service-contact-icon">${whatsappIcon}</span>
      <span class="service-contact-text"><strong>ווטסאפ</strong><small>שירות לקוחות</small></span>
    </a></li>
  </ul>`;
  if (service.sent) {
    const done = inPage
      ? `<a class="btn mt-5" href="#/">חזרה לדף הבית</a>`
      : `<button class="btn mt-5" type="button" data-service-close>סגירה</button>`;
    return `${contact}
    <p class="service-result mt-5" role="status">הפנייה נשמרה בהדגמה. לא נשלח מייל אמיתי.</p>
    ${done}`;
  }
  return `${contact}
  <form class="mt-5 grid gap-4" data-service-form="service" novalidate>
    <h3 class="font-extrabold">השארת פנייה</h3>
    ${contactFields(service, inPage ? "service-page-" : "service-")}
    <button class="btn" type="submit" ${service.pending ? "disabled" : ""}>${service.pending ? "שולחים…" : "שליחת פנייה"}</button>
  </form>`;
}

function markup(kind, inPage) {
  const body = kind === "delivery" ? deliveryBody() : serviceBody(inPage);
  return inPage ? body : `${dialogHead(kind)}${body}`;
}

function paint(root, focus) {
  root.innerHTML = markup(root.dataset.serviceRoot, root.dataset.serviceMode === "page");
  if (focus) root.querySelector(focus)?.focus();
}

function ensureDialog(kind) {
  const { dialogId } = kinds[kind];
  let dialog = document.getElementById(dialogId);
  if (dialog) return dialog;
  dialog = document.createElement("dialog");
  dialog.id = dialogId;
  dialog.className = "auth-dialog service-dialog";
  dialog.dataset.serviceRoot = kind;
  dialog.dataset.serviceMode = "dialog";
  dialog.setAttribute("aria-labelledby", `${dialogId}-title`);
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest("[data-service-close], a[href^='#/']")) dialog.close();
  });
  document.body.appendChild(dialog);
  return dialog;
}

function open(kind) {
  const page = document.querySelector(`[data-service-root="${kind}"][data-service-mode="page"]`);
  if (page && parseHash().name === kind) {
    page.querySelector(kinds[kind].focus)?.focus();
    return;
  }
  state[kind] = fresh[kind]();
  const dialog = ensureDialog(kind);
  paint(dialog);
  if (!dialog.open) dialog.showModal();
  dialog.querySelector(kinds[kind].focus)?.focus();
}

export function openDelivery() {
  open("delivery");
}

export function openService() {
  open("service");
}

export function renderServicePage(kind) {
  state[kind] = fresh[kind]();
  return `<article class="wrap service-page py-10">
    <div class="service-page-head">
      <div>
        <p class="text-sm font-bold text-muted">הדגמה בלבד</p>
        <h1 class="mt-1 text-3xl font-extrabold">${kinds[kind].title}</h1>
      </div>
      ${shareButton(kind)}
    </div>
    <div class="service-page-body" data-service-root="${kind}" data-service-mode="page">${markup(kind, true)}</div>
  </article>`;
}

async function shareLink(kind) {
  const { title, path } = kinds[kind];
  const url = `${location.origin}${location.pathname}${path}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: `${title} · אשמורת MARKET`, url });
    } catch {
      /* share sheet dismissed */
    }
    return;
  }
  try {
    await navigator.clipboard.writeText(url);
    showToast("הקישור הועתק. אפשר להדביק ולשלוח אותו.");
  } catch {
    window.prompt("העתקת הקישור:", url);
  }
}

export function bindServiceDialogs() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-delivery]")) openDelivery();
    else if (event.target.closest("[data-open-service]")) openService();
    const share = event.target.closest("[data-share-link]");
    if (share) shareLink(share.dataset.shareLink);
  });

  document.addEventListener("submit", async (event) => {
    const form = event.target;
    const kind = form.dataset?.serviceForm;
    if (!kind) return;
    event.preventDefault();
    const root = form.closest("[data-service-root]");
    const live = () => root.isConnected && (root.dataset.serviceMode === "page" || root.open);

    if (kind === "delivery") {
      const delivery = state.delivery;
      if (delivery.pending) return;
      const data = new FormData(form);
      delivery.city = String(data.get("city") || "").trim();
      delivery.street = String(data.get("street") || "").trim();
      delivery.result = "";
      if (delivery.city.length < 2) {
        delivery.error = "נא למלא עיר או יישוב.";
        paint(root, "input[name='city']");
        return;
      }
      delivery.error = "";
      delivery.pending = true;
      paint(root, "button[type='submit']");
      await wait(LOAD_MS);
      if (!live()) return;
      delivery.pending = false;
      const place = delivery.street ? `${delivery.street}, ${delivery.city}` : delivery.city;
      delivery.result = `מגיעים אליך! המשלוח ל־${place} זמין. בהדגמה כל כתובת מקבלת תשובה חיובית.`;
      paint(root, "button[type='submit']");
      return;
    }

    const service = state.service;
    if (service.pending) return;
    const { values, errors } = validateContact(form);
    service.values = values;
    service.errors = errors;
    if (Object.keys(errors).length) {
      paint(root, "[aria-invalid='true']");
      return;
    }
    service.pending = true;
    paint(root, "button[type='submit']");
    await wait(LOAD_MS);
    if (!live()) return;
    state.service = { values: {}, errors: {}, sent: true, pending: false };
    paint(root, ".btn");
  });
}
