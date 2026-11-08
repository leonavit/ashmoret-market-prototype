import lottie from "lottie-web/build/player/lottie_light.min.js";
import truckDelivery from "../../assets/animations/truck-delivery.json";
import infoCircle from "../../assets/animations/info-circle.json";

const animations = { "truck-delivery": truckDelivery, "info-circle": infoCircle };
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function mountIcon(icon) {
  const animationData = animations[icon.dataset.lottie];
  if (!animationData) return;
  const loop = icon.dataset.lottiePlay === "loop";
  const box = document.createElement("span");
  box.className = `${icon.getAttribute("class")} is-lottie`;
  box.setAttribute("aria-hidden", "true");
  icon.replaceWith(box);
  const animation = lottie.loadAnimation({
    container: box,
    renderer: "svg",
    loop,
    autoplay: loop && !reduceMotion.matches,
    animationData: structuredClone(animationData),
  });
  if (loop) return;
  const play = () => {
    if (!reduceMotion.matches && animation.isPaused) animation.goToAndPlay(0, true);
  };
  const trigger = box.closest("button, a") || box;
  trigger.addEventListener("pointerenter", play);
  trigger.addEventListener("focus", play);
}

export function mountTopbarIcons() {
  document.querySelectorAll("[data-lottie]").forEach(mountIcon);
}
