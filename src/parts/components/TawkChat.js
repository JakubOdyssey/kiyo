"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_EVENT } from "@/config/cookieInventory";
import { readCookieConsent } from "@/lib/cookieConsent";

const TAWK_EMBED_URL = "https://embed.tawk.to/6a77184dc010c21d4b631f78/1jvgjdrlu";

function clearTawkBrowserState() {
  window.Tawk_API?.hideWidget?.();
  document.getElementById("tawk-to-live-chat")?.remove();
  document.querySelectorAll('iframe[title*="chat" i], iframe[src*="tawk.to"], iframe[src*="tawk.link"]').forEach((frame) => frame.remove());
  Object.keys(window.localStorage).filter((key) => key === "token" || key.startsWith("twk_token_") || key.startsWith("$navigator.locks-")).forEach((key) => window.localStorage.removeItem(key));
  window.sessionStorage.removeItem("PreviousNav");
  document.cookie.split(";").forEach((item) => {
    const name = item.split("=")[0]?.trim();
    if (name && (name.startsWith("tawk_uuid_") || name.startsWith("twk_") || name === "TawkConnectionTime")) document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
  });
}

export default function TawkChat() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const consentFrame = window.requestAnimationFrame(() => setAllowed(readCookieConsent()?.support === true));
    function updateConsent(event) {
      const nextAllowed = event.detail?.support === true;
      setAllowed(nextAllowed);
      if (!nextAllowed) clearTawkBrowserState();
    }
    window.addEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    return () => {
      window.cancelAnimationFrame(consentFrame);
      window.removeEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    };
  }, []);
  if (!allowed) return null;
  return <Script id="tawk-to-live-chat" src={TAWK_EMBED_URL} strategy="afterInteractive" charSet="UTF-8" crossOrigin="anonymous" />;
}
