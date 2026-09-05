"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readPendingOrder, type PendingOrder } from "@/order/pending-order";

const money = (amount: number, currency: "USD" | "GBP") =>
  new Intl.NumberFormat(currency === "GBP" ? "en-GB" : "en-US", { style: "currency", currency }).format(amount);

export default function SignupHandoff() {
  const [order, setOrder] = useState<PendingOrder | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setOrder(readPendingOrder());
      setIsReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const hasSelection = Boolean(order?.domain || order?.hosting || order?.transfer);

  return (
    <section className="auth-handoff" aria-labelledby="auth-handoff-title">
      <p className="domain-search-kicker">Kiyo account</p>
      <h1 id="auth-handoff-title">Your next step is a secure Kiyo account.</h1>
      {!isReady ? (
        <p>Restoring your saved selection…</p>
      ) : hasSelection && order ? (
        <div className="auth-handoff__selection">
          <span>Saved for checkout</span>
          {order.hosting ? <><strong>{order.hosting.planName} Hosting</strong><small>{money(order.hosting.price, "GBP")} / {order.hosting.billingPeriod === "annual" ? "year" : "month"}</small></> : null}
          {order.domain ? <><strong>{order.domain.domain}</strong><small>{money(order.domain.price, "USD")} for the first year</small></> : null}
          {order.transfer ? <><strong>{order.transfer.domain}</strong><small>{money(order.transfer.price, "USD")} domain transfer</small></> : null}
        </div>
      ) : (
        <p>No product is selected yet. Choose a hosting plan or find your domain to continue.</p>
      )}
      <p>Account creation and sign-in will happen here later. No account has been created and no payment has been taken.</p>
      <div className="auth-handoff__actions">
        {hasSelection ? <Link className="button" href="/checkout">Continue to order summary</Link> : null}
        <Link className="button" href="/hosting-plans">View hosting plans</Link>
        <Link className="button" href="/domains">Find a domain</Link>
      </div>
    </section>
  );
}
