export const SUPPORTED_TLDS = [
  ".com",
  ".net",
  ".org",
  ".co",
  ".io",
  ".co.uk",
  ".de",
  ".com.au",
  ".ai",
] as const;

export type SupportedTld = (typeof SUPPORTED_TLDS)[number];
export type DomainAvailability = "available" | "unavailable" | "premium";

export interface DomainPrice {
  tld: SupportedTld;
  registration: number;
  renewal: number;
  currency: "USD";
  mock: true;
}

export interface DomainSearchResult {
  domain: string;
  label: string;
  tld: SupportedTld;
  availability: DomainAvailability;
  price: DomainPrice;
}

export type DomainSuggestion = DomainSearchResult;

export interface DomainSearchResponse {
  query: string;
  result: DomainSearchResult;
  suggestions: DomainSuggestion[];
}

export interface RegistrationData {
  domain: string;
  registrationPeriodYears: number;
  customerId: string;
}

export interface RegistrationResult {
  success: boolean;
  domain: string;
  reference?: string;
}

export type DomainTransferEligibility = "available" | "already_managed" | "temporarily_unavailable";

export interface DomainTransferPrice {
  tld: SupportedTld;
  transfer: number;
  renewal: number;
  currency: "USD";
  mock: true;
}

export interface DomainTransferResult {
  domain: string;
  label: string;
  tld: SupportedTld;
  eligibility: DomainTransferEligibility;
  price: DomainTransferPrice;
}

export interface DomainTransferData {
  domain: string;
  customerId: string;
  transferCode: string;
}

export interface DomainTransferExecutionResult {
  success: boolean;
  domain: string;
  reference?: string;
}

export interface DomainSelection {
  schemaVersion: 2;
  domain: string;
  tld: SupportedTld;
  productType: "domain";
  registrationYears: 1;
  price: number;
  renewalPrice: number;
  premium: boolean;
  currency: "USD";
  selectedAt: string;
}
