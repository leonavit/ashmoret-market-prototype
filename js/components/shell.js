import { searchProducts } from "../data/catalog.js";
import { inSupplierScope, isSingleSupplier, supplierCategories } from "./suppliers.js";
import { countItems, subscribe } from "../state/cart.js";
import { esc } from "../lib/format.js";
import { prefersReducedMotion } from "../lib/format.js";
import { closeMega, featuredGroups, mountMega } from "./mega-menu.js";
import { getTheme } from "./theme-options.js";
import { isPrivateRoute, parseHash } from "../router.js";
import { getSession, logout } from "../state/session.js";

let bound = false;

export function bindShell(navigate) {
  if (bound) return;
  bound = true;

  const header = document.querySelector(".site-header");
  const markScrolled = () => header?.classList.toggle("is-scrolled", window.scrollY > 0);
  window.addEventListener("scroll", markScrolled, { passive: true });
  markScrolled();

  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  const suggest = document.getElementById("suggest");
  const slot = document.getElementById("search-slot");
  const menu = document.getElementById("mobile-menu");
  const menuOpen = document.getElementById("menu-open");
  const catPrev = document.getElementById("cat-prev");
  const catNext = document.getElementById("cat-next");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    setSuggestOpen(false);
    const q = input.value.trim();
    navigate(q ? `#/search?q=${encodeURIComponent(q)}` : "#/search");
  });

  input.addEventListener("input", () => {
    const matches = searchProducts(input.value).filter(inSupplierScope).slice(0, 6);
    if (!input.value.trim() || !matches.length) {
      suggest.innerHTML = "";
      setSuggestOpen(false);
      return;
    }
    suggest.innerHTML = matches
      .map((product, index) => `<a role="option" id="suggest-${index}" aria-selected="false" href="#/p/${esc(product.id)}"><span class="font-semibold">${esc(product.name)}</span><span class="text-sm text-muted">${esc(product.weight)}</span></a>`)
      .join("");
    setSuggestOpen(true);
  });

  document.addEventListener("click", (event) => {
    if (!slot.contains(event.target)) setSuggestOpen(false);
  });

  input.addEventListener("keydown", (event) => {
    const options = [...suggest.querySelectorAll("[role=option]")];
    const open = !suggest.classList.contains("hidden") && options.length > 0;
    const current = options.findIndex((option) => option.getAttribute("aria-selected") === "true");
    if (event.key === "Escape") {
      setSuggestOpen(false);
      return;
    }
    if (!open) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      const next = current < 0 ? (step > 0 ? 0 : options.length - 1) : (current + step + options.length) % options.length;
      setActiveOption(options, next);
    } else if (event.key === "Enter" && current >= 0) {
      event.preventDefault();
      const href = options[current].getAttribute("href");
      setSuggestOpen(false);
      navigate(href);
    }
  });

  menuOpen.addEventListener("click", () => toggleMenu());

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a, [data-menu-close]")) toggleMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) toggleMenu(false);
  });

  catPrev.addEventListener("click", () => categoryCarousel?.scrollPrev());
  catNext.addEventListener("click", () => categoryCarousel?.scrollNext());
  mountMega();

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-logout]")) return;
    logout();
    updateAccountSlot();
    if (isPrivateRoute(parseHash().name)) navigate("#/");
  });

  subscribe(() => updateCartBadge());
  updateCartBadge();
  updateAccountSlot();

  function toggleMenu(force) {
    const wasOpen = menu.classList.contains("is-open");
    const open = typeof force === "boolean" ? force : !wasOpen;
    const cover = document.documentElement.dataset.mobileMenu === "v2";
    if (open && cover) {
      const topbar = document.querySelector(".site-header .topbar");
      const top = topbar?.getBoundingClientRect().bottom || 0;
      const button = menuOpen.getBoundingClientRect();
      const rowCenter = button.top + button.height / 2 - top;
      document.documentElement.style.setProperty("--menu-cover-top", `${top}px`);
      document.documentElement.style.setProperty("--menu-head-h", `${rowCenter * 2 + 1}px`);
    }
    menu.classList.toggle("is-open", open);
    menuOpen.setAttribute("aria-expanded", String(open));
    document.documentElement.classList.toggle("is-menu-cover", open && cover);
    if (cover && open) menu.querySelector("[data-menu-close]")?.focus();
    else if (cover && wasOpen && !open) menuOpen.focus();
    if (wasOpen && !open) {
      menuOpen.classList.remove("is-unfolding");
      void menuOpen.offsetWidth;
      menuOpen.classList.add("is-unfolding");
      window.setTimeout(() => menuOpen.classList.remove("is-unfolding"), 500);
    }
    const gsap = window.gsap;
    if (open && gsap && !prefersReducedMotion()) {
      gsap.fromTo(menu, { y: cover ? 0 : -8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: cover ? 0.2 : 0.28, ease: "power2.out" });
    }
  }
}

