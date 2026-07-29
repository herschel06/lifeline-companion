import { motion } from "motion/react";
import { Bell, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

export function Tiers() {
  return (
    <section className="bg-background pb-32 lg:pb-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] font-extrabold">
            Notified after. Or asked before.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {[
            {
              tag: "Free",
              icon: Bell,
              title: "They find out after",
              body: "Your trusted contact is notified the moment a bypass happens.",
              deep: false,
            },
            {
              tag: "Premium",
              icon: ShieldCheck,
              title: "They decide before",
              body: "Nothing unlocks until your trusted contact approves. The pause is the point.",
              deep: true,
            },
          ].map((t, i) => (
            <Reveal key={t.tag} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full rounded-[2rem] p-10 lg:p-14 ${
                  t.deep ? "surface-deep shadow-float" : "bg-mist"
                }`}
              >
                <div className="flex items-center gap-3">
                  <t.icon
                    className={`size-5 ${t.deep ? "text-deep-foreground" : "text-brand"}`}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span
                    className={`text-xs font-semibold tracking-[0.2em] uppercase ${
                      t.deep ? "text-deep-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {t.tag}
                  </span>
                </div>
                <h3 className="mt-8 text-3xl leading-tight font-bold">{t.title}</h3>
                <p
                  className={`mt-5 max-w-sm text-lg leading-relaxed ${
                    t.deep ? "text-deep-foreground/65" : "text-muted-foreground"
                  }`}
                >
                  {t.body}
                </p>

                <div className="mt-14 flex items-center gap-3">
                  <span
                    className={`h-px flex-1 ${t.deep ? "bg-deep-foreground/20" : "bg-border"}`}
                  />
                  <motion.span
                    animate={t.deep ? { scale: [1, 1.12, 1] } : { opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    className={`size-2.5 rounded-full ${t.deep ? "bg-deep-foreground" : "bg-brand"}`}
                  />
                  <span
                    className={`h-px flex-1 ${t.deep ? "bg-deep-foreground/20" : "bg-border"}`}
                  />
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}