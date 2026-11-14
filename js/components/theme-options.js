import { adSlots } from "./ad-slots.js";

const KEY = "ashmoret-theme";
const REV = 12;
const adKey = (id) => `ad-${id}`;
const adDefaults = { ...Object.fromEntries(adSlots.map((slot) => [adKey(slot.id), slot.enabled])), adTimers: false };
const defaults = { header: "v2", hero: "v4", heroEffect: "v2", categories: "v2", featured: "v1", banners: "v2", mobileMenu: "v2", mobileCarousel: "v2", railCols: "6", suppliers: "v1", palette: "v1", logo: "v1", wideHeader: true, listingCenter: true, ...adDefaults };
const logos = {
  v1: { src: "assets/images/brand/logo-market-cart.png?v=2", width: 300, height: 80 },
  v2: { src: "assets/images/brand/logo-market.png", width: 1024, height: 344 },
};
const desktop = window.matchMedia("(min-width: 1024px)");

const gearIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

const groupIcon = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
const groupIcons = {
  header: groupIcon(`<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 9h18M6.5 6.5h3M15 6.5h2.5"></path>`),
  hero: groupIcon(`<rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="15.5" cy="9.5" r="1.5"></circle><path d="m3 16 5-4.5 4 3.5 3-2 6 4"></path>`),
  heroEffect: groupIcon(`<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M9 9.5l-2.5 2.5L9 14.5M15 9.5l2.5 2.5-2.5 2.5"></path>`),
  categories: groupIcon(`<rect x="3" y="4" width="7" height="7" rx="1.5"></rect><rect x="14" y="4" width="7" height="7" rx="1.5"></rect><rect x="3" y="13" width="7" height="7" rx="1.5"></rect><rect x="14" y="13" width="7" height="7" rx="1.5"></rect>`),
  featured: groupIcon(`<circle cx="7" cy="8" r="3"></circle><circle cx="17" cy="8" r="3"></circle><circle cx="7" cy="17" r="3"></circle><circle cx="17" cy="17" r="3"></circle>`),
  banners: groupIcon(`<rect x="3" y="5" width="8" height="14" rx="1.5"></rect><rect x="13" y="5" width="8" height="14" rx="1.5"></rect><path d="m9 2-2 2 2 2M15 18l2 2-2 2"></path>`),
  mobileMenu: groupIcon(`<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"></rect><path d="M9.5 8h5M9.5 11h5M9.5 14h5"></path>`),
  mobileCarousel: groupIcon(`<rect x="7" y="5" width="10" height="14" rx="1.5"></rect><path d="M4 7v10M20 7v10"></path>`),
  railCols: groupIcon(`<rect x="2.5" y="6" width="4" height="12" rx="1"></rect><rect x="8.5" y="6" width="4" height="12" rx="1"></rect><rect x="14.5" y="6" width="4" height="12" rx="1"></rect><path d="M21 8v8"></path>`),
  suppliers: groupIcon(`<path d="M3 9 4.5 4h15L21 9"></path><path d="M4 9v11h16V9"></path><path d="M3 9h18"></path><path d="M9.5 20v-5.5h5V20"></path>`),
  palette: groupIcon(`<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.3-.3-.3-.5-.8-.5-1.2 0-1 .8-1.8 1.8-1.8H16a5 5 0 0 0 5-5c0-3.9-4-6.8-9-6.8z"></path><circle cx="7.5" cy="11" r="1.2"></circle><circle cx="10.5" cy="7" r="1.2"></circle><circle cx="15" cy="7.5" r="1.2"></circle>`),
  logo: groupIcon(`<path d="M3 4h2l2.4 10.2a1.5 1.5 0 0 0 1.5 1.1h8.6a1.5 1.5 0 0 0 1.4-1.1L21 8H6.2"></path><circle cx="9.5" cy="19.5" r="1.3"></circle><circle cx="17" cy="19.5" r="1.3"></circle>`),
  wideHeader: groupIcon(`<path d="M3 12h18"></path><path d="m7 8-4 4 4 4M17 8l4 4-4 4"></path>`),
  listingHero: groupIcon(`<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M8 8h8M6 12h12M9 16h6"></path>`),
  adLayout: groupIcon(`<rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 7h18M7 17h10"></path><path d="M15 11h3v3h-3z"></path>`),
};

