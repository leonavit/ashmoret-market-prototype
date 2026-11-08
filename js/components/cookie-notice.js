const KEY = "ashmoret-cookies";
const MAX_AGE = 60 * 60 * 24 * 365;

const closeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>`;

function accepted() {
  if (document.cookie.split("; ").includes(`${KEY}=1`)) return true;
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

function accept() {
  document.cookie = `${KEY}=1; max-age=${MAX_AGE}; path=/; SameSite=Lax`;
  try {
    localStorage.setItem(KEY, "1");
  } catch {
    /* file:// pages may block cookies, so storage is the fallback */
  }
}

export function bindCookieNotice() {
  if (accepted()) return;
  const notice = document.createElement("section");
  notice.className = "cookie-notice";
  notice.setAttribute("aria-labelledby", "cookie-title");
  notice.innerHTML = `<button class="cookie-close" type="button" data-cookie-close aria-label="סגירת הודעת העוגיות">${closeIcon}</button>
    <h2 id="cookie-title" class="cookie-title"><span aria-hidden="true">🍪</span> אוהבים עוגיות? גם אנחנו</h2>
    <p class="cookie-text">אנחנו משתמשים בעוגיות (cookies) לשיפור חוויית הגלישה שלך, הצגת הצעות מותאמות ועוד.<br>כמפורט <a href="#/privacy">במדיניות הפרטיות</a> שלנו.</p>
    <button class="btn cookie-accept" type="button" data-cookie-accept>הבנתי</button>`;
  notice.addEventListener("click", (event) => {
    const acceptButton = event.target.closest("[data-cookie-accept]");
    if (!acceptButton && !event.target.closest("[data-cookie-close]")) return;
    if (acceptButton) accept();
    notice.classList.add("is-leaving");
    const remove = () => notice.remove();
    notice.addEventListener("animationend", remove, { once: true });
    window.setTimeout(remove, 400);
  });
  document.body.appendChild(notice);
}
