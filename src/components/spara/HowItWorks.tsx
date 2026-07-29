import { motion } from "motion/react";
import { Check, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { Phone } from "./Phone";
import { Lifesaver } from "./Lifesaver";

const ease = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background pb-32 lg:pb-48">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
            How it works
          </p>
          <h2 className="mx-auto mt-8 max-w-3xl text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.06] font-extrabold tracking-[-0.03em]">
            Add a <span className="text-brand">human</span> between you and your impulse.
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 grid max-w-7xl gap-20 px-6 lg:grid-cols-4 lg:gap-10 lg:px-10">
        <Step
          index={1}
          title="Invite"
          body="Invite a trusted contact."
          delay={0}
          visual={
            <Phone>
              <p className="text-sm font-semibold">Invite a trusted contact</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                They'll be your accountability buddy on Spara.
              </p>
              <div className="mt-5 flex items-center gap-2.5 rounded-xl bg-mist px-3 py-2.5">
                <span className="grid size-7 place-items-center rounded-full bg-brand/10 text-[10px] font-bold text-brand">
                  D
                </span>
                <div className="min-w-0 text-left">
                  <p className="truncate text-[11px] font-medium">Dad</p>
                  <p className="truncate text-[10px] text-muted-foreground">dad@email.com</p>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand py-2.5 text-xs font-semibold text-primary-foreground"
              >
                <Send className="size-3.5" strokeWidth={2} aria-hidden />
                Send invite
              </motion.div>
            </Phone>
          }
        />

        <Step
          index={2}
          title="They accept"
          body="They download the app and accept your invite."
          delay={0.1}
          visual={
            <Phone tone="deep">
              <p className="text-[10px] tracking-[0.2em] text-deep-foreground/50 uppercase">
                Spara
              </p>
              <p className="mt-2 text-sm leading-snug font-semibold">
                You've been invited to be an accountability buddy.
              </p>
              <Lifesaver className="mx-auto mt-5 w-24 animate-float" alt="" />
              <div className="mt-5 rounded-full bg-brand py-2.5 text-center text-xs font-semibold text-primary-foreground">
                Accept invite
              </div>
            </Phone>
          }
        />

        <Step
          index={3}
          title="You're connected"
          body="Now you're connected, and accountability begins."
          delay={0.2}
          visual={<Connected />}
        />

        <Step
          index={4}
          title="Request & approve"
          body="When you try to bypass, they get the request."
          delay={0.3}
          visual={
            <Phone>
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Approve bypass?
              </p>
              <p className="mt-2 text-sm leading-snug font-semibold">
                Anton wants to bypass Casino Blocker
              </p>
              <motion.div
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease }}
                className="mt-5 space-y-2"
              >
                <div className="rounded-full bg-brand py-2.5 text-center text-xs font-semibold text-primary-foreground">
                  Approve
                </div>
                <div className="rounded-full bg-mist py-2.5 text-center text-xs font-semibold">
                  Decline
                </div>
              </motion.div>
              <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-brand">
                <Check className="size-3" strokeWidth={2.5} aria-hidden />
                Blocker stays on until they answer
              </div>
            </Phone>
          }
        />
      </div>
    </section>
  );
}

function Connected() {
  return (
    <div className="relative flex h-full min-h-[16rem] items-center justify-center">
      <div aria-hidden className="absolute size-40 rounded-full border border-brand/15 animate-ripple" />
      <motion.div
        initial={{ opacity: 0, x: -14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.1, ease }}
      >
        <Lifesaver className="w-32 animate-float" alt="" />
      </motion.div>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.1, delay: 0.35, ease }}
        className="h-0.5 w-10 origin-left rounded-full bg-brand/40"
      />
      <motion.div
        initial={{ opacity: 0, x: 14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1.1, delay: 0.15, ease }}
      >
        <Lifesaver className="w-32 animate-float [animation-delay:-4s]" alt="" />
      </motion.div>
    </div>
  );
}

function Step({
  index,
  title,
  body,
  visual,
  delay,
}: {
  index: number;
  title: string;
  body: string;
  visual: React.ReactNode;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <div className="flex items-center gap-3">
        <span className="grid size-6 shrink-0 place-items-center rounded-full border border-brand/40 text-[11px] font-semibold text-brand">
          {index}
        </span>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">{body}</p>
      <div className="mt-10 flex w-full justify-center lg:justify-start">{visual}</div>
    </Reveal>
  );
}
