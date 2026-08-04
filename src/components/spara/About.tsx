import Image from "next/image";
import { Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import anton from "@/assets/founder-anton.jpg";
import herschel from "@/assets/founder-herschel.jpg";

const founders = [
  {
    name: "Anton",
    school: "Georgetown University",
    photo: anton,
    body: "Passionate about behavioral health, product, and creating real-world impact through technology.",
  },
  {
    name: "Herschel",
    school: "UCLA",
    photo: herschel,
    body: "Focused on building beautiful products that help people make better decisions every day.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">About us</p>
          <h2 className="mt-8 max-w-sm text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">
            We&apos;re building the tool we wish we had.
          </h2>
          <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
            We&apos;re not clinicians. We&apos;re builders working alongside clinicians and people
            with lived experience to build something that lasts.
          </p>
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand">
            <Heart className="size-4" strokeWidth={1.6} aria-hidden />
            Anton &amp; Herschel
          </p>
        </Reveal>

        <div className="grid gap-14 sm:grid-cols-2 lg:gap-16">
          {founders.map((p, i) => (
            <Reveal key={p.name} delay={0.1 + i * 0.12}>
              <div className="flex flex-col gap-5 sm:flex-row lg:gap-6">
                <Image
                  src={p.photo}
                  alt={`Portrait of ${p.name}`}
                  sizes="(min-width: 640px) 7rem, 30vw"
                  className="h-36 w-28 shrink-0 rounded-[1.25rem] object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="min-w-0">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-brand">{p.school}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
