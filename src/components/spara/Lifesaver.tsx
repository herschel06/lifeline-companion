import Image from "next/image";
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
    <Image src={lifesaver} alt={alt} priority={priority} className={cn("select-none", className)} />
  );
}
