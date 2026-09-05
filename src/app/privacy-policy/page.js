import Link from "next/link";
import Breadcrumb from "@/parts/components/Breadcrumb";
import { company } from "@/config/company";
import { activePrivacyProviders } from "@/config/privacyProviders";

export const metadata = {
  title: "Privacy Policy",
  description: "How Kiyo Cloud collects, uses, protects and shares personal information.",
};

// Privacy by design: review and update this policy before any new Kiyo Tool,
// provider or data-processing activity is launched.
const sections = [
  {
    id: "who-we-are",
    title: "Who we are",
    content: <><p>Kiyo Cloud is a brand operated by {company.legalName}. {company.legalName} is the data controller for personal information processed for Kiyo Cloud unless another role is specifically explained.</p><address>Privacy: <a href="mailto:privacy@kiyocloud.com">privacy@kiyocloud.com</a><br />Support: <Link href="/support">kiyocloud.com/support</Link>{company.companyNumber && <><br />Company number: {company.companyNumber}</>}{company.registeredOffice && <><br />Registered office: {company.registeredOffice}</>}</address></>,
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: <div className="privacy-data-groups">
      <div><h3>Account information</h3><p>Your name, email address, company name, account preferences and authentication or security information.</p></div>
      <div><h3>Billing information</h3><p>Billing name and address, transaction and invoice details, and tax or VAT information where applicable. Where hosted payment processing is used, full card details are handled by the payment provider and are not stored directly by Kiyo.</p></div>
      <div><h3>Domain information</h3><p>The domain name, registrant or contact details required by providers, renewal and transfer information, and domain configuration. Registries and registrars may require some of this information.</p></div>
      <div><h3>Hosting and website information</h3><p>Websites hosted or connected to Kiyo, service configuration, technical logs, backups, and relevant performance or security events.</p></div>
      <div><h3>Support information</h3><p>Support requests, live chat and ticket messages, attachments and email correspondence. Our support infrastructure currently includes tawk.to, with transactional delivery through Resend where required.</p></div>
      <div><h3>Kiyo Tools information</h3><p>When you use Website Score, we may process the submitted public URL, performance measurements, responsiveness results, SEO signals, accessibility indicators and security-related technical signals. Monitor processes configured URLs, availability checks and incident history. Security tools process relevant scan results and detected issues. We do not currently collect a separate set of optional product analytics through an analytics product.</p></div>
      <div><h3>Website and device information</h3><p>IP address, browser or device type, pages or features requested, timestamps, referral information where supplied by the browser, security logs, and cookie or consent preferences. Optional analytics data is collected only if an analytics service is enabled and the required consent or other lawful basis applies.</p></div>
    </div>,
  },
  {
    id: "how-we-collect-information",
    title: "How we collect information",
    content: <><p>We receive information directly from you when you create an account, place an order, submit support or contact forms, provide billing information or change settings.</p><p>Some information is generated automatically through service and security logs, website or device requests and cookies or similar technologies where permitted. We may also receive necessary information from payment providers, domain registrars or registries, support and infrastructure providers, and authentication providers where applicable.</p><p>When personal information comes from another source, we handle it in accordance with applicable privacy law.</p></>,
  },
  {
    id: "why-we-use-information",
    title: "Why we use personal information",
    content: <div className="privacy-purpose-list">
      <div><h3>Provide services</h3><p>To create and manage accounts, provide hosting, register, manage or transfer domains, and deliver Kiyo Tools.</p></div>
      <div><h3>Process payments</h3><p>To process purchases, renewals and subscriptions, issue invoices and maintain transaction records.</p></div>
      <div><h3>Security</h3><p>To protect accounts, detect abuse, investigate incidents, prevent fraud and protect domains and infrastructure.</p></div>
      <div><h3>Support</h3><p>To answer questions, manage chats and tickets, maintain case history and investigate service issues.</p></div>
      <div><h3>Service communications</h3><p>To send account notices, renewal reminders, security or service alerts, billing information and important operational messages.</p></div>
      <div><h3>Improve Kiyo</h3><p>To understand reliability, diagnose problems and improve the product and customer experience using information appropriate for those purposes.</p></div>
      <div><h3>Legal and compliance</h3><p>To meet legal obligations, respond to lawful requests, enforce applicable agreements and maintain required records.</p></div>
      <div><h3>Marketing</h3><p>If Kiyo introduces marketing communications, they will remain separate from essential service messages and will use consent or another lawful basis as required. You will be able to opt out of direct marketing.</p></div>
    </div>,
  },
  {
    id: "lawful-bases",
    title: "Lawful bases",
    content: <><p>We select the lawful basis that fits each use rather than relying on one basis for everything:</p><dl className="privacy-bases"><div><dt>Contract</dt><dd>When processing is necessary to provide a service you request or purchase, or to take steps at your request before a contract.</dd></div><div><dt>Legal obligation</dt><dd>When information must be processed or retained to comply with applicable law.</dd></div><div><dt>Legitimate interests</dt><dd>For purposes such as service security, fraud prevention, platform improvement and protecting our systems or customers, after balancing those interests against your rights and interests.</dd></div><div><dt>Consent</dt><dd>Where consent is required, such as for certain non-essential cookies or marketing. You can withdraw consent at any time where processing relies on it.</dd></div></dl></>,
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    content: <><p>Kiyo uses cookies, local storage and similar technologies for essential functionality, sessions or authentication where available, preferences, security, support features and analytics where consented or otherwise permitted.</p><p>Non-essential cookies are subject to applicable consent requirements. Learn more in our <Link href="/cookie-policy">Cookie Policy</Link>.</p></>,
  },
  {
    id: "sharing-information",
    title: "Who we share information with",
    content: <><p>Where needed to operate Kiyo, information may be shared with hosting and infrastructure providers, payment processors, domain registrars and registries, support providers, email delivery providers, security or monitoring providers, professional advisers, and authorities where legally required.</p><p>Our currently configured providers include:</p><ul>{activePrivacyProviders.map((provider) => <li key={provider.name}><strong>{provider.name}</strong> — {provider.purpose}</li>)}</ul><p>Providers should receive only the information reasonably required to perform their function. We do not sell personal information. A domain registrar will be added to this list when the live registrar integration is selected and processing begins.</p></>,
  },
  {
    id: "domain-registration-data",
    title: "Domain registration data",
    content: <><p>Registering or managing a domain may require personal or contact information to be provided to the registrar, registry and other necessary domain ecosystem providers.</p><p>Some information may be disclosed or published where registry policy or law requires it. Privacy or proxy protection may be available for some domain extensions but not all; the rules depend on the extension and registry.</p></>,
  },
  {
    id: "international-transfers",
    title: "International data transfers",
    content: <><p>Some providers may process information outside the UK. Where personal information is transferred internationally, Kiyo uses safeguards required by applicable law. Depending on the destination and provider, these may include UK adequacy regulations, contractual safeguards or another lawful transfer mechanism.</p><p>We do not claim that all information remains in the UK.</p></>,
  },
  {
    id: "retention",
    title: "How long we keep information",
    content: <div className="privacy-data-groups">
      <div><h3>Account data</h3><p>Kept while the account is active and afterward for an appropriate period based on security, legal and necessary business-record requirements.</p></div>
      <div><h3>Billing and transactions</h3><p>Kept for the periods required by accounting, tax and other legal obligations.</p></div>
      <div><h3>Support data</h3><p>Kept for a reasonable period based on the need to maintain service history, investigate issues and resolve complaints or disputes.</p></div>
      <div><h3>Domain data</h3><p>Kept for as long as needed to provide domain services and satisfy registrar, registry and legal obligations.</p></div>
      <div><h3>Security logs</h3><p>Kept for an appropriate period based on the risk, usefulness for investigating security or abuse, and applicable legal requirements.</p></div>
      <div><h3>Backups</h3><p>Retention depends on the relevant hosting or backup plan and the technical backup cycle. Data may remain in backups until that cycle replaces or deletes it.</p></div>
    </div>,
  },
  {
    id: "protecting-information",
    title: "How we protect information",
    content: <><p>We use reasonable technical and organisational measures appropriate to the service and risk. These include encrypted connections, access controls, security logging, infrastructure protections, limited staff access and careful selection of providers. MFA or security keys may be available for relevant account features.</p><p>No system can guarantee complete security.</p></>,
  },
  {
    id: "account-security",
    title: "Account security",
    content: <><p>Protect your password, use MFA or a security key where available, keep recovery and contact details current, and report suspicious activity promptly.</p><p>Kiyo will never ask you to send your password, full payment card details, two-factor authentication code or recovery codes through normal support communications.</p></>,
  },
  {
    id: "your-rights",
    title: "Your data protection rights",
    content: <><p>Depending on the circumstances, UK data protection law may give you the right to be informed, access your information, correct it, request erasure or restriction, object to processing, receive portable data, and obtain safeguards relating to certain automated decisions.</p><p>Not every right applies in every situation. To make a request, email <a href="mailto:privacy@kiyocloud.com">privacy@kiyocloud.com</a>. You do not need to navigate a complicated process, although we may need enough information to verify your identity and locate the relevant data.</p></>,
  },
  {
    id: "right-to-object",
    title: "Right to object",
    content: <><p>You may have the right to object when we process personal information on the basis of legitimate interests. We will consider the circumstances and stop processing where the law requires.</p><p>You can object to direct marketing at any time. Any marketing message will provide an appropriate way to opt out, and service-critical communications will remain separate.</p></>,
  },
  {
    id: "automated-systems-and-ai",
    title: "Automated decision-making and AI",
    content: <><p>Kiyo may use automated systems or AI to answer support questions, categorize or summarize tickets, generate Website Score insights, detect technical patterns and make contextual tool recommendations.</p><p>Kiyo AI does not block access to human support. Website Score and tool recommendations are informational and diagnostic. Kiyo does not use these systems to make decisions producing significant legal or similarly significant effects without appropriate safeguards. This policy will be updated before any more significant automated decision-making begins.</p></>,
  },
  {
    id: "website-score",
    title: "Kiyo Website Score",
    content: <><p>Website Score may analyze a URL you submit, publicly accessible page and performance information, responsiveness results, SEO and accessibility signals, security-related technical signals, scan results and recommendations.</p><p>When linked to an account, results may be stored in that Kiyo account. We do not analyze private or non-public website data unless you explicitly authorize the required access.</p></>,
  },
  {
    id: "kiyo-monitor",
    title: "Kiyo Monitor",
    content: <><p>Monitor periodically checks configured website or service endpoints for availability. It may store the URL, status, limited response information needed for the check, incident timestamps and monitoring history.</p></>,
  },
  {
    id: "support-and-tawk",
    title: "Support and tawk.to",
    content: <><p>Live chat and ticket support use external support infrastructure provided by tawk.to. Information submitted may include your name and email, chat messages, ticket content, attachments and technical session information.</p><p>We use this information to respond, investigate service issues and maintain case history. A Kiyo account is not required to contact support.</p></>,
  },
  {
    id: "email-and-resend",
    title: "Email and Resend",
    content: <><p>Resend processes email addresses and message delivery metadata where needed to deliver account messages, security notices, ticket confirmations, billing information and other service communications. Transactional service email is not treated as marketing simply because it is sent by email.</p></>,
  },
  {
    id: "payments",
    title: "Payments",
    content: <><p>When card payments are enabled, a hosted payment processor such as Stripe may collect and process payment and anti-fraud information. Kiyo will typically receive the payment status, transaction reference and limited payment-method details such as card brand or last digits where available.</p><p>Kiyo does not normally receive or store the complete card number when the payment provider hosts the card-entry process. The active payment provider will be identified when the production payment flow is connected.</p></>,
  },
  {
    id: "children",
    title: "Children",
    content: <><p>Kiyo services are primarily intended for businesses and adults. We do not knowingly target children. If we learn that personal information has been provided by a child in circumstances where it should not have been collected, we will take appropriate steps under applicable law.</p></>,
  },
  {
    id: "business-customers",
    title: "Business customers",
    content: <><p>We may hold personal information about employees and representatives of business customers, including account administrators, billing contacts and support users. This remains protected as personal information even when it is connected to a business account.</p></>,
  },
  {
    id: "data-breaches",
    title: "Data breaches",
    content: <><p>Kiyo has procedures for assessing and investigating personal-data incidents. Where the law requires it, we will notify affected individuals, the Information Commissioner&apos;s Office, or both. Not every security event legally requires individual notification.</p></>,
  },
  {
    id: "complaints",
    title: "Complaints",
    content: <><p>Please contact <a href="mailto:privacy@kiyocloud.com">privacy@kiyocloud.com</a> first so we can investigate your concern. You also have the right to complain to the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">Information Commissioner&apos;s Office</a>.</p></>,
  },
  {
    id: "changes-to-policy",
    title: "Changes to this policy",
    content: <><p>We may update this Privacy Policy when products, providers, law or data practices change. Material changes will be brought to users&apos; attention where appropriate. The current version and last-updated date will remain on this page.</p></>,
  },
  {
    id: "contact",
    title: "Contact",
    content: <address><strong>{company.tradingName}</strong><br />Operated by {company.legalName}<br />Privacy: <a href="mailto:privacy@kiyocloud.com">privacy@kiyocloud.com</a><br />Support: <Link href="/support">kiyocloud.com/support</Link>{company.companyNumber && <><br />Company number: {company.companyNumber}</>}{company.registeredOffice && <><br />Registered office: {company.registeredOffice}</>}</address>,
  },
];

