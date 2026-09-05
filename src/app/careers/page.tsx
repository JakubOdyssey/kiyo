import Link from "next/link";
import Breadcrumb from "@/parts/components/Breadcrumb";
import { CAREER_ROLES } from "@/data/careers/jobs";

const principles = [
  ["Ownership", "If you see a problem, take responsibility for helping solve it. Do not wait for someone else to care first."],
  ["Quality", "Good enough is not the target. Details matter, especially the ones customers notice."],
  ["Clarity", "Communicate clearly, early, and honestly. Complexity should be explained, not hidden behind jargon."],
  ["Initiative", "Think independently and improve things without needing every step decided for you."],
  ["Respect", "Strong opinions are welcome. Ego, disrespect, and unnecessary politics are not."],
  ["Customer first", "Technical complexity belongs behind the scenes. The customer experience should stay simple."],
];

const remotePrinciples = ["Flexible location", "Async-friendly communication", "Clear ownership", "Outcome-focused work", "Respect for time zones where possible"];
const performanceSignals = ["Thoughtful decisions", "Reliable delivery", "Quality", "Clear communication", "Continuous improvement"];
const productPrinciples = ["Remove unnecessary complexity", "Automate thoughtfully", "Make the experience intuitive", "Build for reliability", "Protect security by design"];
const positiveFit = [
  "You care about the quality of what you ship.",
  "You can work independently without disappearing.",
  "You ask questions when something does not make sense.",
  "You prefer fixing root causes over temporary patches.",
  "You are comfortable giving and receiving direct feedback.",
  "You can explain complex ideas simply.",
  "You care about customers, not just tasks.",
];
const poorFit = [
  "You need every decision made for you.",
  "You avoid ownership when things go wrong.",
  "You value internal politics more than outcomes.",
  "You are comfortable shipping work you know is poor quality.",
];
const companyCommitments = ["Clear expectations", "Direct communication", "Respect for your time", "Space for focused work", "Trust to make decisions", "Honest feedback", "Recognition for strong work", "No unnecessary corporate theatre"];

