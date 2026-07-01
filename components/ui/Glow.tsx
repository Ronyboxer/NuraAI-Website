"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GlowProps {
  className?: string;
  // When true, gently pulses/drifts on a slow loop (used in the hero).
  animate?: boolean;
  // "sky" (default, ambient moss wash) or "sun" (the brighter focal moss glow).
  tone?: "sky" | "sun";
}

// Soft, low-opacity radial washes of moss light drifting over the dark ground.
// "sky" is the quiet ambient tone; "sun" is a brighter focal glow.
const TONES = {
  sky: "radial-gradient(circle at center, rgba(110,144,116,0.30) 0%, rgba(110,144,116,0.12) 45%, rgba(110,144,116,0) 72%)",
  sun: "radial-gradient(circle at center, rgba(147,180,151,0.34) 0%, rgba(126,165,132,0.14) 45%, rgba(126,165,132,0) 72%)",
};

/**
 * A soft radial glow — the recurring ambient-light motif. Purely decorative.
 */
export default function Glow({
  className = "",
  animate = false,
  tone = "sky",
}: GlowProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animate && !reduceMotion;

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        background: TONES[tone],
      }}
      animate={
        shouldAnimate
          ? { scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }
          : undefined
      }
      transition={
        shouldAnimate
          ? { duration: 7, ease: "easeInOut", repeat: Infinity }
          : undefined
      }
    />
  );
}
