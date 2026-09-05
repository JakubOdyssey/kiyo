import Link from "next/link";
import Breadcrumb from "@/parts/components/Breadcrumb";
import { company } from "@/config/company";
import { necessaryTechnologies, supportTechnologies } from "@/config/cookieInventory";

export const metadata = {
  title: "Cookie Policy",
  description: "The cookies and browser storage actually used by Kiyo Cloud and how to control them.",
};

const sections = [
  {
    id: "what-are-cookies",
    title: "What are cookies?",
    content: <><p>Cookies are small pieces of information stored on your device when you visit a website. They can keep a site working, remember preferences, protect sessions, help understand site use and support features such as live chat.</p><p>Similar technologies include local storage, session storage, browser identifiers and other ways a website or embedded service can store or access information on a device. This policy covers those technologies as well as traditional cookies.</p></>,
  },
  {
    id: "how-kiyo-uses-cookies",
    title: "How Kiyo uses cookies",
    content: <><p>We aim to keep tracking to a minimum. Necessary browser storage is used for website functionality, security where applicable, remembering consent choices and preserving a shopping or order flow requested by you.</p><p>Optional technologies are used only for an appropriate purpose and, where required, after consent. Kiyo is not cookie-free: the optional Tawk.to live chat can use cookies and similar storage after you allow it.</p></>,
  },
  {
    id: "categories",
    title: "Cookie categories",
    content: <div className="privacy-data-groups"><div><h3>Strictly necessary</h3><p>Required for a requested website flow, order continuity or remembering consent. These do not require optional opt-in consent where they are genuinely necessary.</p></div><div><h3>Functional</h3><p>No separate optional functional category is currently active.</p></div><div><h3>Analytics</h3><p>No optional analytics cookies are currently active on the public website.</p></div><div><h3>Marketing and advertising</h3><p>Kiyo Cloud does not currently use advertising or behavioural marketing cookies.</p></div><div><h3>Support / third party</h3><p>Tawk.to storage supports live chat and conversation continuity. Kiyo classifies it as optional and loads the widget only after support consent.</p></div></div>,
  },
  {
    id: "necessary-technologies",
    title: "Strictly necessary technologies",
    content: <><p>These are the Kiyo identifiers confirmed in the current codebase:</p><CookieTable items={necessaryTechnologies} /></>,
  },
  {
    id: "tawk-live-chat",
    title: "Tawk.to live chat",
    content: <><p>Kiyo uses Tawk.to for live chat, AI-assisted support, human support and conversation continuity. The widget can store or access information on your device to maintain chat functionality and state.</p><p>Kiyo does not load the widget until you allow optional live-chat storage. Tawk.to controls its own technology and may change it over time. The identifiers below are taken from Tawk.to&apos;s current published cookie documentation rather than guessed from names:</p><CookieTable items={supportTechnologies} /><p>Support-data processing is explained in our <Link href="/privacy-policy">Privacy Policy</Link>.</p></>,
  },
  {
    id: "cookie-consent",
    title: "Cookie consent",
    content: <><p>The Kiyo popup offers Accept, Reject and Manage preferences. Necessary storage can operate without optional consent. Accept enables live-chat storage; Reject keeps Tawk.to blocked; Manage preferences lets you choose support storage separately.</p><p>Rejecting optional storage does not prevent access to the public website, hosting and domain information, Help Center or support request form.</p></>,
  },
  {
    id: "changing-your-choice",
    title: "Changing your choice",
    content: <><p>You can reopen the consent interface at any time using <strong>Cookie Preferences</strong> in the footer. You can then enable or withdraw optional live-chat consent without clearing all browser data.</p><p>Withdrawing support consent hides and unloads the widget and removes accessible Tawk.to storage from the Kiyo origin. Storage controlled entirely by a third-party domain may also need to be managed through browser settings.</p></>,
  },
  {
    id: "preference-storage",
    title: "Cookie preference storage",
    content: <><p>Kiyo stores your choice in local storage under the identifier <code>kiyo-cookie-consent</code>. This is strictly necessary so the website can respect your decision. It remains until you change the choice or clear the site&apos;s browser data; it has no invented fixed expiry date.</p></>,
  },
  {
    id: "analytics",
    title: "Analytics",
    content: <><p>Kiyo Cloud does not currently use optional analytics cookies on the public website. No Google Analytics, Plausible, PostHog or similar browser-side analytics integration was found in the current codebase.</p><p>If optional analytics is introduced, it must be added to the inventory and consent manager before being enabled.</p></>,
  },
  {
    id: "authentication",
    title: "Authentication and Client Area",
    content: <><p>The current public login and signup screens do not create real authentication sessions, and no authentication cookie is active. We therefore do not list an invented session-cookie name.</p><p>When authentication is implemented, necessary session technologies and their real names and durations must be added here before use.</p></>,
  },
  {
    id: "order-storage",
    title: "Domain search, cart and checkout",
    content: <><p>Kiyo uses <code>kiyo-pending-order</code> in local storage after you select a domain, transfer or hosting plan. It preserves the requested shopping flow across pages and is not used for advertising or tracking.</p><p>An older migration identifier, <code>kiyo-domain-selection</code>, may exist for previous visitors but the current application no longer writes it and removes it when a current selection is saved.</p></>,
  },
  {
    id: "security",
    title: "Security",
    content: <><p>The current public application does not set a named Cloudflare or Vercel security cookie. Our production-page audit found no <code>Set-Cookie</code> header from the public Kiyo response, so no such cookie is listed as active.</p><p>If bot protection, fraud prevention or authenticated request-integrity technology later adds browser storage, it will be audited and listed before deployment.</p></>,
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    content: <><p>Tawk.to is the only current browser-side third-party integration confirmed to use cookie or storage technology, and it is consent-controlled. Vercel serves the application and Cloudflare provides DNS or infrastructure services, but neither currently sets a confirmed browser cookie through the public Kiyo page.</p><p>Resend is used server-side for transactional email and does not load a public browser script. Stripe and a domain registrar are not active browser-side integrations, so they are not included in this cookie inventory.</p></>,
  },
  {
    id: "duration",
    title: "How long cookies last",
    content: <><p>Session technologies generally last until the browser or tab session ends. Persistent technologies remain for a defined provider period, until the relevant flow removes them or until you clear browser data.</p><p>The tables above state the confirmed duration for each item. Where Tawk.to does not publish a fixed duration, we say so instead of inventing one.</p></>,
  },
  {
    id: "browser-controls",
    title: "Browser controls",
    content: <><p>You can also block or remove cookies and site storage through browser settings. Blocking all storage may affect order continuity, future login sessions, chat history or another feature you request.</p></>,
  },
  {
    id: "no-ad-tracking",
    title: "Do not sell and advertising tracking",
    content: <><p>Kiyo Cloud does not sell personal information and does not currently use behavioural advertising cookies.</p></>,
  },
  {
    id: "policy-changes",
    title: "Policy changes",
    content: <><p>We may update this policy when integrations are added or removed, storage use changes, legal requirements change or new product functionality is introduced. The update date will change when material revisions occur.</p><p>If a new non-essential purpose is introduced, the inventory and consent interface must be updated before that technology is enabled.</p></>,
  },
  {
    id: "contact",
    title: "Contact",
    content: <address><strong>{company.tradingName}</strong><br />Operated by {company.legalName}<br />Privacy: <a href="mailto:privacy@kiyocloud.com">privacy@kiyocloud.com</a><br />Support: <Link href="/support">kiyocloud.com/support</Link><br />Privacy Policy: <Link href="/privacy-policy">kiyocloud.com/privacy-policy</Link></address>,
  },
];

