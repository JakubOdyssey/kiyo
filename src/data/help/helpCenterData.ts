import { HOSTING_PLANS } from "@/hosting/hosting-plans";
import { hostingArticles } from "@/data/help/hostingArticles";
import { domainArticles } from "@/data/help/domainArticles";
import { transferArticles } from "@/data/help/transferArticles";
import { billingArticles } from "@/data/help/billingArticles";
import { accountSecurityArticles } from "@/data/help/accountSecurityArticles";
import { troubleshootingArticles } from "@/data/help/troubleshootingArticles";
import type { HelpArticle, HelpCategory } from "@/data/help/types";

export type { HelpArticle, HelpCategory, HelpSection } from "@/data/help/types";

const money = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });
const configuredHostingPrices = HOSTING_PLANS.map((plan) =>
  `${plan.name}: ${money.format(plan.prices.monthly.amount)} monthly or ${money.format(plan.prices.annual.amount)} annually`,
);

export const helpCategories: readonly HelpCategory[] = [
  { slug: "getting-started", title: "Getting Started", description: "The basics of setting up and using Kiyo Cloud.", available: true },
  { slug: "hosting", title: "Hosting", description: "Everything you need to set up, manage and understand your Kiyo Hosting.", available: true },
  { slug: "domains", title: "Domains", description: "Everything you need to search, register, connect and manage your domains with Kiyo.", available: true },
  { slug: "transfers", title: "Transfers", description: "Everything you need to move an existing domain to Kiyo safely and without unnecessary complexity.", available: true },
  { slug: "billing", title: "Billing", description: "Clear guidance for payments, subscriptions, renewals and invoices in Kiyo.", available: true },
  { slug: "account-security", title: "Account & Security", description: "Manage your Kiyo account and keep access to your websites and domains protected.", available: true },
  { slug: "troubleshooting", title: "Troubleshooting", description: "Clear steps to help you understand and fix common Kiyo hosting, domain and account issues.", available: true },
];

