import { demoOrders, getDemoOrder } from "../data/demo-account.js";
import { esc, money } from "../lib/format.js";
import { orderStatus } from "../components/order-status.js";
import { getProfile, getSession, saveProfile } from "../state/session.js";

let savedNotice = false;

const icon = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
const icons = {
  person: icon(`<circle cx="12" cy="8" r="3.4"></circle><path d="M5 20c1.3-3.2 3.8-4.8 7-4.8s5.7 1.6 7 4.8"></path>`),
  overview: icon(`<path d="M4 11.5 12 5l8 6.5"></path><path d="M6 10v9h12v-9"></path>`),
  orders: icon(`<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"></path><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"></path>`),
  details: icon(`<rect x="4" y="5" width="16" height="14" rx="2"></rect><circle cx="9.5" cy="11" r="2"></circle><path d="M6.5 16c.6-1.4 1.6-2.1 3-2.1s2.4.7 3 2.1M14.5 10h3M14.5 13.5h3"></path>`),
  club: icon(`<path d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.3L12 16.3 7.2 18.8l.9-5.3-3.9-3.8 5.4-.8z"></path>`),
  service: icon(`<path d="M4 14v-2a8 8 0 0 1 16 0v2"></path><path d="M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1z"></path><path d="M17 19c0 1.1-1.8 2-4 2"></path>`),
  logout: icon(`<path d="M14 5h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4"></path><path d="M10 16l-4-4 4-4M6 12h9"></path>`),
};

function frame(active, crumb, content) {
  const profile = getProfile();
  const session = getSession();
  const until = session ? new Date(session.expiresAt).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" }) : "";
  const link = (id, href, label, sub = "") => `<a class="account-menu-link" href="${href}"${active === id ? ` aria-current="page"` : ""}>
      ${icons[id]}
      <span>${label}${sub ? `<small>${sub}</small>` : ""}</span>
    </a>`;
  return `<article class="wrap account-page py-6">
    <nav class="account-crumbs" aria-label="מיקום">
      <a href="#/">בית</a>
      <span aria-hidden="true">›</span>
      ${crumb ? `<a href="#/account">אזור אישי</a><span aria-hidden="true">›</span><span aria-current="page">${crumb}</span>` : `<span aria-current="page">אזור אישי</span>`}
    </nav>
    <div class="account-layout">
      <aside class="account-side">
        <div class="account-side-head">
          <span class="account-avatar">${icons.person}</span>
          <div class="min-w-0">
            <p class="account-name">${esc(profile.displayName)}</p>
            <p class="account-id">מס׳ לקוח <span dir="ltr">${esc(profile.customerId)}</span></p>
          </div>
        </div>
        <nav class="account-menu" aria-label="האזור האישי">
          ${link("overview", "#/account", "סקירה")}
          ${link("orders", "#/orders", "ההזמנות שלי")}
          ${link("details", "#/account/details", "עדכון פרטים", "פרטים אישיים, טלפון וכתובת למשלוח")}
          ${link("club", "#/rules-club", "מועדון לקוחות")}
          ${link("service", "#/service", "שירות לקוחות")}
          <button class="account-menu-link" type="button" data-logout>${icons.logout}<span>התנתקות</span></button>
        </nav>
        ${until ? `<p class="account-session">הדגמה בלבד. ההתחברות פעילה עד ${esc(until)}.</p>` : ""}
      </aside>
      <div class="account-main">${content}</div>
    </div>
  </article>`;
}

function page(title, body) {
  return `<header class="account-main-head">
    <p class="text-sm font-bold text-muted">הדגמה בלבד. אין כאן אימות זהות.</p>
    <h1 class="mt-1 text-3xl font-extrabold">${title}</h1>
  </header>
  ${body}`;
}

function when(value) {
  return new Date(value).toLocaleDateString("he-IL", { day: "numeric", month: "long", year: "numeric" });
}

