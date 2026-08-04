"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Clock, Users, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";
import lighthouse from "@/assets/lighthouse.jpg";

const MotionImage = motion.create(Image);

const points = [
  { icon: Clock, text: "Even 30 seconds can interrupt an impulse." },
  { icon: Users, text: "Accountability creates the pause." },
  { icon: HeartHandshake, text: "That pause gives you back your future." },
];

export function WhyItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="why-it-works" ref={ref} className="relative isolate overflow-hidden bg-background">
      <MotionImage
        style={{ y }}
        src={lighthouse}
        alt="A striped lighthouse on a small island at sunrise"
        sizes="100vw"
        className="absolute inset-0 -z-10 size-[116%] object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 veil-right" />

      <div className="mx-auto max-w-7xl px-6 py-40 lg:px-10 lg:py-56">
        <Reveal className="max-w-md">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
            Why it works
          </p>
          <h2 className="mt-8 text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
            Even seconds can change your future.
          </h2>
        </Reveal>

        <ul className="mt-14 max-w-md space-y-6">
          {points.map((p, i) => (
            <Reveal key={p.text} delay={0.12 + i * 0.12}>
              <li className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-card/80 shadow-soft backdrop-blur">
                  <p.icon className="size-5 text-brand" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="text-base leading-relaxed text-foreground/80">{p.text}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
