import { PlansDomainsData } from '@/data/plans/PlansDomainsData';
import Link from 'next/link';

export default function PlansDomains() {
  return (
    <section id="domains" className="section section-pricing-hosting">
      <h2 className="section-title">A domain that feels like yours</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Choose a clear, memorable address and keep it close to your hosting.</p>
      </div>
      <div className="cards cards-pricing cards-pricing-hosting">
        {PlansDomainsData.map((domain) => (
          <div key={domain.id} className="card card-pricing card-pricing-hosting">
            <div className="card-pricing-header">
              <h3 className="card-title">{domain.name}</h3>
              <div className="card-price"><span className="card-price-value">{domain.price}</span> <span className="card-price-interval">/{domain.interval}</span></div>
            </div>
            <div className="card-pricing-body">
              <ul className="card-pricing-list">
                {domain.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
            <Link className="button" href={domain.url}>Check Availability</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
