import { SUPPORTED_TLDS, type SupportedTld } from "./types";

const TLDS_BY_LENGTH = [...SUPPORTED_TLDS].sort((a, b) => b.length - a.length);

export interface NormalizedDomain {
  domain: string;
  label: string;
  tld: SupportedTld;
}

export function normalizeDomainInput(input: string): NormalizedDomain {
  let value = input.trim().toLowerCase();
  value = value.replace(/^https?:\/\//, "").replace(/^www\./, "");
  value = value.split(/[/?#]/, 1)[0].replace(/\.$/, "");

  if (!value) {
    throw new Error("Enter a domain name to search.");
  }

  if (value.length > 253 || /[^a-z0-9.-]/.test(value)) {
    throw new Error("Use letters, numbers and hyphens only.");
  }

  const matchedTld = TLDS_BY_LENGTH.find((tld) => value.endsWith(tld));
  const tld: SupportedTld = matchedTld ?? ".com";
  const label = matchedTld ? value.slice(0, -matchedTld.length) : value;

  if (!label || label.includes(".")) {
    throw new Error("Enter one name with a supported domain ending.");
  }

  if (label.length > 63 || !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(label)) {
    throw new Error("That name is not in a valid domain format.");
  }

  return { domain: `${label}${tld}`, label, tld };
}

export function splitSupportedDomain(domain: string): NormalizedDomain {
  return normalizeDomainInput(domain);
}

export function normalizeTransferDomainInput(input: string): NormalizedDomain {
  let value = input.trim().toLowerCase();
  value = value.replace(/^https?:\/\//, "").replace(/^www\./, "");
  value = value.split(/[/?#]/, 1)[0].replace(/\.$/, "");

  if (!value) throw new Error("Enter the domain you want to transfer.");
  if (value.length > 253 || /[^a-z0-9.-]/.test(value)) throw new Error("Enter a valid domain using letters, numbers and hyphens.");

  const matchedTld = TLDS_BY_LENGTH.find((tld) => value.endsWith(tld));
  if (!matchedTld) throw new Error("That domain ending is not supported for transfers yet.");

  const label = value.slice(0, -matchedTld.length);
  if (!label || label.includes(".") || label.length > 63 || !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(label)) {
    throw new Error("That does not look like a valid domain.");
  }

  return { domain: `${label}${matchedTld}`, label, tld: matchedTld };
}
