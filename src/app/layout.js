import "@/css/base.css";
import "@/css/globals.css";
import "@/css/layout.css";
import "@/css/header.css";
import "@/css/hero.css";
import "@/css/main.css";
import "@/css/footer.css";
import "@/css/shortcodes.css";
import "@/css/components.css";
import "@/css/cookie-consent.css";
import "@/css/domain-search.css";
import "@/css/hosting-public.css";
import "@/css/careers.css";
import "@/css/auth.css";
import "@/css/kiyo-tools.css";
import "@/css/support.css";
import "@/css/legal.css";
import "@/css/iconly.css";
import "@/css/responsive.css";
import Header from "@/parts/header/Header";
import Footer from "@/parts/footer/Footer";
import TawkChat from "@/parts/components/TawkChat";
import CookieConsent from "@/parts/components/CookieConsent";

export const metadata = {
  metadataBase: new URL("https://kiyocloud.com"),
  title: {
    default: "Kiyo Cloud | Hosting and Domains, Made Simple",
    template: "%s | Kiyo Cloud",
  },
  description: "Simple, reliable web hosting and domains in one place. Launch your website with Kiyo Cloud.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        <TawkChat />
      </body>
    </html>
  );
}
