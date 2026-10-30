const HIDE_KEY = "ashmoret-newsletter-hide";
const COUPON = "ASH50";

const closeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>`;
const arrowIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>`;
const scissorsIcon = `<svg class="news-scissors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"></path></svg>`;

function hidden() {
  try {
    return localStorage.getItem(HIDE_KEY) === "1";
  } catch {
    return false;
  }
}

function markup() {
  return `<div class="news-card">
    <div class="news-hero">
      <span class="proto-label" aria-hidden="true">תמונת רקע</span>
      <h2 id="news-title" class="news-offer">50% הנחה</h2>
      <p class="news-sub">על הרכישה הראשונה</p>
    </div>
    <form class="news-body" data-news-form novalidate>
      <h3 class="news-heading">הרשמה לניוזלטר</h3>
      <label class="sr-only" for="news-email">כתובת דוא״ל</label>
      <input id="news-email" class="news-email" name="email" type="email" autocomplete="email" placeholder="כתובת הדוא״ל שלך" aria-describedby="news-error" aria-invalid="false">
      <p id="news-error" class="news-error" hidden>נא להזין כתובת דוא״ל תקינה.</p>
      <button class="news-submit" type="submit">להרשמה ${arrowIcon}</button>
      <div class="news-coupon" data-news-coupon aria-live="polite">${scissorsIcon}<span>כאן יופיע קוד הקופון שלך</span></div>
      <div class="news-checks">
        <label class="news-check">
          <input type="checkbox" name="terms" data-news-terms aria-describedby="news-terms-error" aria-invalid="false">
          <span>אני מסכים/ה ל<a href="#/terms">תנאי השימוש</a></span>
        </label>
        <label class="news-check">
          <input type="checkbox" data-news-hide ${hidden() ? "checked" : ""}>
          להסתיר את החלון הזה מעכשיו
        </label>
      </div>
      <p id="news-terms-error" class="news-error" hidden>נא לאשר את תנאי השימוש כדי להירשם.</p>
    </form>
  </div>
  <button class="news-close" type="button" data-news-close aria-label="סגירה">${closeIcon}</button>`;
}

function ensureDialog() {
  let dialog = document.getElementById("newsletter-dialog");
  if (dialog) return dialog;
  dialog = document.createElement("dialog");
  dialog.id = "newsletter-dialog";
  dialog.className = "news-dialog";
  dialog.setAttribute("aria-labelledby", "news-title");
  dialog.innerHTML = markup();

  const form = dialog.querySelector("[data-news-form]");
  const input = form.querySelector("#news-email");
  const error = form.querySelector("#news-error");
  const coupon = form.querySelector("[data-news-coupon]");
  const submit = form.querySelector(".news-submit");
  const terms = form.querySelector("[data-news-terms]");
  const termsError = form.querySelector("#news-terms-error");

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest("[data-news-close], a[href^='#/']")) dialog.close();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    error.hidden = valid;
    input.setAttribute("aria-invalid", String(!valid));
    termsError.hidden = terms.checked;
    terms.setAttribute("aria-invalid", String(!terms.checked));
    if (!valid || !terms.checked) {
      (valid ? terms : input).focus();
      return;
    }
    coupon.classList.add("is-ready");
    coupon.innerHTML = `${scissorsIcon}<span>קוד הקופון שלך: <strong dir="ltr">${COUPON}</strong></span>`;
    submit.disabled = true;
    submit.textContent = "נרשמת לניוזלטר";
  });
  form.addEventListener("change", (event) => {
    if (event.target === terms && terms.checked) {
      termsError.hidden = true;
      terms.setAttribute("aria-invalid", "false");
    }
    if (!event.target.matches("[data-news-hide]")) return;
    try {
      if (event.target.checked) localStorage.setItem(HIDE_KEY, "1");
      else localStorage.removeItem(HIDE_KEY);
    } catch {
      /* storage unavailable */
    }
  });

  document.body.appendChild(dialog);
  return dialog;
}

export function bindNewsletter() {
  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-newsletter-open]")) return;
    const dialog = ensureDialog();
    if (!dialog.open) dialog.showModal();
    dialog.querySelector("#news-email")?.focus();
  });
}
