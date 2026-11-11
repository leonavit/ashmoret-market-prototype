import lottie from "lottie-web/build/player/lottie_light.min.js";
import truckDelivery from "../../assets/animations/truck-delivery.json";
import customerService from "../../assets/animations/customer-service.json";
import calculatorCoins from "../../assets/animations/calculator-coins.json";
import boxMagnifier from "../../assets/animations/box-magnifier.json";
import boxDamage from "../../assets/animations/box-damage.json";
import boxRecycle from "../../assets/animations/box-recycle.json";
import chatQuestion from "../../assets/animations/chat-question.json";
import checkCircle from "../../assets/animations/check-circle.json";

const animations = {
  "truck-delivery": truckDelivery,
  "customer-service": customerService,
  "calculator-coins": calculatorCoins,
  "box-magnifier": boxMagnifier,
  "box-damage": boxDamage,
  "box-recycle": boxRecycle,
  "chat-question": chatQuestion,
  "check-circle": checkCircle,
};
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let live = [];

function mountIcon(icon) {
  const animationData = animations[icon.dataset.lottie];
  if (!animationData) return;
  const loop = icon.dataset.lottiePlay === "loop";
  const once = icon.dataset.lottiePlay === "once";
  const box = document.createElement("span");
  box.className = `${icon.getAttribute("class")} is-lottie`;
  box.setAttribute("aria-hidden", "true");
  icon.replaceWith(box);
  const animation = lottie.loadAnimation({
    container: box,
    renderer: "svg",
    loop,
    autoplay: (loop || once) && !reduceMotion.matches,
    animationData: structuredClone(animationData),
  });
  live.push(animation);
  if (loop || once) return;
  const play = () => {
    if (!reduceMotion.matches && animation.isPaused) animation.goToAndPlay(0, true);
  };
  const trigger = box.closest("button, a") || box;
  trigger.addEventListener("pointerenter", play);
  trigger.addEventListener("focus", play);
}

export function mountLottieIcons(root = document) {
  live = live.filter((animation) => {
    if (animation.wrapper?.isConnected) return true;
    animation.destroy();
    return false;
  });
  root.querySelectorAll("[data-lottie]").forEach(mountIcon);
}
