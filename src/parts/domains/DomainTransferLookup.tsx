"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { DomainTransferResult } from "@/domain/types";
import { persistDomainTransfer } from "@/order/pending-order";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

const statusCopy = {
  already_managed: {
    title: "Already managed by Kiyo",
    message: "This domain is already part of Kiyo Cloud. You can manage it from your Kiyo account.",
  },
  temporarily_unavailable: {
    title: "Transfer temporarily unavailable",
    message: "We cannot check this transfer right now. Please try again shortly or talk to Kiyo Support.",
  },
};

export default function DomainTransferLookup() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<DomainTransferResult | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setResult(null);
    setIsLoading(true);

    try {
      const response = await fetch(`/api/domains/transfer/check?q=${encodeURIComponent(query)}`);
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "We could not check that transfer.");
      setResult(payload as DomainTransferResult);
    } catch (lookupError) {
      setError(lookupError instanceof Error ? lookupError.message : "We could not check that transfer.");
    } finally {
      setIsLoading(false);
    }
  }

  function continueTransfer() {
    if (!result || result.eligibility !== "available") return;
    persistDomainTransfer(result);
    router.push("/signup?next=/checkout");
  }

  return (
    <section id="transfer" className="domain-search-section domain-transfer-lookup" aria-labelledby="domain-transfer-title">
      <div className="domain-search-intro">
        <p className="domain-search-kicker">Domain transfer</p>
        <h2 id="domain-transfer-title" className="section-title">Transfer your domain</h2>
        <p>Enter the address you already own. We will check whether it is ready to move.</p>
      </div>

      <form className="domain-search-form" onSubmit={handleSubmit} noValidate>
        <label className="screen-reader-text" htmlFor="transfer-domain">Domain name</label>
        <input id="transfer-domain" name="domain" type="text" inputMode="url" autoComplete="off" spellCheck={false} placeholder="yourbusiness.com" value={query} onChange={(event) => setQuery(event.target.value)} aria-describedby="transfer-domain-hint" />
        <button className="button domain-search-submit" type="submit" disabled={isLoading}>{isLoading ? "Checking…" : "Check transfer"}</button>
      </form>
      <p id="transfer-domain-hint" className="domain-search-hint">Enter the full domain, including its ending.</p>

      <div className="domain-search-feedback" aria-live="polite">
        {error ? <p className="domain-search-error">{error}</p> : null}
        {isLoading ? <div className="domain-search-loading"><span />Checking whether your domain is ready to move…</div> : null}
      </div>

      {result ? (
        result.eligibility === "available" ? (
          <div className="domain-transfer-result domain-result--primary">
            <div className="domain-result__identity"><strong>{result.domain}</strong><span className="domain-status domain-status--available">Ready to transfer</span></div>
            <div className="domain-result__price"><strong>{money.format(result.price.transfer)} <span>transfer price</span></strong><small>Includes a 1-year renewal where applicable</small><small>Renews at {money.format(result.price.renewal)} / year</small></div>
            <button className="button domain-get-button" type="button" onClick={continueTransfer}>Continue transfer</button>
            <small className="domain-transfer-mock-note">Development pricing only. No payment will be taken yet.</small>
          </div>
        ) : (
          <div className="domain-transfer-result domain-result--primary">
            <div className="domain-result__identity"><strong>{result.domain}</strong><span className="domain-status">{statusCopy[result.eligibility].title}</span></div>
            <p>{statusCopy[result.eligibility].message}</p>
          </div>
        )
      ) : null}
    </section>
  );
}
