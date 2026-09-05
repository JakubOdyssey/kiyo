import Link from "next/link";
import Breadcrumb from "@/parts/components/Breadcrumb";
import { company } from "@/config/company";
import { refundPolicy } from "@/config/refundPolicy";

export const metadata = {
  title: "Refund Policy",
  description: "How refunds and cancellations work for Kiyo Cloud hosting, domains, transfers and optional services.",
};

// Internal launch review: revisit this policy before taking live payments once
// the payment flow, hosting and registrar providers, domain refund rules,
// cancellation flow, consumer checkout consent and any voluntary guarantee
// have been finalized.
const sections = [
  {
    id: "statutory-rights",
    title: "Your statutory rights",
    content: <><p>This policy does not replace or limit rights available under applicable consumer law. UK consumers may have cancellation and remedy rights under laws including the Consumer Contracts Regulations and the Consumer Rights Act.</p><p>If a service is not provided with reasonable care and skill or materially does not match what was agreed, statutory remedies may apply. Nothing in this policy attempts to waive those rights.</p></>,
  },
  {
    id: "different-products",
    title: "Different products have different refund rules",
    content: <><p>Kiyo provides web hosting, domain registrations and renewals, domain transfers, Kiyo Tools or add-ons, and other digital services. Refund eligibility differs because some services are supplied immediately or require Kiyo to commit costs to an external provider.</p></>,
  },
  {
    id: "hosting-refunds",
    title: "Hosting refunds",
    content: <><p>Hosting refund eligibility depends on when cancellation is requested, whether service has begun, whether statutory rights apply, whether the service was materially defective or not provided as agreed, and any clearly presented plan or promotional terms.</p><p>Cancellation normally stops future renewal; it does not automatically make the current paid period refundable. Kiyo does not currently advertise a general voluntary money-back guarantee.{refundPolicy.voluntaryHostingGuarantee && <> Any future voluntary guarantee will be described using the duration and conditions stored in the policy configuration.</>}</p></>,
  },
  {
    id: "domain-registration-refunds",
    title: "Domain registration refunds",
    content: <><p>Domain registrations differ from ordinary subscriptions because Kiyo may commit registration fees to an external registrar or registry immediately after successful purchase.</p><p>Once a domain is registered, refund options may be limited and registry-specific rules may apply. Where a registration fee has already been committed to a registrar or registry, Kiyo may be unable to refund that portion unless required by law or permitted by the underlying provider.</p><p>Domain registrations are not described as universally non-refundable. If Kiyo fails to register a domain after taking payment, we will issue the appropriate refund.</p></>,
  },
  {
    id: "domain-renewals",
    title: "Domain renewals",
    content: <><p>A renewal charge may become committed to the registrar or registry as soon as renewal is processed. If renewal has completed, refund availability may depend on registry and registrar rules, timing and applicable law.</p><p>Disable auto-renew before the renewal is processed if you do not want the domain renewed. We cannot promise that a completed renewal will be refundable.</p></>,
  },
  {
    id: "domain-transfer-refunds",
    title: "Domain transfer refunds",
    content: <><p>Transfer fees may include external registrar or registry costs. Eligibility depends on whether processing has started, whether external fees were committed, whether the transfer failed, why it failed and the applicable provider or registry rules.</p><p>If Kiyo cannot complete a transfer because of its own processing failure and you completed all required steps, we will review the request for an appropriate refund. A refund may not be available for an invalid authorization code, a locked domain, customer cancellation after external processing starts or registry restrictions unless law requires it or provider rules permit it.</p></>,
  },
  {
    id: "tools-and-add-ons",
    title: "Kiyo Tools and add-ons",
    content: <><p>Optional paid Kiyo Tools may be recurring subscriptions or paid service upgrades. Refund eligibility depends on the billing period, when cancellation occurs, whether the service has already been supplied and applicable consumer rights.</p><p>A valid cancellation stops future renewal where applicable. You will not be charged for future renewal periods after cancellation takes effect.</p></>,
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    content: <><p>For recurring hosting or paid Tools, cancellation normally stops future renewals and access may continue until the current paid period ends. Cancellation does not automatically create a refund for time already used.</p><p>Where statutory consumer cancellation rights apply, those rights take priority.</p></>,
  },
  {
    id: "cooling-off-rights",
    title: "Cooling-off rights for consumers",
    content: <><p>UK consumers purchasing certain services online may have a 14-day cancellation period. If you ask Kiyo to begin supplying a service during that period, the legal outcome may depend on the service type and how much has already been performed.</p><p>If a service is fully performed during the cancellation period following the legally required request or acknowledgement, cancellation rights may be affected. Clicking a general purchase button does not by itself create a blanket waiver, and domain purchases are not described as universally exempt. Where necessary, the checkout flow will request the appropriate consent or acknowledgement for immediate activation.</p></>,
  },
  {
    id: "faulty-services",
    title: "Faulty or misdescribed services",
    content: <><p>If a Kiyo service materially does not match its description, is not provided with reasonable care and skill or is not delivered as agreed, statutory remedies may apply.</p><p>Depending on the circumstances, those remedies may include correction or re-performance, a price reduction or a refund. We will not restrict you to one remedy where the law gives you another.</p></>,
  },
  {
    id: "duplicate-charges",
    title: "Duplicate or accidental charges",
    content: <><p>If the same charge is processed more than once by mistake, Kiyo will investigate and refund confirmed duplicate charges. Contact Billing Support with the invoice or order reference, date and amount. Never send a full card number.</p></>,
  },
  {
    id: "failed-orders",
    title: "Failed orders",
    content: <><p>If payment is captured but Kiyo cannot fulfil the affected order, we will refund the appropriate amount. This may include a domain registration that fails before completion, service provisioning that cannot be completed, an order rejected after payment or a technical duplicate order.</p></>,
  },
  {
    id: "promotional-credits",
    title: "Promotional credits and coupons",
    content: refundPolicy.promotionalCreditsEnabled
      ? <p>Where offered, promotional credits are not normally cash, cannot usually be withdrawn and may have clearly displayed expiry or usage rules.</p>
      : <p>Kiyo does not currently offer general-purpose account credits or cash-withdrawable promotional balances. If credits or coupons are introduced, their usage and expiry conditions will be displayed with the offer and this policy will be updated where necessary.</p>,
  },
  {
    id: "taxes",
    title: "Taxes",
    content: <><p>A refund may include or adjust applicable tax depending on the transaction type, jurisdiction, tax rules and original invoice. Kiyo does not provide tax advice.</p></>,
  },
  {
    id: "request-a-refund",
    title: "How to request a refund",
    content: <><p>Contact <Link href="/support">Kiyo Support</Link> or use Billing Support in the customer area when available. Please provide your account email, the affected service, domain or order, an invoice or order reference if available, and the reason for your request.</p><p>Do not provide your password, full card details, two-factor authentication code or recovery codes.</p></>,
  },
  {
    id: "reviewing-requests",
    title: "How we review requests",
    content: <><p>We consider the product or service type, purchase date, whether service started, external provider costs, applicable provider rules and consumer law, whether the service was faulty or misdescribed, and any relevant previous refund or credit.</p><p>Requests are assessed on their facts. Kiyo does not reserve an unrestricted right to reject every request.</p></>,
  },
  {
    id: "refund-method",
    title: "Refund method",
    content: <><p>Approved refunds are normally returned to the original payment method where practical. The time taken for funds to appear depends on the payment provider and your bank, so we do not promise an exact settlement time.</p></>,
  },
  {
    id: "partial-refunds",
    title: "Partial refunds",
    content: <><p>A partial refund may be appropriate where part of a service has already been provided, only part of an order failed, external non-refundable costs were incurred, or applicable law permits a proportionate charge. Any deduction will be reasonable and explained transparently.</p></>,
  },
  {
    id: "chargebacks",
    title: "Chargebacks and payment disputes",
    content: <><p>Please contact Kiyo first where possible so we can investigate quickly. Nothing in this policy removes a lawful right to dispute a payment through your bank or payment provider.</p><p>We do not terminate an account merely because a customer raises a legitimate dispute. Credible fraud, unauthorized activity or abusive disputes may be investigated separately.</p></>,
  },
  {
    id: "cancellation-vs-refund",
    title: "Cancellation vs refund",
    content: <><p><strong>Cancellation</strong> stops future renewal or service continuation. <strong>Refund</strong> returns some or all money already paid where the request is eligible.</p><div className="refund-example"><p>Cancel hosting today</p><span aria-hidden="true">→</span><p>Future renewal stops</p><span aria-hidden="true">→</span><p>Service may remain available until the paid period ends</p></div><p>This does not automatically mean the current payment is refundable.</p></>,
  },
  {
    id: "domains-and-cancellation",
    title: "Domains and service cancellation",
    content: <><p>Turning off domain auto-renew does not immediately delete the domain. It means Kiyo will not intentionally renew it at the next renewal point.</p><p>If a domain expires, it may stop working and could eventually become available to someone else, depending on the registry&apos;s lifecycle rules.</p></>,
  },
  {
    id: "business-customers",
    title: "Business customers",
    content: <><p>Some statutory consumer protections apply only to individuals acting as consumers. Business customers remain protected by the contract and applicable law, although consumer-specific cancellation rights may not apply.</p></>,
  },
  {
    id: "abuse-and-fraud",
    title: "Abuse and fraud",
    content: <><p>Kiyo may refuse or reverse a voluntary refund where there is credible evidence of fraud, refund abuse, unauthorized payment activity or deliberate service misuse. This does not remove statutory rights or legitimate payment-dispute rights.</p></>,
  },
  {
    id: "changes-to-policy",
    title: "Changes to this policy",
    content: <><p>We may update this policy when services, registrar or provider rules, consumer law or billing systems change. Material changes affecting existing customers will be communicated where appropriate. The current version and update date remain available on this page.</p></>,
  },
  {
    id: "contact",
    title: "Contact",
    content: <address><strong>{company.tradingName}</strong><br />Operated by {company.legalName}<br />Support: <Link href="/support">kiyocloud.com/support</Link><br />Billing support: choose <strong>Billing</strong> on the <Link href="/support/ticket?category=Billing">support request form</Link><br />General: <a href={`mailto:${company.contactEmail}`}>{company.contactEmail}</a>{company.companyNumber && <><br />Company number: {company.companyNumber}</>}{company.registeredOffice && <><br />Registered office: {company.registeredOffice}</>}</address>,
  },
];

