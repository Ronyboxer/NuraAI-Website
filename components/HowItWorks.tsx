import { howItWorks } from "@/content/site";
import { iconMap } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-forest sm:text-[2.6rem]">
            {howItWorks.heading}
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              // Reveal wrapper (CSS entrance) is separate from the hover card so
              // the entrance transform and the hover-lift transform don't fight.
              <Reveal key={step.title} delay={i * 90}>
                <li className="group h-full list-none rounded-card border border-line bg-sagebg p-7 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-tint text-sage ring-1 ring-sage/15">
                      {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                    </span>
                    <span className="font-display text-2xl font-semibold text-sage/55">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-ink">
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
