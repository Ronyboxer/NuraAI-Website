"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GlowProps {
  className?: string;
  // When true, gently pulses/drifts on a slow loop (used in the hero).
  animate?: boolean;
  // "sky" (default, structural blue) or "sun" (the one warm-light accent).
  tone?: "sky" | "sun";
}

// Soft, low-opacity radial washes. Blue is the structural/ambient tone; the
// warm sun glow is the single "warm light" accent, used sparingly.
const TONES = {
  sky: "radial-gradient(circle at center, rgba(90,143,214,0.22) 0%, rgba(90,143,214,0.10) 45%, rgba(255,255,255,0) 72%)",
  sun: "radial-gradient(circle at center, rgba(233,184,114,0.26) 0%, rgba(233,184,114,0.12) 45%, rgba(255,255,255,0) 72%)",
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
