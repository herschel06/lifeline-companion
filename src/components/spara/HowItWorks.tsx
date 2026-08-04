"use client";

import { motion } from "motion/react";
import {
  Shield,
  UserPlus,
  Download,
  CheckCircle2,
  Send,
  ShieldCheck,
  Users,
  Bell,
  BadgeCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: 1,
    title: "Set it up",
    body: "Block your gambling apps and invite a trusted contact.",
    align: "lg:items-start lg:text-left",
  },
  {
    n: 2,
    title: "They join",
    body: "They download Spara and accept your invite.",
    align: "lg:items-center lg:text-center",
  },
  {
    n: 3,
    title: "You create the pause",
    body: "When you try to bypass, they decide.",
    align: "lg:items-end lg:text-right",
  },
];

const track = [
  { icon: Shield, label: "Block apps" },
  { icon: UserPlus, label: "Invite buddy" },
  { icon: Download, label: "Download app" },
  { icon: CheckCircle2, label: "Accept invite" },
  { icon: Send, label: "Send request" },
  { icon: ShieldCheck, label: "Approve or decline" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-card px-6 py-20 shadow-soft ring-1 ring-border/50 sm:px-10 lg:py-24">
        <div className="text-center">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.26em] text-brand uppercase">
              How it works
            </p>
            <h2 className="mt-7 text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.035em]">
              A human creates the <span className="text-brand">pause.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              When you want to bypass, you ask. They decide.
              <span className="block">That&apos;s the pause that changes everything.</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className={`flex flex-col items-center text-center ${s.align}`}>
                <div className="flex items-center gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-bold text-primary-foreground">
                    {s.n}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                </div>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Track />

        <BlockStrip />
      </div>
    </section>
  );
}

function Track() {
  return (
    <div className="relative mt-16 lg:mt-20">
      <div
        aria-hidden
        className="absolute top-7 right-6 left-6 hidden h-px border-t border-dashed border-brand/30 lg:block"
      />
      <motion.span
        aria-hidden
        initial={{ left: "3%", opacity: 0 }}
        whileInView={{
          left: ["3%", "97%"],
          opacity: [0, 1, 1, 0],
          y: [0, -7, 0, 7, 0],
        }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 4.6, ease: "easeInOut", delay: 0.4 }}
        className="absolute top-[26px] hidden size-2.5 rounded-full bg-brand shadow-[0_0_0_5px_oklch(0.48_0.21_262_/_0.15)] lg:block"
      />

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {track.map((t, i) => (
          <Reveal key={t.label} delay={0.1 + i * 0.08}>
            <div className="flex flex-col items-center gap-3">
              <motion.span
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease }}
                className="grid size-14 place-items-center rounded-full bg-card shadow-soft ring-1 ring-border/60"
              >
                <t.icon className="size-5 text-brand" strokeWidth={1.5} aria-hidden />
              </motion.span>
              <p className="text-center text-[11px] font-medium text-muted-foreground">{t.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function BlockStrip() {
  return (
    <Reveal delay={0.15}>
      <div className="mt-16 grid gap-6 rounded-[1.75rem] bg-mist p-6 lg:grid-cols-[1.1fr_1fr_1fr] lg:items-center lg:gap-5">
        <div className="flex items-center gap-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand/12">
            <Users className="size-6 text-brand" strokeWidth={1.5} aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-base font-bold tracking-tight">The block stays when it matters.</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Your buddy keeps the power in their hands.
            </p>
          </div>
        </div>

        <Plan
          icon={Bell}
          tone="soft"
          title="On free"
          body="You're notified. They're in the loop."
        />
        <Plan
          icon={BadgeCheck}
          tone="brand"
          title="On premium"
          body="They must approve for you to continue."
        />
      </div>
    </Reveal>
  );
}

function Plan({
  icon: Icon,
  title,
  body,
  tone,
}: {
  icon: typeof Bell;
  title: string;
  body: string;
  tone: "soft" | "brand";
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.5, ease }}
      className="flex items-center gap-3.5 rounded-2xl bg-card px-4 py-4 shadow-soft"
    >
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-full ${
          tone === "brand" ? "bg-brand text-primary-foreground" : "bg-brand/10 text-brand"
        }`}
      >
        <Icon className="size-4.5" strokeWidth={1.6} aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-bold">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </motion.div>
  );
}
