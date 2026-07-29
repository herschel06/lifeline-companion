import { Reveal } from "./Reveal";
import { Lifesaver } from "./Lifesaver";
import { WaitlistForm } from "./WaitlistForm";
import ocean from "@/assets/ocean-wide.jpg";

export function Waitlist() {
  return (
    <section id="waitlist" className="relative isolate overflow-hidden">
      <img
        src={ocean}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-deep/70" />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-36 text-center lg:py-48">
        <Reveal>
          <Lifesaver className="mx-auto w-48 animate-float lg:w-64" alt="" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 text-[clamp(2.2rem,5.4vw,4rem)] leading-[1.02] font-extrabold text-deep-foreground">
            Better days are ahead.
          </h2>
          <p className="mt-6 text-lg text-deep-foreground/70">
            Join the waitlist for early access to Spara.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex w-full justify-center">
          <WaitlistForm tone="deep" id="final-email" />
        </Reveal>
      </div>
    </section>
  );
}