const personIcon = `<svg viewBox="0 0 24 24" class="account-icon" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="3.2"></circle><path d="M5 19.2c1.4-3 3.8-4.4 7-4.4s5.6 1.4 7 4.4"></path></svg>`;

export function updateAccountSlot() {
  const slot = document.getElementById("account-slot");
  if (!slot) return;
  const session = getSession();
  if (!session) {
    slot.innerHTML = `<button class="account-link account-user" type="button" data-open-auth>${personIcon}<span>התחברות</span></button>`;
    return;
  }
  slot.innerHTML = `<a class="account-link account-user" href="#/account" aria-label="האזור האישי, ${esc(session.displayName)}">${personIcon}<span>${esc(session.displayName)}</span></a><button class="account-logout" type="button" data-logout>יציאה</button>`;
}

export function updateCartBadge() {
  const root = document.getElementById("cart-dock");
  if (!root) return;
  const count = countItems();
  const label = count === 0 ? "סל קניות" : count === 1 ? "סל קניות, פריט אחד" : `סל קניות, ${count} פריטים`;
  root.setAttribute("aria-label", label);
}

let categoryCarousel = null;

export function setCategoryBand(visible) {
  const band = document.getElementById("category-band");
  if (!band) return;
  band.hidden = !visible;
}

let categoryActive = "";
let categoryCount = 0;
let categoryFits = null;
let categoryMobile = null;
let categoryAutoplay = 0;
let resizeTimer = 0;
const mobileCategories = window.matchMedia("(max-width: 767px)");

function stopCategoryAutoplay() {
  window.clearInterval(categoryAutoplay);
  categoryAutoplay = 0;
}

function markCenterSlide() {
  if (!categoryCarousel) return;
  const selected = categoryCarousel.selectedScrollSnap();
  categoryCarousel.slideNodes().forEach((slide, index) => slide.classList.toggle("is-center", index === selected));
}

function startCategoryAutoplay(viewport) {
  stopCategoryAutoplay();
  if (prefersReducedMotion()) return;
  categoryAutoplay = window.setInterval(() => {
    const band = document.getElementById("category-band");
    if (!categoryCarousel || document.hidden || band?.hidden || viewport.contains(document.activeElement)) return;
    categoryCarousel.scrollNext();
  }, 2800);
  viewport.addEventListener("pointerdown", stopCategoryAutoplay, { once: true });
}

function startCategoryGlow(list, viewport) {
  stopCategoryAutoplay();
  if (prefersReducedMotion() || !list || !viewport) return;
  let lit = null;
  categoryAutoplay = window.setInterval(() => {
    const band = document.getElementById("category-band");
    if (document.hidden || band?.hidden || band?.matches(":hover") || viewport.contains(document.activeElement)) return;
    const box = viewport.getBoundingClientRect();
    const visible = [...list.querySelectorAll(".cat-slide")].filter((slide) => {
      const rect = slide.getBoundingClientRect();
      return slide !== lit && rect.width > 0 && rect.left >= box.left - 1 && rect.right <= box.right + 1;
    });
    if (!visible.length) return;
    lit?.classList.remove("is-lit");
    lit = visible[Math.floor(Math.random() * visible.length)];
    lit.classList.add("is-lit");
  }, 2200);
}