const groups = [
  {
    name: "header",
    title: "הגדרות Header",
    options: [
      ["v1", "V1", "חיפוש בין הלוגו לסל, ותפריט הקטגוריות בפס נפרד מתחת."],
      ["v2", "V2 · ברירת מחדל", "חיפוש בפס העליון, ותפריט הקטגוריות עם המגה־מניו בין הלוגו לסל."],
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
      ["v3", "V3", "שלושת הבאנרים למעלה, ומתחתיהם קרוסלת הקטגוריות עם הכותרת «קטגוריות נבחרות»."],
      ["v4", "V4 · ברירת מחדל", "כמו V3, ובצד במקום שני באנרים משניים, באנר אחד עם תמונות מתחלפות וקישור."],
    ],
  },
  {
    name: "heroEffect",
    title: "אפקט סלייד Hero",
    options: [
      ["v1", "V1", "החלקה אופקית בין השקופיות."],
      ["v2", "V2 · Fade · ברירת מחדל", "מעבר עמעום רך בין השקופיות, במקום החלקה."],
    ],
    note: "חל על הסליידר הגדול ב־Hero V3 ו־V4.",
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
    name: "featured",
    title: "הגדרות קטגוריות נבחרות",
    options: [
      ["v1", "V1 · ברירת מחדל", "תמונות מוצרים לכל קטגוריה."],
      ["v2", "V2", "אייקון לכל קטגוריה."],
    ],
  },
  {
    name: "banners",
    title: "הגדרות באנרים",
    options: [
      ["v1", "V1", "בסליידר הצדדי בעמוד הבית שלושת הבאנרים של המחלקות."],
      ["v2", "V2 · ברירת מחדל", "בסליידר הצדדי בעמוד הבית ארבעת באנרי המבצעים."],
    ],
    note: "הסליידר הצדדי מוצג ב־Hero V4.",
  },
  {
    name: "mobileMenu",
    title: "הגדרות תפריט מובייל",
    options: [
      ["v1", "V1", "התפריט נפתח מתחת להדר."],
      ["v2", "V2 · ברירת מחדל", "התפריט נפתח על כל המסך, עם הלוגו במרכז למעלה וכפתור סגירה מימין, במקום ההמבורגר."],
    ],
    note: "התפריט מוצג במסכים צרים מ־1024 פיקסלים.",
  },
  {
    name: "mobileCarousel",
    title: "קרוסלת מוצרים במובייל",
    options: [
      ["v1", "Grid 2", "שני מוצרים זה לצד זה, עם חיצי ניווט."],
      ["v2", "Centered Peek · ברירת מחדל", "מוצר אחד במרכז, עם הצצה למוצר הקודם והבא משני הצדדים. ניווט בהחלקה."],
    ],
    note: "חל על קרוסלות המוצרים במסכים צרים מ־768 פיקסלים. בטאבלט ובמחשב התצוגה נשארת כמו שהיא.",
  },
  {
    name: "railCols",
    title: "מוצרים בסלייד קרוסלה",
    options: [
      ["5", "5", "חמישה מוצרים בכל סלייד."],
      ["6", "6 · ברירת מחדל", "שישה מוצרים בכל סלייד."],
    ],
    note: "חל על קרוסלות המוצרים במסכים מ־1280 פיקסלים. קרוסלת «מוצרים דומים» בעמוד מוצר נשארת עם 4.",
  },
  {
    name: "suppliers",
    title: "הגדרות ספקים",
    options: [
      ["v1", "V1 · ברירת מחדל", "ריבוי ספקים: סופר אשמורת, חד פעמי וכלי בית, קניון אשמורת ומבצעים."],
      ["v2", "V2", "ספק אחד, תוצרת. התפריט, קרוסלת הקטגוריות ועמוד הבית לפי הקטגוריות בקטלוג תוצרת."],
    ],
  },
  {
    name: "palette",
    title: "פלטת צבעים",
    options: [
      ["grey", "אפורים", "גווני האפור של ה־Grey box.", ["#1f1f1f", "#e9e9e9", "#fff"]],
      ["v1", "V1 · ברירת מחדל", `כהה <bdi dir="ltr">#282B4A</bdi>, בהיר <bdi dir="ltr">#EEEBDA</bdi> ולבן.`, ["#282B4A", "#EEEBDA", "#fff"]],
    ],
  },
  {
    name: "logo",
    title: "לוגו",
    options: [
      ["v1", "V1 · ברירת מחדל", "MARKET מבית אשמורת, עם עגלת קניות."],
      ["v2", "V2", "אשמורת MARKET עם הלב."],
    ],
    note: "הלוגו מתחלף בהדר, בתפריט המובייל ובפוטר.",
  },
  {
    name: "listingHero",
    title: "חלק עליון עמוד קטגוריה",
    toggles: [
      ["listingCenter", "מרכוז", "פירורי הלחם, הכותרת ובועות תתי הקטגוריות במרכז (ברירת מחדל). כבוי: מיושרים לימין."],
    ],
  },
  {
    name: "adLayout",
    title: "הגדרות פריסת באנרים",
    toggles: [
      [adKey("top-strip"), "סטריפ עליון", "פס צר מעל ההדר. נפתח בגלישה ודוחף את התוכן למטה."],
      [adKey("corner-peek"), "פינה מבצבצת", "בלוק בפינה הימנית התחתונה: קודם מבצבצת לשונית ואז הוא נכנס. במובייל בר בתחתית המסך."],
      [adKey("bottom-center"), "באנר תחתון", "באנר רחב בתחתית ובמרכז המסך, עולה מלמטה."],
      [adKey("interstitial"), "מסך מלא", "פופאפ עם שכבה כהה. מהדף השני בביקור ואחרי 4 שניות לפחות. <span class=\"theme-warn\">כבוי במובייל.</span>"],
      [adKey("pre-footer"), "לפני הפוטר", "סטריפ בתוך הדף, ממש מעל הפוטר."],
      ["adTimers", "טיימר סגירה", "דולק: ספירה לאחור וקו התקדמות. כבוי: נסגר רק ב־X."],
    ],
    action: ["data-ads-replay", "הצג שוב"],
    note: "בכל ביקור מוצג רק באנר פולשני אחד, פינה או מסך מלא. כדי לראות את המסך המלא, כבו את הפינה ולחצו «הצג שוב». באנרים צפים לא מוצגים בתשלום, בהתחברות, באישור הזמנה ובעמודים המשפטיים.",
  },
];

