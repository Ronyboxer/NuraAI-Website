import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral family (Tailwind stone) is referenced directly via
        // stone-* utilities. These tokens add the brand-specific values.
        accent: {
          tint: "#FFF3E9", // soft orange wash behind sections / callouts
          bright: "#FB923C", // orange-400 — icons, highlights, glints
          DEFAULT: "#F97316", // orange-500 — primary accent
          deep: "#EA580C", // orange-600 — button bg with white text
        },
        warm: {
          yellow: "#FBBF24", // amber-400 — gradient partner
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Soft, warm-tinted shadows — never harsh black.
        soft: "0 10px 40px -12px rgba(234, 88, 12, 0.12)",
        "soft-lg": "0 24px 64px -20px rgba(234, 88, 12, 0.18)",
        glow: "0 0 0 1px rgba(234, 88, 12, 0.06), 0 18px 48px -16px rgba(234, 88, 12, 0.20)",
      },
      backgroundImage: {
        "warm-gradient": "linear-gradient(135deg, #FB923C 0%, #FBBF24 100%)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
