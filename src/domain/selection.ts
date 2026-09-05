import { SUPPORTED_TLDS } from "./types";
import type { DomainSearchResult, DomainSelection, SupportedTld } from "./types";
import { LEGACY_DOMAIN_SELECTION_KEY, persistPendingDomain, readPendingOrder } from "@/order/pending-order";

export const PENDING_ORDER_KEY = LEGACY_DOMAIN_SELECTION_KEY;

function isSupportedTld(value: unknown): value is SupportedTld {
  return typeof value === "string" && SUPPORTED_TLDS.some((tld) => tld === value);
}

interface LegacyDomainSelection {
  schemaVersion: 1;
  domain: string;
  tld: DomainSelection["tld"];
  registrationPeriodYears: 1;
  currentPrice: number;
  renewalPrice: number;
  currency: "USD";
  productType: "domain-registration";
  selectedAt: string;
}

export function createDomainSelection(result: DomainSearchResult): DomainSelection {
  return {
    schemaVersion: 2,
    domain: result.domain,
    tld: result.tld,
    productType: "domain",
    registrationYears: 1,
    price: result.price.registration,
    renewalPrice: result.price.renewal,
    premium: result.availability === "premium",
    currency: result.price.currency,
    selectedAt: new Date().toISOString(),
  };
}

export function persistDomainSelection(result: DomainSearchResult) {
  const selection = createDomainSelection(result);
  persistPendingDomain(selection);
  return selection;
}

function isCurrentSelection(value: Partial<DomainSelection>): value is DomainSelection {
  return (
    value.schemaVersion === 2 &&
    value.productType === "domain" &&
    typeof value.domain === "string" &&
    isSupportedTld(value.tld) &&
    value.registrationYears === 1 &&
    typeof value.price === "number" &&
    typeof value.renewalPrice === "number" &&
    typeof value.premium === "boolean"
  );
}

function migrateLegacySelection(value: Partial<LegacyDomainSelection>): DomainSelection | null {
  if (
    value.schemaVersion !== 1 ||
    value.productType !== "domain-registration" ||
    typeof value.domain !== "string" ||
    !isSupportedTld(value.tld) ||
    typeof value.currentPrice !== "number" ||
    typeof value.renewalPrice !== "number"
  ) {
    return null;
  }

  return {
    schemaVersion: 2,
    domain: value.domain,
    tld: value.tld,
    productType: "domain",
    registrationYears: 1,
    price: value.currentPrice,
    renewalPrice: value.renewalPrice,
    premium: false,
    currency: "USD",
    selectedAt: value.selectedAt ?? new Date().toISOString(),
  };
}

export function readDomainSelection(): DomainSelection | null {
  const currentOrder = readPendingOrder();
  if (currentOrder.domain) return currentOrder.domain;

  const storedValue = window.localStorage.getItem(PENDING_ORDER_KEY);
  if (!storedValue) return null;

  try {
    const parsed = JSON.parse(storedValue) as Record<string, unknown>;
    if (isCurrentSelection(parsed as Partial<DomainSelection>)) {
      const current = parsed as unknown as DomainSelection;
      persistPendingDomain(current);
      return current;
    }

    const migrated = migrateLegacySelection(parsed as Partial<LegacyDomainSelection>);
    if (!migrated) return null;

    persistPendingDomain(migrated);
    return migrated;
  } catch {
    return null;
  }
}
