import { ShieldCheck, Quote } from "lucide-react";
import { safety } from "@/content/site";
import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";

export default function SafetyPromise() {
  return (
    <section
      id="safety"
      className="relative overflow-hidden bg-stone-900 py-24 text-white sm:py-32"
    >
      {/* Warm glow on the dark panel for trust + warmth */}
      <Glow className="left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mb-7 inline-grid h-16 w-16 place-items-center rounded-2xl bg-warm-gradient shadow-glow">
            <ShieldCheck className="h-8 w-8 text-white" aria-hidden="true" />
          </span>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {safety.heading}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-stone-300">
            {safety.body1}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-stone-300">
            {safety.body2}
          </p>
        </Reveal>

        {/* Callout panel in orange tint */}
        <Reveal delay={240}>
          <div className="mx-auto mt-12 flex max-w-xl items-center gap-4 rounded-3xl border border-accent/30 bg-accent-tint px-7 py-6 text-left shadow-glow">
            <Quote
              className="h-7 w-7 flex-shrink-0 text-accent-deep"
              aria-hidden="true"
            />
            <p className="font-display text-xl font-medium leading-snug text-stone-900 sm:text-2xl">
              {safety.callout}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
