import { motion } from "motion/react";
import { Globe, Trash2, ShieldOff, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

const bypasses = [
  { icon: Globe, label: "VPN" },
  { icon: Trash2, label: "Delete app" },
  { icon: ShieldOff, label: "Disable blocker" },
  { icon: Smartphone, label: "New device" },
];

export function Problem() {
  return (
    <section className="bg-background py-32 lg:py-48">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
            The problem
          </p>
          <h2 className="mx-auto mt-8 max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">
            Blocking apps are easy to bypass.
            <span className="block">
              That's <span className="text-brand">the problem.</span>
            </span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
          {bypasses.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col items-center justify-center gap-4 rounded-[1.5rem] bg-mist px-6 py-10"
              >
                <b.icon className="size-7 text-foreground/70" strokeWidth={1.4} aria-hidden />
                <p className="text-sm font-medium">{b.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-20 max-w-xl text-lg leading-relaxed text-muted-foreground">
            People don't relapse because technology fails. They relapse because there's{" "}
            <span className="font-semibold text-foreground">no pause</span> between urge and
            action.
          </p>
        </Reveal>
      </div>
    </section>
  );
}