function CookieTable({ items }) {
  return <div className="cookie-table-wrap"><table className="cookie-table"><thead><tr><th>Name</th><th>Provider</th><th>Purpose</th><th>Type</th><th>Duration</th></tr></thead><tbody>{items.map((item) => <tr key={item.name}><td><code>{item.name}</code></td><td>{item.provider}</td><td>{item.purpose}</td><td>{item.storageType}</td><td>{item.duration}</td></tr>)}</tbody></table></div>;
}

function TableOfContents({ mobile = false }) {
  const links = <ol>{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}>{index + 1}. {section.title}</a></li>)}</ol>;
  return mobile ? <details className="legal-toc-mobile"><summary>Contents</summary>{links}</details> : <nav className="legal-toc" aria-label="Cookie Policy contents"><p>Contents</p>{links}</nav>;
}

export default function CookiePolicy() {
  return <main className="main legal-page"><article>
    <header className="page-header"><div className="container"><div className="page-header-container"><Breadcrumb /><h1 className="page-title">Cookie Policy</h1><p className="legal-intro">This Cookie Policy explains how Kiyo Cloud uses cookies and similar technologies on kiyocloud.com, what they do and how you can control them.</p><p className="legal-updated">Last updated: 9 August 2026</p><p className="legal-updated">Kiyo Cloud is operated by {company.legalName}. Privacy contact: <a href="mailto:privacy@kiyocloud.com">privacy@kiyocloud.com</a>.</p></div></div></header>
    <section className="content legal-content"><div className="container"><TableOfContents mobile /><div className="legal-layout"><TableOfContents /><div className="legal-document">{sections.map((section, index) => <section id={section.id} className="legal-section" key={section.id} aria-labelledby={`${section.id}-title`}><h2 id={`${section.id}-title`}><span>{index + 1}.</span> {section.title}</h2>{section.content}</section>)}</div></div></div></section>
  </article></main>;
}
