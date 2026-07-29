import { Reveal } from "./Reveal";
import wave from "@/assets/pause-wave.jpg";

export function WhyItWorks() {
  return (
    <section id="why-it-works" className="bg-background pb-32 lg:pb-44">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-10">
        <figure className="overflow-hidden rounded-[2.5rem]">
          <img
            src={wave}
            alt="A single wave rising and falling in deep blue water"
            width={1600}
            height={1008}
            loading="lazy"
            decoding="async"
            className="h-[46vh] w-full object-cover lg:h-[64vh]"
          />
        </figure>
      </Reveal>

      <Reveal className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-10">
        <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] font-extrabold">
          A craving lasts minutes. A pause outlives it.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Spara doesn't try to be a wall. It creates a few honest seconds between impulse and
          action — and puts someone you trust inside them.
        </p>
      </Reveal>
    </section>
  );
}