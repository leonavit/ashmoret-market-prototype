const KEY = "ashmoret-theme";
const defaults = { header: "v1", hero: "v1", wideHeader: false };
const desktop = window.matchMedia("(min-width: 1024px)");

const gearIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

const groups = [
  {
    name: "header",
    title: "הגדרות Header",
    options: [
      ["v1", "V1 · ברירת מחדל", "חיפוש בין הלוגו לסל, ותפריט הקטגוריות בפס נפרד מתחת."],
      ["v2", "V2", "חיפוש בפס העליון, ותפריט הקטגוריות עם המגה־מניו בין הלוגו לסל."],
    ],
    checkbox: ["wideHeader", "Header רחב", "הלוגו צמוד לימין והסל לשמאל, ברוחב 90% מהמסך."],
    note: "V2 מוצג במסכים רחבים. במובייל נשאר התפריט הרגיל.",
  },
  {
    name: "hero",
    title: "הגדרות Hero",
    options: [
      ["v1", "V1 · ברירת מחדל", "קרוסלת קטגוריות, אייטם מקודם ושני מקודמים קטנים בצד."],
      ["v2", "V2", "סליידר תמונות מתחלפות עם נקודות דפדוף, ומתחתיו קרוסלת הקטגוריות."],
      ["v3", "V3", "שלושת הבאנרים למעלה, ומתחתיהם קרוסלת הקטגוריות עם הכותרת «קטגוריות נבחרות»."],
    ],
  },
];

let state = load();
let markers = null;
let onHeroChange = () => {};

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
    return {
      header: saved.header === "v2" ? "v2" : "v1",
      hero: ["v2", "v3"].includes(saved.hero) ? saved.hero : "v1",
      wideHeader: saved.wideHeader === true,
    };
  } catch {
    return { ...defaults };
  }
}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable */
  }
}

export function getTheme() {
  return state;
}

function applyHeader() {
  const search = document.getElementById("search-slot");
  const nav = document.querySelector("[data-main-nav]");
  const topSlot = document.getElementById("topbar-search");
  const tagline = document.getElementById("topbar-tagline");
  const tools = document.querySelector(".header-bar .header-tools");
  if (!search || !nav || !topSlot || !tools) return;
  if (!markers) {
    markers = { search: document.createComment("search-slot"), nav: document.createComment("main-nav") };
    search.before(markers.search);
    nav.before(markers.nav);
  }
  nav.megaClose?.();
  document.documentElement.toggleAttribute("data-header-wide", state.wideHeader);
  const moved = state.header === "v2" && desktop.matches;
  document.documentElement.dataset.headerLayout = moved ? "v2" : "v1";
  if (tagline) tagline.hidden = moved;
  if (moved) {
    topSlot.append(search);
    tools.before(nav);
  } else {
    markers.search.after(search);
    markers.nav.after(nav);
  }
}

function panelMarkup() {
  return `<div class="theme-panel-head">
    <h2 id="theme-panel-title" class="text-xl font-extrabold">אפשרויות תבנית</h2>
    <button class="auth-close" type="button" data-theme-close aria-label="סגירת אפשרויות התבנית">×</button>
  </div>
  <div class="theme-panel-body">
    ${groups.map((group) => `<fieldset class="theme-group">
      <legend>${group.title}</legend>
      ${group.options.map(([value, label, text]) => `<label class="theme-option">
        <input type="radio" name="${group.name}" value="${value}" ${state[group.name] === value ? "checked" : ""} data-theme-option>
        <span><strong>${label}</strong><small>${text}</small></span>
      </label>`).join("")}
      ${group.checkbox ? `<label class="theme-option">
        <input type="checkbox" name="${group.checkbox[0]}" ${state[group.checkbox[0]] ? "checked" : ""} data-theme-toggle>
        <span><strong>${group.checkbox[1]}</strong><small>${group.checkbox[2]}</small></span>
      </label>` : ""}
      ${group.note ? `<p class="theme-note">${group.note}</p>` : ""}
    </fieldset>`).join("")}
    <button class="btn btn-line theme-reset" type="button" data-theme-reset>איפוס לברירת מחדל</button>
  </div>`;
}

function syncInputs(panel) {
  panel.querySelectorAll("[data-theme-option]").forEach((input) => {
    input.checked = state[input.name] === input.value;
  });
  panel.querySelectorAll("[data-theme-toggle]").forEach((input) => {
    input.checked = state[input.name] === true;
  });
}

function setOption(name, value, panel) {
  if (state[name] === value) return;
  state = { ...state, [name]: value };
  save();
  syncInputs(panel);
  if (name === "header" || name === "wideHeader") applyHeader();
  if (name === "hero") onHeroChange();
}

export function bindThemeOptions({ heroChange } = {}) {
  onHeroChange = heroChange || onHeroChange;

  const gear = document.createElement("button");
  gear.type = "button";
  gear.className = "theme-gear";
  gear.setAttribute("aria-label", "אפשרויות תבנית");
  gear.setAttribute("aria-expanded", "false");
  gear.setAttribute("aria-controls", "theme-panel");
  gear.innerHTML = gearIcon;

  const panel = document.createElement("aside");
  panel.id = "theme-panel";
  panel.className = "theme-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "false");
  panel.setAttribute("aria-labelledby", "theme-panel-title");
  panel.inert = true;
  panel.innerHTML = panelMarkup();

  document.body.append(gear, panel);

  const toggle = (open) => {
    panel.classList.toggle("is-open", open);
    panel.inert = !open;
    gear.setAttribute("aria-expanded", String(open));
    if (open) panel.querySelector("[data-theme-option]:checked")?.focus();
    else gear.focus();
  };

  gear.addEventListener("click", () => toggle(!panel.classList.contains("is-open")));
  panel.addEventListener("click", (event) => {
    if (event.target.closest("[data-theme-close]")) toggle(false);
    if (event.target.closest("[data-theme-reset]")) {
      setOption("header", defaults.header, panel);
      setOption("hero", defaults.hero, panel);
      setOption("wideHeader", defaults.wideHeader, panel);
    }
  });
  panel.addEventListener("change", (event) => {
    const input = event.target.closest("[data-theme-option]");
    if (input) setOption(input.name, input.value, panel);
    const toggle = event.target.closest("[data-theme-toggle]");
    if (toggle) setOption(toggle.name, toggle.checked, panel);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panel.classList.contains("is-open")) toggle(false);
  });
  document.addEventListener("pointerdown", (event) => {
    if (!panel.classList.contains("is-open")) return;
    if (panel.contains(event.target) || gear.contains(event.target)) return;
    panel.classList.remove("is-open");
    panel.inert = true;
    gear.setAttribute("aria-expanded", "false");
  });

  desktop.addEventListener("change", applyHeader);
  applyHeader();
}
