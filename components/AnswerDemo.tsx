"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { answerDemo } from "@/content/site";

// Phases of a single exchange.
type Phase = "asking" | "thinking" | "answering";

// Timings (ms) — deliberately calm and slow.
const THINKING_MS = 800;
const ANSWER_HOLD_MS = 2400;
const FADE_GAP_MS = 600;

export default function AnswerDemo() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  // Start in "answering" so the first paint (and any no-JS render) already shows
  // a complete question + answer — the card is never empty.
  const [phase, setPhase] = useState<Phase>("answering");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    // Reduced motion: show the first pair statically, no loop.
    if (reduceMotion) {
      setPhase("answering");
      return;
    }

    let toThinking: ReturnType<typeof setTimeout>;
    let toAnswer: ReturnType<typeof setTimeout>;
    let toNext: ReturnType<typeof setTimeout>;

    // Show the question briefly, then "think", then answer.
    setPhase("asking");
    toThinking = setTimeout(() => setPhase("thinking"), 700);
    toAnswer = setTimeout(() => setPhase("answering"), 700 + THINKING_MS);
    toNext = setTimeout(
      () => setIndex((i) => (i + 1) % answerDemo.length),
      700 + THINKING_MS + ANSWER_HOLD_MS + FADE_GAP_MS,
    );

    return () => {
      clearTimeout(toThinking);
      clearTimeout(toAnswer);
      clearTimeout(toNext);
    };
  }, [index, reduceMotion]);

  const current = answerDemo[index];

  return (
    <div
      className="relative w-full max-w-md"
      role="img"
      aria-label={`Lumen demo. Question: ${current.question} Answer: ${current.answer}`}
    >
      {/* Device card */}
      <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft-lg sm:p-7">
        {/* Soft top wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent-tint to-transparent"
        />

        {/* Header row */}
        <div className="relative mb-6 flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-warm-gradient">
            <Volume2 className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-medium text-stone-900">
            Lumen
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-stone-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Listening
          </span>
        </div>

        {/* Question bubble */}
        <div className="relative mb-4 flex justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={`q-${index}`}
              initial={!mounted || reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-[85%] rounded-2xl rounded-tr-md bg-stone-100 px-4 py-3 text-[15px] font-medium text-stone-700"
            >
              {current.question}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Answer area (reserve height to avoid layout jump) */}
        <div className="relative flex min-h-[88px] items-start">
          <AnimatePresence mode="wait">
            {phase === "thinking" && !reduceMotion ? (
              <motion.div
                key={`think-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-accent-tint px-4 py-4"
                aria-hidden="true"
              >
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-2.5 w-2.5 rounded-full bg-accent"
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: d * 0.18,
                    }}
                  />
                ))}
              </motion.div>
            ) : phase === "answering" ? (
              <motion.div
                key={`a-${index}`}
                initial={!mounted || reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="max-w-[88%] rounded-2xl rounded-tl-md bg-warm-gradient px-4 py-3 text-[15px] font-medium leading-relaxed text-stone-900 shadow-soft"
              >
                {current.answer}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* Soft floating glints */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full bg-accent-bright/20 blur-xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-warm-yellow/20 blur-xl"
      />
    </div>
  );
}
