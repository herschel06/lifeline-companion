import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-mist py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] font-extrabold">
            Built by two people who think recovery tools can be better.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-14 md:grid-cols-2 lg:gap-24">
          {[
            {
              name: "Anton",
              school: "Georgetown University",
              body: "Building the product, and the part of it that has to feel human at 2am.",
            },
            {
              name: "Herschel",
              school: "UCLA",
              body: "Working with clinicians and people in recovery so nothing here is guesswork.",
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm tracking-wide text-brand">{p.school}</p>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-20 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We're not clinicians. We build alongside them — and alongside people with lived
            experience — because the tools that exist today were too easy to walk around.
          </p>
        </Reveal>
      </div>
    </section>
  );
}