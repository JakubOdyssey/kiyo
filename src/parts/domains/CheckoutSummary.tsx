"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readPendingOrder, type PendingOrder } from "@/order/pending-order";

const money = (amount: number, currency: "USD" | "GBP") =>
  new Intl.NumberFormat(currency === "GBP" ? "en-GB" : "en-US", { style: "currency", currency }).format(amount);

export default function CheckoutSummary() {
  const [order, setOrder] = useState<PendingOrder | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setOrder(readPendingOrder());
      setIsReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!isReady) return <section className="auth-handoff"><p>Restoring your order…</p></section>;

  if (!order || (!order.domain && !order.hosting && !order.transfer)) {
    return (
      <section className="auth-handoff" aria-labelledby="checkout-empty-title">
        <p className="domain-search-kicker">Order summary</p>
        <h1 id="checkout-empty-title">There is nothing in your order yet.</h1>
        <p>Choose a hosting plan or search for a domain to continue.</p>
        <div className="auth-handoff__actions">
          <Link className="button" href="/hosting-plans">View hosting plans</Link>
          <Link className="button" href="/domains">Find a domain</Link>
        </div>
      </section>
    );
  }

  const totals = [
    order.hosting ? money(order.hosting.price, "GBP") : null,
    order.domain ? money(order.domain.price, "USD") : null,
    order.transfer ? money(order.transfer.price, "USD") : null,
  ].filter(Boolean).join(" + ");

  return (
    <section className="auth-handoff checkout-summary" aria-labelledby="checkout-title">
      <p className="domain-search-kicker">Order summary</p>
      <h1 id="checkout-title">Review your selection.</h1>

      {order.hosting ? (
        <div className="checkout-summary__line">
          <div><strong>{order.hosting.planName} Hosting</strong><small>{order.hosting.billingPeriod === "annual" ? "Annual" : "Monthly"} plan</small></div>
          <strong>{money(order.hosting.price, "GBP")}</strong>
        </div>
      ) : null}

      {order.domain ? (
        <div className="checkout-summary__line">
          <div><strong>{order.domain.domain}</strong><small>Domain registration — {order.domain.registrationYears} year</small>{order.domain.premium ? <small>Premium domain</small> : null}</div>
          <strong>{money(order.domain.price, "USD")}</strong>
        </div>
      ) : null}

      {order.transfer ? (
        <div className="checkout-summary__line">
          <div><strong>{order.transfer.domain}</strong><small>Domain transfer</small><small>Includes a 1-year renewal where applicable</small></div>
          <strong>{money(order.transfer.price, "USD")}</strong>
        </div>
      ) : null}

      {order.hosting ? <div className="checkout-summary__renewal"><span>Hosting renewal</span><strong>{money(order.hosting.renewalPrice, "GBP")} / {order.hosting.billingPeriod === "annual" ? "year" : "month"}</strong></div> : null}
      {order.domain ? <div className="checkout-summary__renewal"><span>Domain renewal</span><strong>{money(order.domain.renewalPrice, "USD")} / year</strong></div> : null}
      {order.transfer ? <div className="checkout-summary__renewal"><span>Transferred domain renewal</span><strong>{money(order.transfer.renewalPrice, "USD")} / year</strong></div> : null}

      <div className="checkout-summary__total"><span>Total</span><strong>{totals}</strong></div>

      <button className="button" type="button" onClick={() => setPaymentMessage("Payments will be connected in the next step.")}>Continue to payment</button>
      <p className="checkout-summary__notice" aria-live="polite">{paymentMessage || "No payment will be processed yet."}</p>
    </section>
  );
}
