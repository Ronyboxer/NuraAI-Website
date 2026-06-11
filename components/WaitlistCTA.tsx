"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { waitlist } from "@/content/site";
import Glow from "@/components/ui/Glow";
import Reveal from "@/components/ui/Reveal";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    // Basic client-side validation before the round-trip.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-sagebg py-32"
    >
      <Glow className="left-1/2 top-[-6rem] h-[34rem] w-[34rem] -translate-x-1/2 opacity-80" />

      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-forest sm:text-5xl">
            {waitlist.heading}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink">
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
                  className="flex items-center justify-center gap-3 rounded-2xl border border-sage/30 bg-sage-tint px-6 py-5 text-forest"
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
                      disabled={submitting}
                      aria-invalid={error ? true : undefined}
                      aria-describedby={error ? "waitlist-error" : undefined}
                      className="h-[52px] w-full rounded-2xl border border-line bg-white px-5 text-base text-forest placeholder:text-ink/50 focus-visible:border-sage disabled:opacity-60"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={submitting ? undefined : { y: -2 }}
                    whileTap={submitting ? undefined : { y: 0, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="inline-flex h-[52px] items-center justify-center gap-2 rounded-2xl bg-sage-btn px-6 text-base font-semibold text-white shadow-soft transition-colors hover:bg-sage-deep disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2
                          className="h-5 w-5 animate-spin"
                          aria-hidden="true"
                        />
                        Joining…
                      </>
                    ) : (
                      <>
                        {waitlist.button}
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

            {error && !submitted && (
              <p
                id="waitlist-error"
                className="mt-3 text-left text-sm font-medium text-clay-text"
                role="alert"
              >
                {error}
              </p>
            )}

            {!submitted && (
              <p className="mt-4 text-sm text-ink/70">
                No spam, ever. We&apos;ll only email you about Nura.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
