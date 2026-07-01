import { ArrowRight } from "lucide-react";
import { hero } from "@/content/site";
import Button from "@/components/ui/Button";
import Glow from "@/components/ui/Glow";
import AnswerDemo from "@/components/AnswerDemo";

// Hero entrance uses CSS (.enter-up) rather than JS so the most important
// above-the-fold content paints and reveals immediately — never blank while the
// bundle hydrates. Stagger is achieved with small inline animation delays.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-sky-gradient pt-32 pb-24 sm:pt-36 sm:pb-32"
    >
      {/* Focal moss glow — the pool of light the content sits in. */}
      <Glow
        animate
        tone="sun"
        className="left-1/2 top-[-8rem] h-[36rem] w-[36rem] -translate-x-1/2 opacity-90 sm:h-[44rem] sm:w-[44rem]"
      />
      {/* Two slow-drifting moss auroras give the dark ground a living calm. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 animate-drift rounded-full bg-glow-focal opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-56 h-80 w-80 animate-drift-rev rounded-full bg-glow-focal opacity-60 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-content items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <p
            className="enter-up mb-5 inline-flex items-center gap-2 rounded-full border border-moss/25 bg-sun-tint px-4 py-1.5 text-sm font-semibold text-sky"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-moss-bright" />
            {hero.eyebrow}
          </p>

          <h1
            className="enter-up font-display text-balance text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            {hero.headline}
          </h1>

          <p
            className="enter-up mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate lg:mx-0"
            style={{ animationDelay: "120ms" }}
          >
            {hero.subhead}
          </p>

          <div
            className="enter-up mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "180ms" }}
          >
            <Button href="#waitlist" className="w-full sm:w-auto">
              {hero.primaryCta}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        {/* Right: animated demo */}
        <div
          className="enter-up flex justify-center lg:justify-end"
          style={{ animationDelay: "220ms" }}
        >
          <AnswerDemo />
        </div>
      </div>
    </section>
  );
}
