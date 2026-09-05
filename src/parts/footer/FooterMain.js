import FooterMainAbout from "./FooterMainAbout";
import { FooterMainLinks } from "@/data/footer/FooterMainLinks";
import Link from "next/link";

export default function FooterMain() {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="footer-main-container">
          <FooterMainAbout />
          {FooterMainLinks.map((item) => <div key={item.id} className="footer-block footer-main-block footer-links-block">
            <h4 className="block-title footer-block-title footer-main-block-title">{item.title}</h4>
            <ul className="footer-menu-links">
              {item.links.map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>)}
        </div>
      </div>
    </div>
  );
}
