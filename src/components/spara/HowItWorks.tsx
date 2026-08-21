"use client";

import { motion } from "motion/react";
import { UserPlus, Users, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    icon: UserPlus,
    title: "Invite someone you trust",
    body: "Block your gambling apps, then invite a friend or family member.",
  },
  {
    n: "02",
    icon: Users,
    title: "They accept",
    body: "They download Spara and join you. That's the whole setup.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "They help you pause",
    body: "When the urge hits and you try to bypass, they decide.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
      <div className="surface-deep mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-10 lg:py-20">
        <div className="text-center">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.26em] text-brand-soft uppercase">
              How it works
            </p>
            <h2 className="mt-6 text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.035em] text-deep-foreground">
              A human creates the <span className="text-brand-soft">pause.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-deep-foreground/65">
              When you want to bypass, you ask. They decide.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-y-12 lg:mt-16 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-x-3">
          <Step step={steps[0]} delay={0} />
          <Connector delay={0.55} />
          <Step step={steps[1]} delay={0.14} />
          <Connector delay={0.95} />
          <Step step={steps[2]} delay={0.28} />
        </div>

        <Reveal delay={0.34}>
          <p className="mx-auto mt-14 max-w-xl text-center text-sm leading-relaxed text-deep-foreground/55 lg:mt-16">
            On free, they&apos;re notified after a bypass.{" "}
            <span className="text-deep-foreground/85">
              On premium, they approve before the block lifts.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Step({ step, delay }: { step: (typeof steps)[number]; delay: number }) {
  const Icon = step.icon;
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col items-center text-center">
        <span className="grid size-14 place-items-center rounded-full bg-deep-foreground/8 ring-1 ring-deep-foreground/10">
          <Icon className="size-6 text-brand-soft" strokeWidth={1.5} aria-hidden />
        </span>
        <p className="mt-5 text-[11px] font-semibold tracking-[0.22em] text-brand-soft">{step.n}</p>
        <h3 className="mt-2.5 text-lg font-bold tracking-tight text-deep-foreground">
          {step.title}
        </h3>
        <p className="mt-2.5 max-w-[18rem] text-[0.95rem] leading-relaxed text-deep-foreground/65">
          {step.body}
        </p>
      </div>
    </Reveal>
  );
}

/** Hairline that draws itself left-to-right, then lands a chevron. Desktop only —
 *  on mobile the steps stack, so a horizontal arrow would point nowhere. */
function Connector({ delay }: { delay: number }) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 64 8"
      fill="none"
      className="mt-7 hidden h-2 w-16 text-deep-foreground/30 lg:block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
    >
      <motion.path
        d="M2 4 H57"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
        transition={{ duration: 0.9, delay, ease }}
      />
      <motion.path
        d="M53 1.2 L57 4 L53 6.8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 0.45, delay: delay + 0.75, ease }}
      />
    </motion.svg>
  );
}
