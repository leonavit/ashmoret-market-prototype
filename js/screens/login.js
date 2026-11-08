import { esc } from "../lib/format.js";
import { safeNext } from "../router.js";
import { DEMO_CODE, getProfile, getSession, loginDemo, saveProfile, wait } from "../state/session.js";

const RESEND_MS = 15_000;
const LOAD_MS = 700;

const emptyRegister = () => ({
  firstName: "",
  lastName: "",
  email: "",
  idNumber: "",
  phone: "",
  privacy: false,
  marketing: false,
});

let ui = freshUi();
let timer = 0;
let redirectTimer = 0;
let navigate = () => {};

function freshUi() {
  return {
    tab: "existing",
    channel: "phone",
    identity: "",
    step: "channel",
    code: "",
    error: "",
    notice: "",
    pending: "",
    resendAt: 0,
    expired: false,
    next: "",
    invalid: "",
    register: emptyRegister(),
  };
}

export function stopLogin() {
  window.clearInterval(timer);
  window.clearTimeout(redirectTimer);
  timer = 0;
  redirectTimer = 0;
}

function continueTo(next) {
  if (next === "/checkout") return "#/checkout";
  return safeNext(next);
}

function maskEmail(email) {
  const [name, host] = String(email).split("@");
  if (!name || !host) return email;
  return `${name.slice(0, 2)}***@${host}`;
}

function maskPhone(phone) {
  const digits = String(phone).replace(/\D/g, "");
  if (digits.length < 7) return phone;
  return `${digits.slice(0, 3)}-***-${digits.slice(-4)}`;
}

