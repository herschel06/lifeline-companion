import { motion } from "motion/react";
import { CalendarCheck, LifeBuoy, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    icon: LifeBuoy,
    title: "Accountability",
    body: "A trusted contact who helps you stay on track when it matters most.",
  },
  {
    icon: CalendarCheck,
    title: "Daily Check-ins",
    body: "Quick check-ins build consistency and self-awareness.",
  },
  {
    icon: TrendingUp,
    title: "Progress Over Time",
    body: "Track your streaks, reflect, and keep moving forward.",
  },
];

export function Features() {
  return (
    <section className="bg-background pb-32 lg:pb-48">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-5">
            <ClarityRing />
            <div>
              <h3 className="text-base font-semibold">Clarity Score</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                See your progress clearly. Make better decisions every day.
              </p>
            </div>
          </div>
        </Reveal>

        {items.map((f, i) => (
          <Reveal key={f.title} delay={0.1 + i * 0.1}>
            <div className="flex flex-col gap-5">
              <span className="grid size-14 place-items-center rounded-2xl bg-mist">
                <f.icon className="size-6 text-brand" strokeWidth={1.4} aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClarityRing() {
  return (
    <div className="relative grid size-14 place-items-center">
      <svg viewBox="0 0 44 44" className="absolute size-full -rotate-90" aria-hidden>
        <circle cx="22" cy="22" r="19" fill="none" strokeWidth="4" className="stroke-mist" />
        <motion.circle
          cx="22"
          cy="22"
          r="19"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          className="stroke-brand"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 0.72 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.8, ease }}
        />
      </svg>
      <span className="text-sm font-bold">72</span>
    </div>
  );
}
