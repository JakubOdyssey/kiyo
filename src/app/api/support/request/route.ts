import { NextResponse } from "next/server";
import { checkSupportRateLimit } from "@/lib/support/supportRateLimit";
import { submitTawkTicket, type SupportCategory } from "@/lib/support/tawkTicketAdapter";

const categories = new Set<SupportCategory>([
  "Hosting",
  "Domains",
  "Transfers",
  "Billing",
  "Account & Security",
  "Kiyo Tools",
  "Something else",
]);
const MAX_ATTACHMENT_BYTES = 3 * 1024 * 1024;
const allowedAttachmentTypes = new Set(["image/png", "image/jpeg", "application/pdf", "text/plain"]);
const allowedAttachmentExtensions = new Set(["png", "jpg", "jpeg", "pdf", "txt", "log"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function textValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

function isAllowedAttachment(file: File) {
  const extension = file.name.split(".").pop()?.toLowerCase() || "";
  return allowedAttachmentTypes.has(file.type) && allowedAttachmentExtensions.has(extension);
}

export async function POST(request: Request) {
  const rateLimit = checkSupportRateLimit(getClientIdentifier(request));

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { ok: false, code: "RATE_LIMITED", message: "Too many requests were sent. Wait a few minutes, then try again." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "The submitted form could not be read." }, { status: 400 });
  }

  if (textValue(formData, "companyWebsite")) {
    return NextResponse.json({ ok: false, message: "We couldn’t send your request right now." }, { status: 400 });
  }

  const name = textValue(formData, "name");
  const email = textValue(formData, "email");
  const category = textValue(formData, "category") as SupportCategory;
  const subject = textValue(formData, "subject");
  const message = textValue(formData, "message");
  const attachmentValue = formData.get("attachment");
  const attachment = attachmentValue instanceof File && attachmentValue.size > 0 ? attachmentValue : undefined;

  if (!name || !category || !subject || !message) {
    return NextResponse.json({ ok: false, message: "Complete all required fields and try again." }, { status: 400 });
  }

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Check the email address and try again.", fieldErrors: { email: "Enter a valid email address." } },
      { status: 400 },
    );
  }

  if (name.length > 120 || subject.length > 160 || message.length > 5000) {
    return NextResponse.json({ ok: false, message: "One or more fields are too long." }, { status: 400 });
  }

  if (attachment && attachment.size > MAX_ATTACHMENT_BYTES) {
    return NextResponse.json({ ok: false, message: "The attachment must be 3 MB or smaller." }, { status: 400 });
  }

  if (attachment && !isAllowedAttachment(attachment)) {
    return NextResponse.json({ ok: false, message: "Attach a PNG, JPG, PDF, TXT or LOG file." }, { status: 400 });
  }

  const result = await submitTawkTicket({ name, email, category, subject, message, attachment });

  if (!result.ok) {
    const isNotConfigured = result.code === "SUPPORT_TRANSPORT_NOT_CONFIGURED";
    return NextResponse.json(
      {
        ok: false,
        code: result.code,
        message: isNotConfigured
          ? "We couldn’t send your request right now. Nothing was submitted. Please open live chat or try again shortly."
          : "We couldn’t send your request right now. Your message is still in the form — try again or open live chat.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
