import { deliveryFee, getCommerce } from "../data/commerce.js";

const KEY = "ashmoret-cart";
const COUPON_KEY = "ashmoret-coupon";
const coupons = {
  ASHMORET10: { rate: 0.1, label: "10% הנחה על המוצרים" },
};
const listeners = new Set();

function notify() {
  const state = read();
  listeners.forEach((listener) => listener(state));
}

function read() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) || '{"items":[]}');
    if (!Array.isArray(data.items)) return { items: [] };
    return {
      items: data.items
        .filter((item) => item && item.id && item.qty > 0)
        .map((item) => ({ id: item.id, qty: Number(item.qty) })),
    };
  } catch {
    return { items: [] };
  }
}

function write(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
  listeners.forEach((listener) => listener(state));
}

export function getCart() {
  return read();
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function addItem(id, qty = 1) {
  const state = read();
  const row = state.items.find((item) => item.id === id);
  if (row) row.qty += qty;
  else state.items.push({ id, qty });
  write(state);
}

export function setQty(id, qty) {
  const state = read();
  const row = state.items.find((item) => item.id === id);
  if (!row) return;
  row.qty = Math.max(1, Math.min(99, qty));
  write(state);
}

export function removeItem(id) {
  const state = read();
  state.items = state.items.filter((item) => item.id !== id);
  write(state);
}

export function clearCart() {
  localStorage.removeItem(COUPON_KEY);
  write({ items: [] });
}

export function getCoupon() {
  const code = localStorage.getItem(COUPON_KEY);
  return code && coupons[code] ? { code, ...coupons[code] } : null;
}

export function applyCoupon(input) {
  const code = String(input || "").trim().toUpperCase();
  if (!coupons[code]) return false;
  localStorage.setItem(COUPON_KEY, code);
  notify();
  return true;
}

export function removeCoupon() {
  localStorage.removeItem(COUPON_KEY);
  notify();
}

function roundMoney(amount) {
  return Math.round(amount * 100) / 100;
}

export function cartTotals(state = read()) {
  const goods = subtotal(state);
  const sale = state.items.reduce((sum, item) => {
    const commerce = getCommerce(item.id);
    return commerce?.compareAt ? sum + (commerce.compareAt - commerce.price) * item.qty : sum;
  }, 0);
  const coupon = state.items.length ? getCoupon() : null;
  const discount = coupon ? roundMoney(goods * coupon.rate) : 0;
  const delivery = state.items.length ? deliveryFee : 0;
  return {
    goods,
    coupon,
    discount,
    delivery,
    saved: roundMoney(sale + discount),
    total: roundMoney(goods - discount + delivery),
  };
}

export function countItems(state = read()) {
  return state.items.reduce((sum, item) => sum + item.qty, 0);
}

export function lineTotal(item) {
  const commerce = getCommerce(item.id);
  if (!commerce) return 0;
  return commerce.price * item.qty;
}

export function subtotal(state = read()) {
  return state.items.reduce((sum, item) => sum + lineTotal(item), 0);
}