function ensureDialog() {
  let dialog = document.getElementById("auth-dialog");
  if (dialog) return dialog;
  dialog = document.createElement("dialog");
  dialog.id = "auth-dialog";
  dialog.className = "auth-dialog";
  dialog.addEventListener("close", () => {
    stopLogin();
    ui = freshUi();
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  document.body.appendChild(dialog);
  return dialog;
}

export function openAuth({ next = "", expired = false } = {}) {
  const dialog = ensureDialog();
  ui = freshUi();
  ui.next = next;
  ui.expired = expired;
  paint();
  if (!dialog.open) dialog.showModal();
}

function dialogOpen() {
  return Boolean(document.getElementById("auth-dialog")?.open);
}

function paint() {
  stopLogin();
  const dialog = ensureDialog();
  dialog.innerHTML = markup();
  dialog.setAttribute("aria-labelledby", "auth-title");
  bindOtp(dialog);
  startResend(dialog);
  dialog.querySelector("[data-auth-focus]")?.focus();
}

function markup() {
  const title = ui.tab === "register" ? "הרשמה" : "התחברות";
  return `<div class="auth-dialog-bar">
    <div>
      <p class="text-sm font-bold text-muted">הדגמה בלבד</p>
      <h2 id="auth-title" class="mt-1 text-2xl font-extrabold">${title}</h2>
    </div>
    <button class="auth-close" type="button" data-auth-close aria-label="סגירה">×</button>
  </div>
  <p class="auth-note">לא נשלחים דוא״ל או SMS, ואין אימות זהות. קוד ההדגמה הקבוע הוא <strong dir="ltr">${DEMO_CODE}</strong>.</p>
  ${ui.expired ? `<p class="auth-banner" role="status">ההתחברות להדגמה הסתיימה. אפשר להתחבר שוב.</p>` : ""}
  <div class="auth-tabs" role="tablist" aria-label="סוג כניסה">
    <button type="button" role="tab" id="auth-tab-existing" data-auth-tab="existing" aria-selected="${ui.tab === "existing"}" aria-controls="auth-panel">לקוח קיים</button>
    <button type="button" role="tab" id="auth-tab-register" data-auth-tab="register" aria-selected="${ui.tab === "register"}" aria-controls="auth-panel">להרשמה</button>
  </div>
  <div id="auth-panel" role="tabpanel" aria-labelledby="${ui.tab === "register" ? "auth-tab-register" : "auth-tab-existing"}">
    ${ui.tab === "register" ? registerPanel() : existingPanel()}
  </div>`;
}

function existingPanel() {
  if (ui.step === "success") {
    return `<p class="auth-success" role="status">הקוד אומת. ממשיכים לרכישה.</p>`;
  }
  if (ui.step === "otp") return otpForm();
  const phoneMode = ui.channel === "phone";
  const row = (value, title, type, label, placeholder, autocomplete, current) => {
    const checked = ui.channel === value;
    return `<div class="auth-choice-row">
      <label class="auth-choice">
        <input type="radio" name="channel" value="${value}" ${checked ? "checked" : ""} data-auth-channel>
        <span class="font-bold">${title}</span>
      </label>
      <input class="auth-identity" name="${value}" type="${type}" value="${esc(current)}" placeholder="${placeholder}" dir="ltr" autocomplete="${autocomplete}" aria-label="${label}" data-auth-identity="${value}" ${checked ? "data-auth-focus" : ""} ${checked && ui.error ? `aria-invalid="true"` : ""}>
    </div>`;
  };
  return `<form id="auth-channel" class="mt-5 grid gap-4" novalidate>
    <fieldset class="grid gap-2">
      <legend class="text-sm font-semibold">בחרו איך לקבל את קוד ההדגמה</legend>
      ${row("phone", "נייד", "tel", "מספר נייד", "05X-XXX-XXXX", "tel", phoneMode ? ui.identity : "")}
      ${row("email", "דוא״ל", "email", "כתובת דוא״ל", "name@example.com", "email", phoneMode ? "" : ui.identity)}
    </fieldset>
    ${ui.error ? `<p class="field-error" role="alert">${esc(ui.error)}</p>` : ""}
    <button class="btn" type="submit" ${ui.pending ? "disabled" : ""}>${ui.pending === "send" ? "שולחים קוד…" : "שליחת קוד"}</button>
  </form>`;
}

function otpForm() {
  const typed = ui.identity.trim();
  const target = ui.channel === "phone"
    ? (typed ? maskPhone(typed) : maskPhone(getProfile().phone))
    : (typed ? maskEmail(typed) : maskEmail(getProfile().email));
  const via = ui.channel === "phone" ? "לנייד" : "לדוא״ל";
  const digits = ui.code.padEnd(6, " ").slice(0, 6).split("");
  const boxes = digits.map((digit, index) => `<input data-otp="${index}" inputmode="numeric" autocomplete="${index === 0 ? "one-time-code" : "off"}" maxlength="1" aria-label="ספרה ${index + 1}" value="${esc(digit.trim())}" ${index === 0 ? "data-auth-focus" : ""} ${ui.error ? `aria-invalid="true" aria-describedby="otp-error"` : ""}>`).join("");
  return `<form id="auth-otp" class="mt-5 grid gap-4" novalidate>
    <p class="text-sm text-muted">הקוד להדגמה אמור להגיע ${via}: <strong dir="ltr">${esc(target)}</strong>. בפועל לא נשלח דבר, והקוד נשאר <strong dir="ltr">${DEMO_CODE}</strong>.</p>
    <div class="otp-row" role="group" aria-label="קוד אימות בן 6 ספרות">${boxes}</div>
    ${ui.error ? `<p id="otp-error" class="field-error" role="alert">${esc(ui.error)}</p>` : ""}
    ${ui.notice ? `<p class="text-sm text-muted" role="status">${esc(ui.notice)}</p>` : ""}
    <button class="btn" type="submit" ${ui.pending ? "disabled" : ""}>${ui.pending === "check" ? "בודקים…" : "אימות והמשך"}</button>
    <div>
      <button class="btn btn-line" type="button" data-resend ${ui.pending ? "disabled" : ""}>${ui.pending === "resend" ? "שולחים שוב…" : "שליחה חוזרת"}</button>
      <p id="resend-status" class="mt-2 text-sm text-muted" role="status"></p>
    </div>
  </form>`;
}

function registerPanel() {
  if (ui.step === "success") {
    return `<p class="auth-success" role="status">ההרשמה להדגמה נשמרה. ממשיכים לרכישה במארקט.</p>`;
  }
  const data = ui.register;
  const bad = (name) => ui.invalid === name;
  const field = (name, label, value, extra) => `<label class="field">
    <span class="text-sm font-semibold"><span class="req" aria-hidden="true">*</span>${label}</span>
    <input name="${name}" value="${esc(value)}" ${extra} aria-invalid="${bad(name) ? "true" : "false"}" ${bad(name) ? "data-auth-focus" : ""}>
  </label>`;
  return `<form id="auth-register" class="mt-5 grid gap-4" novalidate>
    <p class="text-sm text-muted">הפרטים נשמרים רק בהדגמה שבדפדפן הזה, אצל לקוח ההדגמה.</p>
    <div class="grid gap-4 sm:grid-cols-2">
      ${field("firstName", "שם פרטי", data.firstName, `autocomplete="given-name" required ${ui.invalid ? "" : "data-auth-focus"}`)}
      ${field("lastName", "שם משפחה", data.lastName, `autocomplete="family-name" required`)}
    </div>
    ${field("email", "דוא״ל", data.email, `type="email" autocomplete="email" dir="ltr" required`)}
    ${field("idNumber", "תעודת זהות", data.idNumber, `inputmode="numeric" autocomplete="off" dir="ltr" maxlength="9" required`)}
    ${field("phone", "טלפון", data.phone, `type="tel" autocomplete="tel" dir="ltr" required`)}
    <label class="auth-check">
      <input type="checkbox" name="privacy" required ${data.privacy ? "checked" : ""} aria-invalid="${bad("privacy") ? "true" : "false"}" ${bad("privacy") ? "data-auth-focus" : ""}>
      <span><span class="req" aria-hidden="true">*</span>קראתי את <a href="#/privacy" target="_blank" rel="noopener">מדיניות הפרטיות</a>, את <a href="#/terms" target="_blank" rel="noopener">תנאי השימוש</a> ואת תקנון מועדון הלקוחות, ואני מאשר/ת שהמידע שמסרתי ו/או שייאסף אודותיי במסגרת מתן השירותים יישמר במאגרי המידע שבשליטת אשמורת מרקט ו/או מי מטעמה, לרבות ספקי שירות הפועלים עבורה. המידע ישמש לצורך זיהוי, ניהול החשבון, אספקת הזמנות, שירות לקוחות, תפעול מועדון הלקוחות, עמידה בחובות הדין ושיפור השירות, והכול בהתאם למדיניות הפרטיות.</span>
    </label>
    <label class="auth-check">
      <input type="checkbox" name="marketing" ${data.marketing ? "checked" : ""}>
      <span>מאשר לאשמורת לשלוח אליי עדכונים, מבצעים והטבות וחומרים שיווקיים באמצעות הודעות SMS, וואטסאפ (WhatsApp) ודואר אלקטרוני. ידוע לי כי אוכל לבקש את הסרתי מרשימת התפוצה בכל עת על ידי שליחת הודעת ״הסר״ בתגובה להודעה שתישלח אלי.</span>
    </label>
    ${ui.error ? `<p class="field-error" role="alert">${esc(ui.error)}</p>` : ""}
    <button class="btn" type="submit" ${ui.pending ? "disabled" : ""}>${ui.pending === "register" ? "נרשמים…" : "הרשמה והמשך רכישה במארקט"}</button>
  </form>`;
}

function bindOtp(dialog) {
  const inputs = [...dialog.querySelectorAll("[data-otp]")];
  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      const digit = input.value.replace(/\D/g, "").slice(-1);
      input.value = digit;
      if (digit && inputs[index + 1]) inputs[index + 1].focus();
      ui.code = readCode(inputs);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && !input.value && inputs[index - 1]) inputs[index - 1].focus();
      if (event.key === "ArrowRight" && inputs[index + 1]) inputs[index + 1].focus();
      if (event.key === "ArrowLeft" && inputs[index - 1]) inputs[index - 1].focus();
    });
    input.addEventListener("paste", (event) => {
      event.preventDefault();
      const text = (event.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, 6);
      text.split("").forEach((char, i) => {
        if (inputs[i]) inputs[i].value = char;
      });
      ui.code = readCode(inputs);
      inputs[Math.min(Math.max(text.length, 1), inputs.length) - 1]?.focus();
    });
  });
}

