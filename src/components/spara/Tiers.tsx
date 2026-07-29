import { motion } from "motion/react";
import { Bell, Check, Unlock } from "lucide-react";
import { Reveal } from "./Reveal";
import { Phone } from "./Phone";

const ease = [0.22, 1, 0.36, 1] as const;

export function Tiers() {
  return (
    <section className="bg-background pb-32 lg:pb-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
            Free vs Premium
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <Card
              tag="Free"
              icon={Bell}
              lines={["We notify your buddy.", "You get the freedom. They stay in the loop."]}
              phone={
                <Phone tone="deep" className="w-[15rem]">
                  <p className="text-[10px] tracking-[0.18em] text-deep-foreground/50 uppercase">
                    Spara · now
                  </p>
                  <motion.p
                    animate={{ opacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-3 text-sm leading-snug font-semibold"
                  >
                    Anton bypassed Casino Blocker
                  </motion.p>
                </Phone>
              }
            />
          </Reveal>

          <Reveal delay={0.12}>
            <Card
              tag="Premium"
              icon={Unlock}
              lines={[
                "They have to approve.",
                "No approval, no bypass. It adds the pause that can change everything.",
              ]}
              phone={
                <Phone tone="deep" className="w-[15rem]">
                  <p className="text-sm font-semibold">Bypass approved</p>
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3, ease }}
                    className="mx-auto mt-5 grid size-11 place-items-center rounded-full bg-brand"
                  >
                    <Check className="size-5 text-primary-foreground" strokeWidth={2.5} aria-hidden />
                  </motion.div>
                  <p className="mt-4 text-center text-[11px] text-deep-foreground/60">
                    Casino Blocker unlocked
                  </p>
                </Phone>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Card({
  tag,
  icon: Icon,
  lines,
  phone,
}: {
  tag: string;
  icon: typeof Bell;
  lines: string[];
  phone: React.ReactNode;
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.7, ease }}
      className="relative flex h-full flex-col gap-10 overflow-hidden rounded-[2rem] bg-mist p-10 sm:flex-row sm:items-center lg:p-12"
    >
      <div className="min-w-0 flex-1">
        <p className="text-lg font-bold text-brand">{tag}</p>
        {lines.map((l, i) => (
          <p
            key={l}
            className={
              i === 0
                ? "mt-4 text-base font-medium"
                : "mt-4 text-sm leading-relaxed text-muted-foreground"
            }
          >
            {l}
          </p>
        ))}
      </div>

      <div className="relative flex shrink-0 justify-center sm:justify-end">
        {phone}
        <span className="absolute -top-4 -right-2 grid size-12 place-items-center rounded-full bg-card shadow-float">
          <Icon className="size-5 text-brand" strokeWidth={1.6} aria-hidden />
        </span>
      </div>
    </motion.article>
  );
}
