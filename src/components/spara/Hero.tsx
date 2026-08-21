"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { WaitlistForm } from "./WaitlistForm";
import ocean from "@/assets/hero-ocean.jpg";

const MotionImage = motion.create(Image);

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[40rem] lg:min-h-[46rem] overflow-hidden">
      <MotionImage
        src={ocean}
        alt="Calm sunrise ocean with a floating lifesaver and a distant lighthouse"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease }}
      />
      <div aria-hidden className="veil-right absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-background"
      />

      <div className="mx-auto flex min-h-[40rem] lg:min-h-[46rem] max-w-7xl items-center px-6 pt-36 pb-24 lg:px-10">
        <motion.div
          className="max-w-xl"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.13, delayChildren: 0.15 }}
        >
          <Item>
            <h1 className="text-[clamp(3.4rem,8vw,6rem)] leading-[0.9] font-extrabold tracking-[-0.05em]">
              Bet on
              <br />
              <span className="text-brand-soft">Yourself.</span>
            </h1>
          </Item>
          <Item>
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-foreground/70 sm:text-xl">
              Spara is the accountability app that helps you pause the impulse and build a clearer
              future.
            </p>
          </Item>
          <Item>
            <div className="mt-10">
              <WaitlistForm id="hero-email" source="hero" />
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
        hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 1.1, ease }}
    >
      {children}
    </motion.div>
  );
}
