import { prefersReducedMotion } from "./lib/format.js";

export function playHero(root) {
  const gsap = window.gsap;
  const copy = root.querySelector("[data-hero-copy]");
  if (!gsap || !copy || prefersReducedMotion()) return;
  gsap.fromTo(copy, { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" });
}

export function pulseAdd(button) {
  const gsap = window.gsap;
  if (!gsap || !button || prefersReducedMotion()) return;
  gsap.fromTo(button, { scale: 0.96 }, { scale: 1, duration: 0.28, ease: "back.out(2)" });
}
