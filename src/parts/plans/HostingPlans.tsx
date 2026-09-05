"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HOSTING_PLANS, type HostingBillingPeriod } from "@/hosting/hosting-plans";
import { persistHostingSelection } from "@/order/pending-order";

const money = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });

export default function HostingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<HostingBillingPeriod>("annual");
  const router = useRouter();

  return (
    <section id="plans" className="section section-pricing-hosting hosting-plans" aria-labelledby="hosting-plans-title">
      <h2 id="hosting-plans-title" className="section-title">Choose the right home for your website.</h2>
      <div className="section-small">
        <p className="font-size-medium width-5">Clear plans, useful essentials, and room to grow.</p>
      </div>

      <div className="hosting-billing-toggle" aria-label="Billing period">
        <button type="button" className={billingPeriod === "monthly" ? "active" : ""} onClick={() => setBillingPeriod("monthly")}>Monthly</button>
        <button type="button" className={billingPeriod === "annual" ? "active" : ""} onClick={() => setBillingPeriod("annual")}>Annual <span>Save 16%</span></button>
      </div>

      <div className="cards cards-pricing cards-pricing-hosting">
        {HOSTING_PLANS.map((plan) => {
          const price = plan.prices[billingPeriod];
          return (
            <article key={plan.id} className={`card card-pricing card-pricing-hosting ${plan.popular ? "hosting-plan-popular" : ""}`}>
              {plan.popular ? <span className="hosting-plan-badge">Most Popular</span> : null}
              <div className="card-pricing-header">
                <h3 className="card-title">{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="card-price">
                  <span className="card-price-value">{money.format(price.amount)}</span>
                  <span className="card-price-interval"> /{price.interval}</span>
                </div>
                <small>{billingPeriod === "annual" ? "Billed annually" : "Billed monthly"}</small>
              </div>
              <div className="card-pricing-body">
                <ul className="card-pricing-list">
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </div>
              <button className="button" type="button" onClick={() => {
                persistHostingSelection(plan, billingPeriod);
                router.push("/signup?next=/checkout");
              }}>Choose {plan.name}</button>
            </article>
          );
        })}
      </div>

      <p className="hosting-domain-cross-sell">Need a domain too? <Link href="/domains">Find your domain</Link></p>
      <p className="hosting-mock-note">Plan prices are development values and no payment is taken yet.</p>
    </section>
  );
}
