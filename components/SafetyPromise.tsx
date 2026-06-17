import { ShieldCheck, Quote } from "lucide-react";
import { safety } from "@/content/site";
import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";

export default function SafetyPromise() {
  return (
    <section
      id="safety"
      className="relative overflow-hidden bg-deep py-32 text-white"
    >
      {/* Soft sky glow on the dark panel */}
      <Glow className="left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          {/* Warm sun tile + dark ink icon — echoes the trust/affirmation accent. */}
          <span className="mb-7 inline-grid h-16 w-16 place-items-center rounded-2xl bg-sun shadow-talk">
            <ShieldCheck className="h-8 w-8 text-ink" aria-hidden="true" />
          </span>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {safety.heading}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
            {safety.body1}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
            {safety.body2}
          </p>
        </Reveal>

        <Reveal delay={240}>
          {/* Affirmation callout — white card with the one intentional warm
              left edge (mirrors the app's spoken-answer card). */}
          <div className="mx-auto mt-12 flex max-w-xl items-center gap-4 rounded-card border border-line border-l-[5px] border-l-sun bg-surface px-7 py-6 text-left shadow-glow">
            <Quote
              className="h-7 w-7 flex-shrink-0 text-sun"
              aria-hidden="true"
            />
            <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              {safety.callout}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
