import type {
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
} from "./types";

export interface DomainProvider {
  searchDomain(domain: string): Promise<DomainSearchResult>;
  getSuggestions(query: string): Promise<DomainSuggestion[]>;
  getPrice(tld: SupportedTld): Promise<DomainPrice>;
  registerDomain(data: RegistrationData): Promise<RegistrationResult>;
  checkTransferEligibility(domain: string): Promise<DomainTransferResult>;
  getTransferPrice(tld: SupportedTld): Promise<DomainTransferPrice>;
  transferDomain(data: DomainTransferData): Promise<DomainTransferExecutionResult>;
}
