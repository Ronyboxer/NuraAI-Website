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
        cream: "#FAF8F3", // page background (warm cream)
        sagebg: "#EFF3EC", // alternate section background (very light sage)
        forest: "#1E3A2B", // headings + deep section background
        ink: "#4A5A50", // body text (muted green-gray)
        line: "#E2E5DB", // hairlines / soft borders

        sage: {
          DEFAULT: "#5C8268", // brand sage accent
          deep: "#4A6E56", // button hover (AA-safe on white)
          // Filled-button resting tone — a hair deeper than the brand sage so
          // white label text clears WCAG AA (~5:1). Visually still #5C8268.
          btn: "#52785E",
          tint: "#E8EFE6", // soft sage surface (icon tiles, washes)
        },
        clay: {
          DEFAULT: "#C77B4F", // secondary accent (decorative)
          // Deeper clay used for the small eyebrow text so it clears AA (~4.6)
          // on the light clay tint.
          text: "#985829",
          tint: "#F5E7DC", // light clay-tinted pill background
        },
        bubble: {
          from: "#DCE8DD", // Nura reply gradient start
          to: "#C9DCC9", // Nura reply gradient end
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Soft, forest-tinted shadows — never harsh black.
        soft: "0 10px 40px -16px rgba(30, 58, 43, 0.16)",
        "soft-lg": "0 24px 64px -24px rgba(30, 58, 43, 0.22)",
        glow: "0 0 0 1px rgba(30, 58, 43, 0.05), 0 20px 50px -20px rgba(30, 58, 43, 0.22)",
      },
      backgroundImage: {
        "bubble-gradient": "linear-gradient(135deg, #DCE8DD 0%, #C9DCC9 100%)",
        "sage-gradient": "linear-gradient(135deg, #6B9076 0%, #5C8268 100%)",
      },
      borderRadius: {
        // Softer, organic card radius (20px).
        card: "1.25rem",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
