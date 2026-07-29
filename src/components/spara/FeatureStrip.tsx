import { Reveal } from "./Reveal";

const pills = ["Accountability", "Trusted Contact", "Clarity", "Progress", "Daily Check-ins"];

export function FeatureStrip() {
  return (
    <div className="surface-sky">
      <Reveal className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {pills.map((p) => (
            <li key={p}>
              <span className="inline-flex rounded-full bg-card/80 px-5 py-2.5 text-sm font-medium text-secondary-foreground shadow-soft backdrop-blur transition-transform duration-500 hover:-translate-y-0.5">
                {p}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}