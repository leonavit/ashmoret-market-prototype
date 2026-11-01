const KEY = "ashmoret-theme";
const defaults = { header: "v1", hero: "v3", categories: "v2", mobileMenu: "v1", suppliers: "v1", wideHeader: true };
const desktop = window.matchMedia("(min-width: 1024px)");

const gearIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

const groupIcon = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
const groupIcons = {
  header: groupIcon(`<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 9h18M6.5 6.5h3M15 6.5h2.5"></path>`),
  hero: groupIcon(`<rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="15.5" cy="9.5" r="1.5"></circle><path d="m3 16 5-4.5 4 3.5 3-2 6 4"></path>`),
  categories: groupIcon(`<rect x="3" y="4" width="7" height="7" rx="1.5"></rect><rect x="14" y="4" width="7" height="7" rx="1.5"></rect><rect x="3" y="13" width="7" height="7" rx="1.5"></rect><rect x="14" y="13" width="7" height="7" rx="1.5"></rect>`),
  mobileMenu: groupIcon(`<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"></rect><path d="M9.5 8h5M9.5 11h5M9.5 14h5"></path>`),
  suppliers: groupIcon(`<path d="M3 9 4.5 4h15L21 9"></path><path d="M4 9v11h16V9"></path><path d="M3 9h18"></path><path d="M9.5 20v-5.5h5V20"></path>`),
  wideHeader: groupIcon(`<path d="M3 12h18"></path><path d="m7 8-4 4 4 4M17 8l4 4-4 4"></path>`),
};

const groups = [
  {
    name: "header",
    title: "הגדרות Header",
    options: [
      ["v1", "V1 · ברירת מחדל", "חיפוש בין הלוגו לסל, ותפריט הקטגוריות בפס נפרד מתחת."],
      ["v2", "V2", "חיפוש בפס העליון, ותפריט הקטגוריות עם המגה־מניו בין הלוגו לסל."],
    ],
    checkbox: ["wideHeader", "Fullwidth", "הדר, פוטר, עמוד הבית, קטגוריות וכל שאר הראפרים הראשיים ברוחב 90% מהמסך. עמודים צרים בכוונה, כמו עמוד מוצר ותשלום, נשארים כמו שהם."],
    note: "V2 מוצג במסכים רחבים. במובייל נשאר התפריט הרגיל. עם ספק אחד, תפריט הקטגוריות נשאר בפס נפרד מתחת.",
  },
  {
    name: "hero",
    title: "הגדרות Hero",
    options: [
      ["v1", "V1", "קרוסלת קטגוריות, אייטם מקודם ושני מקודמים קטנים בצד."],
      ["v2", "V2", "סליידר תמונות מתחלפות עם נקודות דפדוף, ומתחתיו קרוסלת הקטגוריות."],
      ["v3", "V3 · ברירת מחדל", "שלושת הבאנרים למעלה, ומתחתיהם קרוסלת הקטגוריות עם הכותרת «קטגוריות נבחרות»."],
    ],
  },
  {
    name: "categories",
    title: "הגדרות קטגוריות בעמוד הבית",
    options: [
      ["v1", "V1", "בלוק לכל מחלקה עם טאבים ושתי שורות של מוצרים."],
      ["v2", "V2 · ברירת מחדל", "קרוסלת מוצרים כמו קרוסלת המבצעים. הטאבים מחליפים את המוצרים בקרוסלה."],
    ],
  },
  {
    name: "mobileMenu",
    title: "הגדרות תפריט מובייל",
    options: [
      ["v1", "V1 · ברירת מחדל", "התפריט נפתח מתחת להדר."],
      ["v2", "V2", "התפריט נפתח על כל המסך, עם הלוגו במרכז למעלה וכפתור סגירה מימין, במקום ההמבורגר."],
    ],
    note: "התפריט מוצג במסכים צרים מ־1024 פיקסלים.",
  },
  {
    name: "suppliers",
    title: "הגדרות ספקים",
    options: [
      ["v1", "V1 · ברירת מחדל", "ריבוי ספקים: סופר אשמורת, חד פעמי וכלי בית, קניון אשמורת ומבצעים."],
      ["v2", "V2", "ספק אחד, תוצרת. התפריט, קרוסלת הקטגוריות ועמוד הבית לפי הקטגוריות בקטלוג תוצרת."],
    ],
  },
];

