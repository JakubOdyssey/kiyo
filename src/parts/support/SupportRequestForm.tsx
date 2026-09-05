"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import TawkSupportButton from "@/parts/domains/TawkSupportButton";
import { COOKIE_PREFERENCES_EVENT } from "@/config/cookieInventory";

const categories = [
  "Hosting",
  "Domains",
  "Transfers",
  "Billing",
  "Account & Security",
  "Kiyo Tools",
  "Something else",
] as const;

const MAX_ATTACHMENT_BYTES = 3 * 1024 * 1024;

type FormState = "idle" | "submitting" | "success" | "error";

export default function SupportRequestForm({ defaultCategory = "" }: { defaultCategory?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const attachment = formData.get("attachment");

    if (attachment instanceof File && attachment.size > MAX_ATTACHMENT_BYTES) {
      setState("error");
      setStatusMessage("The attachment is larger than 3 MB. Choose a smaller file and try again.");
      return;
    }

    setState("submitting");
    setStatusMessage("");
    setEmailError("");

    try {
      const response = await fetch("/api/support/request", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: { email?: string };
      };

      if (response.ok && result.ok) {
        setSubmittedEmail(String(formData.get("email") || ""));
        setState("success");
        form.reset();
        return;
      }

      setState("error");
      setEmailError(result.fieldErrors?.email || "");
      setStatusMessage(result.message || "We couldn’t send your request. Nothing was submitted. Please try again or open live chat.");
    } catch {
      setState("error");
      setStatusMessage("We couldn’t reach support. Nothing was submitted. Please try again or open live chat.");
    }
  }

  function openLiveChat() {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
      return;
    }

    window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT));
  }

  if (state === "success") {
    return (
      <section className="section support-request-success" aria-labelledby="support-success-title">
        <p className="domain-search-kicker">Request sent</p>
        <h2 id="support-success-title" className="section-title">We’ve got your request.</h2>
        <p>We’ll reply to the email address you provided.</p>
        <p className="support-request-email">{submittedEmail}</p>
        <div className="support-request-actions">
          <TawkSupportButton label="Open live chat" fallbackHref="/support" />
          <Link className="support-request-link" href="/login">Sign in to Kiyo</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section support-request" aria-labelledby="support-request-title">
      <div className="support-request-intro">
        <div>
          <p className="domain-search-kicker">Support request</p>
          <h2 id="support-request-title" className="section-title">Tell us what’s happening.</h2>
          <p>Only the details Kiyo Support needs to understand the issue and reply to you.</p>
        </div>
        <p className="support-request-account">
          Have a Kiyo account? <Link href="/login">Sign in</Link> to keep your support conversations connected to your account.
        </p>
      </div>

      <form className="support-request-form" onSubmit={handleSubmit}>
        <div className="support-request-row">
          <label>
            <span>Name</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={emailError ? "true" : undefined}
              aria-describedby={emailError ? "support-email-error" : undefined}
              onChange={() => emailError && setEmailError("")}
            />
            {emailError ? <small id="support-email-error" className="support-request-field-error">{emailError}</small> : null}
          </label>
        </div>

        <label>
          <span>Category</span>
          <select name="category" defaultValue={categories.includes(defaultCategory as (typeof categories)[number]) ? defaultCategory : ""} required>
            <option value="" disabled>Select the closest match</option>
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </label>

        <label>
          <span>Subject</span>
          <input name="subject" type="text" required maxLength={160} />
        </label>

        <label>
          <span>Message</span>
          <textarea name="message" rows={7} required maxLength={5000} />
        </label>

        <label className="support-request-file">
          <span>Attachment <small>Optional</small></span>
          <input name="attachment" type="file" accept=".png,.jpg,.jpeg,.pdf,.txt,.log,image/png,image/jpeg,application/pdf,text/plain" />
          <small>PNG, JPG, PDF, TXT or LOG, up to 3 MB.</small>
        </label>

        <div className="support-request-honeypot" aria-hidden="true">
          <label htmlFor="companyWebsite">Company website</label>
          <input id="companyWebsite" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="support-request-submit">
          <button className="button" type="submit" disabled={state === "submitting"}>
            {state === "submitting" ? "Sending…" : "Send support request"}
          </button>
          <p>Prefer immediate help? <button className="support-request-chat-link" type="button" onClick={openLiveChat}>Open live chat</button>.</p>
        </div>

        {statusMessage && (
          <div className={`support-request-status support-request-status--${state}`} role="alert">
            <strong>We couldn’t send your request right now.</strong>
            <p>{statusMessage}</p>
            <div className="support-request-actions">
              <button className="button" type="submit">Try again</button>
              <TawkSupportButton label="Open live chat" fallbackHref="/support" />
            </div>
          </div>
        )}
      </form>

      <p className="support-request-note">Kiyo AI can help with quick questions, and you can ask for a real person at any time. Human support is never hidden behind the AI.</p>
    </section>
  );
}
