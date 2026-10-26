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

export function confirmAction(message) {
  const root = document.getElementById("modal-root");
  root.innerHTML = `<dialog aria-labelledby="confirm-title">
    <h2 id="confirm-title" class="text-lg font-extrabold">${esc(message)}</h2>
    <form method="dialog" class="mt-5 flex gap-2">
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