export function renderAccount() {
  const profile = getProfile();
  const latest = demoOrders[0];
  const recent = demoOrders.slice(0, 3).map((order) => `<li class="account-order-row">
      <span><a class="font-bold" href="#/orders/${esc(order.id)}" dir="ltr">${esc(order.id)}</a><span class="mt-1 block text-sm text-muted">${esc(when(order.createdAt))} · ${esc(order.status)}</span></span>
      <span class="font-bold">${money(order.total)}</span>
    </li>`).join("");
  return frame("overview", "", `
    <section class="account-banner" aria-labelledby="account-title">
      <span class="proto-label" aria-hidden="true">באנר אזור אישי</span>
      <div>
        <p class="account-banner-kicker">האזור האישי שלך</p>
        <h1 id="account-title" class="account-banner-title">שלום ${esc(profile.displayName)}</h1>
        <p class="account-banner-text">${demoOrders.length} הזמנות באזור האישי · ההזמנה האחרונה ${esc(when(latest.createdAt))}</p>
      </div>
      <span class="account-banner-art" aria-hidden="true"></span>
    </section>
    <div class="account-tiles">
      <section class="account-tile" aria-labelledby="tile-order">
        <span class="account-tile-art" aria-hidden="true">${icons.orders}</span>
        <h2 id="tile-order">ההזמנה האחרונה</h2>
        <p><span dir="ltr">${esc(latest.id)}</span> · ${esc(latest.status)}</p>
        <a class="btn" href="#/orders/${esc(latest.id)}">למעקב הזמנה</a>
      </section>
      <section class="account-tile" aria-labelledby="tile-details">
        <span class="account-tile-art" aria-hidden="true">${icons.details}</span>
        <h2 id="tile-details">פרטים למשלוח</h2>
        <p>${esc(profile.street)} ${esc(profile.house)}, ${esc(profile.city)} · <span dir="ltr">${esc(profile.phone)}</span></p>
        <a class="btn btn-line" href="#/account/details">עדכון פרטים</a>
      </section>
      <section class="account-tile" aria-labelledby="tile-service">
        <span class="account-tile-art" aria-hidden="true">${icons.service}</span>
        <h2 id="tile-service">שירות לקוחות</h2>
        <p>שאלה על הזמנה או משלוח? אפשר לפנות אלינו.</p>
        <a class="btn btn-line" href="#/service">לפנייה</a>
      </section>
    </div>
    <section class="account-card" aria-labelledby="recent-orders">
      <div class="account-card-head">
        <h2 id="recent-orders">הזמנות אחרונות</h2>
        <a href="#/orders">לכל ההזמנות</a>
      </div>
      <ul>${recent}</ul>
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
  return frame("details", "עדכון פרטים", page("עדכון פרטים", `
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
  `));
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
  return frame("orders", "ההזמנות שלי", page("ההזמנות שלי", `
    <p class="mt-3 text-muted">שלוש הזמנות קבועות להדגמה. אישור שנוצר בקופה נשאר במסך האישור שלו.</p>
    <ul class="mt-4 grid gap-4">${rows}</ul>
  `));
}

export function renderOrderDetail(id) {
  const order = getDemoOrder(id);
  if (!order) {
    return frame("orders", "הזמנה", page("הזמנה", `
      <p class="mt-3 text-muted">ההזמנה לא נמצאה בהדגמה.</p>
      <a class="btn mt-6" href="#/orders">חזרה להזמנות</a>
    `));
  }
  const items = order.items.map((item) => `<li class="flex justify-between gap-3"><span>${esc(item.name)} × ${item.qty}</span><span>${money(item.price * item.qty)}</span></li>`).join("");
  return frame("orders", `הזמנה ${esc(order.id)}`, page(`הזמנה ${esc(order.id)}`, `
    <p class="mt-3 text-muted">${esc(when(order.createdAt))} · ${esc(order.status)}</p>
    <section class="order-card mt-6 max-w-3xl">${orderStatus(order)}</section>
    <section class="order-card mt-6 max-w-3xl">
      <h2 class="font-extrabold">הפריטים</h2>
      <ul class="mt-3 grid gap-2 text-sm">${items}</ul>
      <dl class="mt-4 grid gap-2 border-t border-line pt-3 text-sm">
        <div class="flex justify-between"><dt>מוצרים</dt><dd>${money(order.subtotal)}</dd></div>
        ${order.discount ? `<div class="flex justify-between cart-discount"><dt>קופון ${esc(order.coupon || "")}</dt><dd>−${money(order.discount)}</dd></div>` : ""}
        <div class="flex justify-between"><dt>מחיר משלוח</dt><dd>${money(order.delivery)}</dd></div>
        <div class="flex justify-between font-extrabold"><dt>סה״כ</dt><dd>${money(order.total)}</dd></div>
      </dl>
    </section>
    <a class="btn btn-line mt-6" href="#/orders">חזרה להזמנות</a>
  `));
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