export const metadata = {
  title: { absolute: "Careers at Kiyo Cloud" },
  description: "Learn how Kiyo Cloud works, what we value and what to expect from working with us.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Kiyo Cloud",
    description: "Learn how Kiyo Cloud works, what we value and what to expect from working with us.",
    url: "/careers",
    siteName: "Kiyo Cloud",
    type: "website",
    images: [{ url: "/images/kiyo-brand-reference.png", alt: "Kiyo Cloud" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Kiyo Cloud",
    description: "Learn how Kiyo Cloud works, what we value and what to expect from working with us.",
    images: ["/images/kiyo-brand-reference.png"],
  },
};

export default function CareersPage() {
  return (
    <main className="main careers-page">
      <article>
        <header className="page-header careers-hero">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <p className="careers-eyebrow">Careers at Kiyo</p>
              <h1 className="page-title">Build things that matter.</h1>
              <p className="width-6 font-size-medium">Kiyo Cloud is built by people who care about quality, ownership, and making complex technology feel simple.</p>
            </div>
          </div>
        </header>

        <div className="content">
          <div className="container careers-container">
            <section className="section careers-editorial" aria-labelledby="careers-how-title">
              <div><p className="careers-section-number">01 / Philosophy</p><h2 id="careers-how-title" className="section-title">How we work matters.</h2></div>
              <div className="careers-editorial-copy">
                <p className="font-size-medium color-white">Kiyo Cloud is being built with a simple idea: great products come from people who care deeply about the work they put into the world.</p>
                <p>We value thoughtful execution, clear communication, personal responsibility, and high standards.</p>
                <p>We do not measure commitment by how long someone sits at a desk. We care about the quality of the work, the decisions behind it, and the result delivered to the customer.</p>
              </div>
            </section>

            <section className="section careers-values" aria-labelledby="careers-values-title">
              <div className="careers-section-heading"><p className="careers-section-number">02 / Principles</p><h2 id="careers-values-title" className="section-title">What we value.</h2></div>
              <ol className="careers-value-list">
                {principles.map(([title, copy], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}
              </ol>
            </section>

            <section className="section careers-split" aria-labelledby="careers-remote-title">
              <div className="careers-split-copy">
                <p className="careers-section-number">03 / Remote work</p>
                <h2 id="careers-remote-title" className="section-title">Remote-first by design.</h2>
                <p className="font-size-medium color-white">Where someone works matters less than how well they communicate, take ownership, and deliver.</p>
                <p>Remote work requires trust, independence, and responsibility. It is not about being available every minute. It is about being reliable when it matters.</p>
              </div>
              <ul className="careers-line-list">{remotePrinciples.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section className="section careers-performance" aria-labelledby="careers-results-title">
              <div className="careers-performance-copy">
                <p className="careers-section-number">04 / Performance</p>
                <h2 id="careers-results-title" className="section-title">Results over presence.</h2>
                <p>Looking busy is not the same as doing valuable work. Autonomy comes with accountability.</p>
                <strong>Freedom works when ownership does too.</strong>
              </div>
              <ul>{performanceSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
            </section>

            <section className="section careers-product" aria-labelledby="careers-product-title">
              <div>
                <p className="careers-section-number">05 / Product culture</p>
                <h2 id="careers-product-title" className="section-title">Simple for the customer. Serious behind the scenes.</h2>
                <p className="font-size-medium">Kiyo products should be easy to understand even when the technology underneath is complex.</p>
              </div>
              <div>
                <p>That means caring about the experience and the engineering in equal measure.</p>
                <ul className="careers-product-list">{productPrinciples.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </section>

            <section className="section careers-fit" aria-labelledby="careers-fit-title">
              <div className="careers-section-heading"><p className="careers-section-number">06 / Your fit</p><h2 id="careers-fit-title" className="section-title">You might enjoy working at Kiyo if...</h2></div>
              <div className="careers-fit-columns">
                <ul className="careers-fit-positive">{positiveFit.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="careers-fit-counterpoint"><h3>Kiyo may not be the right environment if...</h3><ul>{poorFit.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </section>

            <section className="section careers-expect" aria-labelledby="careers-expect-title">
              <div className="careers-expect-heading"><p className="careers-section-number">07 / Our side</p><h2 id="careers-expect-title" className="section-title">What you can expect from us.</h2><p>Culture is not only a list of expectations placed on employees.</p></div>
              <ul>{companyCommitments.map((commitment) => <li key={commitment}>{commitment}</li>)}</ul>
            </section>

            <section className="section careers-roles" aria-labelledby="careers-roles-title">
              <div className="careers-section-heading"><p className="careers-section-number">08 / Join Kiyo</p><h2 id="careers-roles-title" className="section-title">Open roles</h2></div>
              {CAREER_ROLES.length > 0 ? (
                <div className="careers-role-list">
                  {CAREER_ROLES.map((role) => <article key={`${role.department}-${role.title}`}><div><h3>{role.title}</h3><p>{role.department} · {role.location} · {role.employmentType}</p><small>{role.description}</small></div><Link className="button" href={role.applyUrl}>View role</Link></article>)}
                </div>
              ) : (
                <div className="careers-empty"><h3>No open roles right now.</h3><p>We are still building Kiyo carefully. When we are ready to grow the team, new opportunities will appear here.</p><p>Follow Kiyo Cloud on LinkedIn for future openings.</p></div>
              )}
            </section>

            <section className="section careers-final" aria-label="Our ambition">
              <p>We want to build a company people are proud to work for — and products customers are glad to use.</p>
              <span>That requires high standards on both sides.</span>
            </section>
            <div className="spacer-3" />
          </div>
        </div>
      </article>
    </main>
  );
}
