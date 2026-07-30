import { motion } from "motion/react";
import { Waves } from "./Waves";
import { WaitlistForm } from "./WaitlistForm";
import lifesaver from "@/assets/hero-scene.png";
import lighthouse from "@/assets/lighthouse-3d.png";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="surface-hero relative isolate overflow-hidden">
      <Waves className="absolute inset-x-0 bottom-0 -z-10 h-[70%] w-full text-brand/25" />
      <div
        aria-hidden
        className="absolute top-24 right-[22%] -z-10 size-72 rounded-full bg-[oklch(0.95_0.06_85)] opacity-50 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pt-36 pb-24 lg:grid-cols-[1fr_1.05fr] lg:px-10 lg:pt-44 lg:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.13, delayChildren: 0.05 }}
        >
          <Item>
            <h1 className="text-[clamp(3.2rem,7.6vw,5.5rem)] leading-[0.92] font-extrabold tracking-[-0.045em]">
              Bet on
              <br />
              <span className="text-brand">Yourself.</span>
            </h1>
          </Item>
          <Item>
            <p className="mt-6 text-xl font-semibold tracking-tight text-foreground/80">
              Gambling App Blocker
            </p>
          </Item>
          <Item>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted-foreground">
              Accountability that works in the moments that matter.
            </p>
          </Item>
          <Item>
            <div className="mt-10">
              <WaitlistForm id="hero-email" />
            </div>
          </Item>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease, delay: 0.15 }}
          className="relative"
        >
          <motion.img
            src={lighthouse}
            alt=""
            aria-hidden
            width={768}
            height={1024}
            decoding="async"
            className="absolute -top-16 right-2 w-24 opacity-90 sm:w-32 lg:-top-24 lg:w-40"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={lifesaver}
            alt="Spara lifesaver floating on calm water"
            width={1600}
            height={1200}
            fetchPriority="high"
            decoding="async"
            className="relative w-full drop-shadow-[0_36px_50px_oklch(0.5_0.12_255_/_0.25)]"
            animate={{ y: [-10, 10, -10], rotate: [-1, 1.2, -1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
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
