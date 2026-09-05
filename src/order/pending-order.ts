import type { DomainSelection, DomainTransferResult, SupportedTld } from "@/domain/types";
import type { HostingBillingPeriod, HostingPlan } from "@/hosting/hosting-plans";

export const PENDING_ORDER_KEY = "kiyo-pending-order";
export const LEGACY_DOMAIN_SELECTION_KEY = "kiyo-domain-selection";

export interface HostingSelection {
  schemaVersion: 1;
  productType: "hosting";
  planId: HostingPlan["id"];
  planName: string;
  billingPeriod: HostingBillingPeriod;
  price: number;
  renewalPrice: number;
  currency: "GBP";
  selectedAt: string;
}

export interface DomainTransferSelection {
  schemaVersion: 1;
  productType: "domain_transfer";
  domain: string;
  tld: SupportedTld;
  price: number;
  renewalPrice: number;
  transferEligible: true;
  currency: "USD";
  selectedAt: string;
}

export interface PendingOrder {
  schemaVersion: 1;
  domain: DomainSelection | null;
  hosting: HostingSelection | null;
  transfer: DomainTransferSelection | null;
  updatedAt: string;
}

function emptyOrder(): PendingOrder {
  return { schemaVersion: 1, domain: null, hosting: null, transfer: null, updatedAt: new Date().toISOString() };
}

function isDomainTransferSelection(value: unknown): value is DomainTransferSelection {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<DomainTransferSelection>;
  return item.schemaVersion === 1 && item.productType === "domain_transfer" &&
    typeof item.domain === "string" && typeof item.tld === "string" &&
    typeof item.price === "number" && typeof item.renewalPrice === "number" &&
    item.transferEligible === true;
}

function isHostingSelection(value: unknown): value is HostingSelection {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<HostingSelection>;
  return item.schemaVersion === 1 && item.productType === "hosting" &&
    ["starter", "business", "pro"].includes(item.planId ?? "") &&
    (item.billingPeriod === "monthly" || item.billingPeriod === "annual") &&
    typeof item.price === "number" && typeof item.renewalPrice === "number";
}

function isDomainSelection(value: unknown): value is DomainSelection {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<DomainSelection>;
  return item.schemaVersion === 2 && item.productType === "domain" &&
    typeof item.domain === "string" && typeof item.price === "number" &&
    typeof item.renewalPrice === "number";
}

export function readPendingOrder(): PendingOrder {
  const stored = window.localStorage.getItem(PENDING_ORDER_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as Partial<PendingOrder>;
      if (parsed.schemaVersion === 1) {
        return {
          schemaVersion: 1,
          domain: isDomainSelection(parsed.domain) ? parsed.domain : null,
          hosting: isHostingSelection(parsed.hosting) ? parsed.hosting : null,
          transfer: isDomainTransferSelection(parsed.transfer) ? parsed.transfer : null,
          updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
        };
      }
    } catch {
      // A malformed local value should never block the public purchase flow.
    }
  }

  return emptyOrder();
}

export function persistPendingOrder(order: PendingOrder) {
  const next = { ...order, updatedAt: new Date().toISOString() };
  window.localStorage.setItem(PENDING_ORDER_KEY, JSON.stringify(next));
  return next;
}

export function persistPendingDomain(domain: DomainSelection) {
  const next = persistPendingOrder({ ...readPendingOrder(), domain });
  window.localStorage.removeItem(LEGACY_DOMAIN_SELECTION_KEY);
  return next;
}

export function persistHostingSelection(plan: HostingPlan, billingPeriod: HostingBillingPeriod) {
  const selectedPrice = plan.prices[billingPeriod];
  const selection: HostingSelection = {
    schemaVersion: 1,
    productType: "hosting",
    planId: plan.id,
    planName: plan.name,
    billingPeriod,
    price: selectedPrice.amount,
    renewalPrice: selectedPrice.amount,
    currency: "GBP",
    selectedAt: new Date().toISOString(),
  };
  persistPendingOrder({ ...readPendingOrder(), hosting: selection });
  return selection;
}

export function persistDomainTransfer(result: DomainTransferResult) {
  if (result.eligibility !== "available") throw new Error("This domain is not ready to transfer.");
  const selection: DomainTransferSelection = {
    schemaVersion: 1,
    productType: "domain_transfer",
    domain: result.domain,
    tld: result.tld,
    price: result.price.transfer,
    renewalPrice: result.price.renewal,
    transferEligible: true,
    currency: result.price.currency,
    selectedAt: new Date().toISOString(),
  };
  persistPendingOrder({ ...readPendingOrder(), transfer: selection });
  return selection;
}