function categoriesFit(list, viewport, count) {
  const slide = list.querySelector(".cat-slide");
  const width = viewport.getBoundingClientRect().width;
  return Boolean(slide && width) && slide.getBoundingClientRect().width * count <= width + 1;
}

window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    const band = document.getElementById("category-band");
    if (!band || band.hidden || categoryFits === null) return;
    const list = document.getElementById("category-nav");
    const viewport = document.getElementById("category-viewport");
    if (categoriesFit(list, viewport, categoryCount) !== categoryFits || mobileCategories.matches !== categoryMobile) renderCategoryNav(categoryActive);
  }, 150);
});

export function renderCategoryNav(activeSlug) {
  const list = document.getElementById("category-nav");
  const viewport = document.getElementById("category-viewport");
  const band = document.getElementById("category-band");
  const items = isSingleSupplier()
    ? supplierCategories().map((category) => ({ name: category.name, href: `#/c/${category.slug}` }))
    : featuredGroups();
  categoryActive = activeSlug;
  categoryCount = items.length;
  const markup = (copies) => Array.from({ length: copies }, (_, copy) => items
    .map((item) => {
      const current = copy === 0 && activeSlug && item.href === `#/c/${activeSlug}` ? ' aria-current="page"' : "";
      const clone = copy === 0 ? "" : ' tabindex="-1" aria-hidden="true"';
      const icon = getTheme().featured === "v2" && item.icon;
      const thumb = icon
        ? `<span class="thumb has-photo is-icon"><img src="${esc(item.icon)}" alt="" decoding="async"></span>`
        : item.image
        ? `<span class="thumb has-photo"><img src="${esc(item.image)}" alt="" decoding="async"></span>`
        : `<span class="thumb"></span>`;
      return `<li class="cat-slide"><a class="cat-link" href="${esc(item.href)}"${current}${clone}>${thumb}<span>${esc(item.name)}</span></a></li>`;
    })
    .join("")).join("");
  stopCategoryAutoplay();
  if (categoryCarousel) {
    categoryCarousel.destroy();
    categoryCarousel = null;
  }
  categoryMobile = mobileCategories.matches;
  band?.classList.toggle("is-auto", categoryMobile);
  list.innerHTML = markup(1);
  categoryFits = viewport ? categoriesFit(list, viewport, items.length) : null;
  band?.classList.toggle("is-static", Boolean(categoryFits));
  if (!categoryMobile) startCategoryGlow(list, viewport);
  if (categoryFits) return;
  list.innerHTML = markup(4);
  const Embla = window.EmblaCarousel;
  if (!Embla || !viewport) return;
  categoryCarousel = Embla(viewport, {
    loop: true,
    direction: "rtl",
    align: categoryMobile ? "center" : "start",
    containScroll: false,
    dragFree: false,
    duration: prefersReducedMotion() ? 0 : categoryMobile ? 32 : 25,
  });
  document.getElementById("cat-prev").disabled = false;
  document.getElementById("cat-next").disabled = false;
  if (!categoryMobile) return;
  categoryCarousel.on("select", markCenterSlide).on("reInit", markCenterSlide);
  markCenterSlide();
  startCategoryAutoplay(viewport);
}

function setActiveOption(options, index) {
  const input = document.getElementById("search-input");
  options.forEach((option, item) => option.setAttribute("aria-selected", String(item === index)));
  const active = options[index];
  if (active) {
    input.setAttribute("aria-activedescendant", active.id);
    active.scrollIntoView({ block: "nearest" });
  } else {
    input.removeAttribute("aria-activedescendant");
  }
}

function setSuggestOpen(open) {
  const suggest = document.getElementById("suggest");
  const input = document.getElementById("search-input");
  suggest.classList.toggle("hidden", !open);
  input.setAttribute("aria-expanded", String(open));
  if (!open) input.removeAttribute("aria-activedescendant");
}

export function closePanels() {
  setSuggestOpen(false);
  document.getElementById("mobile-menu").classList.remove("is-open");
  document.getElementById("menu-open").setAttribute("aria-expanded", "false");
  document.documentElement.classList.remove("is-menu-cover");
  closeMega();
}
