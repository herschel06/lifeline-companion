import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Lifesaver } from "./Lifesaver";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Invite a trusted contact",
    body: "Choose one person you'd want beside you at 2am. Send them an invite.",
  },
  {
    n: "02",
    title: "They download Spara",
    body: "One tap. No account maze, no clinical intake, no judgment.",
  },
  {
    n: "03",
    title: "They accept",
    body: "Your two lifesavers connect. From here, you're not deciding alone.",
  },
  {
    n: "04",
    title: "The moment arrives",
    body: "You try to bypass. The request travels to them. They approve. The blocker opens.",
  },
];

function Stage({ progress }: { progress: MotionValue<number> }) {
  // rope draws between step 2 and 3, request travels during step 4
  const rope = useTransform(progress, [0.45, 0.68], [0, 1]);
  const ropeOpacity = useTransform(progress, [0.44, 0.52], [0, 1]);
  const buddyOpacity = useTransform(progress, [0, 0.2, 0.42, 1], [0, 0, 1, 1]);
  const buddyX = useTransform(progress, [0, 0.2, 0.44, 1], [40, 40, 0, 0]);
  const travel = useTransform(progress, [0.82, 0.95], [0, 1]);
  const travelOpacity = useTransform(progress, [0.8, 0.84, 0.95, 0.99], [0, 1, 1, 0]);
  const unlock = useTransform(progress, [0.94, 1], [0, 1]);

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 600 200"
        className="absolute inset-0 size-full"
        fill="none"
        aria-hidden
        preserveAspectRatio="none"
      >
        <motion.path
          d="M170 100 C 260 46, 340 46, 430 100"
          stroke="currentColor"
          className="text-brand/45"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength: rope, opacity: ropeOpacity }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-between px-0">
        <div className="relative w-[42%] max-w-[20rem]">
          <Lifesaver className="w-full scale-[1.5] animate-float" alt="Your lifesaver" />
          <motion.span
            style={{ opacity: travelOpacity }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-card px-3 py-1 text-xs font-medium whitespace-nowrap shadow-soft"
          >
            Request sent
          </motion.span>
        </div>

        <motion.div
          style={{ opacity: buddyOpacity, x: buddyX }}
          className="relative w-[42%] max-w-[20rem]"
        >
          <Lifesaver
            className="w-full scale-[1.5] animate-float [animation-delay:-4s]"
            alt="Buddy lifesaver"
          />
          <motion.span
            style={{ opacity: unlock }}
            className="absolute right-2 -bottom-2 rounded-full bg-brand px-3 py-1 text-xs font-medium text-primary-foreground shadow-soft"
          >
            Approved
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        style={{ left: useTransform(travel, [0, 1], ["28%", "72%"]), opacity: travelOpacity }}
        className="absolute top-[26%] size-3 -translate-x-1/2 rounded-full bg-brand shadow-[0_0_20px_6px_rgba(45,90,235,0.35)]"
      />
    </div>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "-75%"]);

  return (
    <section id="how-it-works" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-32 lg:px-10 lg:pt-44">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.18em] text-brand uppercase">How it works</p>
          <h2 className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.03] font-extrabold">
            Two people. One decision.
          </h2>
        </Reveal>
      </div>

      {/* Desktop: scroll-driven horizontal story */}
      <div ref={ref} className="relative hidden h-[420vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto h-[30vh] w-full max-w-3xl">
            <Stage progress={scrollYProgress} />
          </div>

          <motion.ol style={{ x }} className="mt-16 flex w-[400%] items-start">
            {steps.map((s) => (
              <li key={s.n} className="w-1/4 px-16">
                <div className="mx-auto max-w-md">
                  <span className="text-sm font-semibold tracking-[0.2em] text-brand">{s.n}</span>
                  <h3 className="mt-4 text-3xl leading-tight font-bold">{s.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>

      {/* Mobile / tablet: stacked */}
      <ol className="mx-auto max-w-2xl space-y-16 px-6 pt-20 pb-32 lg:hidden">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.05}>
            <li>
              <span className="text-sm font-semibold tracking-[0.2em] text-brand">{s.n}</span>
              <h3 className="mt-3 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}