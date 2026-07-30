import { motion } from "motion/react";
import { Globe, Trash2, EyeOff, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

const floaters = [
  { icon: Globe, label: "VPN", pos: "left-[6%] top-[12%]", delay: 0 },
  { icon: Trash2, label: "Delete app", pos: "left-[16%] top-[58%]", delay: 1.2 },
  { icon: EyeOff, label: "Disable blocker", pos: "right-[7%] top-[12%]", delay: 0.6 },
  { icon: Smartphone, label: "New device", pos: "right-[17%] top-[58%]", delay: 1.8 },
];

export function Problem() {
  return (
    <section className="relative isolate overflow-hidden bg-background py-24 lg:py-32">
      {/* floating bypass icons, drifting far behind the message */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <Orbits />
        {floaters.map((f) => (
          <motion.div
            key={f.label}
            className={`absolute ${f.pos} flex flex-col items-center gap-2.5`}
            animate={{ y: [-10, 10, -10], x: [4, -4, 4] }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
              delay: f.delay,
            }}
          >
            <span className="grid size-16 place-items-center rounded-full bg-card/70 shadow-soft ring-1 ring-border/50 backdrop-blur-sm">
              <f.icon className="size-6 text-foreground/45" strokeWidth={1.3} />
            </span>
            <p className="text-[11px] font-medium text-muted-foreground/70">{f.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.26em] text-brand uppercase">
            The problem
          </p>
          <h2 className="mt-7 text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.035em]">
            Blockers don't create change.
            <span className="block">
              They create <span className="text-brand">workarounds.</span>
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Technology can't create the pause you need.
            <span className="block">
              Only a <span className="font-semibold text-foreground">human</span> can.
            </span>
          </p>
        </Reveal>
      </div>

      {/* mobile: simple floating row */}
      <div className="mt-16 grid grid-cols-2 gap-6 px-6 lg:hidden">
        {floaters.map((f, i) => (
          <motion.div
            key={f.label}
            className="flex flex-col items-center gap-2.5"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
          >
            <span className="grid size-14 place-items-center rounded-full bg-card shadow-soft ring-1 ring-border/50">
              <f.icon className="size-5 text-foreground/45" strokeWidth={1.3} />
            </span>
            <p className="text-[11px] text-muted-foreground">{f.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Orbits() {
  return (
    <svg viewBox="0 0 1440 520" className="size-full" preserveAspectRatio="none">
      {[
        "M60 120 C 220 60, 300 260, 150 330 S 60 200, 320 250",
        "M1380 130 C 1220 70, 1140 270, 1290 340 S 1380 210, 1120 260",
      ].map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="currentColor"
          className="text-brand/25"
          strokeWidth="1.2"
          strokeDasharray="2 9"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
