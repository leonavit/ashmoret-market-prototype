import { legalSlugs } from "./screens/legal.js";

export function parseHash() {
  const hash = location.hash.replace(/^#/, "") || "/";
  const qIndex = hash.indexOf("?");
  const path = qIndex === -1 ? hash : hash.slice(0, qIndex);
  const params = new URLSearchParams(qIndex === -1 ? "" : hash.slice(qIndex + 1));
  const query = Object.fromEntries(params.entries());
  const parts = path.split("/").filter(Boolean);

  if (!parts.length) return { name: "home", query };
  if (parts[0] === "market") return { name: "market", query };
  if (parts[0] === "cart") return { name: "cart", query };
  if (parts[0] === "checkout") return { name: "checkout", query };
  if (parts[0] === "search") return { name: "search", query };
  if (parts[0] === "c" && parts[1]) return { name: "category", slug: decodeURIComponent(parts[1]), query };
  if (parts[0] === "d" && parts[1]) return { name: "department", id: decodeURIComponent(parts[1]), query };
  if (parts[0] === "m" && parts[1]) return { name: "manufacturer", slug: decodeURIComponent(parts[1]), query };
  if (parts[0] === "p" && parts[1]) return { name: "product", id: decodeURIComponent(parts[1]), query };
  if (parts[0] === "order" && parts[1]) return { name: "order", id: decodeURIComponent(parts[1]), query };
  if (parts[0] === "login") return { name: "login", query };
  if (parts[0] === "contact") return { name: "contact", query };
  if (legalSlugs.includes(parts[0])) return { name: "legal", slug: parts[0], query };
  if (parts[0] === "account" && parts[1] === "details") return { name: "account-details", query };
  if (parts[0] === "account") return { name: "account", query };
  if (parts[0] === "orders" && parts[1]) return { name: "account-order", id: decodeURIComponent(parts[1]), query };
  if (parts[0] === "orders") return { name: "orders", query };
  return { name: "home", query };
}

const privateNames = new Set(["account", "account-details", "orders", "account-order"]);

export function isPrivateRoute(name) {
  return privateNames.has(name);
}

export function safeNext(value) {
  if (!value || /[?#]/.test(value)) return "";
  const path = value.startsWith("/") ? value : `/${value}`;
  if (/^\/account(\/details)?$/.test(path)) return `#${path}`;
  if (/^\/orders(\/[A-Za-z0-9-]+)?$/.test(path)) return `#${path}`;
  return "";
}

export function pathFor(route) {
  if (route.name === "home") return "/";
  if (route.name === "category") return `/c/${encodeURIComponent(route.slug)}`;
  if (route.name === "department") return `/d/${encodeURIComponent(route.id)}`;
  if (route.name === "manufacturer") return `/m/${encodeURIComponent(route.slug)}`;
  if (route.name === "product") return `/p/${encodeURIComponent(route.id)}`;
  if (route.name === "order") return `/order/${encodeURIComponent(route.id)}`;
  if (route.name === "account-order") return `/orders/${encodeURIComponent(route.id)}`;
  if (route.name === "account-details") return "/account/details";
  if (route.name === "legal") return `/${route.slug || "terms"}`;
  if (route.name === "reserved") return `/${route.page}`;
  if (route.name === "market") return "/market";
  return `/${route.name}`;
}
