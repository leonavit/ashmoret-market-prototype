import { deliveryFee } from "../data/commerce.js";
import { esc, money } from "../lib/format.js";
import { photoImg, productPhoto } from "./product-photo.js";

const prevIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>`;
const nextIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;

const tones = ["var(--color-fill)", "var(--color-surface)", "var(--color-paper)", "var(--color-line)", "var(--color-fill)"];

function face(index) {
  return `<span class="product-thumb-face is-placeholder" style="background-color:${tones[index]}"></span>`;
}

export function productGallery(product, badge = "") {
  if (productPhoto(product)) {
    return `<div class="product-gallery">
      <div class="product-stage">
        <div class="product-frame"><span class="product-thumb-face has-photo">${photoImg(product, { alt: product.name, eager: true })}</span></div>
        ${badge}
      </div>
    </div>`;
  }
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
      <summary>עלות משלוח</summary>
      <div class="product-fold-body">
        <p>בהדגמה מתווסף דמי משלוח של ${money(deliveryFee)}. השירות הוא עד הבית, בלי חיוב אמיתי.</p>
      </div>
    </details>`;
  return `<div class="product-folds">
    <details class="product-fold"${descriptionOpen}>
      <summary>תיאור</summary>
      <div class="product-fold-body">
        <p>${esc(product.name)} מבית ${esc(product.brand)}, בקטגוריית ${esc(product.categoryName)}. אריזה של ${esc(product.weight)}.</p>
        ${makerLines(product)}
      </div>
    </details>
    <details class="product-fold">
      <summary>מפרט</summary>
      <div class="product-fold-body">
        <dl class="product-specs">
          ${spec("מקט", product.id)}
          ${spec("משקל", product.weight)}
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

function makerLines(product) {
  if (product.manufacturerId !== "tozeret") return "";
  return `<p><a href="#/m/tozeret">יצרן: תוצרת</a></p>
      <p><strong>כשרות: בד״ץ בית יוסף</strong></p>`;
}

function spec(label, value) {
  return `<div><dt>${esc(label)}</dt><dd dir="auto">${esc(value)}</dd></div>`;
}

export function productBuy(product) {
  return `<div class="product-buy" data-buy>
    <div class="product-qty" dir="ltr">
      <button type="button" data-qty="-1" aria-label="הפחתת כמות">−</button>
      <input data-qty-input inputmode="numeric" maxlength="2" value="1" aria-label="כמות">
      <button type="button" data-qty="1" aria-label="הגדלת כמות">+</button>
    </div>
    <button type="button" class="product-add" data-add="${esc(product.id)}">הוספה לסל</button>
  </div>`;
}

export function productDescription(product) {
  return `<section class="product-description" aria-labelledby="product-description-title">
    <h2 id="product-description-title">תיאור</h2>
    <p>${esc(product.name)} מבית ${esc(product.brand)}, בקטגוריית ${esc(product.categoryName)}.</p>
  </section>`;
}

export function productTabs(product) {
  const tabs = [
    ["about", "על המוצר", `<dl class="product-specs">
        ${spec("מקט", product.id)}
        ${spec("משקל", product.weight)}
        ${spec("ברקוד", product.barcode)}
        ${spec("מותג", product.brand)}
        ${spec("קטגוריה", product.categoryName)}
        ${spec("עמוד בקטלוג", String(product.catalogPage))}
      </dl>
      ${makerLines(product)}`],
    ["service", "שירות ואחריות", `<div class="product-tab-cols">
        <div>
          <h3>שירות לקוחות</h3>
          <p>טלפון <a href="tel:097448038" dir="ltr">09-7448038</a> או <a href="https://wa.me/97230000000" target="_blank" rel="noopener noreferrer">ווטסאפ</a>.</p>
          <button type="button" class="product-tab-link" data-open-service>השארת פנייה</button>
        </div>
        <div>
          <h3>אחריות</h3>
          <p>תנאי האחריות למוצר יפורסמו בגרסה הפעילה.</p>
        </div>
      </div>`],
    ["delivery", "משלוח ואספקה", `<div class="product-tab-cols">
        <div>
          <h3>משלוח עד הבית</h3>
          <p>ההזמנה מגיעה עד הדלת. עלות משלוח ${money(deliveryFee)} להזמנה.</p>
          <button type="button" class="product-tab-link" data-open-delivery>בדיקת כתובת למשלוח</button>
        </div>
        <div>
          <h3>זמני אספקה</h3>
          <p>משלוחים החל ממחר משעה 8:00 עד 20:00 בערב.</p>
        </div>
      </div>`],
  ];
  return `<section class="product-tabs" data-product-tabs aria-label="פרטי המוצר">
    <div class="product-tablist" role="tablist" aria-label="פרטי המוצר">
      ${tabs.map(([id, label], index) => `<button type="button" role="tab" id="product-tab-${id}" aria-controls="product-panel-${id}" aria-selected="${index === 0}" tabindex="${index === 0 ? "0" : "-1"}" data-product-tab="${id}">${label}</button>`).join("")}
    </div>
    ${tabs.map(([id, label, body], index) => `<details class="product-tab${index === 0 ? " is-active" : ""}" data-product-panel="${id}"${index === 0 ? " open" : ""}>
      <summary>${label}</summary>
      <div class="product-tab-body" id="product-panel-${id}" role="tabpanel" aria-labelledby="product-tab-${id}">${body}</div>
    </details>`).join("")}
  </section>`;
}

export function mountProductTabs(root = document) {
  root.querySelectorAll("[data-product-tabs]").forEach((section) => {
    if (section.dataset.bound) return;
    section.dataset.bound = "1";
    const tabs = [...section.querySelectorAll("[data-product-tab]")];
    const select = (tab, focus = false) => {
      tabs.forEach((item) => {
        const on = item === tab;
        item.setAttribute("aria-selected", String(on));
        item.tabIndex = on ? 0 : -1;
        const panel = section.querySelector(`[data-product-panel="${item.dataset.productTab}"]`);
        panel.classList.toggle("is-active", on);
        if (on) panel.open = true;
      });
      if (focus) tab.focus();
    };
    section.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-product-tab]");
      if (tab) select(tab);
    });
    section.querySelector("[role=tablist]").addEventListener("keydown", (event) => {
      const index = tabs.indexOf(document.activeElement);
      if (index < 0) return;
      const step = { ArrowLeft: 1, ArrowRight: -1 }[event.key];
      if (step) {
        event.preventDefault();
        select(tabs[(index + step + tabs.length) % tabs.length], true);
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        select(event.key === "Home" ? tabs[0] : tabs[tabs.length - 1], true);
      }
    });
  });
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
