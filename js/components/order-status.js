import { esc } from "../lib/format.js";

const icon = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const steps = [
  ["created", "הזמנה נוצרה", icon(`<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"></path><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"></path><path d="m7.8 5.2 8.5 4.6"></path>`)],
  ["transit", "בדרך", icon(`<path d="M4 9h9v9H4z"></path><path d="M7.5 9v3l1-.7 1 .7V9"></path><path d="M15 8h5M17.5 5.5 20 8l-2.5 2.5"></path><path d="M15 15h5M17.5 12.5 20 15l-2.5 2.5"></path>`)],
  ["out", "יצאה למשלוח", icon(`<path d="M2 6.5h11.5v9.5H2z"></path><path d="M13.5 9.5h4.2l3.3 3.6v2.9h-7.5"></path><circle cx="6" cy="17.5" r="1.8"></circle><circle cx="17" cy="17.5" r="1.8"></circle>`)],
  ["delivered", "נמסרה", icon(`<path d="M3.5 11 12 4l8.5 7"></path><path d="M5.5 9.5V20h13V9.5"></path><path d="m9 14.5 2 2 4-4"></path>`)],
];

function day(value) {
  return new Date(value).toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export function orderStatus(order) {
  const timeline = order.timeline || { created: order.createdAt };
  const cancelled = Boolean(timeline.cancelled);
  const reached = steps.filter(([key]) => timeline[key]).length;
  const current = cancelled ? -1 : reached - 1;
  const items = steps.map(([key, label, svg], index) => {
    const state = index < reached ? (index === current && key !== "delivered" ? "current" : "done") : "todo";
    return `<li class="order-step is-${state}"${index === current ? ' aria-current="step"' : ""}>
      <span class="order-step-icon">${svg}</span>
      <span class="order-step-label">${label}</span>
      <span class="order-step-date">${timeline[key] ? esc(day(timeline[key])) : ""}</span>
    </li>`;
  }).join("");
  const summary = cancelled
    ? `ההזמנה בוטלה ב־${esc(day(timeline.cancelled))}`
    : timeline.delivered
      ? `ההזמנה הושלמה. נמסרה ב־${esc(day(timeline.delivered))}`
      : `סטטוס נוכחי: ${steps[current][1]}`;
  return `<div class="order-status${cancelled ? " is-cancelled" : ""}">
    <p class="order-status-summary">${summary}</p>
    <ol class="order-steps" aria-label="סטטוס ההזמנה ${esc(order.id)}">${items}</ol>
  </div>`;
}
