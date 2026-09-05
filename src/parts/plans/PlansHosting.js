import { PlansHostingData } from "@/data/plans/PlansHostingData";
import Link from "next/link";

export default function PlansHosting() {
  return (
    <section id="plans" className="section section-pricing-hosting">
      <h2 className="section-title">Simple hosting plans</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Start with what you need today. Move up whenever your website grows.</p>
      </div>
      <div className="cards cards-pricing cards-pricing-hosting">
        {PlansHostingData.map((plan) => (
          <div key={plan.id} className="card card-pricing card-pricing-hosting">
            <div className="card-pricing-header">
              <h3 className="card-title">{plan.name}</h3>
              <div className="card-price"><span className="card-price-value">{plan.price}</span> <span className="card-price-interval">/{plan.interval}</span></div>
            </div>
            <div className="card-pricing-body">
              <ul className="card-pricing-list">
                {plan.features.map((feature) => (
                  <li key={feature} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link className="button" href={plan.url}>Get Started</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
