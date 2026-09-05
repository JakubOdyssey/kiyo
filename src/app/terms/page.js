import Link from "next/link";
import Breadcrumb from "@/parts/components/Breadcrumb";
import { company } from "@/config/company";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms governing Kiyo Cloud hosting, domains, Kiyo Tools and support services.",
};

// Internal launch note: obtain a final professional legal review when the hosting
// provider, registrar, payment flow, customer markets, refund/cancellation rules
// and service data-retention periods have been finalized.
const sections = [
  {
    id: "about-kiyo-cloud",
    title: "About Kiyo Cloud",
    content: <><p>Kiyo Cloud is a trading brand operated by {company.legalName}. We provide web hosting, domain registration, domain transfers, domain management, Kiyo Tools, support services and related digital services.</p><p>We may introduce additional products or services over time. Where necessary, those products may be subject to additional product-specific terms, which will be shown before you order or activate them.</p></>,
  },
  {
    id: "eligibility-and-accounts",
    title: "Eligibility and accounts",
    content: <><p>You must provide accurate, complete account information and keep it current. Some orders may require reasonable identity or account checks before they can be accepted.</p><p>You are responsible for keeping your login credentials secure, for activity carried out through your account unless it results from Kiyo&apos;s failure, and for telling us promptly if you suspect unauthorized access.</p></>,
  },
  {
    id: "orders-and-activation",
    title: "Orders and service activation",
    content: <><p>An order is accepted only after any required payment is authorized, necessary service or provider checks pass, and Kiyo confirms acceptance or activation.</p><p>We may reject or cancel an order if payment fails, information is fraudulent or materially incorrect, the service cannot legally or technically be supplied, an underlying provider rejects the request, or the order breaches these Terms. If we cannot fulfil a paid order, we will process an appropriate refund where applicable.</p></>,
  },
  {
    id: "hosting-services",
    title: "Hosting services",
    content: <><p>Hosting provides the infrastructure and account features described in the plan you purchase. Kiyo will provide that service with reasonable care and skill, maintain the relevant infrastructure and provide included security and performance features according to your plan.</p><p>You are responsible for lawful website content, reasonably maintaining customer-controlled applications and plugins, keeping additional copies of critical or irreplaceable data where sensible, and using resources responsibly. Hosting may not be used for illegal or harmful activity. We do not promise 100% uptime, zero downtime, unlimited resources or absolute security unless a separate written service level agreement expressly says otherwise.</p></>,
  },
  {
    id: "fair-use",
    title: "Fair use and resource usage",
    content: <><p>Plans may have resource limits even where Kiyo hides unnecessary technical complexity from the normal customer experience. If usage materially affects platform stability or other customers, we may contact you to explain the issue and, where reasonably possible, offer an appropriate remedy or upgrade and time to resolve it.</p><p>We may act immediately where necessary to address a serious security threat, attack, illegal use or deliberate platform abuse.</p></>,
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: <><p>You must not use Kiyo for unlawful activity, malware distribution, phishing, credential theft, botnets, deliberate attacks, unauthorized access, spam, fraud, intellectual property infringement, disruptive resource abuse, or content or services prohibited by applicable law.</p><p>We may suspend affected services where reasonably necessary to protect users or infrastructure or to comply with law. Where appropriate, we will notify you and provide a reasonable opportunity to remedy the issue.</p></>,
  },
  {
    id: "domain-registration",
    title: "Domain registration",
    content: <><p>Kiyo may use third-party registrar and registry providers to register and manage domains. Search results do not reserve a domain, and availability is not guaranteed until registration completes successfully.</p><p>You must provide accurate registrant information where required. Domain services are also subject to applicable registrar, registry, ICANN and country-code registry rules.</p></>,
  },
  {
    id: "domain-pricing-and-renewals",
    title: "Domain pricing and renewals",
    content: <><p>We show the registration price and applicable renewal price before purchase. Renewal prices can change if registry or provider costs change; where reasonably possible, the current renewal price will be shown before renewal.</p><p>Pricing and rules vary between top-level domains. Premium domains may have different registration and renewal prices. No domain price is guaranteed for life.</p></>,
  },
  {
    id: "domain-auto-renewal",
    title: "Domain auto-renewal",
    content: <><p>If auto-renew is enabled, we may charge your saved payment method before expiry in line with the applicable renewal cycle. You can disable auto-renew through your account. Doing so does not end the current registration period.</p><p>You remain responsible for keeping payment and contact details current. Where practical, Kiyo will send renewal reminders.</p></>,
  },
  {
    id: "domain-transfers",
    title: "Domain transfers",
    content: <><p>Transfers depend on domain eligibility, registry rules, the current provider, transfer authorization and domain status. Completion times vary and cannot be guaranteed universally. You are responsible for providing a valid authorization code or approval where required.</p><p>A domain transfer does not inherently require website hosting or DNS to change. We aim to preserve existing configuration where applicable, but cannot guarantee zero disruption caused by third-party action or incorrect customer settings.</p></>,
  },
  {
    id: "kiyo-tools",
    title: "Kiyo Tools",
    content: <><p>Kiyo Tools may include Website Score, Monitor, Backups, Security, Analytics, Forms, Deploy, Sites and other tools. Some capabilities may be included with your account or plan; advanced capabilities may require additional payment. Before activating a paid tool, we will show its price, billing frequency and renewal or cancellation terms.</p><p>Website Score provides diagnostic guidance, not a guarantee of rankings, performance, accessibility compliance or security. Monitor is designed to detect availability problems but cannot identify every outage. Security scans and alerts reduce risk but cannot guarantee that a website or account is completely secure.</p></>,
  },
  {
    id: "pricing-and-payment",
    title: "Pricing and payment",
    content: <><p>Prices are shown before purchase, including applicable one-time, recurring and renewal charges and taxes where relevant. By confirming an order or recurring subscription, you authorize those charges.</p><p>Payments may be handled by third-party processors such as Stripe. Where an external processor handles card payments, Kiyo does not store complete card details.</p></>,
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    content: <><p>Before purchase, we show the billing frequency, amount, renewal basis and cancellation method for hosting and tool subscriptions. Auto-renewing subscriptions continue until cancelled.</p><p>Where supported by the account functionality, subscriptions can be managed or cancelled online through Kiyo. We do not deliberately make cancellation difficult.</p></>,
  },
  {
    id: "cancellation",
    title: "Cancellation",
    content: <><p>You can cancel an applicable subscription or disable renewal through the customer area or by contacting Kiyo. For recurring services, cancellation normally stops the next renewal and service continues until the end of the paid period unless stated otherwise.</p><p>Domains work differently: choosing not to renew does not cancel the current registration, but the domain may eventually expire and be lost after the registration period and any applicable registry lifecycle stages.</p></>,
  },
  {
    id: "consumer-cancellation-rights",
    title: "Consumer cancellation rights",
    content: <><p>If you act as a consumer, you may have statutory cancellation rights under applicable law. UK online service contracts can carry cooling-off rights in some circumstances. These rights depend on the service, how and when supply begins, and what the law requires.</p><p>If you specifically request immediate activation during a cooling-off period, the statutory treatment may differ for services already started, digital services, domains or costs committed to third parties. Nothing in these Terms broadly waives or restricts your statutory rights.</p></>,
  },
  {
    id: "refunds",
    title: "Refunds",
    content: <><p>Refund eligibility depends on the service type, applicable law, whether supply has begun, third-party or registry fees and product-specific rules. Domain fees can become committed immediately and may therefore be treated differently from hosting charges.</p><p>See our <Link href="/refund-policy">Refund Policy</Link>. Nothing in that policy removes statutory consumer rights.</p></>,
  },
  {
    id: "failed-payments",
    title: "Failed payments",
    content: <><p>If a payment fails, we may notify you, allow you to update the payment method and retry payment where appropriate. We will not terminate a service arbitrarily.</p><p>Where applicable, an unpaid service may be suspended or stopped after reasonable notice. Urgent action may still be necessary where continued service creates a security or legal risk.</p></>,
  },
  {
    id: "suspension-and-termination",
    title: "Suspension and termination",
    content: <><p>We may suspend or terminate affected services where reasonably necessary because of non-payment, a security risk, illegal activity, abuse, a material breach of these Terms or a legal or regulatory requirement.</p><p>Except where urgent action is required, we will provide notice and a reasonable opportunity to resolve the issue. Kiyo does not reserve an unrestricted right to terminate customers without reason.</p></>,
  },
  {
    id: "backups-and-data",
    title: "Backups and data",
    content: <><p>Where backups are included, they are intended to assist recovery. Frequency and retention depend on the purchased service. You should not rely on a single backup system for irreplaceable business data.</p><p>After cancellation or termination, service data may be deleted following the applicable retention period. Relevant product or account policies will provide the specific retention information where available.</p></>,
  },
  {
    id: "service-changes",
    title: "Service changes",
    content: <><p>We may improve or change services over time. Material negative changes affecting an existing paid commitment will be communicated appropriately, and we will not materially reduce a paid service without suitable notice or remedy.</p></>,
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    content: <><p>Kiyo may rely on third-party infrastructure and providers, including domain registrars, payment processors, email providers, support systems and hosting providers. Necessary third-party or registry rules may apply where clearly relevant.</p><p>Kiyo remains responsible for its own obligations to customers.</p></>,
  },
  {
    id: "service-availability",
    title: "Service availability",
    content: <><p>We aim to provide reliable services, but internet and cloud services can experience maintenance, outages, external network problems, provider incidents and security events. We do not promise uninterrupted availability.</p><p>Where available, current information can be found on our <Link href="/status">service status page</Link>.</p></>,
  },
  {
    id: "support",
    title: "Support",
    content: <><p>Support is available through the <Link href="/help">Help Center</Link>, Kiyo AI, live chat, <Link href="/support/ticket">support requests</Link> and human support. Kiyo AI can help with quick questions, but it never prevents you from requesting a real person.</p><p>Kiyo provides a 24/7 support experience through AI assistance, with human support available during staffed hours and by follow-up request.</p></>,
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: <><p>Kiyo branding, the Kiyo website, proprietary software, interface and original content belong to Kiyo, {company.legalName} or their licensors. You retain ownership of your website content and materials.</p><p>You grant Kiyo only the permissions reasonably necessary to host, process and display your content for the purpose of providing the service.</p></>,
  },
  {
    id: "customer-content",
    title: "Customer content",
    content: <><p>You are responsible for having the rights needed to upload and use your content. Kiyo does not claim ownership of customer content. We may restrict or remove content where required by law or reasonably necessary to address serious abuse or security issues.</p></>,
  },
  {
    id: "privacy",
    title: "Privacy",
    content: <><p>We handle personal data as described in our <Link href="/privacy-policy">Privacy Policy</Link>. That policy explains our data practices and your choices without duplicating them here.</p></>,
  },
  {
    id: "cookies",
    title: "Cookies",
    content: <><p>Our use of cookies and the choices available through the consent controls are described in our <Link href="/cookie-policy">Cookie Policy</Link>.</p></>,
  },
  {
    id: "liability",
    title: "Liability",
    content: <><p>Kiyo is not responsible for loss caused solely by customer misuse, unsupported third-party software, customer-controlled configuration or third-party services outside our reasonable control.</p><p>Nothing in these Terms excludes or limits liability where it would be unlawful to do so. Consumer statutory rights remain unaffected.</p></>,
  },
  {
    id: "indemnity",
    title: "Indemnity for business customers",
    content: <><p>If you are acting in the course of business, you are responsible for reasonable third-party claims and direct costs arising from unlawful content you provide or unlawful use of the service under your control. This does not apply to consumer customers or to claims caused by Kiyo&apos;s own breach or negligence.</p></>,
  },
  {
    id: "force-majeure",
    title: "Events outside reasonable control",
    content: <><p>Subject to applicable law, neither side is responsible for delay or failure genuinely caused by events outside reasonable control, such as natural disasters, government action, widespread network failures or major external infrastructure failures. This does not excuse ordinary operational failures that could reasonably have been prevented.</p></>,
  },
  {
    id: "changes-to-terms",
    title: "Changes to these Terms",
    content: <><p>We may update these Terms for legal or regulatory changes, new services, security needs or reasonable operational changes. Material changes affecting existing paid customers will be communicated in advance where appropriate. The current version and update date will remain available on this page.</p></>,
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: <><p>These Terms are governed by the laws of England and Wales, and disputes are subject to the courts that have jurisdiction under applicable law. If you are a consumer, this does not remove mandatory rights or protections available under the law of your country of residence.</p></>,
  },
  {
    id: "contact",
    title: "Contact",
    content: <><address><strong>{company.tradingName}</strong><br />operated by {company.legalName}<br />Email: <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a><br />Support: <Link href="/support">kiyocloud.com/support</Link>{company.companyNumber && <><br />Company number: {company.companyNumber}</>}{company.registeredOffice && <><br />Registered office: {company.registeredOffice}</>}</address></>,
  },
];

