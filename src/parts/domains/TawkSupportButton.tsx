"use client";

import { COOKIE_PREFERENCES_EVENT } from "@/config/cookieInventory";

declare global {
  interface Window {
    Tawk_API?: { maximize?: () => void };
  }
}

export default function TawkSupportButton({ label = "Need help? Talk to us", fallbackHref = "/support" }: { label?: string; fallbackHref?: string }) {
  function openSupport() {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
      return;
    }
    window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT));
    window.setTimeout(() => {
      if (!document.querySelector('[aria-label="Cookie preferences"]')) window.location.assign(fallbackHref);
    }, 0);
  }

  return <button className="button" type="button" onClick={openSupport}>{label}</button>;
}