function TableOfContents({ mobile = false }) {
  const links = <ol>{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}>{index + 1}. {section.title}</a></li>)}</ol>;
  return mobile
    ? <details className="legal-toc-mobile"><summary>Contents</summary>{links}</details>
    : <nav className="legal-toc" aria-label="Privacy Policy contents"><p>Contents</p>{links}</nav>;
}

export default function PrivacyPolicy() {
  return (
    <main className="main legal-page">
      <article>
        <header className="page-header">
          <div className="container"><div className="page-header-container">
            <Breadcrumb />
            <h1 className="page-title">Privacy Policy</h1>
            <p className="legal-intro">This Privacy Policy explains how Kiyo Cloud collects, uses, stores and shares personal information when you use our website, services, support channels and customer account.</p>
            <p className="legal-updated">Last updated: 9 August 2026</p>
          </div></div>
        </header>

        <section className="content legal-content">
          <div className="container">
            <aside className="privacy-summary" aria-labelledby="privacy-summary-title">
              <p className="domain-search-kicker">Our approach to privacy</p>
              <h2 id="privacy-summary-title">Clear about your data.</h2>
              <ul><li>We collect only what we need to provide and improve Kiyo.</li><li>We do not sell personal information.</li><li>We use trusted providers to operate Kiyo.</li><li>You can contact us about your data.</li><li>Security and transparency are part of the product.</li></ul>
            </aside>
            <TableOfContents mobile />
            <div className="legal-layout">
              <TableOfContents />
              <div className="legal-document">
                {sections.map((section, index) => <section id={section.id} className="legal-section" key={section.id} aria-labelledby={`${section.id}-title`}><h2 id={`${section.id}-title`}><span>{index + 1}.</span> {section.title}</h2>{section.content}</section>)}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
