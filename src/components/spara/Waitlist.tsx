"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";
import { Waves } from "./Waves";
import lifesaver from "@/assets/hero-scene.png";
import lighthouse from "@/assets/lighthouse-3d.png";

const MotionImage = motion.create(Image);

export function Waitlist() {
  return (
    <section className="bg-background px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
      <div
        id="waitlist"
        className="surface-hero relative isolate mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2.5rem] px-8 py-16 lg:grid-cols-[1fr_1.2fr_0.7fr] lg:px-14"
      >
        <Waves className="absolute inset-x-0 bottom-0 -z-10 h-2/3 w-full text-brand/25" />

        <MotionImage
          src={lifesaver}
          alt=""
          aria-hidden
          sizes="(min-width: 1024px) 33vw, 14rem"
          className="mx-auto w-56 lg:w-full"
          animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <Reveal className="text-center lg:text-left">
          <h2 className="text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.05] font-extrabold tracking-[-0.04em]">
            Bet on <span className="text-brand">Yourself.</span>
          </h2>
          <p className="mt-3 text-sm font-semibold text-foreground/70">Gambling App Blocker</p>
          <div className="mt-7 flex justify-center lg:justify-start">
            <WaitlistForm id="final-email" source="final-cta" />
          </div>
        </Reveal>

        <MotionImage
          src={lighthouse}
          alt=""
          aria-hidden
          sizes="10rem"
          className="mx-auto hidden w-32 lg:block lg:w-40"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
