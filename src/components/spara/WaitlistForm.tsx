"use client";

import { useState, type FormEvent } from "react";
import { Mail, BadgeCheck, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({
  tone = "light",
  id,
  source,
}: {
  tone?: "light" | "deep";
  id?: string;
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("No spam");
  const inputId = id ?? "waitlist-email";
  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSuccess) return;

    const trimmed = email.trim();
    if (!EMAIL_PATTERN.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("Saving your spot…");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: source ?? inputId }),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        setMessage(result?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thank you. We'll be in touch before launch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-lg">
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <div
        className={cn(
          "flex flex-col gap-2 rounded-[1.75rem] p-1.5 transition-all duration-700 sm:flex-row sm:items-center sm:rounded-full",
          tone === "deep"
            ? "bg-deep-foreground/10 backdrop-blur-md"
            : "bg-card/85 shadow-soft ring-1 ring-border/50 backdrop-blur-md",
        )}
      >
        <div className="flex min-w-0 flex-1 items-center gap-2.5 pl-4">
          <Mail
            className={cn(
              "size-5 shrink-0",
              tone === "deep" ? "text-deep-foreground/60" : "text-muted-foreground/70",
            )}
            strokeWidth={1.6}
          />
          <input
            id={inputId}
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={isSubmitting || isSuccess}
            aria-invalid={status === "error"}
            aria-describedby={`${inputId}-status`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") {
                setStatus("idle");
                setMessage("No spam");
              }
            }}
            placeholder="Enter your email"
            className={cn(
              "h-12 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground/70 disabled:cursor-not-allowed disabled:opacity-70",
              tone === "deep" && "text-deep-foreground placeholder:text-deep-foreground/55",
            )}
          />
        </div>
        <Button
          type="submit"
          variant={tone === "deep" ? "onDeep" : "hero"}
          size="pill"
          disabled={isSubmitting || isSuccess}
        >
          {isSubmitting && <Loader2 className="size-4 animate-spin" strokeWidth={2.2} />}
          {isSubmitting ? "Joining…" : isSuccess ? "You're on the list" : "Join the Waitlist"}
        </Button>
      </div>
      <p
        id={`${inputId}-status`}
        aria-live="polite"
        className={cn(
          "mt-4 flex items-center gap-2 pl-2 text-sm font-medium",
          status === "error"
            ? "text-destructive"
            : tone === "deep"
              ? "text-deep-foreground/70"
              : "text-foreground/70",
        )}
      >
        {status === "error" ? (
          <AlertCircle className="size-5 shrink-0" strokeWidth={1.8} />
        ) : (
          <BadgeCheck
            className={cn(
              "size-5 shrink-0",
              tone === "deep" ? "text-deep-foreground" : "text-brand",
            )}
            strokeWidth={1.8}
          />
        )}
        {message}
      </p>
    </form>
  );
}
