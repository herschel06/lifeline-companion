import { Reveal } from "./Reveal";
import { WaitlistForm } from "./WaitlistForm";
import lighthouse from "@/assets/lighthouse.jpg";

export function Waitlist() {
  return (
    <section className="bg-background px-6 pb-32 lg:px-10 lg:pb-40">
      <div
        id="waitlist"
        className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]"
      >
        <img
          src={lighthouse}
          alt=""
          aria-hidden
          width={1600}
          height={1008}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 size-full object-cover object-[75%_center]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 veil-right"
        />

        <div className="max-w-xl px-8 py-24 sm:px-14 lg:py-32">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.03] font-extrabold tracking-[-0.03em]">
              Join the first wave.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Be the first to experience Spara.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="mt-10">
            <WaitlistForm id="final-email" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}