import { cn } from "@/lib/utils";
import lifesaver from "@/assets/hero-lifesaver.png";

export function Lifesaver({
  className,
  priority = false,
  alt = "Spara lifesaver",
}: {
  className?: string;
  priority?: boolean;
  alt?: string;
}) {
  return (
    <img
      src={lifesaver}
      alt={alt}
      width={1200}
      height={1200}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={cn("select-none", className)}
    />
  );
}