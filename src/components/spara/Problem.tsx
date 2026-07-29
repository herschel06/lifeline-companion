import { Globe, Trash2, ShieldOff, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

const bypasses = [
  { icon: Globe, label: "VPN" },
  { icon: Trash2, label: "Delete app" },
  { icon: ShieldOff, label: "Disable blocker" },
  { icon: Smartphone, label: "New device" },
];

export function Problem() {
  return (
    <section className="bg-background py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-4xl text-[clamp(2.2rem,5.2vw,4rem)] leading-[1.03] font-extrabold">
            Blocking apps are easy to bypass.
            <span className="block text-muted-foreground">That's the problem.</span>
          </h2>
        </Reveal>

        <div className="mt-24 grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4 lg:gap-12">
          {bypasses.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.09}>
              <div className="flex flex-col items-start gap-5">
                <b.icon className="size-7 text-brand" strokeWidth={1.4} aria-hidden />
                <p className="text-lg font-medium">{b.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}