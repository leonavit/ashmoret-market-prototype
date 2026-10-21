import { isPrivateRoute, parseHash, pathFor, safeNext } from "./router.js";
import { renderHome, setHeroTop } from "./screens/home.js";
import { renderMarket } from "./screens/market.js";
import { renderCategory, renderDepartment, renderManufacturer, renderSearch } from "./screens/listing.js";
import { renderProduct } from "./screens/product.js";
import { renderCart } from "./screens/cart.js";
import { renderCheckout, validateCheckout } from "./screens/checkout.js";
import { renderConfirmation } from "./screens/confirmation.js";
import { bindLogin, openAuth } from "./screens/login.js";
import { renderContact, validateContact } from "./screens/contact.js";
import { legalTitle, renderLegal } from "./screens/legal.js";
import { bindAccount, renderAccount, renderAccountDetails, renderOrderDetail, renderOrders } from "./screens/account.js";
import { bindShell, closePanels, renderCategoryNav, setCategoryBand, updateAccountSlot, updateCartBadge } from "./components/shell.js";
import { mountCartDock, updateCartDock } from "./components/cart-dock.js";
import { bindServiceDialogs } from "./components/service-dialogs.js";
import { bindThemeOptions, getTheme } from "./components/theme-options.js";
import { setHeroSlider } from "./components/hero-slider.js";
import { mountPromoCarousels } from "./components/promo-carousel.js";
import { mountCarousels } from "./components/carousel.js";
import { mountCatalog } from "./components/catalog-rail.js";
import { openProductPopup } from "./components/product-popup.js";
import { mountProductGalleries } from "./components/product-view.js";
import { confirmAction, showToast } from "./components/toast.js";
import { playHero, pulseAdd } from "./motion.js";
import { addItem, clearCart, getCart, removeItem, setQty, subscribe } from "./state/cart.js";
import { createOrderId, saveOrder } from "./state/orders.js";
import { getSession, subscribeSession, takeExpiredNotice } from "./state/session.js";
import { deliveryFee, getCommerce } from "./data/commerce.js";
import { getProduct } from "./data/catalog.js";
import { subtotal } from "./state/cart.js";

const app = document.querySelector("#app");
let checkoutDraft = null;
let contactDraft = null;

function navigate(hash) {
  if (location.hash === hash) render();
  else location.hash = hash;
}

