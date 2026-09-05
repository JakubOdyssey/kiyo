import { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_STORAGE_KEY } from "@/config/cookieInventory";

export function readCookieConsent() {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (!stored) return null;
  try {
    const parsed = JSON.parse(stored);
    if (parsed?.version === 1 && typeof parsed.support === "boolean") return parsed;
  } catch {
    // Older consent values are migrated below.
  }
  if (stored === "accepted") return { version: 1, necessary: true, support: true };
  if (stored === "rejected" || stored === "preferences") return { version: 1, necessary: true, support: false };
  return null;
}

export function saveCookieConsent({ support }) {
  const consent = { version: 1, necessary: true, support: Boolean(support), updatedAt: new Date().toISOString() };
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: consent }));
  return consent;
}
