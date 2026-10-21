import { getCommerce } from "../data/commerce.js";

const KEY = "ashmoret-cart";
const listeners = new Set();

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
  write({ items: [] });
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