function redirectAuth(route) {
  const session = getSession();
  if (route.name === "login") {
    if (session) {
      const dest = safeNext(route.query.next) || "#/account";
      if (location.hash !== dest) {
        location.hash = dest;
        return true;
      }
      return false;
    }
    openAuth({
      next: route.query.next || "",
      expired: route.query.expired === "1" || takeExpiredNotice(),
    });
    if (location.hash !== "#/") {
      location.hash = "#/";
      return true;
    }
    return false;
  }
  if (!session && (route.name === "checkout" || isPrivateRoute(route.name))) {
    const next = route.name === "checkout"
      ? "/checkout"
      : location.hash.replace(/^#/, "").split("?")[0];
    openAuth({ next, expired: takeExpiredNotice() });
    const back = route.name === "checkout" ? "#/cart" : "#/";
    if (location.hash !== back) {
      location.hash = back;
      return true;
    }
  }
  return false;
}

function render({ focus = true, scrollTop = false } = {}) {
  const productPop = document.getElementById("product-pop");
  if (productPop?.open) productPop.close();
  const route = parseHash();
  if (redirectAuth(route)) return;
  if (route.name !== "checkout") checkoutDraft = null;
  if (route.name !== "contact") contactDraft = null;
  app.innerHTML = view(route);
  document.title = titleFor(route);
  setCategoryBand(route.name === "home");
  setHeroSlider(route.name === "home" && getTheme().hero === "v2");
  setHeroTop(route.name === "home" && getTheme().hero === "v3");
  if (route.name === "home") renderCategoryNav("");
  closePanels();
  mountCarousels(app);
  mountPromoCarousels(app, document.getElementById("hero-top"));
  mountCatalog(app);
  mountProductGalleries(app);
  updateAccountSlot();
  updateCartDock(route.name);
  playHero(getTheme().hero === "v3" ? document.getElementById("hero-top") : app);
  if (scrollTop) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  const input = document.getElementById("search-input");
  if (route.name === "search" && document.activeElement !== input) input.value = route.query.q || "";
  if (!focus || document.getElementById("auth-dialog")?.open) return;
  const heading = app.querySelector("h1");
  if (heading) heading.setAttribute("tabindex", "-1");
  (heading || app).focus({ preventScroll: true });
}

function view(route) {
  if (route.name === "home") return renderHome();
  if (route.name === "market") return renderMarket();
  if (route.name === "category") return renderCategory(route.slug, route.query);
  if (route.name === "department") return renderDepartment(route.id, route.query);
  if (route.name === "manufacturer") return renderManufacturer(route.slug, route.query);
  if (route.name === "product") return renderProduct(route.id);
  if (route.name === "search") return renderSearch(route.query);
  if (route.name === "cart") return renderCart();
  if (route.name === "checkout") return renderCheckout(checkoutDraft?.errors, checkoutDraft?.values);
  if (route.name === "order") return renderConfirmation(route.id);
  if (route.name === "account") return renderAccount();
  if (route.name === "account-details") return renderAccountDetails();
  if (route.name === "orders") return renderOrders();
  if (route.name === "account-order") return renderOrderDetail(route.id);
  if (route.name === "contact") return renderContact(contactDraft || {});
  if (route.name === "legal") return renderLegal(route.slug);
  return renderHome();
}

function titleFor(route) {
  const suffix = "אשמורת MARKET";
  if (route.name === "market") return `כל היצרנים · ${suffix}`;
  if (route.name === "category") return `קטגוריה · ${suffix}`;
  if (route.name === "department") return `מחלקה · ${suffix}`;
  if (route.name === "manufacturer") return `יצרן · ${suffix}`;
  if (route.name === "product") return `מוצר · ${suffix}`;
  if (route.name === "search") return `חיפוש · ${suffix}`;
  if (route.name === "cart") return `סל הקניות · ${suffix}`;
  if (route.name === "checkout") return `תשלום · ${suffix}`;
  if (route.name === "order") return `אישור הזמנה · ${suffix}`;
  if (route.name === "account" || route.name === "account-details") return `האזור האישי · ${suffix}`;
  if (route.name === "orders" || route.name === "account-order") return `הזמנות · ${suffix}`;
  if (route.name === "contact") return `יצירת קשר · ${suffix}`;
  if (route.name === "legal") return `${legalTitle(route.slug)} · ${suffix}`;
  return suffix;
}

document.addEventListener("click", async (event) => {
  const popLink = event.target.closest("[data-product-pop]");
  if (popLink && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    openProductPopup(popLink.dataset.productPop);
    return;
  }

  const showAll = event.target.closest("[data-show-all]");
  if (showAll) {
    const route = parseHash();
    const params = new URLSearchParams(route.query);
    params.set("all", "1");
    navigate(`#${pathFor(route)}?${params.toString()}`);
    return;
  }

  const qtyBtn = event.target.closest("[data-qty]");
  if (qtyBtn) {
    const input = qtyBtn.closest("[data-buy]")?.querySelector("[data-qty-input]");
    if (!input) return;
    const next = Math.max(1, Math.min(99, Number(input.value || 1) + Number(qtyBtn.dataset.qty)));
    input.value = String(next);
    return;
  }

  const step = event.target.closest("[data-cart-step]");
  if (step) {
    const item = getCart().items.find((row) => row.id === step.dataset.id);
    if (item) setQty(item.id, item.qty + Number(step.dataset.cartStep));
    return;
  }

  const remove = event.target.closest("[data-remove]");
  if (remove) {
    const product = getProduct(remove.dataset.remove);
    const yes = await confirmAction(product ? `להסיר את ${product.name} מהסל?` : "להסיר את הפריט מהסל?");
    if (yes) removeItem(remove.dataset.remove);
    return;
  }

  const buyNow = event.target.closest("[data-buy-now]");
  if (buyNow) {
    const product = getProduct(buyNow.dataset.buyNow);
    if (!product || !getCommerce(product.id)) return;
    const input = buyNow.closest("[data-buy]")?.querySelector("[data-qty-input]");
    const qty = Math.max(1, Math.min(99, Number(input?.value || 1)));
    addItem(product.id, qty);
    updateCartBadge(true);
    navigate("#/checkout");
    return;
  }

  const add = event.target.closest("[data-add]");
  if (add) {
    const product = getProduct(add.dataset.add);
    if (!product || !getCommerce(product.id)) return;
    const input = add.closest("[data-buy]")?.querySelector("[data-qty-input]");
    const qty = Math.max(1, Math.min(99, Number(input?.value || 1)));
    addItem(product.id, qty);
    updateCartBadge(true);
    pulseAdd(add);
    showToast(`${product.name} נוסף לסל`, "#/cart");
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-qty-input]")) {
    const next = Math.max(1, Math.min(99, Number(event.target.value || 1)));
    event.target.value = String(Number.isFinite(next) ? next : 1);
    return;
  }
  const form = event.target.closest("[data-listing-form]");
  if (!form) return;
  const route = parseHash();
  const params = new URLSearchParams();
  if (route.query.q) params.set("q", route.query.q);
  ["category", "brand", "sort"].forEach((key) => {
    const value = String(new FormData(form).get(key) || "");
    if (value) params.set(key, value);
  });
  if (new FormData(form).get("offers")) params.set("offers", "1");
  const query = params.toString();
  navigate(`#${pathFor(route)}${query ? `?${query}` : ""}`);
});