let state = load();
let markers = null;
let onHeroChange = () => {};
let onSuppliersChange = () => {};

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
    return {
      header: saved.header === "v2" ? "v2" : "v1",
      hero: ["v1", "v2", "v3"].includes(saved.hero) ? saved.hero : defaults.hero,
      categories: ["v1", "v2"].includes(saved.categories) ? saved.categories : defaults.categories,
      mobileMenu: saved.mobileMenu === "v2" ? "v2" : defaults.mobileMenu,
      suppliers: saved.suppliers === "v2" ? "v2" : defaults.suppliers,
      wideHeader: typeof saved.wideHeader === "boolean" ? saved.wideHeader : defaults.wideHeader,
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

function applyMobileMenu() {
  document.documentElement.dataset.mobileMenu = state.mobileMenu;
  if (state.mobileMenu !== "v2") document.documentElement.classList.remove("is-menu-cover");
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
  if (moved) topSlot.append(search);
  else markers.search.after(search);
  if (moved && state.suppliers !== "v2") tools.before(nav);
  else markers.nav.after(nav);
}

function panelMarkup() {
  return `<div class="theme-panel-head">
    <div>
      <p class="theme-panel-kicker" lang="en">Prototype controls</p>
      <h2 id="theme-panel-title" class="text-xl font-extrabold">אפשרויות תבנית</h2>
    </div>
    <button class="auth-close" type="button" data-theme-close aria-label="סגירת אפשרויות התבנית">×</button>
  </div>
  <div class="theme-panel-body">
    ${groups.map((group) => `<fieldset class="theme-group">
      <legend><span class="theme-legend-icon">${groupIcons[group.name]}</span>${group.title}</legend>
      ${group.options.map(([value, label, text]) => `<label class="theme-option">
        <input type="radio" name="${group.name}" value="${value}" ${state[group.name] === value ? "checked" : ""} data-theme-option>
        <span><strong>${label}</strong><small>${text}</small></span>
      </label>`).join("")}
      ${group.checkbox ? `<label class="theme-option">
        <input type="checkbox" name="${group.checkbox[0]}" ${state[group.checkbox[0]] ? "checked" : ""} data-theme-toggle>
        <span><strong class="theme-option-title"><span class="theme-legend-icon">${groupIcons[group.checkbox[0]]}</span>${group.checkbox[1]}</strong><small>${group.checkbox[2]}</small></span>
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
  if (name === "header" || name === "wideHeader" || name === "suppliers") applyHeader();
  if (name === "hero" || name === "categories") onHeroChange();
  if (name === "mobileMenu") applyMobileMenu();
  if (name === "suppliers") onSuppliersChange();
}

export function bindThemeOptions({ heroChange, suppliersChange } = {}) {
  onHeroChange = heroChange || onHeroChange;
  onSuppliersChange = suppliersChange || onSuppliersChange;

  const gear = document.createElement("button");
  gear.type = "button";
  gear.className = "theme-gear";
  gear.setAttribute("aria-label", "אפשרויות תבנית");
  gear.setAttribute("aria-expanded", "false");
  gear.setAttribute("aria-controls", "theme-panel");
  gear.innerHTML = `${gearIcon}<span class="theme-gear-label" lang="en">Prototype</span>`;

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
      setOption("categories", defaults.categories, panel);
      setOption("mobileMenu", defaults.mobileMenu, panel);
      setOption("suppliers", defaults.suppliers, panel);
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
  applyMobileMenu();
}
