import type { Config } from "tailwindcss";

// Nura design system — "dark earthy edition". Dark slate gray is the ground;
// moss green is the single accent (mic, active states, affirmations, highlights).
// Text is warm off-white on slate. No blue, no gold — backgrounds are soft dark
// gradient washes, never dead flat fills.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#202423", // page ground
        surface: "#2C3230", // cards
        raised: "#262B29", // raised surface
        tint: "#333A37", // field / alternate section surface
        line: "#3D443F", // hairline / soft borders
        deepest: "#191D1C", // deepest ground — dark panels, device chrome

        // Moss is the single accent — mic, active states, affirmations.
        moss: {
          DEFAULT: "#6E9074", // primary moss
          bright: "#93B497", // bright moss — text/icon accents on slate
          deep: "#5C7A62", // deep moss — button fills
          deepest: "#486150", // deepest moss — hover
        },

        // Legacy token names remapped onto the new palette so existing markup
        // keeps its meaning: "sky" = the accent, "deep" = filled-button color.
        sky: {
          DEFAULT: "#93B497", // accent (bright moss on dark)
          deep: "#5C7A62",
        },
        deep: {
          DEFAULT: "#5C7A62", // primary button fill (deep moss)
          dark: "#486150", // button hover (deeper moss)
        },

        ink: "#EDEFE7", // text primary + headings (warm off-white)
        slate: "#97A199", // text secondary (muted sage-gray)
        onaccent: "#14201A", // dark ink on BRIGHT moss fills (icon tiles, mic)

        sun: {
          DEFAULT: "#6E9074", // affirmation accent (moss)
          tint: "rgba(110, 144, 116, 0.16)", // affirmation wash
        },
        clay: "#C97F5E", // muted terracotta (errors / destructive)
      },
      fontFamily: {
        display: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // On a dark ground, depth comes from soft dark shadows + a hairline.
        soft: "0 4px 16px rgba(0, 0, 0, 0.30)",
        "soft-lg": "0 18px 44px rgba(0, 0, 0, 0.42)",
        glow: "0 0 0 1px rgba(147, 180, 151, 0.08), 0 22px 50px rgba(0, 0, 0, 0.50)",
        // Warm moss glow reserved for focal elements (talk button, affirmations).
        talk: "0 8px 30px rgba(110, 144, 116, 0.40)",
      },
      backgroundImage: {
        // Page ground — dark slate with a breath of light from the top.
        "canvas-gradient":
          "radial-gradient(135% 100% at 50% 0%, #272D2A 0%, #202423 55%, #191D1C 100%)",
        // Hero / calm surface — dark wash with a faint moss settle at the base.
        "sky-gradient":
          "radial-gradient(130% 100% at 50% 8%, #2B322E 0%, #222724 46%, #1A1F1D 100%)",
        // Bright moss fill for hero actions / focal surfaces.
        "moss-gradient": "linear-gradient(155deg, #82A588 0%, #5F7E66 100%)",
        // Deep moss fill for small-text primary buttons.
        "forest-gradient": "linear-gradient(155deg, #5F7E66 0%, #47614D 100%)",
        // Moss glow that sits behind focal elements.
        "glow-focal":
          "radial-gradient(closest-side, rgba(126,165,132,0.50), rgba(126,165,132,0.16) 55%, rgba(126,165,132,0) 78%)",
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
      keyframes: {
        // Gentle vertical bob — for the demo card and floating glints.
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Slow ambient drift for the background moss glows (aurora feel).
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(24px, -18px) scale(1.06)" },
        },
        // Expanding ring for the "listening" pulse.
        ripple: {
          "0%": { transform: "scale(0.85)", opacity: "0.55" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        // Soft sheen sweep across buttons on hover.
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        float: "float 7s cubic-bezier(0.45, 0, 0.55, 1) infinite",
        "float-slow": "float 10s cubic-bezier(0.45, 0, 0.55, 1) infinite",
        drift: "drift 16s ease-in-out infinite",
        "drift-rev": "drift 20s ease-in-out infinite reverse",
        ripple: "ripple 2.6s cubic-bezier(0.22, 0.61, 0.36, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
