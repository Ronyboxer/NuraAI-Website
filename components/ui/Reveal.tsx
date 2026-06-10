import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
}

/**
 * Entrance reveal driven entirely by CSS (`.enter-up`). It runs on first paint
 * and completes without any JavaScript, IntersectionObserver, or Framer Motion —
 * so content can never be left stuck invisible if a script is slow or fails.
 * Under `prefers-reduced-motion`, globals.css collapses the animation so content
 * appears instantly.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  return (
    <div
      className={`enter-up ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
