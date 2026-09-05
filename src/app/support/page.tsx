import Link from "next/link";
import Breadcrumb from "@/parts/components/Breadcrumb";
import ContactSupportCards from "@/parts/components/ContactSupportCards";
import TawkSupportButton from "@/parts/domains/TawkSupportButton";

const helpTopics = [
  ["Getting started with Kiyo", "/help#getting-started"],
  ["Connecting a domain", "/help#domains"],
  ["Transferring a domain", "/help#transfers"],
  ["Managing hosting", "/help#hosting"],
  ["Billing and renewals", "/help#billing"],
  ["Account and security", "/help#account-security"],
  ["Website migration", "/help#hosting"],
  ["Troubleshooting", "/help#troubleshooting"],
] as const;

export const metadata = {
  title: "Support Center",
  description: "Get help with Kiyo Cloud hosting, domains, transfers, billing and account support.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <main className="main support-page">
      <article>
        <header className="page-header">
          <div className="container"><div className="page-header-container">
            <Breadcrumb />
            <h1 className="page-title">Support Center</h1>
            <p className="width-6 font-size-medium">Find clear answers, practical guidance and real support for your hosting and domains.</p>
          </div></div>
        </header>

        <section className="content"><div className="container"><div className="content-container">
          <ContactSupportCards />

          <section className="section support-topics" aria-labelledby="support-topics-title">
            <div className="support-section-heading"><p className="domain-search-kicker">Start here</p><h2 id="support-topics-title" className="section-title">Popular help topics</h2><p>Choose a topic, browse a guide, or talk to us instead.</p></div>
            <ol>{helpTopics.map(([label, href]) => <li key={label}><Link href={href}><strong>{label}</strong><span aria-hidden="true">→</span></Link></li>)}</ol>
          </section>

          <section className="section support-live" aria-labelledby="support-live-title">
            <div><p className="domain-search-kicker">Live support</p><h2 id="support-live-title" className="section-title">Prefer to talk?</h2><p className="font-size-medium">Start with Kiyo AI for quick answers, or ask for a real person at any time.</p><p>AI is available 24/7. Our human support team is available during the day and will pick up messages left outside those hours.</p></div>
            <TawkSupportButton label="Open live chat" fallbackHref="/support/ticket" />
          </section>

          <section className="section support-availability" aria-labelledby="support-availability-title">
            <div><p className="domain-search-kicker">24/7 Kiyo Support</p><h2 id="support-availability-title" className="section-title">Support that stays clear.</h2></div>
            <div><p className="font-size-medium color-white">Kiyo Support is available 24/7 through Kiyo AI.</p><p>During the day, you can speak directly with the Kiyo team. Outside human support hours, leave a message and we’ll get back to you.</p><p>No bot maze. Human support, tickets, documentation and service status remain easy to reach.</p></div>
          </section>
          <div className="spacer-3" />
        </div></div></section>
      </article>
    </main>
  );
}
