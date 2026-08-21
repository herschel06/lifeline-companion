import { NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  email: z.string().trim().min(3).max(254).email(),
  source: z.string().trim().max(64).optional(),
});

type SheetRow = {
  email: string;
  source: string;
  submittedAt: string;
  userAgent: string;
  secret?: string;
};

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Malformed request.", 400);
  }

  const parsed = payloadSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError("Please enter a valid email address.", 400);
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("[waitlist] GOOGLE_SHEETS_WEBHOOK_URL is not set; cannot record signup.");
    return jsonError("Signups are temporarily unavailable. Please try again later.", 503);
  }

  const row: SheetRow = {
    email: parsed.data.email.toLowerCase(),
    source: parsed.data.source ?? "unknown",
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? "",
  };

  const sharedSecret = process.env.GOOGLE_SHEETS_SHARED_SECRET;
  if (sharedSecret) row.secret = sharedSecret;

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
      signal: AbortSignal.timeout(8000),
      redirect: "follow",
    });

    const raw = await response.text();

    if (!response.ok) {
      console.error("[waitlist] Sheet webhook returned", response.status, raw.slice(0, 500));
      return jsonError("We couldn't save your spot. Please try again.", 502);
    }

    // Apps Script can return HTTP 200 with an application-level error payload.
    try {
      const result = JSON.parse(raw) as { ok?: boolean; error?: string };
      if (result.ok === false) {
        console.error("[waitlist] Sheet webhook rejected the row:", result.error);
        return jsonError("We couldn't save your spot. Please try again.", 502);
      }
    } catch {
      console.error("[waitlist] Sheet webhook returned non-JSON body:", raw.slice(0, 500));
      return jsonError("We couldn't save your spot. Please try again.", 502);
    }
  } catch (error) {
    console.error("[waitlist] Sheet webhook request failed:", error);
    return jsonError("We couldn't save your spot. Please try again.", 502);
  }

  return NextResponse.json({ ok: true });
}