function startResend(dialog) {
  const status = dialog.querySelector("#resend-status");
  const resend = dialog.querySelector("[data-resend]");
  if (ui.step !== "otp" || !status || !resend) return;
  const tick = () => {
    const left = Math.ceil((ui.resendAt - Date.now()) / 1000);
    if (left > 0) {
      resend.disabled = true;
      status.textContent = `אפשר לשלוח שוב בעוד ${left} שניות`;
    } else if (!ui.pending) {
      resend.disabled = false;
      status.textContent = "אפשר לשלוח קוד חדש להדגמה";
    }
  };
  tick();
  timer = window.setInterval(tick, 250);
}

function readCode(inputs) {
  return [...inputs].map((input) => input.value.replace(/\D/g, "")).join("").slice(0, 6);
}

function finish() {
  loginDemo();
  ui.step = "success";
  ui.error = "";
  ui.pending = "";
  paint();
  const dest = continueTo(ui.next);
  redirectTimer = window.setTimeout(() => {
    redirectTimer = 0;
    document.getElementById("auth-dialog")?.close();
    if (dest) navigate(dest);
  }, 700);
}

function readRegister(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  ui.register = {
    firstName: String(data.firstName || "").trim(),
    lastName: String(data.lastName || "").trim(),
    email: String(data.email || "").trim(),
    idNumber: String(data.idNumber || "").replace(/\D/g, ""),
    phone: String(data.phone || "").trim(),
    privacy: form.privacy.checked,
    marketing: form.marketing.checked,
  };
  return ui.register;
}

