import "server-only";
import { Resend } from "resend";

export type SupportCategory =
  | "Hosting"
  | "Domains"
  | "Transfers"
  | "Billing"
  | "Account & Security"
  | "Kiyo Tools"
  | "Something else";

export interface TawkSupportRequest {
  name: string;
  email: string;
  category: SupportCategory;
  subject: string;
  message: string;
  attachment?: File;
  accountId?: string;
}

export type TawkTicketSubmissionResult =
  | { ok: true }
  | { ok: false; code: "SUPPORT_TRANSPORT_NOT_CONFIGURED" | "SUPPORT_DELIVERY_FAILED" };

const TAWK_FORWARDING_ADDRESS = process.env.TAWK_TICKET_FORWARD_EMAIL;
const SUPPORT_FROM_ADDRESS = process.env.SUPPORT_FROM_EMAIL;

function buildTicketText(request: TawkSupportRequest) {
  const accountLine = request.accountId ? `Account: ${request.accountId}\n` : "";

  return [
    `Name: ${request.name}`,
    `Email: ${request.email}`,
    `Category: ${request.category}`,
    accountLine.trimEnd(),
    "",
    "Message:",
    request.message,
    "",
    "Source: kiyocloud.com/support/ticket",
  ].filter((line, index, lines) => line !== "" || lines[index - 1] !== "").join("\n");
}

/**
 * Server-only ticket transport. Tawk.to remains the ticketing backend; Resend
 * only delivers the customer's request to the property's forwarding address.
 * Provider details stay behind this boundary so the UI can remain unchanged if
 * the delivery mechanism changes later.
 */
export async function submitTawkTicket(request: TawkSupportRequest): Promise<TawkTicketSubmissionResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || !TAWK_FORWARDING_ADDRESS || !SUPPORT_FROM_ADDRESS) {
    return { ok: false, code: "SUPPORT_TRANSPORT_NOT_CONFIGURED" };
  }

  const attachments = request.attachment
      ? [{
        filename: request.attachment.name,
        content: Buffer.from(await request.attachment.arrayBuffer()),
        contentType: request.attachment.type || undefined,
      }]
    : undefined;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: SUPPORT_FROM_ADDRESS,
      to: TAWK_FORWARDING_ADDRESS,
      replyTo: request.email,
      subject: `[Kiyo Support][${request.category}] ${request.subject}`,
      text: buildTicketText(request),
      attachments,
    });

    if (error || !data?.id) {
      return { ok: false, code: "SUPPORT_DELIVERY_FAILED" };
    }

    return { ok: true };
  } catch {
    return { ok: false, code: "SUPPORT_DELIVERY_FAILED" };
  }
}
