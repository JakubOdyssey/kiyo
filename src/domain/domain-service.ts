import { normalizeDomainInput, normalizeTransferDomainInput } from "./normalize-domain";
import type { DomainProvider } from "./provider";
import { MockDomainProvider } from "./providers/mock-domain-provider";
import type { DomainSearchResponse, DomainTransferResult } from "./types";

const domainProvider: DomainProvider = new MockDomainProvider();

export async function searchDomains(query: string): Promise<DomainSearchResponse> {
  const normalized = normalizeDomainInput(query);
  const [result, suggestions] = await Promise.all([
    domainProvider.searchDomain(normalized.domain),
    domainProvider.getSuggestions(normalized.domain),
  ]);

  return { query: normalized.domain, result, suggestions };
}

export async function checkDomainTransfer(query: string): Promise<DomainTransferResult> {
  const normalized = normalizeTransferDomainInput(query);
  return domainProvider.checkTransferEligibility(normalized.domain);
}
