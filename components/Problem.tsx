import { problem } from "@/content/site";
import Reveal from "@/components/ui/Reveal";

export default function Problem() {
  return (
    <section className="bg-stone-50 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-[2.6rem]">
            {problem.heading}
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-stone-600">
            {problem.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
