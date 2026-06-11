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
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-semibold min-h-[44px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";

const variants: Record<Variant, string> = {
  // Sage filled + white text. Resting tone clears WCAG AA (~5:1); hover deepens.
  primary: "bg-sage-btn text-white shadow-soft hover:bg-sage-deep",
  // Cream with a forest-green border + forest text.
  secondary:
    "bg-cream text-forest border border-forest/30 hover:border-forest/60 hover:bg-sage-tint",
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
