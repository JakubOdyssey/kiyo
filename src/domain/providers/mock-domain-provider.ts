import { MOCK_DOMAIN_PRICING } from "../mock-pricing";
import { normalizeDomainInput, normalizeTransferDomainInput, splitSupportedDomain } from "../normalize-domain";
import type { DomainProvider } from "../provider";
import type {
  DomainAvailability,
  DomainPrice,
  DomainSearchResult,
  DomainSuggestion,
  DomainTransferData,
  DomainTransferExecutionResult,
  DomainTransferPrice,
  DomainTransferResult,
  RegistrationData,
  RegistrationResult,
  SupportedTld,
} from "../types";

const RESERVED_LABELS = new Set(["amazon", "apple", "google", "kiyo", "microsoft", "openai"]);
const PROVIDER_ERROR_LABELS = new Set(["provider-error", "providererror"]);
const KIYO_MANAGED_LABELS = new Set(["kiyo", "kiyocloud", "managedbykiyo"]);
const MOCK_LATENCY_MS = 140;

function waitForMockProvider() {
  return new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));
}

function stableHash(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function getAvailability(domain: string, label: string): DomainAvailability {
  const score = stableHash(domain);
  if (RESERVED_LABELS.has(label) || score % 5 === 0) return "unavailable";
  if (score % 11 === 0) return "premium";
  return "available";
}

function getDomainPrice(tld: SupportedTld, availability: DomainAvailability, domain: string) {
  const base = MOCK_DOMAIN_PRICING[tld];
  if (availability !== "premium") return { ...base };

  const multiplier = 12 + (stableHash(domain) % 19);
  const premiumPrice = Number((base.registration * multiplier).toFixed(2));
  return { ...base, registration: premiumPrice, renewal: premiumPrice };
}

export class MockDomainProvider implements DomainProvider {
  async searchDomain(domain: string): Promise<DomainSearchResult> {
    const normalized = splitSupportedDomain(domain);
    await waitForMockProvider();

    if (PROVIDER_ERROR_LABELS.has(normalized.label)) {
      throw new Error("The domain provider is temporarily unavailable. Please try again.");
    }

    const availability = getAvailability(normalized.domain, normalized.label);

    return {
      ...normalized,
      availability,
      price: getDomainPrice(normalized.tld, availability, normalized.domain),
    };
  }

  async getSuggestions(query: string): Promise<DomainSuggestion[]> {
    const { label, domain: searchedDomain } = normalizeDomainInput(query);
    const candidates = [
      `${label}.com`,
      `${label}.co`,
      `get${label}.com`,
      `${label}online.com`,
      `${label}hq.com`,
      `${label}.net`,
      `${label}.io`,
      `${label}.co.uk`,
    ];

    const uniqueCandidates = [...new Set(candidates)].filter((domain) => domain !== searchedDomain);
    const results = await Promise.all(uniqueCandidates.map((domain) => this.searchDomain(domain)));
    return results.slice(0, 7);
  }

  async getPrice(tld: SupportedTld): Promise<DomainPrice> {
    return { ...MOCK_DOMAIN_PRICING[tld] };
  }

  async registerDomain(data: RegistrationData): Promise<RegistrationResult> {
    return { success: false, domain: data.domain };
  }

  async checkTransferEligibility(domain: string): Promise<DomainTransferResult> {
    const normalized = normalizeTransferDomainInput(domain);
    await waitForMockProvider();
    const price = await this.getTransferPrice(normalized.tld);

    if (PROVIDER_ERROR_LABELS.has(normalized.label)) {
      return { ...normalized, eligibility: "temporarily_unavailable", price };
    }

    if (KIYO_MANAGED_LABELS.has(normalized.label)) {
      return { ...normalized, eligibility: "already_managed", price };
    }

    return { ...normalized, eligibility: "available", price };
  }

  async getTransferPrice(tld: SupportedTld): Promise<DomainTransferPrice> {
    const price = await this.getPrice(tld);
    return { tld, transfer: price.renewal, renewal: price.renewal, currency: price.currency, mock: true };
  }

  async transferDomain(data: DomainTransferData): Promise<DomainTransferExecutionResult> {
    return { success: false, domain: data.domain };
  }
}
