import { esc } from "../lib/format.js";
import { offerBanners, sideBanners } from "../data/banners.js";
import { getTheme } from "./theme-options.js";
import { isSingleSupplier, supplierCategories } from "./suppliers.js";

const mark = "assets/images/brand/heart.png";
const chevron = `<svg class="mega-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>`;
const plus = `<svg class="mobile-nav-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"></path><path class="mobile-nav-plus-v" d="M12 5v14"></path></svg>`;
const arrow = `<svg class="mega-all-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H6M12 6l-6 6 6 6"></path></svg>`;

const menus = [
  {
    id: "super",
    label: "סופר אשמורת",
    groups: [
      ["מזווה יבש", [
        ["פירורי לחם", "#/c/breadcrumbs"],
        ["דגנים וקטניות", "#/c/grains"],
        ["אורז", "#/c/rice"],
        ["פסטות ופתיתים", "#/c/pasta"],
        ["טורטיות", "#/c/tortillas"],
      ]],
      ["שימורים ושמנים", [
        ["שימורים", "#/c/cans"],
        ["שמנים ורטבים", "#/c/oils"],
        ["רטבי בישול", "#/c/oils"],
      ]],
      ["תבלינים", [
        ["תבלינים למטבח", "#/c/spices"],
        ["תבלינים טחונים", "#/c/spices"],
        ["עשבי תיבול", "#/c/spices"],
      ]],
    ],
    promo: {
      href: "#/d/super",
      title: "לכל המוצרים בסופר אשמורת",
    },
  },
  {
    id: "home",
    label: "חד פעמי וכלי בית",
    groups: [
      ["חד פעמי", [
        ["צלחות וכוסות", "#/c/disposables"],
        ["סכו״ם חד פעמי", "#/c/disposables"],
        ["מפות נייר", "#/c/disposables"],
        ["תבניות אלומיניום", "#/c/disposables"],
        ["שקיות", "#/c/disposables"],
      ]],
      ["ניקיון", [
        ["נוזל כלים", "#/c/cleaning"],
        ["מטליות", "#/c/cleaning"],
        ["שקיות אשפה", "#/c/cleaning"],
        ["נייר סופג", "#/c/cleaning"],
      ]],
      ["כלי בית", [
        ["כלי אחסון", "#/c/household"],
        ["כלי הגשה", "#/c/household"],
        ["כלי אפייה", "#/c/household"],
      ]],
    ],
    promo: {
      href: "#/d/home",
      title: "לכל המוצרים בחד פעמי וכלי בית",
    },
  },
  {
    id: "electronics",
    label: "קניון אשמורת",
    groups: [
      ["מכשירי חשמל", [
        ["קומקומים", "#/c/appliances"],
        ["טוסטרים", "#/c/appliances"],
        ["בלנדרים", "#/c/appliances"],
        ["מאווררים", "#/c/appliances"],
      ]],
      ["תאורה", [
        ["נורות", "#/c/lighting"],
        ["מנורות שולחן", "#/c/lighting"],
        ["פנסי חירום", "#/c/lighting"],
      ]],
      ["אלקטרוניקה", [
        ["סוללות", "#/c/gadgets"],
        ["כבלים ומטענים", "#/c/gadgets"],
        ["אוזניות", "#/c/gadgets"],
      ]],
    ],
    promo: {
      href: "#/d/electronics",
      title: "לכל המוצרים בקניון אשמורת",
    },
  },
  {
    id: "offers",
    label: "מבצעים",
    banners: true,
  },
];

const groupImages = {
  "מזווה יבש": "pantry.png",
  "שימורים ושמנים": "cans-oils.png",
  "תבלינים": "spices.png",
  "חד פעמי": "disposables.png",
  "ניקיון": "cleaning.png",
  "כלי בית": "household.png",
  "מכשירי חשמל": "appliances.png",
  "תאורה": "lighting.png",
  "אלקטרוניקה": "electronics.png",
};

export function featuredGroups() {
  return ["super", "home", "electronics"]
    .flatMap((id) => menuById(id).groups.map(([name, links]) => ({
      name,
      href: links[0][1],
      image: groupImages[name] ? `assets/images/categories/${groupImages[name]}` : null,
      icon: groupImages[name] ? `assets/images/categories/icons/${groupImages[name].replace(".png", ".webp")}?v=2` : null,
    })));
}

function menuById(id) {
  return menus.find((item) => item.id === id);
}

export function megaPanel(id) {
  const item = menuById(id);
  if (!item) return "";
  if (item.banners) {
    const banners = getTheme().banners === "v2" ? sideBanners : offerBanners;
    return `<div class="mega-layout mega-banners" style="--banner-count:${banners.length}">${banners.map((banner) => `<a class="mega-banner" href="${esc(banner.href)}" aria-label="${esc(banner.label)}">
      <img src="${esc(banner.image)}" alt="" width="${banner.size[0]}" height="${banner.size[1]}" loading="lazy" decoding="async">
    </a>`).join("")}</div>`;
  }
  const groups = item.groups.map(([title, links]) => `<section class="mega-block">
      <h3><a href="${esc(links[0][1])}">${esc(title)}</a></h3>
      <ul>${links.map(([label, href]) => `<li><a href="${esc(href)}">${esc(label)}</a></li>`).join("")}</ul>
      <span class="mega-block-photo" style="background-image:url('${mark}')"></span>
    </section>`).join("");
  const promo = item.promo;
  return `<div class="mega-layout">
    <a class="mega-all" href="${esc(promo.href)}">
      <span class="mega-all-photo" style="background-image:url('${mark}')"></span>
      <span class="mega-all-copy">
        <span class="mega-all-title">${esc(promo.title)}</span>
        ${arrow}
      </span>
    </a>
    ${groups}
  </div>`;
}

