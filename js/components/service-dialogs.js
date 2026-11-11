import { deliveryFee } from "../data/commerce.js";
import { esc, money } from "../lib/format.js";
import { wait } from "../state/session.js";
import { parseHash } from "../router.js";
import { showToast } from "./toast.js";
import { mountLottieIcons } from "./topbar-icons.js";

const LOAD_MS = 700;

const kinds = {
  delivery: { title: "משלוח עד הבית", path: "#/delivery", dialogId: "delivery-dialog", focus: "[data-service-focus]" },
  service: { title: "שירות לקוחות", path: "#/service", dialogId: "service-dialog", focus: "[data-service-focus]" },
};

const topicIcon = (name) => `<span class="service-lottie" data-lottie="${name}" aria-hidden="true"></span>`;
const chevron = `<svg class="service-topic-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;
const backIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>`;

const topics = {
  status: {
    title: "בירור סטטוס הזמנה",
    text: "איפה ההזמנה שלי? מתי היא מגיעה?",
    icon: topicIcon("box-magnifier"),
    fields: ["order", "phone"],
    submit: "בדיקת סטטוס",
    done: "הבקשה נשמרה בהדגמה. בגרסה הפעילה יוצג כאן מצב ההזמנה, ונציג יחזור אליך בטלפון לפי הצורך.",
  },
  problem: {
    title: "בעיה בהזמנה שהתקבלה",
    text: "מוצר חסר, פגום, שגוי או תלונה על משלוח",
    icon: topicIcon("box-damage"),
    fields: ["order", "issue", "name", "phone", "message"],
    submit: "שליחת פנייה",
    done: "הפנייה נשמרה בהדגמה. לא נשלח מייל אמיתי.",
  },
  return: {
    title: "החזרה או החלפת מוצר",
    text: "בקשת החזרה, החלפה או החזר כספי",
    icon: topicIcon("box-recycle"),
    fields: ["order", "request", "product", "name", "phone", "message"],
    submit: "שליחת בקשה",
    done: "הבקשה נשמרה בהדגמה. לא נשלח מייל אמיתי.",
  },
  other: {
    title: "פנייה בנושא אחר",
    text: "שאלה על מוצר, תשלום או שירות כללי",
    icon: topicIcon("chat-question"),
    fields: ["subject", "name", "phone", "email", "message"],
    submit: "שליחת פנייה",
    done: "הפנייה נשמרה בהדגמה. לא נשלח מייל אמיתי.",
  },
};

const fieldDefs = {
  order: { label: "מספר הזמנה", attrs: `dir="ltr" autocomplete="off" placeholder="AM-1234"`, check: (value) => value.length >= 3 || "נא למלא מספר הזמנה." },
  phone: { label: "טלפון", type: "tel", attrs: `dir="ltr" autocomplete="tel"`, check: (value) => /^0\d{8,9}$/.test(value.replace(/[^\d]/g, "")) || "נא למלא טלפון ישראלי." },
  name: { label: "שם מלא", attrs: `autocomplete="name"`, check: (value) => value.length >= 2 || "נא למלא שם מלא." },
  email: { label: "אימייל (לא חובה)", type: "email", attrs: `dir="ltr" autocomplete="email"`, check: (value) => !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "נא למלא אימייל תקין." },
  issue: { label: "מה קרה?", options: ["מוצר חסר", "מוצר פגום", "מוצר שגוי", "תלונה על המשלוח"] },
  request: { label: "סוג הבקשה", options: ["החזרה", "החלפה", "החזר כספי"] },
  product: { label: "שם המוצר", check: (value) => value.length >= 2 || "נא למלא שם מוצר." },
  subject: { label: "נושא", options: ["שאלה על מוצר", "תשלום", "שירות כללי"] },
  message: { label: "פירוט", textarea: true, check: (value) => value.length >= 5 || "נא לכתוב כמה מילים." },
};

function serviceField(name, { values, errors }, prefix, first) {
  const def = fieldDefs[name];
  const id = `${prefix}${name}`;
  const error = errors[name];
  const aria = `aria-invalid="${error ? "true" : "false"}" ${error ? `aria-describedby="${id}-error"` : ""} ${first ? "data-service-focus" : ""}`;
  const value = values[name] || "";
  const control = def.options
    ? `<select id="${id}" name="${name}" ${aria}><option value="">בחירה</option>${def.options.map((option) => `<option ${value === option ? "selected" : ""}>${esc(option)}</option>`).join("")}</select>`
    : def.textarea
      ? `<textarea id="${id}" name="${name}" rows="3" ${aria}>${esc(value)}</textarea>`
      : `<input id="${id}" name="${name}" type="${def.type || "text"}" value="${esc(value)}" ${def.attrs || ""} ${aria}>`;
  return `<label class="field" for="${id}">
    <span class="text-sm font-semibold">${def.label}</span>
    ${control}
    ${error ? `<span id="${id}-error" class="field-error">${esc(error)}</span>` : ""}
  </label>`;
}

