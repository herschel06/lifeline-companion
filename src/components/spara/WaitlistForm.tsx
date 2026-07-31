import { useState, type FormEvent } from "react";
import { Mail, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function WaitlistForm({ tone = "light", id }: { tone?: "light" | "deep"; id?: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const inputId = id ?? "waitlist-email";

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-lg">
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
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={cn(
              "h-12 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground/70",
              tone === "deep" && "text-deep-foreground placeholder:text-deep-foreground/55",
            )}
          />
        </div>
        <Button type="submit" variant={tone === "deep" ? "onDeep" : "hero"} size="pill">
          {done ? "You're on the list" : "Join the Waitlist"}
        </Button>
      </div>
      <p
        aria-live="polite"
        className={cn(
          "mt-4 flex items-center gap-2 pl-2 text-sm font-medium",
          tone === "deep" ? "text-deep-foreground/70" : "text-foreground/70",
        )}
      >
        <BadgeCheck
          className={cn("size-5 shrink-0", tone === "deep" ? "text-deep-foreground" : "text-brand")}
          strokeWidth={1.8}
        />
        {done ? "Thank you. We'll be in touch before launch." : "No spam"}
      </p>
    </form>
  );
}