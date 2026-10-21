import { demoOrders, getDemoOrder } from "../data/demo-account.js";
import { esc, money } from "../lib/format.js";
import { orderStatus } from "../components/order-status.js";
import { getProfile, getSession, saveProfile } from "../state/session.js";

let savedNotice = false;

function frame(active, title, body) {
  const profile = getProfile();
  const link = (id, href, label) => `<a class="account-nav-link" href="${href}"${active === id ? ` aria-current="page"` : ""}>${label}</a>`;
  return `<article class="wrap py-8">
    <div class="account-layout">
      <nav class="account-nav" aria-label="האזור האישי">
        <p class="font-extrabold">${esc(profile.displayName)}</p>
        <p class="text-sm text-muted" dir="ltr">${esc(profile.customerId)}</p>
        ${link("overview", "#/account", "סקירה")}
        ${link("details", "#/account/details", "פרטים")}
        ${link("orders", "#/orders", "הזמנות")}
        <button class="account-nav-link" type="button" data-logout>יציאה</button>
      </nav>
      <div>
        <p class="text-sm font-bold text-muted">הדגמה בלבד. אין כאן אימות זהות.</p>
        <h1 class="mt-2 text-3xl font-extrabold">${title}</h1>
        ${body}
      </div>
    </div>
  </article>`;
}

function when(value) {
  return new Date(value).toLocaleDateString("he-IL", { day: "numeric", month: "long", year: "numeric" });
}

export function renderAccount() {
  const profile = getProfile();
  const session = getSession();
  const until = session ? new Date(session.expiresAt).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" }) : "";
  const recent = demoOrders.slice(0, 2).map((order) => `<li class="flex items-center justify-between gap-3 border-b border-line py-3">
      <span><a class="font-bold" href="#/orders/${esc(order.id)}">${esc(order.id)}</a><span class="mt-1 block text-sm text-muted">${esc(when(order.createdAt))} · ${esc(order.status)}</span></span>
      <span>${money(order.total)}</span>
    </li>`).join("");
  return frame("overview", "האזור האישי", `
    <p class="mt-3 text-lg">שלום ${esc(profile.displayName)}</p>
    <dl class="mt-6 grid gap-3 rounded-2xl border border-line p-5 sm:grid-cols-2">
      <div><dt class="text-sm text-muted">מזהה לקוח</dt><dd class="font-bold" dir="ltr">${esc(profile.customerId)}</dd></div>
      <div><dt class="text-sm text-muted">טלפון להדגמה</dt><dd class="font-bold" dir="ltr">${esc(profile.phone)}</dd></div>
      <div><dt class="text-sm text-muted">כתובת</dt><dd class="font-bold">${esc(profile.street)} ${esc(profile.house)}, ${esc(profile.city)}</dd></div>
      <div><dt class="text-sm text-muted">תוקף ההתחברות המדומה</dt><dd class="font-bold">${esc(until)}</dd></div>
    </dl>
    <section class="mt-8" aria-labelledby="recent-orders">
      <div class="flex items-center justify-between gap-3">
        <h2 id="recent-orders" class="text-xl font-extrabold">הזמנות אחרונות</h2>
        <a class="font-bold" href="#/orders">לכל ההזמנות</a>
      </div>
      <ul class="mt-2">${recent}</ul>
    </section>
  `);
}

