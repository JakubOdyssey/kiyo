export type HostingBillingPeriod = "monthly" | "annual";

export interface HostingPlanPrice {
  amount: number;
  interval: "month" | "year";
  stripePriceId?: string;
}

export interface HostingPlan {
  id: "starter" | "business" | "pro";
  name: string;
  description: string;
  popular?: boolean;
  prices: Record<HostingBillingPeriod, HostingPlanPrice>;
  features: string[];
}

export const HOSTING_PLANS: HostingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "A simple home for one website.",
    prices: {
      monthly: { amount: 5.99, interval: "month" },
      annual: { amount: 59.99, interval: "year" },
    },
    features: ["1 website", "10 GB fast storage", "SSL included", "Automatic backups", "Guided website move"],
  },
  {
    id: "business",
    name: "Business",
    description: "More room for a growing business.",
    popular: true,
    prices: {
      monthly: { amount: 8.99, interval: "month" },
      annual: { amount: 89.99, interval: "year" },
    },
    features: ["Up to 5 websites", "30 GB fast storage", "SSL included", "Daily backups", "Priority website move"],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Extra capacity for busier websites.",
    prices: {
      monthly: { amount: 14.99, interval: "month" },
      annual: { amount: 149.99, interval: "year" },
    },
    features: ["Up to 20 websites", "80 GB fast storage", "SSL included", "Daily backups", "Priority support"],
  },
];

export function getHostingPlan(planId: HostingPlan["id"]) {
  return HOSTING_PLANS.find((plan) => plan.id === planId);
}
