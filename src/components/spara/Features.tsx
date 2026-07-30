import { useEffect, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { useRef } from "react";
import { SquarePen, DollarSign, BookOpen, Headphones, Users, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Features() {
  return (
    <section id="features" className="bg-background px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.26em] text-brand uppercase">
              Tools that build clarity
            </p>
            <h2 className="mt-7 text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.035em]">
              Everything you need to build <span className="text-brand">better days.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <ClarityCard />
          </Reveal>

          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.08}>
                <Tile
                  icon={SquarePen}
                  tint="bg-brand text-primary-foreground"
                  title="Daily Check-ins"
                  body="Build consistency and self-awareness."
                  cta="Check in now"
                />
              </Reveal>
              <Reveal delay={0.16}>
                <Tile
                  icon={DollarSign}
                  tint="bg-[oklch(0.72_0.16_150)] text-primary-foreground"
                  title="Money Saved"
                  body="Track what staying in control saves you."
                  cta="See your savings"
                  visual={<Bars />}
                />
              </Reveal>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <Reveal delay={0.2}>
                <Tile
                  icon={BookOpen}
                  tint="bg-[oklch(0.62_0.2_300)] text-primary-foreground"
                  title="In-house Lessons"
                  body="Short lessons that help you grow."
                  cta="Keep learning"
                />
              </Reveal>
              <Reveal delay={0.26}>
                <Tile
                  icon={Headphones}
                  tint="bg-[oklch(0.78_0.15_60)] text-primary-foreground"
                  title="Curated Resources"
                  body="Expert resources from trusted voices."
                  cta="Explore resources"
                />
              </Reveal>
              <Reveal delay={0.32}>
                <Tile
                  icon={Users}
                  tint="bg-[oklch(0.82_0.09_190)] text-foreground"
                  title="Support"
                  body="Get help when moments feel too big."
                  cta="Get support"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({
  icon: Icon,
  tint,
  title,
  body,
  cta,
  visual,
}: {
  icon: typeof Users;
  tint: string;
  title: string;
  body: string;
  cta: string;
  visual?: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease }}
      className="flex h-full items-start gap-4 rounded-[1.5rem] bg-card p-6 shadow-soft ring-1 ring-border/40"
    >
      <span className={`grid size-11 shrink-0 place-items-center rounded-2xl ${tint}`}>
        <Icon className="size-5" strokeWidth={1.7} aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="text-[0.95rem] font-bold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
          {cta}
          <ArrowRight className="size-3" strokeWidth={2.2} aria-hidden />
        </span>
      </div>
      {visual}
    </motion.div>
  );
}

function ClarityCard() {
  return (
    <div className="flex h-full flex-col gap-8 rounded-[1.5rem] bg-card p-7 shadow-soft ring-1 ring-border/40">
      <div className="flex items-center gap-6">
        <Ring />
        <div className="min-w-0">
          <h3 className="text-[0.95rem] font-bold tracking-tight">Clarity Score</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Your daily picture of progress, all in one score.
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
            See your score
            <ArrowRight className="size-3" strokeWidth={2.2} aria-hidden />
          </span>
        </div>
      </div>
      <LineChart />
    </div>
  );
}

function Ring() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, 72, {
      duration: 2.1,
      ease,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView]);

  return (
    <div ref={ref} className="relative grid size-28 shrink-0 place-items-center">
      <svg viewBox="0 0 44 44" className="absolute size-full -rotate-90" aria-hidden>
        <circle cx="22" cy="22" r="18" fill="none" strokeWidth="4.5" className="stroke-mist" />
        <motion.circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          strokeWidth="4.5"
          strokeLinecap="round"
          className="stroke-brand"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 0.72 } : { pathLength: 0 }}
          transition={{ duration: 2.1, ease }}
        />
      </svg>
      <div className="text-center">
        <span className="text-2xl font-extrabold tracking-tight">{value}</span>
        <p className="text-[10px] font-medium text-muted-foreground">Good streak</p>
      </div>
    </div>
  );
}

const days = ["M", "T", "W", "T", "F", "S", "S"];
const pts = [58, 40, 66, 52, 74, 62, 88];

function LineChart() {
  const w = 300;
  const h = 96;
  const coords = pts.map((p, i) => ({
    x: (i / (pts.length - 1)) * (w - 16) + 8,
    y: h - (p / 100) * (h - 16) - 8,
  }));
  const d = coords.map((c, i) => `${i === 0 ? "M" : "L"} ${c.x} ${c.y}`).join(" ");

  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={8 + (i * (w - 16)) / 3}
            x2={8 + (i * (w - 16)) / 3}
            y1="4"
            y2={h - 6}
            className="stroke-border"
            strokeWidth="1"
          />
        ))}
        <motion.path
          d={d}
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-brand"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 2, ease }}
        />
        {coords.map((c, i) => (
          <motion.circle
            key={i}
            cx={c.x}
            cy={c.y}
            r="3.2"
            className="fill-brand"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.22, ease }}
            style={{ transformOrigin: `${c.x}px ${c.y}px` }}
          />
        ))}
      </svg>
      <div className="mt-2 flex justify-between px-2 text-[10px] text-muted-foreground">
        {days.map((d2, i) => (
          <span key={i}>{d2}</span>
        ))}
      </div>
    </div>
  );
}

const bars = [40, 68, 34, 82, 52, 96, 60, 74];

function Bars() {
  return (
    <div className="ml-2 flex h-16 shrink-0 items-end gap-1">
      {bars.map((b, i) => (
        <motion.span
          key={i}
          className="w-1.5 rounded-full bg-[oklch(0.72_0.16_150)]"
          initial={{ height: 4 }}
          whileInView={{ height: [`${b * 0.6}%`, `${b}%`, `${b * 0.75}%`, `${b}%`] }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "mirror",
            delay: i * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
