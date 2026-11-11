import { prefersReducedMotion } from "./lib/format.js";

export function playHero(root) {
  const gsap = window.gsap;
  const copy = root.querySelector("[data-hero-copy]");
  if (!gsap || !copy || prefersReducedMotion()) return;
  gsap.fromTo(copy, { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" });
}

export function revealLogo() {
  const root = document.documentElement;
  if (!root.classList.contains("is-logo-curtain")) return;
  const gsap = window.gsap;
  const link = document.querySelector(".header-logo");
  const img = link?.querySelector("img");
  if (!gsap || !img || prefersReducedMotion()) {
    root.classList.remove("is-logo-curtain");
    return;
  }
  const curtains = ["is-red", "is-ink"].map((tone) => {
    const curtain = document.createElement("span");
    curtain.className = `logo-curtain ${tone}`;
    curtain.setAttribute("aria-hidden", "true");
    link.append(curtain);
    return curtain;
  });
  gsap.timeline({ delay: 0.15, onComplete: () => curtains.forEach((curtain) => curtain.remove()) })
    .fromTo(curtains, { scaleX: 0, transformOrigin: "100% 50%" }, { scaleX: 1, duration: 0.45, ease: "power3.inOut", stagger: 0.08 })
    .add(() => root.classList.remove("is-logo-curtain"))
    .set(curtains, { transformOrigin: "0% 50%" })
    .to(curtains, { scaleX: 0, duration: 0.55, ease: "power3.inOut", stagger: { each: 0.08, from: "end" } })
    .fromTo(img, { x: 14 }, { x: 0, duration: 0.7, ease: "power3.out", clearProps: "transform" }, "<");
}

let shimmers = [];

export function shimmerButtons(root) {
  shimmers = shimmers.filter((tween) => {
    if (tween.targets()[0]?.isConnected) return true;
    tween.kill();
    return false;
  });
  const gsap = window.gsap;
  if (!gsap || prefersReducedMotion()) return;
  root.querySelectorAll(".promo-hero-cta, .hero-cta").forEach((button, index) => {
    if (button.classList.contains("has-shimmer")) return;
    button.classList.add("has-shimmer");
    shimmers.push(gsap.fromTo(button, { "--shimmer-x": "260%" }, {
      "--shimmer-x": "-130%",
      duration: 1.1,
      ease: "power2.inOut",
      repeat: -1,
      repeatDelay: 2.8,
      delay: 0.8 + index * 0.35,
    }));
  });
}

export function rollQty(el, direction) {
  if (!el || prefersReducedMotion()) return;
  el.classList.remove("is-rolling-up", "is-rolling-down");
  void el.offsetWidth;
  el.classList.add(direction > 0 ? "is-rolling-up" : "is-rolling-down");
  el.addEventListener("animationend", () => el.classList.remove("is-rolling-up", "is-rolling-down"), { once: true });
}

export function sparkAt(event, target) {
  if (prefersReducedMotion()) return;
  const rect = target.getBoundingClientRect();
  const fromPointer = event.detail > 0;
  const burst = document.createElement("span");
  burst.className = "click-spark";
  burst.setAttribute("aria-hidden", "true");
  const x = fromPointer ? event.clientX : rect.left + rect.width / 2;
  const y = fromPointer ? event.clientY : rect.top + rect.height / 2;
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;
  const rays = 8;
  for (let i = 0; i < rays; i += 1) {
    const ray = document.createElement("i");
    ray.style.setProperty("--spark-angle", `${(360 / rays) * i + Math.random() * 14 - 7}deg`);
    burst.appendChild(ray);
  }
  (target.closest("dialog[open]") || document.body).appendChild(burst);
  const placed = burst.getBoundingClientRect();
  if (Math.abs(placed.left - x) > 0.5 || Math.abs(placed.top - y) > 0.5) {
    burst.style.left = `${2 * x - placed.left}px`;
    burst.style.top = `${2 * y - placed.top}px`;
  }
  window.setTimeout(() => burst.remove(), 600);
}

export function pulseAdd(button) {
  const gsap = window.gsap;
  if (!gsap || !button || prefersReducedMotion()) return;
  gsap.fromTo(button, { scale: 0.96 }, { scale: 1, duration: 0.28, ease: "back.out(2)" });
}