function registerError(data) {
  if (data.firstName.length < 2) return ["firstName", "נא למלא שם פרטי."];
  if (data.lastName.length < 2) return ["lastName", "נא למלא שם משפחה."];
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return ["email", "נא למלא דוא״ל תקין."];
  if (!/^\d{9}$/.test(data.idNumber)) return ["idNumber", "נא למלא תעודת זהות בת 9 ספרות."];
  if (!/^05\d{8}$/.test(data.phone.replace(/[^\d]/g, ""))) return ["phone", "נא למלא מספר נייד."];
  if (!data.privacy) return ["privacy", "כדי להירשם צריך לאשר את מדיניות הפרטיות, תנאי השימוש ותקנון מועדון הלקוחות."];
  return ["", ""];
}

export function bindLogin(go) {
  navigate = go;
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-auth]")) {
      openAuth();
      return;
    }
    const checkout = event.target.closest("a[href='#/checkout']");
    if (checkout && !getSession()) {
      event.preventDefault();
      openAuth({ next: "/checkout" });
      return;
    }
    const tab = event.target.closest("[data-auth-tab]");
    if (tab && document.getElementById("auth-dialog")?.contains(tab)) {
      ui.tab = tab.dataset.authTab;
      ui.step = "channel";
      ui.error = "";
      ui.invalid = "";
      ui.pending = "";
      paint();
      return;
    }
    if (event.target.closest("[data-auth-close]")) {
      document.getElementById("auth-dialog")?.close();
    }
  });

  document.addEventListener("change", (event) => {
    const channel = event.target.closest("[data-auth-channel]");
    if (!channel || !document.getElementById("auth-dialog")?.contains(channel)) return;
    ui.channel = channel.value;
    channel.closest(".auth-choice-row")?.querySelector("[data-auth-identity]")?.focus();
  });

  const selectChannelOf = (event) => {
    const field = event.target.closest?.("[data-auth-identity]");
    if (!field || !document.getElementById("auth-dialog")?.contains(field)) return;
    const radio = field.closest(".auth-choice-row")?.querySelector("[data-auth-channel]");
    if (radio && !radio.checked) radio.checked = true;
    ui.channel = field.dataset.authIdentity;
  };
  document.addEventListener("focusin", selectChannelOf);
  document.addEventListener("input", selectChannelOf);

  document.addEventListener("submit", async (event) => {
    const form = event.target;
    if (form.id === "auth-channel") {
      event.preventDefault();
      if (ui.pending) return;
      const data = new FormData(form);
      ui.channel = String(data.get("channel") || "phone");
      ui.identity = String(data.get(ui.channel) || "").trim();
      if (ui.channel === "phone") {
        const digits = ui.identity.replace(/[^\d]/g, "");
        if (!/^05\d{8}$/.test(digits)) {
          ui.error = "נא למלא מספר נייד.";
          paint();
          return;
        }
        ui.identity = digits;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ui.identity)) {
        ui.error = "נא למלא כתובת דוא״ל.";
        paint();
        return;
      }
      ui.pending = "send";
      ui.error = "";
      paint();
      await wait(LOAD_MS);
      if (!dialogOpen()) return;
      ui.pending = "";
      ui.step = "otp";
      ui.code = "";
      ui.notice = "";
      ui.resendAt = Date.now() + RESEND_MS;
      paint();
      return;
    }

    if (form.id === "auth-otp") {
      event.preventDefault();
      if (ui.pending || ui.step !== "otp") return;
      const inputs = [...form.querySelectorAll("[data-otp]")];
      ui.code = readCode(inputs);
      if (ui.code.length < 6) {
        ui.error = "נא למלא קוד בן 6 ספרות.";
        paint();
        return;
      }
      ui.pending = "check";
      ui.error = "";
      paint();
      await wait(LOAD_MS);
      if (!dialogOpen()) return;
      ui.pending = "";
      if (ui.code !== DEMO_CODE) {
        ui.error = `הקוד שגוי. בהדגמה הקוד הוא ${DEMO_CODE}.`;
        paint();
        return;
      }
      finish();
      return;
    }

    if (form.id !== "auth-register") return;
    event.preventDefault();
    if (ui.pending) return;
    const data = readRegister(form);
    const [invalid, error] = registerError(data);
    if (error) {
      ui.invalid = invalid;
      ui.error = error;
      paint();
      return;
    }
    ui.invalid = "";
    ui.error = "";
    ui.pending = "register";
    paint();
    await wait(LOAD_MS);
    if (!dialogOpen()) return;
    saveProfile({
      displayName: `${data.firstName} ${data.lastName}`,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      idNumber: data.idNumber,
      phone: data.phone.replace(/[^\d]/g, ""),
      marketing: data.marketing,
    });
    ui.pending = "";
    finish();
  });

  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-resend]");
    if (!button || ui.step !== "otp" || ui.pending) return;
    if (!document.getElementById("auth-dialog")?.contains(button)) return;
    if (Date.now() < ui.resendAt) return;
    ui.pending = "resend";
    ui.error = "";
    paint();
    await wait(LOAD_MS);
    if (!dialogOpen()) return;
    ui.pending = "";
    ui.code = "";
    ui.notice = `נשלח שוב קוד הדגמה. הקוד נשאר ${DEMO_CODE}.`;
    ui.resendAt = Date.now() + RESEND_MS;
    paint();
  });
}
