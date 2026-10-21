import { demoCustomer } from "../data/demo-account.js";

const SESSION_KEY = "ashmoret-session";
const PROFILE_KEY = "ashmoret-demo-profile";
const SESSION_MS = 30 * 60 * 1000;

export const DEMO_CODE = "123456";
export const DEMO_CUSTOMER_ID = demoCustomer.customerId;

let expiredNotice = false;
const listeners = new Set();

function readJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch {
    return null;
  }
}

function validSession(value) {
  return Boolean(
    value
    && value.loggedIn === true
    && typeof value.customerId === "string"
    && typeof value.displayName === "string"
    && typeof value.expiresAt === "number",
  );
}

export function getSession() {
  const value = readJson(SESSION_KEY);
  if (!validSession(value)) {
    if (value) localStorage.removeItem(SESSION_KEY);
    return null;
  }
  if (value.expiresAt <= Date.now()) {
    localStorage.removeItem(SESSION_KEY);
    expiredNotice = true;
    notify();
    return null;
  }
  return {
    customerId: value.customerId,
    displayName: value.displayName,
    loggedIn: true,
    expiresAt: value.expiresAt,
  };
}

export function takeExpiredNotice() {
  const value = expiredNotice;
  expiredNotice = false;
  return value;
}

export function getProfile() {
  const session = getSession();
  const stored = readJson(PROFILE_KEY);
  const profile = {
    customerId: demoCustomer.customerId,
    displayName: String(stored?.displayName || demoCustomer.displayName).trim() || demoCustomer.displayName,
    firstName: String(stored?.firstName || ""),
    lastName: String(stored?.lastName || ""),
    email: String(stored?.email || demoCustomer.email),
    idNumber: String(stored?.idNumber || ""),
    phone: prettyPhone(stored?.phone || demoCustomer.phone),
    city: String(stored?.city || demoCustomer.city),
    street: String(stored?.street || demoCustomer.street),
    house: String(stored?.house || demoCustomer.house),
    marketing: Boolean(stored?.marketing),
  };
  if (session?.displayName) profile.displayName = session.displayName;
  return profile;
}

export function saveProfile(next) {
  const previous = readJson(PROFILE_KEY) || {};
  const profile = {
    customerId: demoCustomer.customerId,
    displayName: String(next.displayName ?? previous.displayName ?? demoCustomer.displayName).trim(),
    firstName: String(next.firstName ?? previous.firstName ?? "").trim(),
    lastName: String(next.lastName ?? previous.lastName ?? "").trim(),
    email: String(next.email ?? previous.email ?? demoCustomer.email).trim(),
    idNumber: String(next.idNumber ?? previous.idNumber ?? "").replace(/\D/g, ""),
    phone: String(next.phone ?? previous.phone ?? demoCustomer.phone).replace(/[^\d]/g, ""),
    city: String(next.city ?? previous.city ?? demoCustomer.city).trim(),
    street: String(next.street ?? previous.street ?? demoCustomer.street).trim(),
    house: String(next.house ?? previous.house ?? demoCustomer.house).trim(),
    marketing: Boolean(next.marketing ?? previous.marketing),
  };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  const session = getSession();
  if (session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ ...session, displayName: profile.displayName }));
    notify();
  }
  return profile;
}

export function loginDemo() {
  const profile = getProfile();
  const session = {
    customerId: profile.customerId,
    displayName: profile.displayName,
    loggedIn: true,
    expiresAt: Date.now() + SESSION_MS,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  expiredNotice = false;
  notify();
  return session;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
  notify();
}

export function subscribeSession(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function prettyPhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  if (digits.length === 9) return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
  return String(value || "");
}

function notify() {
  listeners.forEach((listener) => listener());
}

export function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
