import { deliveryFee } from "../data/commerce.js";
import { esc, money } from "../lib/format.js";

const prevIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>`;
const nextIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;

const tones = ["#f3f3f3", "#e7e7e7", "#f7f7f7", "#dedede", "#ececec"];

function face(index) {
  return `<span class="product-thumb-face is-placeholder" style="background-color:${tones[index]}"></span>`;
}

export function productGallery(product, badge = "") {
  const thumbs = tones.map((_, index) => `<button type="button" class="product-thumb${index === 0 ? " is-selected" : ""}" data-gallery-index="${index}" aria-label="תמונה ${index + 1} מתוך ${tones.length}"${index === 0 ? ` aria-current="true"` : ""}>${face(index)}</button>`).join("");
  return `<div class="product-gallery" data-product-gallery data-active="0">
    <div class="product-stage">
      <button type="button" class="gallery-nav" data-gallery-step="-1" aria-label="התמונה הקודמת">${prevIcon}</button>
      <div class="product-frame" data-gallery-frame>${face(0)}</div>
      ${badge}
      <button type="button" class="gallery-nav is-next" data-gallery-step="1" aria-label="התמונה הבאה">${nextIcon}</button>
    </div>
    <div class="product-thumbs">${thumbs}</div>
    <p class="product-note">תמונת המוצר זמנית. אין צילום תואם בקובצי המקור.</p>
  </div>`;
}

export function productFolds(product, options = {}) {
  const descriptionOpen = options.openDescription === false ? "" : " open";
  const shipping = options.shipping === false
    ? ""
    : `<details class="product-fold">
      <summary>מחיר משלוח</summary>
      <div class="product-fold-body">
        <p>בהדגמה מתווסף דמי משלוח של ${money(deliveryFee)}. השירות הוא עד הבית, בלי חיוב אמיתי.</p>
      </div>
    </details>`;
  return `<div class="product-folds">
    <details class="product-fold"${descriptionOpen}>
      <summary>תיאור</summary>
      <div class="product-fold-body">
        <p>${esc(product.name)} מבית ${esc(product.brand)}, בקטגוריית ${esc(product.categoryName)}. אריזה של ${esc(product.weight)}, ${esc(String(product.unitsPerPack))} יחידות במארז.</p>
        ${product.manufacturerId === "tozeret" ? `<p><a href="#/m/tozeret">יצרן: תוצרת</a></p>` : ""}
      </div>
    </details>
    <details class="product-fold">
      <summary>מפרט</summary>
      <div class="product-fold-body">
        <dl class="product-specs">
          ${spec("מקט", product.id)}
          ${spec("משקל", product.weight)}
          ${spec("יח׳ במארז", String(product.unitsPerPack))}
          ${spec("ברקוד", product.barcode)}
          ${spec("מותג", product.brand)}
          ${spec("קטגוריה", product.categoryName)}
          ${spec("עמוד בקטלוג", String(product.catalogPage))}
        </dl>
      </div>
    </details>
    ${shipping}
  </div>`;
}

function spec(label, value) {
  return `<div><dt>${esc(label)}</dt><dd dir="auto">${esc(value)}</dd></div>`;
}

export function mountProductGalleries(root = document) {
  root.querySelectorAll("[data-product-gallery]").forEach((gallery) => {
    if (gallery.dataset.bound) return;
    gallery.dataset.bound = "1";
    const frame = gallery.querySelector("[data-gallery-frame]");
    const thumbs = [...gallery.querySelectorAll("[data-gallery-index]")];
    const apply = (index) => {
      const next = (index + thumbs.length) % thumbs.length;
      const faceNode = thumbs[next].querySelector(".product-thumb-face");
      frame.replaceChildren(faceNode.cloneNode(true));
      thumbs.forEach((thumb, item) => {
        const on = item === next;
        thumb.classList.toggle("is-selected", on);
        if (on) thumb.setAttribute("aria-current", "true");
        else thumb.removeAttribute("aria-current");
      });
      gallery.dataset.active = String(next);
    };
    gallery.addEventListener("click", (event) => {
      const thumb = event.target.closest("[data-gallery-index]");
      if (thumb && gallery.contains(thumb)) {
        apply(Number(thumb.dataset.galleryIndex));
        return;
      }
      const step = event.target.closest("[data-gallery-step]");
      if (step && gallery.contains(step)) {
        apply(Number(gallery.dataset.active || 0) + Number(step.dataset.galleryStep));
      }
    });
  });
}
