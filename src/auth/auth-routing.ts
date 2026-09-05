export function getSafeNextPath(value: string | string[] | undefined) {
  const candidate = Array.isArray(value) ? value[0] : value;
  if (!candidate || !candidate.startsWith("/") || candidate.startsWith("//")) return null;
  return candidate;
}

export function getAuthHref(path: "/login" | "/signup" | "/forgot-password", nextPath: string | null) {
  return nextPath ? `${path}?next=${encodeURIComponent(nextPath)}` : path;
}
