import { esc, money } from "../lib/format.js";
import { photoImg, productPhoto } from "./product-photo.js";

export function itemCountLabel(items) {
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  return count === 1 ? "פריט אחד" : `${count} פריטים`;
}

export function orderLines(items, { scroll = false } = {}) {
  return `<ul class="order-lines${scroll ? " is-scroll" : ""}">${items.map((item) => `<li class="order-line">
      <span class="order-line-thumb${productPhoto(item.product) ? " has-photo" : ""}" aria-hidden="true">${photoImg(item.product)}</span>
      <div class="min-w-0">
        <p class="order-line-name">${esc(item.name)}</p>
        <p class="order-line-meta">${item.weight ? `${esc(item.weight)} · ` : ""}${item.qty} יח׳</p>
      </div>
      <p class="order-line-total">${money(item.total)}</p>
    </li>`).join("")}</ul>`;
}