function categoryLink(category) {
  return `<a class="mega-trigger text-ink" href="#/c/${esc(category.slug)}"><span class="cat-heart" aria-hidden="true"></span>${esc(category.name)}</a>`;
}

export function renderSupplierNav() {
  const nav = document.querySelector("[data-main-nav]");
  const multi = nav?.querySelector("[data-nav-multi]");
  const single = nav?.querySelector("[data-nav-single]");
  const mobile = document.getElementById("mobile-nav");
  if (!nav || !multi || !single || !mobile) return;
  nav.megaClose?.();
  const solo = isSingleSupplier();
  multi.hidden = solo;
  single.hidden = !solo;
  single.innerHTML = solo ? supplierCategories().map(categoryLink).join("") : "";
  mobile.innerHTML = solo
    ? supplierCategories().map((category) => `<div class="mobile-nav-item"><div class="mega-mobile-head">${categoryLink(category)}</div></div>`).join("")
    : menus.map((item) => `<div class="mobile-nav-item">
      <div class="mega-mobile-head">
        <a class="mega-trigger" href="#/d/${esc(item.id)}"><span class="nav-icon is-${esc(item.id)}" aria-hidden="true"></span>${esc(item.label)}</a>
        <button type="button" class="mega-trigger mobile-nav-toggle" data-mega-mobile="${esc(item.id)}" aria-expanded="false" aria-label="פתיחת ${esc(item.label)}">${chevron}${plus}</button>
      </div>
      <div class="mega-mobile" hidden data-mega-mobile-panel="${esc(item.id)}"></div>
    </div>`).join("");
}

export function mountMega() {
  const nav = document.querySelector("[data-main-nav]");
  const mega = document.getElementById("mega");
  const body = document.getElementById("mega-body");
  const mobile = document.getElementById("mobile-nav");
  if (!nav || !mega || !body || !mobile) return;

  renderSupplierNav();

  const triggers = [...nav.querySelectorAll("[data-mega-open]")];

  let closeTimer = 0;

  const closeDesktop = () => {
    window.clearTimeout(closeTimer);
    mega.hidden = true;
    delete mega.dataset.open;
    body.innerHTML = "";
    triggers.forEach((link) => link.setAttribute("aria-expanded", "false"));
  };

  const openDesktop = (id, link) => {
    window.clearTimeout(closeTimer);
    if (mega.dataset.open !== id) {
      body.innerHTML = megaPanel(id);
      mega.dataset.open = id;
    }
    mega.hidden = false;
    mega.setAttribute("aria-labelledby", link.id);
    triggers.forEach((item) => item.setAttribute("aria-expanded", String(item === link)));
  };

  const closeMobile = () => {
    mobile.querySelectorAll("[data-mega-mobile]").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      const panel = mobile.querySelector(`[data-mega-mobile-panel="${button.dataset.megaMobile}"]`);
      if (panel) panel.hidden = true;
    });
  };

  const closeAll = () => {
    closeDesktop();
    closeMobile();
  };

  const megaLinks = () => [...body.querySelectorAll("a[href], button:not([disabled])")];

  triggers.forEach((link) => {
    const open = () => openDesktop(link.dataset.megaOpen, link);
    link.addEventListener("mouseenter", open);
    link.addEventListener("focus", open);
    link.addEventListener("keydown", (event) => {
      if (event.key !== "Tab" || event.shiftKey) return;
      open();
      const first = megaLinks()[0];
      if (!first) return;
      event.preventDefault();
      first.focus();
    });
  });

  mega.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const links = megaLinks();
    const index = links.indexOf(document.activeElement);
    const position = triggers.findIndex((link) => link.dataset.megaOpen === mega.dataset.open);
    if (event.shiftKey && index === 0) {
      event.preventDefault();
      triggers[position]?.focus();
    } else if (!event.shiftKey && index === links.length - 1 && triggers[position + 1]) {
      event.preventDefault();
      triggers[position + 1].focus();
    }
  });

  nav.addEventListener("mouseenter", () => window.clearTimeout(closeTimer));
  nav.addEventListener("mouseleave", () => {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(closeDesktop, 120);
  });
  nav.addEventListener("focusout", (event) => {
    if (!nav.contains(event.relatedTarget)) closeDesktop();
  });

  mobile.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mega-mobile]");
    if (!button) return;
    const id = button.dataset.megaMobile;
    const panel = mobile.querySelector(`[data-mega-mobile-panel="${id}"]`);
    const open = button.getAttribute("aria-expanded") === "true";
    closeMobile();
    if (!open && panel) {
      panel.innerHTML = megaPanel(id);
      panel.hidden = false;
      button.setAttribute("aria-expanded", "true");
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) closeDesktop();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAll();
  });

  nav.megaClose = closeAll;
}

export function closeMega() {
  document.querySelector("[data-main-nav]")?.megaClose?.();
}