let state = load();
let markers = null;
let onHeroChange = () => {};
let onSuppliersChange = () => {};
let onAdsChange = () => {};
let onAdsReplay = () => {};

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
    const current = saved.rev >= 3;
    return {
      rev: REV,
      header: current && saved.header === "v1" ? "v1" : defaults.header,
      hero: saved.rev >= 6 && ["v1", "v2", "v3", "v4"].includes(saved.hero) ? saved.hero : defaults.hero,
      heroEffect: saved.rev >= 8 && saved.heroEffect === "v1" ? "v1" : defaults.heroEffect,
      categories: ["v1", "v2"].includes(saved.categories) ? saved.categories : defaults.categories,
      featured: saved.rev >= 9 && ["v1", "v2"].includes(saved.featured) ? saved.featured : defaults.featured,
      banners: saved.rev >= 5 && saved.banners === "v1" ? "v1" : defaults.banners,
      mobileMenu: current && saved.mobileMenu === "v1" ? "v1" : defaults.mobileMenu,
      mobileCarousel: saved.rev >= 7 && saved.mobileCarousel === "v1" ? "v1" : defaults.mobileCarousel,
      railCols: saved.rev >= 12 && ["5", "6"].includes(saved.railCols) ? saved.railCols : defaults.railCols,
      suppliers: saved.suppliers === "v2" ? "v2" : defaults.suppliers,
      palette: current && saved.palette === "grey" ? "grey" : defaults.palette,
      logo: saved.logo === "v2" ? "v2" : defaults.logo,
      wideHeader: typeof saved.wideHeader === "boolean" ? saved.wideHeader : defaults.wideHeader,
      listingCenter: saved.rev >= 10 && saved.listingCenter === false ? false : defaults.listingCenter,
      ...Object.fromEntries(Object.keys(adDefaults).map((key) => [key, saved.rev >= 11 && typeof saved[key] === "boolean" ? saved[key] : adDefaults[key]])),
    };
  } catch {
    return { rev: REV, ...defaults };
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

export function adSettings() {
  return {
    enabled: Object.fromEntries(adSlots.map((slot) => [slot.id, state[adKey(slot.id)] === true])),
    timers: state.adTimers === true,
  };
}

function applyPalette() {
  const root = document.documentElement;
  if (state.palette === "grey") delete root.dataset.palette;
  else root.dataset.palette = state.palette;
  const surface = getComputedStyle(root).getPropertyValue("--color-surface").trim();
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", surface);
}

function applyLogo() {
  const logo = logos[state.logo] || logos.v1;
  document.documentElement.dataset.logo = state.logo;
  document.querySelectorAll("[data-site-logo]").forEach((img) => {
    if (img.getAttribute("src") === logo.src) return;
    img.src = logo.src;
    img.width = logo.width;
    img.height = logo.height;
  });
}

function applyMobileMenu() {
  document.documentElement.dataset.mobileMenu = state.mobileMenu;
  if (state.mobileMenu !== "v2") document.documentElement.classList.remove("is-menu-cover");
}

function applyListingHero() {
  document.documentElement.toggleAttribute("data-listing-center", state.listingCenter);
}

function applyMobileCarousel() {
  document.documentElement.dataset.mobileCarousel = state.mobileCarousel;
}

function applyRailCols() {
  document.documentElement.dataset.railCols = state.railCols;
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
    <h2 id="theme-panel-title" class="text-xl font-extrabold">אפשרויות תבנית</h2>
    <button class="auth-close" type="button" data-theme-close aria-label="סגירת אפשרויות התבנית">×</button>
  </div>
  <div class="theme-panel-body">
    ${groups.map((group, index) => `<fieldset class="theme-group">
      <legend><span class="theme-group-num" aria-hidden="true">${index + 1}</span><span class="theme-legend-icon">${groupIcons[group.name]}</span>${group.title}</legend>
      ${(group.options || []).map(([value, label, text, swatches]) => `<label class="theme-option">
        <input type="radio" name="${group.name}" value="${value}" ${state[group.name] === value ? "checked" : ""} data-theme-option>
        <span><strong>${label}</strong><small>${text}</small>${swatches ? `<span class="theme-swatches" aria-hidden="true">${swatches.map((color) => `<span style="background:${color}"></span>`).join("")}</span>` : ""}</span>
      </label>`).join("")}
      ${group.checkbox ? `<label class="theme-option">
        <input type="checkbox" name="${group.checkbox[0]}" ${state[group.checkbox[0]] ? "checked" : ""} data-theme-toggle>
        <span><strong class="theme-option-title"><span class="theme-legend-icon">${groupIcons[group.checkbox[0]]}</span>${group.checkbox[1]}</strong><small>${group.checkbox[2]}</small></span>
      </label>` : ""}
      ${(group.toggles || []).map(([name, label, text]) => `<label class="theme-option">
        <input type="checkbox" name="${name}" ${state[name] ? "checked" : ""} data-theme-toggle>
        <span><strong>${label}</strong><small>${text}</small></span>
      </label>`).join("")}
      ${group.action ? `<button class="btn btn-line theme-action" type="button" ${group.action[0]}>${group.action[1]}</button>` : ""}
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
  if (name === "hero" || name === "heroEffect" || name === "categories" || name === "featured" || name === "banners") onHeroChange();
  if (name === "mobileMenu") applyMobileMenu();
  if (name === "mobileCarousel") {
    applyMobileCarousel();
    onHeroChange();
  }
  if (name === "railCols") {
    applyRailCols();
    onHeroChange();
  }
  if (name === "suppliers") onSuppliersChange();
  if (name === "palette") applyPalette();
  if (name === "logo") applyLogo();
  if (name === "listingCenter") applyListingHero();
  if (name in adDefaults) onAdsChange();
}

export function bindThemeOptions({ heroChange, suppliersChange, adsChange, adsReplay } = {}) {
  onHeroChange = heroChange || onHeroChange;
  onSuppliersChange = suppliersChange || onSuppliersChange;
  onAdsChange = adsChange || onAdsChange;
  onAdsReplay = adsReplay || onAdsReplay;

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
    if (event.target.closest("[data-ads-replay]")) onAdsReplay();
    if (event.target.closest("[data-theme-reset]")) {
      Object.keys(adDefaults).forEach((key) => setOption(key, adDefaults[key], panel));
      setOption("header", defaults.header, panel);
      setOption("hero", defaults.hero, panel);
      setOption("heroEffect", defaults.heroEffect, panel);
      setOption("categories", defaults.categories, panel);
      setOption("featured", defaults.featured, panel);
      setOption("banners", defaults.banners, panel);
      setOption("mobileMenu", defaults.mobileMenu, panel);
      setOption("mobileCarousel", defaults.mobileCarousel, panel);
      setOption("railCols", defaults.railCols, panel);
      setOption("suppliers", defaults.suppliers, panel);
      setOption("palette", defaults.palette, panel);
      setOption("logo", defaults.logo, panel);
      setOption("wideHeader", defaults.wideHeader, panel);
      setOption("listingCenter", defaults.listingCenter, panel);
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
  applyMobileCarousel();
  applyRailCols();
  applyListingHero();
  applyPalette();
  applyLogo();
}