export const gettingStartedArticles: readonly HelpArticle[] = [
  {
    title: "Welcome to Kiyo Cloud",
    description: "A quick introduction to Kiyo and the easiest way to get started.",
    category: "getting-started",
    slug: "welcome-to-kiyo",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Kiyo Cloud brings your website, hosting and domains together in one simple place.",
          "You do not need to understand servers, DNS settings or hosting infrastructure to get started. Kiyo is designed to keep the technical work in the background while giving you a clear way to manage the things that matter.",
        ],
      },
      {
        heading: "What you can do with Kiyo",
        paragraphs: ["With Kiyo Cloud you can:"],
        bullets: [
          "Host a new or existing website",
          "Register a new domain",
          "Transfer a domain you already own",
          "Manage hosting and domains from one account",
          "Get help through Kiyo Support",
          "Use Kiyo Tools to understand, protect and improve your website",
        ],
      },
      {
        heading: "If you're starting a new website",
        paragraphs: ["The usual path is:"],
        flow: ["Choose hosting", "Find a domain", "Create your account", "Complete setup"],
        callout: { text: "Kiyo will guide you through each step." },
      },
      {
        heading: "If you already have a website",
        paragraphs: [
          "You do not need to start again.",
          "You can move your existing website to Kiyo and either keep your current domain provider or transfer the domain to Kiyo later.",
        ],
      },
      {
        heading: "If you already own a domain",
        paragraphs: ["You can connect it to Kiyo Hosting without purchasing another one."],
      },
      {
        heading: "Need help?",
        paragraphs: [
          "Kiyo AI can answer common questions quickly, but customers can ask to speak with a real person at any time.",
          "Support tickets are also available for issues that require more investigation.",
        ],
      },
    ],
    relatedArticles: ["create-your-account", "choose-your-first-service", "set-up-your-first-website", "use-an-existing-domain"],
    lastUpdated: null,
  },
  {
    title: "Creating your Kiyo account",
    description: "What your Kiyo account will bring together and how to prepare for account creation.",
    category: "getting-started",
    slug: "create-your-account",
    sections: [
      { heading: "Before you begin", paragraphs: ["Your Kiyo account will be the place where you manage services, support and account details. Use an email address you can access reliably and keep your sign-in details private."] },
      { heading: "What your account will manage", bullets: ["Hosting services", "Domains and domain transfers", "Billing and renewals", "Support conversations and tickets"] },
      { heading: "Create your account", steps: ["Open the Kiyo account creation page.", "Enter your name, email address and a secure password.", "Review any hosting or domain selection carried into checkout.", "Create the account and continue to your Kiyo dashboard."] },
      { heading: "What comes next", paragraphs: ["Once your account is ready, choose a service or continue with a selection you already made. Kiyo keeps the setup guided and only asks for information relevant to the service you are adding."], callout: { text: "Security is included by default. Use a unique password and keep access to your account email secure." } },
    ],
    relatedArticles: ["welcome-to-kiyo", "choose-your-first-service", "understanding-your-dashboard"],
    lastUpdated: null,
  },
  {
    title: "Choosing your first service",
    description: "A simple way to decide whether to begin with hosting, a domain or both.",
    category: "getting-started",
    slug: "choose-your-first-service",
    sections: [
      { heading: "Start with what you need", paragraphs: ["Choose hosting if you need a home for a website. Choose a domain if you need a web address. Most new websites use both, but you do not have to purchase both from Kiyo."] },
      { heading: "If you already have a domain", paragraphs: ["You can start with Kiyo Hosting and connect a domain registered elsewhere. Transferring it to Kiyo can be considered later."] },
      { heading: "If you already have a website", paragraphs: ["Your starting point will usually be hosting. Kiyo Support can help you understand the information needed for a future migration without asking you to rebuild the site."] },
      { heading: "Compare what is included", paragraphs: ["Each Kiyo plan shows its website allowance, storage, backups and support level before you choose. Performance optimization and security essentials are included by default, so you are not asked to assemble a basic protection package yourself."], callout: { text: "The checkout summary shows the billing period and renewal amount before purchase." } },
    ],
    relatedArticles: ["welcome-to-kiyo", "set-up-your-first-website", "use-an-existing-domain"],
    lastUpdated: null,
  },
  {
    title: "Setting up your first website",
    description: "An overview of the path from choosing hosting to publishing your website.",
    category: "getting-started",
    slug: "set-up-your-first-website",
    sections: [
      { heading: "The setup path", flow: ["Choose hosting", "Connect or register a domain", "Add your website", "Review and publish"] },
      { heading: "What to have ready", bullets: ["The domain you want to use", "Your website files or chosen website platform", "Access to your current provider if you are moving an existing site"] },
      { heading: "If this is a new website", paragraphs: ["You can begin with hosting and a new domain, then follow the setup guidance provided for your chosen way of building the site."] },
      { heading: "Complete the guided setup", steps: ["Open your hosting service from the Kiyo dashboard.", "Choose whether you are creating a new website or moving an existing one.", "Select or connect the domain the website should use.", "Follow the guided checks until Kiyo confirms the website is ready."] },
      { heading: "What Kiyo handles", paragraphs: ["Kiyo keeps infrastructure choices out of the main setup. Security and performance essentials are applied by default, while the guided flow explains only the decisions you need to make."] },
    ],
    relatedArticles: ["choose-your-first-service", "use-an-existing-domain", "getting-support"],
    lastUpdated: null,
  },
  {
    title: "Using a domain you already own",
    description: "How an existing domain can be used with Kiyo Hosting without buying another one.",
    category: "getting-started",
    slug: "use-an-existing-domain",
    sections: [
      { heading: "You can keep your current domain", paragraphs: ["A domain does not need to be registered with Kiyo to work with Kiyo Hosting. You can keep it with its current provider and connect it to your Kiyo service."] },
      { heading: "Connecting or transferring", bullets: ["Connect the domain if you want to keep the current registrar.", "Transfer the domain if you want to manage it from your Kiyo account later."] },
      { heading: "What you will need", paragraphs: ["You will need access to the account where the domain is currently managed. The exact information required will depend on whether you connect or transfer it."] },
      { heading: "Connect the domain", steps: ["Open your Kiyo hosting service and choose to connect an existing domain.", "Enter the domain name you already own.", "Follow the guided domain check and sign in to your current domain provider when asked.", "Apply the records Kiyo provides, then return to Kiyo to verify the connection."] },
      { heading: "What happens next", paragraphs: ["Kiyo checks the connection and shows a clear status while domain changes take effect. Your domain stays registered with its current provider unless you separately choose a transfer."] },
    ],
    relatedArticles: ["welcome-to-kiyo", "set-up-your-first-website", "getting-support"],
    lastUpdated: null,
  },
  {
    title: "Understanding your Kiyo dashboard",
    description: "A plain-English overview of what you will manage from your Kiyo account.",
    category: "getting-started",
    slug: "understanding-your-dashboard",
    sections: [
      { heading: "One place for your Kiyo services", paragraphs: ["The Kiyo dashboard is the main place for viewing and managing your hosting, domains, account, support and Kiyo Tools."] },
      { heading: "What you can find", bullets: ["Active hosting services and website status", "Domains, connections and transfers", "Billing dates and renewal amounts", "Live chat and support tickets", "Website Score, monitoring, backups and other Kiyo Tools"] },
      { heading: "How to find what you need", paragraphs: ["Start from the service or website you want to work on. Kiyo groups relevant actions together and keeps advanced settings out of the way until you choose to view them."], callout: { text: "If you are unsure which setting to change, open live chat from your account before making the change." } },
    ],
    relatedArticles: ["create-your-account", "choose-your-first-service", "getting-support"],
    lastUpdated: null,
  },
  {
    title: "Getting help from Kiyo",
    description: "How to use live chat, human support and support tickets when you need help.",
    category: "getting-started",
    slug: "getting-support",
    sections: [
      { heading: "Kiyo Support is available 24/7", paragraphs: ["Kiyo AI is available around the clock for common questions. You can ask to speak with a real person at any time, without navigating through a bot maze."] },
      { heading: "Human support", paragraphs: ["The Kiyo team is available during the day. If you leave a message outside human support hours, the team can continue the conversation when they return."] },
      { heading: "When to open a ticket", paragraphs: ["Use a support ticket for an issue that needs more investigation or should remain connected to your account. Include a clear description of what happened and any useful context."] },
      { heading: "Choose the easiest route", bullets: ["Use live chat for a quick question.", "Ask for a person whenever you prefer human help.", "Open a support ticket when the issue needs follow-up."] },
    ],
    relatedArticles: ["welcome-to-kiyo", "create-your-account", "understanding-your-dashboard"],
    lastUpdated: null,
  },
  {
    title: "Meet Kiyo Tools",
    description: "A guide to the practical tools included in your Kiyo account and what each one helps you do.",
    category: "getting-started",
    slug: "kiyo-tools",
    sections: [
      { heading: "Practical tools in one account", paragraphs: ["Kiyo Tools gives you a growing set of simple ways to understand, protect and improve your website. The tools live alongside your hosting and domains, so you do not have to piece together separate technical services."] },
      { heading: "Website Score", paragraphs: ["Get a plain-English overview of website performance, mobile experience, SEO basics, security and accessibility, followed by the most useful things to fix first."] },
      { heading: "Monitoring", paragraphs: ["Check whether your website is reachable and know when a problem needs attention before customers have to tell you."] },
      { heading: "Backups", paragraphs: ["Protect important website data and recover a previous version when a mistake, update or unexpected issue affects the site."] },
      { heading: "Security", paragraphs: ["See useful security insights and use the protection included with Kiyo without working through unnecessary technical noise."] },
      { heading: "DNS", paragraphs: ["Manage the records that connect your domain to websites and services through clearer explanations and guided changes."] },
      { heading: "Analytics", paragraphs: ["Understand how people find and use your website through focused, readable information rather than an overwhelming reporting dashboard."] },
      { heading: "Forms", paragraphs: ["Create and manage practical website forms, then keep submissions connected to the site and account they belong to."] },
      { heading: "Deploy", paragraphs: ["Publish website changes through a guided process that makes the current state and next action clear."] },
      { heading: "Sites", paragraphs: ["Create and manage Kiyo-hosted websites from the same account used for domains, support and site health tools."] },
      { heading: "Why Kiyo groups these tools together", paragraphs: ["Website problems rarely belong to one technical category. Keeping these tools together lets Kiyo explain what is happening in context and guide you to the relevant action without expecting infrastructure knowledge."] },
    ],
    relatedArticles: ["website-score", "understanding-your-dashboard", "getting-support"],
    lastUpdated: null,
  },
  {
    title: "How Website Score works",
    description: "Understand your website's 0–100 score and decide what is worth fixing first.",
    category: "getting-started",
    slug: "website-score",
    sections: [
      { heading: "A simple view of website health", paragraphs: ["Website Score checks important parts of your website and combines them into an overall score from 0 to 100. It is designed to tell you what the result means, not just show technical measurements."] },
      { heading: "What Website Score evaluates", bullets: ["Performance", "Mobile experience and responsiveness", "SEO basics", "Security", "Accessibility"] },
      { heading: "Example Website Score", scoreExample: { score: 84, metrics: [{ label: "Performance", value: 91 }, { label: "Mobile", value: 72 }, { label: "SEO", value: 86 }, { label: "Security", value: 95 }, { label: "Accessibility", value: 68 }], recommendations: ["Improve mobile navigation", "Compress large images", "Improve text contrast"] } },
      { heading: "What to fix first", paragraphs: ["Kiyo turns the scan into a short prioritized list. The first items are selected because they are likely to make a meaningful difference, so you do not have to interpret every measurement yourself."] },
      { heading: "Advanced details", paragraphs: ["Measurements such as LCP, CLS and INP are available under Advanced details for customers who want them. They are not the default experience because most customers need a clear explanation and a useful next action first."] },
      { heading: "Relevant recommendations only", paragraphs: ["Basic Website Score is available as part of Kiyo. If a scan finds a problem that an optional Kiyo tool can help with, Kiyo may recommend that tool in the context of the result."], bullets: ["A detected performance issue may show a Kiyo Performance recommendation.", "A website without monitoring may show a Kiyo Monitor recommendation."], callout: { text: "Recommendations appear only when they relate to a real result. Kiyo does not use the score as a reason for unrelated or aggressive upsells." } },
    ],
    relatedArticles: ["kiyo-tools", "understanding-your-dashboard", "pricing-and-renewals"],
    lastUpdated: null,
  },
  {
    title: "How pricing and renewals work",
    description: "Understand Kiyo prices, billing periods, renewals and optional add-ons before you buy.",
    category: "getting-started",
    slug: "pricing-and-renewals",
    sections: [
      { heading: "Clear before you purchase", paragraphs: ["Kiyo shows the price you pay now, the billing period and the renewal amount before you complete a purchase. We do not use deliberately confusing introductory prices that hide a much higher renewal behind the first term."] },
      { heading: "Configured hosting prices", paragraphs: ["The current Kiyo hosting configuration offers monthly and annual billing:"], bullets: configuredHostingPrices, callout: { text: "Always review the live product page and checkout summary. They use the current product configuration and are the source of truth for the amount and renewal period you are accepting." } },
      { heading: "Renewal pricing", paragraphs: ["The renewal price is shown separately before purchase and remains visible with your service details. Domain prices can vary by extension, so registration, transfer and renewal amounts are shown for the specific domain you choose."] },
      { heading: "Included features and optional add-ons", paragraphs: ["Core hosting essentials such as security and performance optimization are included by default. Optional paid Kiyo Tools are listed separately, with their purpose and price made clear before you add them."] },
      { heading: "Why Kiyo works this way", paragraphs: ["A hosting account should be understandable without reading pricing footnotes. Clear billing makes it easier to compare plans, anticipate renewals and decide whether an optional tool is useful for your website."] },
    ],
    relatedArticles: ["choose-your-first-service", "kiyo-tools", "getting-support"],
    lastUpdated: null,
  },
];

export function getHelpCategory(slug: string) {
  return helpCategories.find((category) => category.slug === slug);
}

export function getArticlesForCategory(category: string) {
  if (category === "getting-started") return gettingStartedArticles;
  if (category === "hosting") return hostingArticles;
  if (category === "domains") return domainArticles;
  if (category === "transfers") return transferArticles;
  if (category === "billing") return billingArticles;
  if (category === "account-security") return accountSecurityArticles;
  if (category === "troubleshooting") return troubleshootingArticles;
  return [];
}

export function getHelpArticle(category: string, slug: string) {
  return getArticlesForCategory(category).find((article) => article.slug === slug);
}

export function getArticleNavigation(category: string, slug: string) {
  const articles = getArticlesForCategory(category);
  const index = articles.findIndex((article) => article.slug === slug);

  return {
    previous: index > 0 ? articles[index - 1] : null,
    next: index >= 0 && index < articles.length - 1 ? articles[index + 1] : null,
  };
}
