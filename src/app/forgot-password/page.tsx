import Link from "next/link";
import Image from "next/image";
import { getAuthHref, getSafeNextPath } from "@/auth/auth-routing";

export const metadata = { title: "Reset your password", description: "Kiyo Cloud password recovery." };

export default async function ForgotPasswordPage({ searchParams }: { searchParams: Promise<{ next?: string | string[] }> }) {
  const nextPath = getSafeNextPath((await searchParams).next);
  return (
    <main className="main auth-page"><div className="container"><section className="auth-panel" aria-labelledby="forgot-title">
      <Link className="auth-brand" href="/" aria-label="Kiyo Cloud home"><Image src="/images/logo.svg" alt="Kiyo Cloud" width={118} height={36} priority /></Link>
      <div className="auth-heading"><p className="domain-search-kicker">Kiyo account</p><h1 id="forgot-title">Reset your password.</h1><p>Password recovery will be connected with authentication later.</p></div>
      <div className="auth-form"><label><span>Email</span><input name="email" type="email" autoComplete="email" disabled /></label><button className="button auth-submit" type="button" disabled>Send reset link</button></div>
      <p className="auth-switch"><Link href={getAuthHref("/login", nextPath)}>Back to sign in</Link></p>
    </section></div></main>
  );
}
