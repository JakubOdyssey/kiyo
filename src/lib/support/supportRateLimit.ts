import "server-only";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

type RateLimitEntry = { count: number; resetAt: number };

const globalForSupportRateLimit = globalThis as typeof globalThis & {
  supportRateLimits?: Map<string, RateLimitEntry>;
};

const entries = globalForSupportRateLimit.supportRateLimits ?? new Map<string, RateLimitEntry>();
globalForSupportRateLimit.supportRateLimits = entries;

export function checkSupportRateLimit(identifier: string) {
  const now = Date.now();
  const current = entries.get(identifier);

  if (!current || current.resetAt <= now) {
    entries.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
