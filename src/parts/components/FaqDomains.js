import Accordion from './Accordion';
import { FaqDomainsData } from '@/data/components/FaqDomainsData';

export default function FaqDomains({ transfer = false }) {
  return (
    <section className="section section-faq section-faq-hosting">
      <h2 className="section-title">Frequently asked questions</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">{transfer ? 'A straightforward guide to bringing your domain to Kiyo.' : 'The essentials, explained without the jargon.'}</p>
      </div>
      <div className="faq-container faq-hosting">
        <Accordion items={FaqDomainsData} />
      </div>
    </section>
  );
}
