import Breadcrumb from "@/parts/components/Breadcrumb";
import Link from "next/link";
import ContactCards from "@/parts/components/ContactCards";
import ContactSupportCards from "@/parts/components/ContactSupportCards";

export const metadata = {
  title: "Contact Kiyo Cloud",
  description: "Talk to Kiyo Cloud about web hosting, domains, transfers, or support.",
};

export default function Contact() {
  return (
    <main className="main">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Contact Us</h1>
              <p className="width-6 font-size-medium">Starting a website, moving a domain, or need a hand? Tell us what you are working on.</p>
              <div className="flex-container gap-2">
                <Link className="button" href="mailto:hello@kiyocloud.com">Contact Sales</Link>
                <Link className="button" href="/support">Documentation</Link>
                <Link className="button" href="mailto:support@kiyocloud.com">Open Support Ticket</Link>
              </div>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="container">
            <div className="content-container">
              <ContactCards />
              <ContactSupportCards />
              <div className="spacer-3"></div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
