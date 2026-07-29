import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Phone({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "deep";
}) {
  return (
    <div
      className={cn(
        "relative w-[13.5rem] shrink-0 rounded-[2.2rem] p-[3px] shadow-float",
        tone === "deep" ? "bg-deep" : "bg-foreground/85",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] px-4 pt-7 pb-6",
          tone === "deep" ? "bg-deep text-deep-foreground" : "bg-card",
        )}
      >
        <span
          aria-hidden
          className={cn(
            "absolute top-2.5 left-1/2 h-[0.4rem] w-16 -translate-x-1/2 rounded-full",
            tone === "deep" ? "bg-deep-foreground/25" : "bg-foreground/15",
          )}
        />
        {children}
      </div>
    </div>
  );
}