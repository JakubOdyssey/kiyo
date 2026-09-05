import Link from "next/link";
import Breadcrumb from "@/parts/components/Breadcrumb";
import Accordion from "@/parts/components/Accordion";
import DomainTransferLookup from "@/parts/domains/DomainTransferLookup";
import TawkSupportButton from "@/parts/domains/TawkSupportButton";
import { FaqTransferData } from "@/data/components/FaqTransferData";

export const metadata = {
  title: "Transfer Your Domain",
  description: "Transfer your domain to Kiyo Cloud and manage your hosting and domains in one simple place.",
  alternates: { canonical: "/domain-transfer" },
};

const transferSteps = [
  { title: "Enter your domain", text: "Tell us the domain you want to bring to Kiyo." },
  { title: "Confirm the transfer", text: "Review the clear price and confirm when you are ready." },
  { title: "We take care of the rest", text: "We guide the move and keep you updated from start to finish." },
];

const transferBenefits = [
  { title: "Everything in one place", text: "Manage hosting and domains together." },
  { title: "No unnecessary downtime", text: "Your website can stay available while the domain moves." },
  { title: "Simple renewals", text: "See clear renewal pricing without confusing surprises." },
  { title: "Human support", text: "If something goes wrong, you can talk to Kiyo Support." },
];

export default function DomainTransferPage() {
  return (
    <main className="main main-domain-transfer">
      <article>
        <header className="page-header">
          <div className="container">
            <div className="page-header-container">
              <Breadcrumb />
              <h1 className="page-title">Bring your domain to Kiyo.</h1>
              <p className="width-6 font-size-medium">Transfer your existing domain and manage everything in one simple place.</p>
              <div className="flex-container gap hosting-hero-actions">
                <Link className="button" href="#transfer">Start a transfer</Link>
                <TawkSupportButton />
              </div>
            </div>
          </div>
        </header>

        <section className="content">
          <div className="container">
            <div className="content-container">
              <section className="section transfer-steps" aria-labelledby="transfer-steps-title">
                <h2 id="transfer-steps-title" className="section-title">A simple move to Kiyo</h2>
                <div className="section-small"><p className="font-size-medium width-5">Three clear steps. We will guide you through each one.</p></div>
                <div className="cards transfer-step-list">
                  {transferSteps.map((step, index) => <div key={step.title} className="card card-feature transfer-step"><span>{index + 1}</span><h3 className="card-title">{step.title}</h3><p>{step.text}</p></div>)}
                </div>
              </section>

              <DomainTransferLookup />

              <section className="section" aria-labelledby="transfer-benefits-title">
                <h2 id="transfer-benefits-title" className="section-title">Why bring your domain to Kiyo?</h2>
                <div className="cards transfer-benefits">
                  {transferBenefits.map((benefit) => <div key={benefit.title} className="card card-feature"><h3 className="card-title">{benefit.title}</h3><p>{benefit.text}</p></div>)}
                </div>
              </section>

              <section className="section section-faq" aria-labelledby="transfer-faq-title">
                <h2 id="transfer-faq-title" className="section-title">Domain transfer questions</h2>
                <div className="section-small"><p className="font-size-medium width-5">Short answers before you get started.</p></div>
                <div className="faq-container"><Accordion items={FaqTransferData} /></div>
              </section>
              <div className="spacer-3" />
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
