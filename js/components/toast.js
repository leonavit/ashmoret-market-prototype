import { esc } from "../lib/format.js";
import { prefersReducedMotion } from "../lib/format.js";

export function showToast(message, href) {
  const region = document.getElementById("toast");
  const item = document.createElement("div");
  item.className = "toast pointer-events-auto";
  item.innerHTML = `<p class="font-semibold">${esc(message)}</p>${
    href ? `<a class="mt-1 inline-block text-sm font-bold underline underline-offset-2" href="${esc(href)}">לסל הקניות</a>` : ""
  }`;
  region.appendChild(item);
  const gsap = window.gsap;
  if (gsap && !prefersReducedMotion()) {
    gsap.fromTo(item, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.35, ease: "power2.out" });
  }
  window.setTimeout(() => {
    item.remove();
  }, 3200);
}

function titleHtml(message, highlight) {
  const text = esc(message);
  if (!highlight) return text;
  const name = esc(highlight);
  return text.replace(name, `<strong class="font-extrabold">${name}</strong>`);
}

function confirmWithin(container, message, highlight) {
  container.querySelector(".inline-confirm")?.remove();
  const layer = document.createElement("div");
  layer.className = "inline-confirm";
  layer.setAttribute("role", "alertdialog");
  layer.setAttribute("aria-modal", "true");
  layer.setAttribute("aria-labelledby", "inline-confirm-title");
  layer.innerHTML = `<div class="inline-confirm-card">
    <h2 id="inline-confirm-title" class="text-lg font-normal">${titleHtml(message, highlight)}</h2>
    <div class="inline-confirm-actions">
      <button type="button" class="btn" data-confirm="yes">הסרה</button>
      <button type="button" class="btn btn-line" data-confirm="cancel">ביטול</button>
    </div>
  </div>`;
  container.appendChild(layer);
  const buttons = [...layer.querySelectorAll("[data-confirm]")];
  buttons[0].focus();
  return new Promise((resolve) => {
    const done = (answer) => {
      layer.remove();
      resolve(answer);
    };
    layer.addEventListener("click", (event) => {
      const button = event.target.closest("[data-confirm]");
      if (button) done(button.dataset.confirm === "yes");
      else if (event.target === layer) done(false);
    });
    layer.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        done(false);
      } else if (event.key === "Tab") {
        event.preventDefault();
        const next = buttons[(buttons.indexOf(document.activeElement) + 1) % buttons.length];
        next.focus();
      }
    });
  });
}

export function confirmAction(message, { within, highlight } = {}) {
  if (within) return confirmWithin(within, message, highlight);
  const root = document.getElementById("modal-root");
  root.innerHTML = `<dialog class="confirm-dialog" aria-labelledby="confirm-title">
    <h2 id="confirm-title" class="text-lg font-normal">${titleHtml(message, highlight)}</h2>
    <form method="dialog" class="inline-confirm-actions mt-5">
      <button class="btn" value="yes">הסרה</button>
      <button class="btn btn-line" value="cancel">ביטול</button>
    </form>
  </dialog>`;
  const dialog = root.querySelector("dialog");
  dialog.showModal();
  return new Promise((resolve) => {
    dialog.addEventListener("close", () => {
      resolve(dialog.returnValue === "yes");
      root.innerHTML = "";
    }, { once: true });
  });
}
