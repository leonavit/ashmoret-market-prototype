import { prefersReducedMotion } from "../lib/format.js";

let tweens = [];

const rand = (min, max) => min + Math.random() * (max - min);

export function mountParticleField(root) {
  tweens.forEach((tween) => tween.kill());
  tweens = [];
  const hero = root.querySelector(".listing-hero");
  if (!hero) return;
  const field = document.createElement("div");
  field.className = "particle-field";
  field.setAttribute("aria-hidden", "true");
  const count = window.matchMedia("(max-width: 767px)").matches ? 16 : 30;
  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement("span");
    const size = rand(4, 14);
    dot.className = "particle";
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${rand(0, 100)}%`;
    dot.style.top = `${rand(35, 100)}%`;
    field.append(dot);
  }
  hero.prepend(field);
  const gsap = window.gsap;
  if (!gsap || prefersReducedMotion()) return;
  field.querySelectorAll(".particle").forEach((dot) => {
    gsap.set(dot, { opacity: rand(0.15, 0.35) });
    tweens.push(gsap.to(dot, {
      y: gsap.utils.random(-150, -50),
      x: gsap.utils.random(-30, 30),
      opacity: 0,
      duration: gsap.utils.random(3, 6),
      delay: rand(0, 3),
      repeat: -1,
    }));
  });
}