function validateTopic(topic, form) {
  const data = new FormData(form);
  const values = {};
  const errors = {};
  topics[topic].fields.forEach((name) => {
    const def = fieldDefs[name];
    const value = String(data.get(name) || "").trim();
    values[name] = value;
    const result = def.options ? def.options.includes(value) || "נא לבחור אפשרות." : def.check(value);
    if (result !== true) errors[name] = result;
  });
  return { values, errors };
}

const phoneIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3h2.5l1.2 3.2-1.7 1a12 12 0 0 0 6.8 6.8l1-1.7 3.2 1.2V16a2 2 0 0 1-2.2 2A16 16 0 0 1 6 6.2 2 2 0 0 1 8 4z"></path></svg>`;
const shareIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path></svg>`;
const pageIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;

const fresh = {
  delivery: () => ({ city: "", street: "", error: "", result: "", pending: false }),
  service: () => ({ topic: null, values: {}, errors: {}, sent: false, pending: false }),
};

const state = { delivery: fresh.delivery(), service: fresh.service() };

export function serviceTitle(kind) {
  return kinds[kind]?.title || "";
}

function callButton(kind) {
  return kind === "service" ? `<a class="service-call" href="tel:097448038" aria-label="חיוג לשירות הלקוחות 09-7448038">${phoneIcon}</a>` : "";
}

function shareButton(kind) {
  return `<button type="button" class="share-link" data-share-link="${kind}">${shareIcon}<span>שליחת קישור</span></button>`;
}

const dialogIcons = { delivery: "truck-delivery", service: "customer-service" };

function dialogHead(kind) {
  const { title, path, dialogId } = kinds[kind];
  return `<div class="auth-dialog-bar">
    <div>
      <h2 id="${dialogId}-title" class="service-dialog-title font-extrabold"><a class="service-title-link" href="${path}">${title}${pageIcon}</a></h2>
    </div>
    <span class="service-dialog-mark${kind === "service" ? " is-small" : ""}" data-lottie="${dialogIcons[kind]}" data-lottie-play="loop" aria-hidden="true"></span>
    <div class="service-dialog-actions">
      ${callButton(kind)}
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
  const topic = topics[service.topic];
  if (!topic) {
    return `<h3 class="service-topics-title">במה אפשר לעזור?</h3>
    <ul class="service-topics">
      ${Object.entries(topics).map(([key, item], index) => `<li><button type="button" class="service-topic" data-service-topic="${key}" ${index === 0 ? "data-service-focus" : ""}>
        <span class="service-topic-icon">${item.icon}</span>
        <span class="service-topic-text"><strong>${item.title}</strong><small>${item.text}</small></span>
        ${chevron}
      </button></li>`).join("")}
    </ul>`;
  }
  const back = `<button type="button" class="service-back" data-service-back>${backIcon}כל הנושאים</button>`;
  const head = `<div class="service-topic-head">${back}<h3 class="service-topic-heading"><span class="service-topic-icon">${topic.icon}</span>${topic.title}</h3></div>`;
  if (service.sent) {
    const done = inPage
      ? `<a class="btn" href="#/">חזרה לדף הבית</a>`
      : `<button class="btn" type="button" data-service-close>סגירה</button>`;
    return `${head}
    <p class="service-result mt-4" role="status">${topic.done}</p>
    <div class="mt-5 flex flex-wrap gap-3">${done}<button class="btn btn-line" type="button" data-service-back data-service-focus>פנייה נוספת</button></div>`;
  }
  const prefix = inPage ? "service-page-" : "service-";
  return `${head}
  <form class="mt-4 grid gap-4" data-service-form="service" novalidate>
    ${topic.fields.map((name, index) => serviceField(name, service, prefix, index === 0)).join("")}
    <button class="btn" type="submit" ${service.pending ? "disabled" : ""}>${service.pending ? "שולחים…" : topic.submit}</button>
  </form>`;
}

function markup(kind, inPage) {
  const body = kind === "delivery" ? deliveryBody() : serviceBody(inPage);
  return inPage ? body : `${dialogHead(kind)}${body}`;
}

function paint(root, focus) {
  root.innerHTML = markup(root.dataset.serviceRoot, root.dataset.serviceMode === "page");
  mountLottieIcons(root);
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
        <h1 class="text-3xl font-extrabold">${kinds[kind].title}</h1>
      </div>
      <div class="service-dialog-actions">${callButton(kind)}${shareButton(kind)}</div>
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
    const pick = event.target.closest("[data-service-topic]");
    const back = event.target.closest("[data-service-back]");
    if (pick || back) {
      const root = (pick || back).closest("[data-service-root]");
      const previous = state.service.topic;
      state.service = { ...fresh.service(), topic: pick ? pick.dataset.serviceTopic : null };
      paint(root, pick ? "[data-service-focus]" : `[data-service-topic="${previous}"]`);
    }
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
    if (service.pending || !topics[service.topic]) return;
    const { values, errors } = validateTopic(service.topic, form);
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
    state.service = { ...fresh.service(), topic: service.topic, sent: true };
    paint(root, "[data-service-focus]");
  });
}
