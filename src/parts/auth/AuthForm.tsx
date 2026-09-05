"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { getAuthHref } from "@/auth/auth-routing";
import { readPendingOrder, type PendingOrder } from "@/order/pending-order";

const money = (amount: number, currency: "USD" | "GBP") =>
  new Intl.NumberFormat(currency === "GBP" ? "en-GB" : "en-US", { style: "currency", currency }).format(amount);

function PendingOrderPreview({ order }: { order: PendingOrder | null }) {
  if (!order || (!order.domain && !order.hosting && !order.transfer)) return null;

  return (
    <div className="auth-order-preview">
      <span>Saved for later checkout</span>
      {order.hosting ? <p><strong>{order.hosting.planName} Hosting</strong><small>{money(order.hosting.price, "GBP")} / {order.hosting.billingPeriod === "annual" ? "year" : "month"}</small></p> : null}
      {order.domain ? <p><strong>{order.domain.domain}</strong><small>{money(order.domain.price, "USD")} domain registration</small></p> : null}
      {order.transfer ? <p><strong>{order.transfer.domain}</strong><small>{money(order.transfer.price, "USD")} domain transfer</small></p> : null}
    </div>
  );
}

export default function AuthForm({ mode, nextPath }: { mode: "login" | "signup"; nextPath: string | null }) {
  const [order, setOrder] = useState<PendingOrder | null>(null);
  const [message, setMessage] = useState("");
  const isLogin = mode === "login";

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setOrder(readPendingOrder()));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Authentication will be connected in a later step. Your details have not been submitted.");
  }

  return (
    <section className="auth-panel" aria-labelledby="auth-title">
      <Link className="auth-brand" href="/" aria-label="Kiyo Cloud home"><Image src="/images/logo.svg" alt="Kiyo Cloud" width={118} height={36} priority /></Link>
      <div className="auth-heading">
        <p className="domain-search-kicker">Kiyo account</p>
        <h1 id="auth-title">{isLogin ? "Welcome back." : "Create your Kiyo account."}</h1>
        <p>{isLogin ? "Sign in to manage your hosting, domains, and account." : "Everything you need to manage your hosting and domains in one place."}</p>
      </div>

      <PendingOrderPreview order={order} />

      <form className="auth-form" onSubmit={handleSubmit}>
        {!isLogin ? <label><span>Name</span><input name="name" type="text" autoComplete="name" required /></label> : null}
        <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
        <label><span>Password</span><input name="password" type="password" autoComplete={isLogin ? "current-password" : "new-password"} minLength={8} required /></label>
        {isLogin ? <Link className="auth-forgot" href={getAuthHref("/forgot-password", nextPath)}>Forgot password?</Link> : null}
        <button className="button auth-submit" type="submit">{isLogin ? "Sign in" : "Create account"}</button>
      </form>

      <p className="auth-status" aria-live="polite">{message}</p>
      <p className="auth-switch">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <Link href={getAuthHref(isLogin ? "/signup" : "/login", nextPath)}>{isLogin ? "Create an account" : "Sign in"}</Link>
      </p>
      {nextPath ? <p className="auth-next-note">Your next step after future authentication: <strong>{nextPath}</strong></p> : null}
    </section>
  );
}
