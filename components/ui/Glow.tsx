"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GlowProps {
  className?: string;
  // When true, gently pulses/drifts on a slow loop (used in the hero).
  animate?: boolean;
}

/**
 * A soft radial orange-amber glow — the recurring "warm light" motif.
 * Purely decorative.
 */
export default function Glow({ className = "", animate = false }: GlowProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animate && !reduceMotion;

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        background:
          "radial-gradient(circle at center, rgba(251,146,60,0.55) 0%, rgba(251,191,36,0.30) 45%, rgba(255,255,255,0) 72%)",
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
