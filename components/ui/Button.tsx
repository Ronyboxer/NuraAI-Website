"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
}

const base =
  "sheen inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold tracking-[0.02em] min-h-[44px] transition-colors duration-200 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-sky";

const variants: Record<Variant, string> = {
  // Deep moss fill + off-white text — the default for small-text actions.
  primary:
    "bg-forest-gradient text-ink shadow-soft ring-1 ring-inset ring-white/5 hover:brightness-110",
  // Dark surface with a hairline border + off-white text; hover lifts to moss.
  secondary:
    "bg-surface text-ink border border-line hover:border-sky hover:bg-tint",
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  // Buttons lift slightly on hover, settle on tap.
  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { y: 0, scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
