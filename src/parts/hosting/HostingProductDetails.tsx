import Image from "next/image";
import Link from "next/link";
import TawkSupportButton from "@/parts/domains/TawkSupportButton";

const includedFeatures = [
  ["Web hosting", "A dependable home for your website."],
  ["SSL certificate", "A secure connection for every visitor."],
  ["Automatic backups", "A safer way to protect your website."],
  ["Performance optimization", "Caching and sensible defaults are built in."],
  ["Security protection", "Essential safeguards and monitoring are included."],
  ["Kiyo support", "Simple answers, with a real person within reach."],
  ["Domain connection", "Use a Kiyo domain or one you already own."],
  ["Simple management", "Handle the essentials without technical clutter."],
];

const websiteTypes = [
  "Small business websites",
  "Portfolios",
  "Landing pages",
  "Blogs",
  "Growing business sites",
  "Online stores on higher plans",
];

const setupSteps = [
  ["Choose your plan", "Pick the hosting level that fits your website."],
  ["Connect your domain", "Use a domain from Kiyo or bring one you already own."],
  ["We handle the setup", "Hosting, security, and the essentials are prepared for you."],
  ["Manage everything in Kiyo", "Your hosting and domain live in one simple place."],
];

export default function HostingProductDetails() {
  return (
    <>
      <section className="section hosting-included" aria-labelledby="hosting-included-title">
        <div className="hosting-section-heading">
          <div>
            <p className="domain-search-kicker">Included with Kiyo Hosting</p>
            <h2 id="hosting-included-title" className="section-title">Everything you need to stay online.</h2>
          </div>
          <p>The essentials are already included, so you do not have to piece together separate tools or add-ons.</p>
        </div>
        <ul className="hosting-included-list">
          {includedFeatures.map(([title, description]) => (
            <li key={title}><span aria-hidden="true">✓</span><div><strong>{title}</strong><small>{description}</small></div></li>
          ))}
        </ul>
      </section>

      <section className="section hosting-audience" aria-labelledby="hosting-audience-title">
        <div className="hosting-audience-copy">
          <p className="domain-search-kicker">Made for your kind of website</p>
          <h2 id="hosting-audience-title" className="section-title">Built for real websites.</h2>
          <p className="font-size-medium">From a first idea to a growing business, Kiyo gives your website a clear place to live.</p>
        </div>
        <ul className="hosting-audience-list">
          {websiteTypes.map((websiteType, index) => <li key={websiteType}><span>0{index + 1}</span><strong>{websiteType}</strong></li>)}
        </ul>
      </section>

      <section className="section hosting-setup" aria-labelledby="hosting-setup-title">
        <h2 id="hosting-setup-title" className="section-title">Getting online should be simple.</h2>
        <div className="section-small"><p className="font-size-medium width-5">A clear path from choosing a plan to managing your website.</p></div>
        <ol className="hosting-setup-steps">
          {setupSteps.map(([title, description], index) => (
            <li key={title}><span>{index + 1}</span><h3>{title}</h3><p>{description}</p></li>
          ))}
        </ol>
      </section>

      <section className="section hosting-migration" aria-labelledby="hosting-migration-title">
        <div className="hosting-migration-visual" aria-hidden="true">
          <span className="hosting-migration-orbit" />
          <Image src="/images/icons/migration.svg" alt="" width={96} height={96} />
        </div>
        <div className="hosting-migration-copy">
          <p className="domain-search-kicker">Guided migration</p>
          <h2 id="hosting-migration-title" className="section-title">Already have a website?</h2>
          <p className="font-size-medium">Moving to Kiyo should not mean rebuilding everything.</p>
          <p>Keep your existing website and domain. We will guide you through the move, help minimize disruption, and stay available if you need us.</p>
          <Link className="button" href="/contact">Move my website</Link>
        </div>
      </section>

      <section className="section hosting-performance" aria-labelledby="hosting-performance-title">
        <div className="hosting-performance-heading">
          <p className="domain-search-kicker">The essentials, already working</p>
          <h2 id="hosting-performance-title" className="section-title">Fast and protected by default.</h2>
          <p>Good hosting should quietly take care of the important things.</p>
        </div>
        <div className="hosting-performance-columns">
          <div>
            <span>Performance</span>
            <h3>Pages that feel quick.</h3>
            <p>Caching, optimized infrastructure, and fast page delivery work together. CDN support is used where it fits.</p>
          </div>
          <div>
            <span>Security</span>
            <h3>Protection without the homework.</h3>
            <p>SSL, backups, DDoS protection, and security monitoring help look after your website from day one.</p>
          </div>
        </div>
      </section>

      <section className="section hosting-support" aria-labelledby="hosting-support-title">
        <div>
          <p className="domain-search-kicker">Kiyo Support</p>
          <h2 id="hosting-support-title" className="section-title">Help when you need it.</h2>
          <p>Kiyo AI can answer simple questions quickly, but you can always request a real person.</p>
        </div>
        <TawkSupportButton label="Talk to support" />
      </section>

      <section className="section hosting-plans-transition" aria-labelledby="hosting-plans-transition-title">
        <div>
          <h2 id="hosting-plans-transition-title">Choose the hosting that fits your website.</h2>
          <p>Start small and move up whenever you need more.</p>
        </div>
        <Link className="button" href="/hosting-plans">View hosting plans</Link>
      </section>
    </>
  );
}
