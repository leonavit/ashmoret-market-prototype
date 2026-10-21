export function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

export function money(amount) {
  const value = Number(amount).toFixed(2);
  return `<span dir="ltr">₪${value}</span>`;
}

export function moneyText(amount) {
  return `₪${Number(amount).toFixed(2)}`;
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
