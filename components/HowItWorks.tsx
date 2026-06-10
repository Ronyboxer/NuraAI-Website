import { howItWorks } from "@/content/site";
import { iconMap } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-stone-900 sm:text-[2.6rem]">
            {howItWorks.heading}
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              // Reveal wrapper (CSS entrance) is separate from the hover card so
              // the entrance transform and the hover-lift transform don't fight.
              <Reveal key={step.title} delay={i * 90}>
                <li className="group h-full list-none rounded-3xl border border-stone-200 bg-stone-50 p-7 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-tint text-accent-deep ring-1 ring-accent/10">
                      {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                    </span>
                    <span className="font-display text-2xl font-semibold text-accent-bright/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-stone-600">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
