import type { DomainPrice, SupportedTld } from "./types";

// Development-only retail pricing used by MockDomainProvider.
export const MOCK_DOMAIN_PRICING: Record<SupportedTld, DomainPrice> = {
  ".com": { tld: ".com", registration: 13.99, renewal: 13.99, currency: "USD", mock: true },
  ".net": { tld: ".net", registration: 15.99, renewal: 15.99, currency: "USD", mock: true },
  ".org": { tld: ".org", registration: 12.99, renewal: 12.99, currency: "USD", mock: true },
  ".co": { tld: ".co", registration: 24.99, renewal: 24.99, currency: "USD", mock: true },
  ".io": { tld: ".io", registration: 39.99, renewal: 39.99, currency: "USD", mock: true },
  ".co.uk": { tld: ".co.uk", registration: 10.99, renewal: 10.99, currency: "USD", mock: true },
  ".de": { tld: ".de", registration: 9.99, renewal: 9.99, currency: "USD", mock: true },
  ".com.au": { tld: ".com.au", registration: 15.99, renewal: 15.99, currency: "USD", mock: true },
  ".ai": { tld: ".ai", registration: 79.99, renewal: 79.99, currency: "USD", mock: true },
};
