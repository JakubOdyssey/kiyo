import Link from "next/link";
import CookiePreferencesButton from "@/parts/components/CookiePreferencesButton";
export default function FooterBottomLinks() {
  return(
    <ul className="no-list display-flex gap footer-bottom-block">
      <li><Link href="/terms">Terms & Conditions</Link></li>
      <li><Link href="/refund-policy">Refund Policy</Link></li>
      <li><Link href="/privacy-policy">Privacy Policy</Link></li>
      <li><Link href="/cookie-policy">Cookie Policy</Link></li>
      <li><CookiePreferencesButton /></li>
    </ul>
  );
}
