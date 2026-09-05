export const COOKIE_CONSENT_STORAGE_KEY = "kiyo-cookie-consent";
export const COOKIE_CONSENT_EVENT = "kiyo:cookie-consent";
export const COOKIE_PREFERENCES_EVENT = "kiyo:open-cookie-preferences";

// Before deploying a new browser-side integration: audit its storage, classify
// its purpose, determine consent, then update this inventory, the policy and
// the consent controls together.
export const cookieInventory = [
  { name: "kiyo-cookie-consent", provider: "Kiyo Cloud", category: "necessary", purpose: "Stores the visitor's cookie and optional-support preference.", storageType: "Local storage", duration: "Until the choice is changed or browser data is cleared", consentRequired: false },
  { name: "kiyo-pending-order", provider: "Kiyo Cloud", category: "necessary", purpose: "Preserves a requested hosting, domain or transfer selection through the order flow.", storageType: "Local storage", duration: "Until replaced, removed after the order flow, or browser data is cleared", consentRequired: false },
  { name: "tawk_uuid_*", provider: "tawk.to", category: "support", purpose: "Recognizes a returning chat visitor and supports conversation continuity.", storageType: "Cookie", duration: "Up to 6 months according to tawk.to", consentRequired: true },
  { name: "twk_idm_key", provider: "tawk.to", category: "support", purpose: "Manages the visitor connection used by the chat widget.", storageType: "Cookie", duration: "Session", consentRequired: true },
  { name: "TawkConnectionTime", provider: "tawk.to", category: "support", purpose: "Coordinates connection timing for the chat widget.", storageType: "Cookie", duration: "Session", consentRequired: true },
  { name: "twk_token_* / token", provider: "tawk.to", category: "support", purpose: "Maintains the chat session and widget connection state.", storageType: "Local storage", duration: "Provider-controlled; tawk.to does not publish a fixed duration", consentRequired: true },
  { name: "$navigator.locks-requestQueueMap, $navigator.locks-clientIds, $navigator.locks-heldLockSet", provider: "tawk.to", category: "support", purpose: "Coordinates the widget connection across multiple open tabs.", storageType: "Local storage", duration: "Temporary; removed by the widget after use", consentRequired: true },
  { name: "PreviousNav", provider: "tawk.to", category: "support", purpose: "Remembers the previous page for the active chat session.", storageType: "Session storage", duration: "Until the browser tab is closed", consentRequired: true },
];

export const necessaryTechnologies = cookieInventory.filter((item) => item.category === "necessary");
export const supportTechnologies = cookieInventory.filter((item) => item.category === "support");
