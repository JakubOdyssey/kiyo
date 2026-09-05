"use client";

import { COOKIE_PREFERENCES_EVENT } from "@/config/cookieInventory";

export default function CookiePreferencesButton() {
  return <button className="footer-cookie-preferences" type="button" onClick={() => window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT))}>Cookie Preferences</button>;
}
