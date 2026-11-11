import { esc } from "../lib/format.js";

export function productPhoto(product) {
  return product?.image || null;
}

export function photoImg(product, { alt = "", eager = false } = {}) {
  const src = productPhoto(product);
  if (!src) return "";
  return `<span class="photo-skeleton" aria-hidden="true"></span><img data-photo src="${esc(src)}" alt="${esc(alt)}" ${eager ? "" : `loading="lazy" `}decoding="async">`;
}
