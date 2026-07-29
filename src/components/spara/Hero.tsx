import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sea from "@/assets/hero-sea.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 900], [0, 120]);
  const imgScale = useTransform(scrollY, [0, 900], [1, 1.08]);

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <motion.img
        style={{ y: imgY, scale: imgScale }}
        src={sea}
        alt="A blue and white lifesaver floating on a calm ocean at dawn"
        width={1600}
        height={1104}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover object-[70%_center]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 veil-right"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-b from-transparent to-background"
      />

      <div className="mx-auto max-w-7xl px-6 pt-44 pb-40 lg:px-10 lg:pt-56 lg:pb-56">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.14, delayChildren: 0.1 }}
          className="max-w-2xl"
        >
          <Item>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-card/80 px-5 py-2.5 text-sm text-muted-foreground shadow-soft backdrop-blur-md">
              Recovery is a journey. We're here for it.
              <span className="size-2 rounded-full bg-brand animate-pulse-dot" />
            </span>
          </Item>

          <Item>
            <h1 className="mt-9 text-[clamp(3rem,7.4vw,5.75rem)] leading-[0.95] font-extrabold tracking-[-0.03em]">
              One choice
              <br />
              can change
              <br />
              <span className="text-gradient-brand">everything.</span>
            </h1>
          </Item>

          <Item>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Accountability that works in the moments that matter.
            </p>
          </Item>

          <Item>
            <div className="mt-11 flex flex-wrap items-center gap-3">
              <Button variant="hero" size="pill" asChild>
                <a href="#waitlist" className="group">
                  Join waitlist
                  <ArrowRight className="ml-1 size-4 transition-transform duration-500 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="quiet" size="pill" asChild>
                <a href="#how-it-works" className="group">
                  See how it works
                  <ArrowDown className="ml-1 size-4 transition-transform duration-500 group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
          </Item>
        </motion.div>
      </div>
    </section>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 1.2, ease }}
    >
      {children}
    </motion.div>
  );
}