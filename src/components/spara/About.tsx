import Image from "next/image";
import { Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import anton from "@/assets/founder-anton.jpg";
import herschel from "@/assets/founder-herschel.jpg";

const founders = [
  {
    name: "Herschel Pell",
    school: "UCLA — Sociology & Entrepreneurship",
    photo: herschel,
    // Landscape source: his face sits just left of centre, so bias the crop.
    focus: "object-[46%_center]",
    body: "Hi, I’m Herschel Pell, a UCLA student studying Sociology and Entrepreneurship. I’ve experienced gambling addiction firsthand, and Spara is the tool I wish I had during the early days of my recovery. I’m building Spara to help others create that same pause, accountability, and support when they need it most.",
  },
  {
    name: "Anton Gridley",
    school: "Georgetown University — School of Foreign Service",
    photo: anton,
    focus: "object-[50%_32%]",
    body: "Hi, I’m Anton Gridley, a student at Georgetown University’s School of Foreign Service. I co-founded Spara because I saw firsthand how deeply gambling addiction can affect the people you care about, not just the person struggling with it. I’m building Spara to give people and their loved ones a more human, supportive way to navigate recovery together.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:px-10">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">About us</p>
            <h2 className="mt-7 max-w-sm text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">
              We&apos;re building the tool we wish we had.
            </h2>
            <p className="mt-7 max-w-sm leading-relaxed text-muted-foreground">
              We&apos;re not clinicians. We&apos;re builders working alongside clinicians and people
              with lived experience — including our own — to build something that lasts.
            </p>
            <p className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-brand">
              <Heart className="size-4" strokeWidth={1.6} aria-hidden />
              Herschel &amp; Anton
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-14 lg:gap-16">
          {founders.map((p, i) => (
            <Reveal key={p.name} delay={0.1 + i * 0.12}>
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-7">
                <Image
                  src={p.photo}
                  alt={`Portrait of ${p.name}`}
                  sizes="(min-width: 640px) 8rem, 40vw"
                  className={`h-44 w-36 shrink-0 rounded-[1.25rem] object-cover sm:h-40 sm:w-32 ${p.focus}`}
                />
                <div className="min-w-0">
                  <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-1.5 text-sm font-medium text-brand">{p.school}</p>
                  <p className="mt-4 max-w-[38rem] leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
