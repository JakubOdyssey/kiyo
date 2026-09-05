import { FaqHostingData } from "@/data/components/FaqHostingData";
import Accordion from "./Accordion";

export default function FaqHosting() {
  return (
    <section className="section section-faq section-faq-hosting">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Find quick answers to common questions about our hosting plans, features, billing, and setup process.</p>
      </div>
      <div className="faq-container faq-hosting">
        <Accordion items={FaqHostingData} />
      </div>
    </section>
  );
}