document.addEventListener("submit", (event) => {
  if (event.target.matches("[data-listing-form]")) event.preventDefault();
  const form = event.target;
  if (form.id === "contact-form") {
    event.preventDefault();
    const { values, errors } = validateContact(form);
    if (Object.keys(errors).length) {
      contactDraft = { values, errors, sent: false };
      render();
      app.querySelector("[aria-invalid='true']")?.focus();
      return;
    }
    contactDraft = { sent: true };
    render();
    return;
  }
  if (form.id !== "checkout-form") return;
  event.preventDefault();
  const { data, errors } = validateCheckout(form);
  if (Object.keys(errors).length) {
    checkoutDraft = { errors, values: data };
    render();
    app.querySelector("[aria-invalid='true']")?.focus();
    return;
  }
  const items = getCart().items
    .map((item) => {
      const product = getProduct(item.id);
      const commerce = getCommerce(item.id);
      if (!product || !commerce) return null;
      return { id: product.id, name: product.name, qty: item.qty, price: commerce.price };
    })
    .filter(Boolean);
  const goods = subtotal();
  const order = {
    id: createOrderId(),
    createdAt: new Date().toISOString(),
    customer: {
      name: data.name.trim(),
      phone: data.phone,
      city: data.city.trim(),
      street: data.street.trim(),
      house: data.house.trim(),
      note: String(data.note || "").trim(),
    },
    items,
    subtotal: goods,
    delivery: deliveryFee,
    total: goods + deliveryFee,
  };
  saveOrder(order);
  clearCart();
  navigate(`#/order/${order.id}`);
});

bindShell(navigate);
bindThemeOptions({ heroChange: () => render({ focus: false }) });
bindLogin(navigate);
bindServiceDialogs();
bindAccount(render);
mountCartDock();
subscribeSession(() => updateAccountSlot());
subscribe(() => {
  updateCartBadge(true);
  updateCartDock();
  const route = parseHash();
  if (route.name === "cart") render({ focus: false });
});
window.addEventListener("hashchange", () => render({ scrollTop: true }));
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
render();
