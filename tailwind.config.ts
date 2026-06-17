import type { Config } from "tailwindcss";

// Nura design system — "a clear morning sky". Blue is the structural/ambient
// color; the warm sun accent is used sparingly (affirmation + the brand mark).
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F9FD", // page background
        surface: "#FFFFFF", // cards
        tint: "#EAF2FC", // surface tint / alternate sections
        line: "#D7E3F2", // hairline / soft borders

        sky: {
          DEFAULT: "#5A8FD6", // structural primary (sky blue)
          deep: "#2C4A73", // headings + dark panels (alias of deep)
        },
        deep: {
          DEFAULT: "#2C4A73", // button fills + dark panel (blue-slate)
          dark: "#233B5C", // button hover (a touch deeper)
        },

        ink: "#1F3148", // text primary + headings
        slate: "#5A6B80", // text secondary

        sun: {
          DEFAULT: "#E9B872", // warm accent (sparing)
          tint: "#FBEFD8", // affirmation wash
        },
        clay: "#A8552F", // muted warm terracotta (errors / destructive)
      },
      fontFamily: {
        display: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Soft, low, blue-tinted shadows — never harsh black.
        soft: "0 4px 14px rgba(44, 74, 115, 0.08)",
        "soft-lg": "0 12px 32px rgba(44, 74, 115, 0.10)",
        glow: "0 0 0 1px rgba(44, 74, 115, 0.05), 0 16px 40px rgba(44, 74, 115, 0.12)",
        // Warm glow reserved for the sun accent (echoes the talk button).
        talk: "0 10px 28px rgba(233, 184, 114, 0.35)",
      },
      backgroundImage: {
        // The single permitted ambient gradient — a soft top-to-bottom sky wash.
        "sky-gradient":
          "linear-gradient(180deg, #EAF2FC 0%, #F6F9FD 46%, #F6F9FD 100%)",
      },
      borderRadius: {
        // Restrained card radius (16px) per the design system.
        card: "1rem",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
