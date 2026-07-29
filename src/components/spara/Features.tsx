import { Users, Gauge, CalendarCheck, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Users, title: "Accountability", body: "One person, always in the loop." },
  { icon: Gauge, title: "Clarity Score", body: "A single honest number, not a dashboard." },
  { icon: CalendarCheck, title: "Daily Check-ins", body: "Ten seconds. Every morning." },
  { icon: TrendingUp, title: "Progress Tracking", body: "Streaks, money saved, days back." },
];

export function Features() {
  return (
    <section className="bg-background pb-32 lg:pb-44">
      <div className="mx-auto grid max-w-7xl gap-x-12 gap-y-16 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {items.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.07}>
            <f.icon className="size-6 text-brand" strokeWidth={1.4} aria-hidden />
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{f.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}