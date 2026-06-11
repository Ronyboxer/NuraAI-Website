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
      className="relative overflow-hidden bg-cream pt-32 pb-24 sm:pt-36 sm:pb-32"
    >
      {/* Soft sage radial glow behind the hero */}
      <Glow
        animate
        className="left-1/2 top-[-8rem] h-[36rem] w-[36rem] -translate-x-1/2 opacity-90 sm:h-[44rem] sm:w-[44rem]"
      />

      <div className="relative mx-auto grid max-w-content items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <p
            className="enter-up mb-5 inline-flex items-center gap-2 rounded-full bg-clay-tint px-4 py-1.5 text-sm font-semibold text-clay-text"
            style={{ animationDelay: "0ms" }}
          >
            {hero.eyebrow}
          </p>

          <h1
            className="enter-up font-display text-balance text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-forest sm:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            {hero.headline}
          </h1>

          <p
            className="enter-up mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink lg:mx-0"
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
