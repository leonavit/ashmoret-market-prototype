import { categories } from "../data/catalog.js";
import { searchProducts } from "../data/catalog.js";
import { countItems, subscribe } from "../state/cart.js";
import { esc } from "../lib/format.js";
import { prefersReducedMotion } from "../lib/format.js";
import { closeMega, mountMega } from "./mega-menu.js";
import { isPrivateRoute, parseHash } from "../router.js";
import { getSession, logout } from "../state/session.js";

let bound = false;

export function bindShell(navigate) {
  if (bound) return;
  bound = true;

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
    suggest.classList.add("hidden");
    const q = input.value.trim();
    navigate(q ? `#/search?q=${encodeURIComponent(q)}` : "#/search");
  });

  input.addEventListener("input", () => {
    const matches = searchProducts(input.value).slice(0, 6);
    if (!input.value.trim() || !matches.length) {
      suggest.classList.add("hidden");
      suggest.innerHTML = "";
      return;
    }
    suggest.innerHTML = matches
      .map((product) => `<a role="option" href="#/p/${esc(product.id)}"><span class="font-semibold">${esc(product.name)}</span><span class="text-sm text-muted">${esc(product.weight)}</span></a>`)
      .join("");
    suggest.classList.remove("hidden");
  });

  document.addEventListener("click", (event) => {
    if (!slot.contains(event.target)) suggest.classList.add("hidden");
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") suggest.classList.add("hidden");
  });

  menuOpen.addEventListener("click", () => toggleMenu());

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) toggleMenu(false);
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
    const open = typeof force === "boolean" ? force : !menu.classList.contains("is-open");
    menu.classList.toggle("is-open", open);
    menuOpen.setAttribute("aria-expanded", String(open));
    const gsap = window.gsap;
    if (gsap && !prefersReducedMotion()) {
      gsap.fromTo(menu, { y: -8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.28, ease: "power2.out" });
    }
  }
}

const personIcon = `<svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="3.2"></circle><path d="M5 19.2c1.4-3 3.8-4.4 7-4.4s5.6 1.4 7 4.4"></path></svg>`;

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

export function renderCategoryNav(activeSlug) {
  const list = document.getElementById("category-nav");
  const viewport = document.getElementById("category-viewport");
  const copies = 4;
  list.innerHTML = Array.from({ length: copies }, (_, copy) => categories
    .map((category) => {
      const current = copy === 0 && category.slug === activeSlug ? ' aria-current="page"' : "";
      const clone = copy === 0 ? "" : ' tabindex="-1" aria-hidden="true"';
      return `<li class="cat-slide"><a class="cat-link" href="#/c/${esc(category.slug)}"${current}${clone}><span class="thumb"></span><span>${esc(category.name)}</span></a></li>`;
    })
    .join("")).join("");
  if (categoryCarousel) {
    categoryCarousel.destroy();
    categoryCarousel = null;
  }
  const Embla = window.EmblaCarousel;
  if (!Embla || !viewport) return;
  categoryCarousel = Embla(viewport, {
    loop: true,
    direction: "rtl",
    align: "start",
    containScroll: false,
    dragFree: false,
    duration: prefersReducedMotion() ? 0 : 25,
  });
  document.getElementById("cat-prev").disabled = false;
  document.getElementById("cat-next").disabled = false;
}

export function closePanels() {
  document.getElementById("suggest").classList.add("hidden");
  document.getElementById("mobile-menu").classList.remove("is-open");
  document.getElementById("menu-open").setAttribute("aria-expanded", "false");
  closeMega();
}
