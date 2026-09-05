"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { COOKIE_PREFERENCES_EVENT, supportTechnologies } from "@/config/cookieInventory";
import { readCookieConsent, saveCookieConsent } from "@/lib/cookieConsent";

const EXIT_DELAY = 440;
const SUPPORT_CONSENT_REQUIRED = supportTechnologies.some((item) => item.consentRequired);

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const [supportAllowed, setSupportAllowed] = useState(false);
  const [exitType, setExitType] = useState("");
  const showFrame = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const existing = readCookieConsent();
    showFrame.current = window.requestAnimationFrame(() => {
      if (existing) setSupportAllowed(existing.support);
      else setIsVisible(true);
    });

    function openPreferences() {
      const current = readCookieConsent();
      setSupportAllowed(current?.support ?? false);
      setIsManaging(true);
      setExitType("");
      setIsVisible(true);
    }
    window.addEventListener(COOKIE_PREFERENCES_EVENT, openPreferences);
    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_EVENT, openPreferences);
      window.cancelAnimationFrame(showFrame.current);
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  function closeWithChoice(support, exit = "standard") {
    saveCookieConsent({ support });
    setSupportAllowed(support);
    setExitType(exit);
    closeTimer.current = window.setTimeout(() => {
      setIsVisible(false);
      setIsManaging(false);
    }, EXIT_DELAY);
  }

  if (!isVisible) return null;
  return (
    <aside className="cookie-consent" data-exit={exitType || undefined} aria-label="Cookie preferences" aria-live="polite">
      <div className="cookie-consent__mascot" aria-hidden="true"><Image src="/images/kiyo-cookie-mascot.png" alt="" width={360} height={418} priority={false} /></div>
      <div className="cookie-consent__card">
        <p className="cookie-consent__eyebrow">A small cookie question</p>
        <h2>{isManaging ? "Choose what works for you." : "Cookies, kept simple."}</h2>
        {isManaging ? (
          <div className="cookie-consent__preferences">
            <div><span><strong>Necessary</strong><small>Consent and order continuity</small></span><em>Always on</em></div>
            <label><span><strong>Live chat support</strong><small>Loads Tawk.to and keeps chat history</small></span><input type="checkbox" checked={supportAllowed} disabled={!SUPPORT_CONSENT_REQUIRED} onChange={(event) => setSupportAllowed(event.target.checked)} /></label>
            <p>No analytics or advertising cookies are currently active. <Link href="/cookie-policy">View Cookie Policy</Link>.</p>
          </div>
        ) : <p className="cookie-consent__copy">We use essential cookies to keep Kiyo working and optional cookies for features like live chat.</p>}
        <div className="cookie-consent__actions">
          {isManaging ? <>
            <button className="cookie-consent__button cookie-consent__button--primary" type="button" onClick={() => closeWithChoice(supportAllowed, supportAllowed ? "accepted" : "standard")}>Save preferences</button>
            <button className="cookie-consent__button cookie-consent__button--secondary" type="button" onClick={() => closeWithChoice(false)}>Reject optional</button>
          </> : <>
            <button className="cookie-consent__button cookie-consent__button--primary" type="button" onClick={() => closeWithChoice(true, "accepted")}>Accept</button>
            <button className="cookie-consent__button cookie-consent__button--secondary" type="button" onClick={() => closeWithChoice(false)}>Reject</button>
          </>}
        </div>
        {!isManaging ? (
          <div className="cookie-consent__links">
            <button className="cookie-consent__manage" type="button" onClick={() => setIsManaging(true)}>Manage preferences</button>
            <Link href="/cookie-policy">View Cookie Policy</Link>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
