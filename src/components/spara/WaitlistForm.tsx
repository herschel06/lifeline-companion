import { useState, type FormEvent } from "react";
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
          "flex flex-col gap-2 rounded-[1.75rem] p-2 transition-all duration-700 sm:flex-row sm:items-center sm:rounded-full",
          tone === "deep"
            ? "bg-deep-foreground/10 backdrop-blur-md"
            : "bg-card shadow-soft ring-1 ring-border/60",
        )}
      >
        <input
          id={inputId}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className={cn(
            "h-12 min-w-0 flex-1 rounded-full bg-transparent px-5 text-base outline-none placeholder:text-muted-foreground/70",
            tone === "deep" && "text-deep-foreground placeholder:text-deep-foreground/55",
          )}
        />
        <Button type="submit" variant={tone === "deep" ? "onDeep" : "hero"} size="pill">
          {done ? "You're on the list" : "Join the waitlist"}
        </Button>
      </div>
      <p
        aria-live="polite"
        className={cn(
          "mt-3 pl-5 text-sm",
          tone === "deep" ? "text-deep-foreground/60" : "text-muted-foreground",
        )}
      >
        {done ? "Thank you. We'll be in touch before launch." : "Early access. No spam, ever."}
      </p>
    </form>
  );
}