function TableOfContents({ mobile = false }) {
  const links = <ol>{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}>{index + 1}. {section.title}</a></li>)}</ol>;

  if (mobile) {
    return <details className="legal-toc-mobile"><summary>Contents</summary>{links}</details>;
  }

  return <nav className="legal-toc" aria-label="Terms and Conditions contents"><p>Contents</p>{links}</nav>;
}

export default function Terms() {
  return (
    <main className="main legal-page">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Terms and Conditions</h1>
              <p className="legal-intro">These Terms and Conditions govern your use of Kiyo Cloud services, including hosting, domain services, Kiyo Tools and related support.</p>
              <p className="legal-intro">By creating an account, purchasing a service or using Kiyo Cloud, you agree to these Terms.</p>
              <p className="legal-updated">Last updated: 9 August 2026</p>
            </div>
          </div>
        </header>

        <section className="content legal-content">
          <div className="container">
            <TableOfContents mobile />
            <div className="legal-layout">
              <TableOfContents />
              <div className="legal-document">
                {sections.map((section, index) => (
                  <section id={section.id} className="legal-section" key={section.id} aria-labelledby={`${section.id}-title`}>
                    <h2 id={`${section.id}-title`}><span>{index + 1}.</span> {section.title}</h2>
                    {section.content}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
