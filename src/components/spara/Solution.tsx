import { Reveal } from "./Reveal";

export function Solution() {
  return (
    <section className="relative overflow-hidden surface-deep py-40 lg:py-56">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[140px]"
      />
      <Reveal className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <h2 className="text-[clamp(2.4rem,6.2vw,5rem)] leading-[1] font-extrabold">
          Add a human between you
          <br className="hidden sm:block" /> and your impulse.
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-deep-foreground/65">
          Not another wall to climb. A person who knows you, on the other side of the moment.
        </p>
      </Reveal>
    </section>
  );
}