import { features } from "@/content/site";
import { iconMap } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

export default function Features() {
  return (
    <section className="bg-tint py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem]">
            {features.heading}
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <Reveal key={feature.title} delay={i * 70}>
                <li className="group h-full list-none rounded-card border border-line bg-surface p-6 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-tint text-sky ring-1 ring-sky/15">
                    {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-pretty leading-relaxed text-slate">
                    {feature.body}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
