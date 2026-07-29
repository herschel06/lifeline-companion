import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "./WaitlistForm";
import { Lifesaver } from "./Lifesaver";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 90]);
  const fade = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <section id="top" className="relative overflow-hidden surface-sky">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-brand/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-36 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-10 lg:pt-48 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium tracking-[0.18em] text-brand uppercase">
            Recovery, with someone beside you
          </p>
          <h1 className="mt-6 text-[clamp(2.9rem,7vw,5.25rem)] leading-[0.95] font-extrabold">
            One choice can
            <br />
            <span className="text-gradient-brand">change everything.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Spara puts another person between you and your impulse — so the moment that matters
            never happens alone.
          </p>

          <div className="mt-10">
            <WaitlistForm id="hero-email" />
          </div>

          <Button variant="quiet" size="pill" asChild className="mt-2 -ml-2">
            <a href="#how-it-works">See how it works →</a>
          </Button>
        </motion.div>

        <motion.div style={{ y, opacity: fade }} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
            <div
              aria-hidden
              className="absolute inset-x-6 bottom-[18%] aspect-square rounded-full border border-brand/15 animate-ripple"
            />
            <div
              aria-hidden
              className="absolute inset-x-12 bottom-[22%] aspect-square rounded-full border border-brand/20 animate-ripple [animation-delay:2.4s]"
            />
            <div
              aria-hidden
              className="absolute inset-x-[22%] bottom-[26%] h-24 rounded-[100%] bg-brand/20 blur-2xl"
            />
            <div className="animate-float">
              <Lifesaver priority className="w-full drop-shadow-[0_50px_60px_rgba(30,60,140,0.25)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}