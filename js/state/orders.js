const KEY = "ashmoret-orders";

function load() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function saveOrder(order) {
  const all = load();
  all.unshift(order);
  localStorage.setItem(KEY, JSON.stringify(all.slice(0, 20)));
}

export function getOrder(id) {
  return load().find((order) => order.id === id) || null;
}

export function createOrderId() {
  return `AM-${Math.floor(1000 + Math.random() * 9000)}`;
}
