import { cn } from "@/lib/utils";

/** Soft line-art ocean waves used as an ambient backdrop. */
export function Waves({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={cn("pointer-events-none select-none", className)}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${70 + i * 26} C 180 ${40 + i * 26}, 360 ${104 + i * 26}, 560 ${76 + i * 26} S 940 ${
            34 + i * 26
          }, 1140 ${72 + i * 26} S 1340 ${104 + i * 26}, 1440 ${62 + i * 26}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.5 - i * 0.035}
        />
      ))}
    </svg>
  );
}