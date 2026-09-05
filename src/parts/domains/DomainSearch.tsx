"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { persistDomainSelection } from "@/domain/selection";
import type { DomainSearchResponse, DomainSearchResult } from "@/domain/types";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Availability({ value }: { value: DomainSearchResult["availability"] }) {
  const labels = {
    available: "Available",
    unavailable: "Unavailable",
    premium: "Premium",
  };

  return <span className={`domain-status domain-status--${value}`}>{labels[value]}</span>;
}

function DomainResultRow({
  result,
  primary = false,
  onSelect,
}: {
  result: DomainSearchResult;
  primary?: boolean;
  onSelect: (result: DomainSearchResult) => void;
}) {
  const canSelect = result.availability !== "unavailable";

  return (
    <div className={`domain-result${primary ? " domain-result--primary" : ""}`}>
      <div className="domain-result__identity">
        <strong>{result.domain}</strong>
        <Availability value={result.availability} />
      </div>
      <div className="domain-result__price">
        {result.availability === "premium" ? (
          <>
            <strong>{currency.format(result.price.registration)} <span>premium registration</span></strong>
            <small>Premium renewal: {currency.format(result.price.renewal)} / year</small>
          </>
        ) : canSelect ? (
          <>
            <strong>{currency.format(result.price.registration)} <span>/ year</span></strong>
            <small>Renews at {currency.format(result.price.renewal)} / year</small>
          </>
        ) : (
          <small>Try one of the alternatives below.</small>
        )}
      </div>
      <div className="domain-result__action">
        {canSelect && (
          <button className={primary ? "button domain-get-button" : "domain-add-button"} type="button" onClick={() => onSelect(result)}>
            {primary ? "Get this domain" : "Get"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function DomainSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [data, setData] = useState<DomainSearchResponse | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setData(null);
    setIsLoading(true);

    try {
      const response = await fetch(`/api/domains/search?q=${encodeURIComponent(query)}`);
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "We could not search that domain.");
      setData(payload as DomainSearchResponse);
    } catch (searchError) {
      setError(searchError instanceof Error ? searchError.message : "We could not search that domain.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSelect(result: DomainSearchResult) {
    persistDomainSelection(result);
    router.push("/signup?next=/checkout");
  }

  return (
    <section className="domain-search-section" aria-labelledby="domain-search-title">
      <div className="domain-search-intro">
        <p className="domain-search-kicker">Domain search</p>
        <h2 id="domain-search-title" className="section-title">Start with the right name</h2>
        <p>Search freely. You will only need an account when you are ready to continue.</p>
      </div>

      <form className="domain-search-form" onSubmit={handleSubmit} noValidate>
        <label className="screen-reader-text" htmlFor="domain-query">Domain name</label>
        <input
          id="domain-query"
          name="domain"
          type="text"
          inputMode="url"
          autoComplete="off"
          spellCheck={false}
          placeholder="yourbusiness.com"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-describedby="domain-search-hint"
        />
        <button className="button domain-search-submit" type="submit" disabled={isLoading}>
          {isLoading ? "Searching…" : "Search"}
        </button>
      </form>
      <p id="domain-search-hint" className="domain-search-hint">Try a name such as acme, acme.com or mybusiness.co.uk.</p>

      <div className="domain-search-feedback" aria-live="polite">
        {error && <p className="domain-search-error">{error}</p>}
        {isLoading && <div className="domain-search-loading"><span />Checking your name and a few useful alternatives…</div>}
      </div>

      {!data && !isLoading && !error && (
        <div className="domain-search-empty">
          <span>.com</span>
          <span>.co.uk</span>
          <span>.io</span>
          <span>.ai</span>
          <span>.com.au</span>
        </div>
      )}

      {data && (
        <div className="domain-search-results">
          <DomainResultRow result={data.result} primary onSelect={handleSelect} />
          <div className="domain-suggestions-heading">
            <h3>{data.result.availability === "unavailable" ? "Other names worth considering" : "More ways to make it yours"}</h3>
            <p>Availability and prices are checked for this search.</p>
          </div>
          <div className="domain-suggestions">
            {data.suggestions.map((suggestion) => (
              <DomainResultRow key={suggestion.domain} result={suggestion} onSelect={handleSelect} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
