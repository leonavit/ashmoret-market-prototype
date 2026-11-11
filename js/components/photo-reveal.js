import { prefersReducedMotion } from "../lib/format.js";

const seen = new Set();

export function isPhotoSeen(src) {
  return seen.has(src);
}

function skeletonOf(img) {
  const prev = img.previousElementSibling;
  return prev?.matches(".photo-skeleton") ? prev : null;
}

function settle(img) {
  img.classList.add("is-loaded");
  skeletonOf(img)?.remove();
}

function reveal(img) {
  if (img.classList.contains("is-loaded")) return;
  const skeleton = skeletonOf(img);
  const gsap = window.gsap;
  seen.add(img.getAttribute("src"));
  if (!gsap || prefersReducedMotion() || !skeleton) {
    settle(img);
    return;
  }
  img.classList.add("is-loaded");
  gsap.timeline({ onComplete: () => skeleton.remove() })
    .to(skeleton, { opacity: 0, scale: 1.04, duration: 0.35, ease: "power1.out" }, 0)
    .fromTo(img,
      { opacity: 0, scale: 0.94, filter: "blur(8px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "power3.out", clearProps: "opacity,transform,filter" },
      0.05);
}

function settleCached(img) {
  if (img.classList.contains("is-loaded") || !img.complete || !img.naturalWidth) return;
  seen.add(img.getAttribute("src"));
  settle(img);
}

function scan(root) {
  if (root.matches?.("img[data-photo]")) settleCached(root);
  root.querySelectorAll?.("img[data-photo]").forEach(settleCached);
}

export function bindPhotoReveal() {
  const onLoad = (event) => {
    if (event.target instanceof HTMLImageElement && event.target.matches("[data-photo]")) reveal(event.target);
  };
  document.addEventListener("load", onLoad, true);
  document.addEventListener("error", (event) => {
    if (event.target instanceof HTMLImageElement && event.target.matches("[data-photo]")) settle(event.target);
  }, true);
  new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node.nodeType === 1) scan(node);
    }));
  }).observe(document.body, { childList: true, subtree: true });
  scan(document);
}