export function renderAccountDetails() {
  const profile = getProfile();
  const field = (name, label, value, extra = "") => `<label class="field">
    <span class="text-sm font-semibold">${label}</span>
    <input name="${name}" value="${esc(value)}" ${extra}>
  </label>`;
  const notice = savedNotice
    ? `<p class="auth-success" role="status">הפרטים נשמרו בהדגמה ועודכנו גם בשאר האזור האישי.</p>`
    : "";
  savedNotice = false;
  return frame("details", "פרטים", `
    ${notice}
    <form id="profile-form" class="mt-6 grid max-w-xl gap-4" novalidate>
      <p class="text-sm text-muted">אלה פרטים בדויים של לקוח ההדגמה. המזהה קבוע.</p>
      <label class="field">
        <span class="text-sm font-semibold">מזהה לקוח</span>
        <input value="${esc(profile.customerId)}" readonly dir="ltr">
      </label>
      ${field("displayName", "שם לתצוגה", profile.displayName, `autocomplete="name"`)}
      ${field("phone", "טלפון", profile.phone, `type="tel" autocomplete="tel" dir="ltr"`)}
      <div class="grid gap-4 sm:grid-cols-2">
        ${field("city", "עיר", profile.city, `autocomplete="address-level2"`)}
        ${field("street", "רחוב", profile.street, `autocomplete="address-line1"`)}
      </div>
      ${field("house", "מספר בית", profile.house)}
      <p id="profile-error" class="field-error" role="alert" hidden></p>
      <button class="btn" type="submit">שמירת פרטים</button>
    </form>
  `);
}

export function renderOrders() {
  const rows = demoOrders.map((order) => `<li class="order-card">
      <div class="flex items-center justify-between gap-3">
        <span>
          <a class="font-bold" href="#/orders/${esc(order.id)}" dir="ltr">${esc(order.id)}</a>
          <span class="mt-1 block text-sm text-muted">${esc(when(order.createdAt))} · ${esc(order.status)}</span>
        </span>
        <span class="font-bold">${money(order.total)}</span>
      </div>
      ${orderStatus(order)}
    </li>`).join("");
  return frame("orders", "ההזמנות שלי", `
    <p class="mt-3 text-muted">שלוש הזמנות קבועות להדגמה. אישור שנוצר בקופה נשאר במסך האישור שלו.</p>
    <ul class="mt-4 grid gap-4">${rows}</ul>
  `);
}

export function renderOrderDetail(id) {
  const order = getDemoOrder(id);
  if (!order) {
    return frame("orders", "הזמנה", `
      <p class="mt-3 text-muted">ההזמנה לא נמצאה בהדגמה.</p>
      <a class="btn mt-6" href="#/orders">חזרה להזמנות</a>
    `);
  }
  const items = order.items.map((item) => `<li class="flex justify-between gap-3"><span>${esc(item.name)} × ${item.qty}</span><span>${money(item.price * item.qty)}</span></li>`).join("");
  return frame("orders", `הזמנה ${esc(order.id)}`, `
    <p class="mt-3 text-muted">${esc(when(order.createdAt))} · ${esc(order.status)}</p>
    <section class="order-card mt-6 max-w-3xl">${orderStatus(order)}</section>
    <section class="mt-6 max-w-xl rounded-2xl border border-line p-5">
      <h2 class="font-extrabold">הפריטים</h2>
      <ul class="mt-3 grid gap-2 text-sm">${items}</ul>
      <dl class="mt-4 grid gap-2 border-t border-line pt-3 text-sm">
        <div class="flex justify-between"><dt>מוצרים</dt><dd>${money(order.subtotal)}</dd></div>
        <div class="flex justify-between"><dt>מחיר משלוח</dt><dd>${money(order.delivery)}</dd></div>
        <div class="flex justify-between font-extrabold"><dt>סה״כ</dt><dd>${money(order.total)}</dd></div>
      </dl>
    </section>
    <a class="btn btn-line mt-6" href="#/orders">חזרה להזמנות</a>
  `);
}

export function bindAccount(rerender) {
  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (form.id !== "profile-form") return;
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const error = form.querySelector("#profile-error");
    const name = String(data.displayName || "").trim();
    const phone = String(data.phone || "").replace(/[^\d]/g, "");
    if (name.length < 2 || !/^0\d{8,9}$/.test(phone) || !String(data.city || "").trim() || !String(data.street || "").trim() || !String(data.house || "").trim()) {
      error.hidden = false;
      error.textContent = "נא למלא שם, טלפון ישראלי, עיר, רחוב ומספר בית.";
      form.querySelector("input[name='displayName']")?.focus();
      return;
    }
    saveProfile({ ...data, displayName: name, phone });
    savedNotice = true;
    rerender({ focus: false });
  });
}
