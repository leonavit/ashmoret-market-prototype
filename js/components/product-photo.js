import { esc } from "../lib/format.js";

export function productPhoto(product) {
  return product?.image || null;
}

export function photoImg(product, { alt = "", eager = false } = {}) {
  const src = productPhoto(product);
  if (!src) return "";
  return `<img src="${esc(src)}" alt="${esc(alt)}" ${eager ? "" : `loading="lazy" `}decoding="async">`;
}
