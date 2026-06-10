"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Global motion config. `reducedMotion="user"` means that when the visitor has
 * "Reduce motion" enabled, Framer Motion jumps straight to the final state of
 * every animation — so content is shown instantly, never faded in.
 */
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
