import { Users, Heart, HandHeart } from "lucide-react";
import { whoItsFor } from "@/content/site";
import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="relative overflow-hidden bg-cream py-32">
      <Glow className="right-[-6rem] top-[-4rem] h-[26rem] w-[26rem] opacity-60" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mb-7 inline-flex items-center gap-2.5 text-sage">
            <Heart className="h-6 w-6" aria-hidden="true" />
            <Users className="h-7 w-7" aria-hidden="true" />
            <HandHeart className="h-6 w-6" aria-hidden="true" />
          </span>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-forest sm:text-[2.6rem]">
            {whoItsFor.heading}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink">
            {whoItsFor.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
