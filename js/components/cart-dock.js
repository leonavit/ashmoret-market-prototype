import { getProduct } from "../data/catalog.js";
import { deliveryFee, getCommerce } from "../data/commerce.js";
import { esc, money } from "../lib/format.js";
import { parseHash } from "../router.js";
import { countItems, getCart, lineTotal, subtotal } from "../state/cart.js";
import { photoImg, productPhoto } from "./product-photo.js";

const arrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>`;
const cartIcon = `<svg class="cart-dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 7h15l-1.6 8.2a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.5L5.2 4.8H3"></path><circle cx="9" cy="20" r="1.2" fill="currentColor"></circle><circle cx="18" cy="20" r="1.2" fill="currentColor"></circle></svg>`;
const trashIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16"></path><path d="M9 7V5h6v2"></path><path d="M7 7l1 13h8l1-13"></path><path d="M10 11v5M14 11v5"></path></svg>`;

let open = false;

function rows() {
  return getCart().items
    .map((item) => ({ ...item, product: getProduct(item.id), commerce: getCommerce(item.id) }))
    .filter((item) => item.product && item.commerce);
}

function hiddenFor(routeName) {
  return routeName === "checkout" || routeName === "order";
}

export function updateCartDock(routeName = parseHash().name) {
  const root = document.getElementById("cart-dock");
  if (!root) return;
  if (hiddenFor(routeName)) open = false;
  const items = rows();
  const count = countItems();
  const show = !hiddenFor(routeName);
  root.hidden = false;
  root.inert = !show;
  root.classList.toggle("is-away", !show);
  if (!open) root.querySelector(".cart-dock-body")?.remove();
  root.classList.toggle("is-open", open && show);
  if (!show && root.childElementCount) return;
  const goods = subtotal();
  const total = goods + (count ? deliveryFee : 0);
  const countLabel = count === 0 ? "הסל ריק" : count === 1 ? "פריט אחד" : `${count} פריטים`;
  const list = items.length
    ? `<ul class="cart-dock-list">${items.map((item) => `<li class="cart-dock-item">
        <a class="cart-dock-thumb${productPhoto(item.product) ? " has-photo" : ""}" href="#/p/${esc(item.product.id)}" tabindex="-1" aria-hidden="true">${photoImg(item.product)}</a>
        <div class="min-w-0">
          <a class="cart-dock-name" href="#/p/${esc(item.product.id)}">${esc(item.product.name)}</a>
          <p class="text-xs text-muted">${esc(item.product.weight)}</p>
          <div class="cart-dock-controls">
            <div class="cart-dock-qty">
              <button type="button" data-cart-step="-1" data-id="${esc(item.product.id)}" aria-label="הפחתת כמות">−</button>
              <span>${item.qty}</span>
              <button type="button" data-cart-step="1" data-id="${esc(item.product.id)}" aria-label="הגדלת כמות">+</button>
            </div>
            <p class="cart-dock-price">${money(lineTotal(item))}</p>
            <button type="button" class="cart-dock-remove" data-remove="${esc(item.product.id)}" aria-label="הסרה">${trashIcon}</button>
          </div>
        </div>
      </li>`).join("")}</ul>`
    : `<p class="cart-dock-empty">הסל ריק. אפשר להוסיף מוצרים מהקטלוג.</p>`;
  root.innerHTML = `<div class="cart-dock-bar">
      <button type="button" class="cart-dock-arrow" data-cart-toggle aria-expanded="${open}" aria-controls="cart-dock-body">
        ${arrow}
        <span class="sr-only">${open ? "סגירת הסל" : "פתיחת הסל"}</span>
      </button>
      <div class="min-w-0">
        <p class="cart-dock-title"><span class="cart-dock-mark">${cartIcon}${count ? `<span class="cart-dock-badge">${count}</span>` : ""}</span><span>הסל שלי</span></p>
        <p class="text-sm text-muted">${countLabel}</p>
      </div>
      ${count
        ? `<a class="cart-dock-pay" href="#/checkout"><span>לתשלום:</span><strong>${money(total)}</strong></a>`
        : `<span class="cart-dock-pay is-disabled" aria-disabled="true"><span>לתשלום:</span><strong>${money(0)}</strong></span>`}
    </div>
    ${open ? `<div id="cart-dock-body" class="cart-dock-body">
      ${list}
      <div class="cart-dock-foot">
        <dl>
          <div><dt>מוצרים</dt><dd>${money(goods)}</dd></div>
          <div><dt>מחיר משלוח</dt><dd>${count ? money(deliveryFee) : money(0)}</dd></div>
          <div class="is-total"><dt>לתשלום</dt><dd>${money(total)}</dd></div>
        </dl>
        ${count ? `<a class="btn" href="#/checkout">המשך לתשלום</a>` : `<a class="btn btn-line" href="#/">להמשך קנייה</a>`}
      </div>
    </div>` : ""}`;
  placeDock();
}

export function toggleCartDock(force) {
  const y = window.scrollY;
  open = typeof force === "boolean" ? force : !open;
  updateCartDock();
  if (open) document.querySelector(".cart-dock-arrow")?.focus({ preventScroll: true });
  if (window.scrollY !== y) window.scrollTo({ top: y, behavior: "instant" });
}

function placeDock() {
  const root = document.getElementById("cart-dock");
  if (!root || root.hidden) return;
  const rect = root.getBoundingClientRect();
  root.style.setProperty("--dock-fixed-top", `${Math.round(rect.bottom)}px`);
  root.style.setProperty("--dock-body-h", `${Math.round(Math.max(160, window.innerHeight - rect.bottom - 12))}px`);
}

export function mountCartDock() {
  const header = document.querySelector(".site-header");
  const sync = () => {
    if (header) document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
    placeDock();
  };
  if (header && "ResizeObserver" in window) new ResizeObserver(sync).observe(header);
  window.addEventListener("resize", sync);

  document.addEventListener("mousedown", (event) => {
    if (event.target.closest("[data-cart-toggle]")) event.preventDefault();
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-cart-toggle]")) {
      event.preventDefault();
      toggleCartDock();
      return;
    }
    const inside = event.target.closest?.("#cart-dock, #modal-root, #auth-dialog, #product-pop");
    if (open && event.target.isConnected && !inside) toggleCartDock(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && open) toggleCartDock(false);
  });
  updateCartDock();
  placeDock();
}
