import { esc } from "../lib/format.js";
import { isPhotoSeen } from "./photo-reveal.js";

export function productPhoto(product) {
  return product?.image || null;
}

export function photoImg(product, { alt = "", eager = false } = {}) {
  const src = productPhoto(product);
  if (!src) return "";
  const attrs = `src="${esc(src)}" alt="${esc(alt)}" ${eager ? "" : `loading="lazy" `}decoding="async"`;
  if (isPhotoSeen(src)) return `<img data-photo class="is-loaded" ${attrs}>`;
  return `<span class="photo-skeleton" aria-hidden="true"></span><img data-photo ${attrs}>`;
}