function TableOfContents({ mobile = false }) {
  const links = <ol>{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}>{index + 1}. {section.title}</a></li>)}</ol>;
  return mobile
    ? <details className="legal-toc-mobile"><summary>Contents</summary>{links}</details>
    : <nav className="legal-toc" aria-label="Refund Policy contents"><p>Contents</p>{links}</nav>;
}

export default function RefundPolicy() {
  return (
    <main className="main legal-page">
      <article>
        <header className="page-header"><div className="container"><div className="page-header-container">
          <Breadcrumb />
          <h1 className="page-title">Refund Policy</h1>
          <p className="legal-intro">This Refund Policy explains when Kiyo Cloud may issue a refund, how cancellations are handled and how refund rules differ between hosting, domains, transfers and optional Kiyo services.</p>
          <p className="legal-updated">Last updated: 9 August 2026</p>
        </div></div></header>

        <section className="content legal-content"><div className="container">
          <aside className="privacy-summary refund-summary" aria-labelledby="refund-summary-title">
            <p className="domain-search-kicker">Our approach</p>
            <h2 id="refund-summary-title">Clear terms, reviewed fairly.</h2>
            <ul><li>We keep pricing and renewal terms clear before purchase.</li><li>Eligibility depends on the service and committed third-party costs.</li><li>Nothing in this policy removes statutory consumer rights.</li><li>If you are unsure, Kiyo Support will review the case.</li></ul>
          </aside>

          <aside className="refund-help" aria-labelledby="refund-help-title">
            <div><p className="domain-search-kicker">Billing support</p><h2 id="refund-help-title">Need help with a refund?</h2><p>Tell us which order or service is affected. No account is required.</p></div>
            <Link className="button" href="/support/ticket?category=Billing">Contact Billing Support</Link>
          </aside>

          <TableOfContents mobile />
          <div className="legal-layout"><TableOfContents /><div className="legal-document">
            {sections.map((section, index) => <section id={section.id} className="legal-section" key={section.id} aria-labelledby={`${section.id}-title`}><h2 id={`${section.id}-title`}><span>{index + 1}.</span> {section.title}</h2>{section.content}</section>)}
            <nav className="legal-related" aria-label="Related policies"><p>Related information</p><div><Link href="/terms">Terms and Conditions</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/cookie-policy">Cookie Policy</Link><Link href="/help/billing">Billing help</Link><Link href="/support">Support</Link></div></nav>
          </div></div>
        </div></section>
      </article>
    </main>
  );
}
