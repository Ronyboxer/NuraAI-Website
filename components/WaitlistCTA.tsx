"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { waitlist } from "@/content/site";
import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    // Basic client-side validation.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);

    // TODO: wire to email service (e.g. Formspree)
    // e.g. await fetch("https://formspree.io/f/XXXX", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: value }),
    // });

    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-stone-50 py-24 sm:py-32"
    >
      <Glow className="left-1/2 top-[-6rem] h-[34rem] w-[34rem] -translate-x-1/2 opacity-70" />

      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
            {waitlist.heading}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-stone-600">
            {waitlist.subhead}
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-10">
          <div className="mx-auto max-w-md">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-emerald-800"
                  role="status"
                >
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  <span className="text-lg font-medium">{waitlist.success}</span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <div className="flex-1 text-left">
                    <label htmlFor="waitlist-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder={waitlist.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={error ? "waitlist-error" : undefined}
                      className="h-[52px] w-full rounded-2xl border border-stone-300 bg-white px-5 text-base text-stone-900 placeholder:text-stone-400 focus-visible:border-accent-deep"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="inline-flex h-[52px] items-center justify-center gap-2 rounded-2xl bg-accent-deep px-6 text-base font-semibold text-white shadow-soft transition-colors hover:bg-[#c2410c]"
                  >
                    {waitlist.button}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

            {error && !submitted && (
              <p
                id="waitlist-error"
                className="mt-3 text-left text-sm font-medium text-accent-deep"
                role="alert"
              >
                {error}
              </p>
            )}

            {!submitted && (
              <p className="mt-4 text-sm text-stone-500">
                No spam, ever. We&apos;ll only email you about Lumen.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
