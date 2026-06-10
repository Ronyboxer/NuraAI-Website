# Lumen — Marketing Website

A warm, calm marketing landing page for **Lumen**, a gentle voice-first companion
for older adults living with dementia, Alzheimer's, and memory loss. The site is
designed for the **family caregiver**: trustworthy, reassuring, and easy to read.

> This is the marketing site only — no login, no real backend. The waitlist form
> is client-side and shows a friendly success state on submit.

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** (v3, classic `tailwind.config.ts`)
- **Framer Motion** for all animation
- **lucide-react** for icons
- **next/font/google** — Fraunces (display serif) + Plus Jakarta Sans (body)

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # composes the ten sections + skip link
  globals.css       # base styles, focus rings, reduced-motion
components/
  Navbar.tsx        # sticky nav, transparent → solid on scroll, mobile menu
  Hero.tsx          # headline, CTAs, animated Answer Demo, warm glow
  AnswerDemo.tsx    # looping Q&A device mock (the centerpiece)
  Problem.tsx
  HowItWorks.tsx    # three step cards
  SafetyPromise.tsx # "Lumen never makes things up" — the trust anchor
  WhoItsFor.tsx
  Features.tsx      # six feature cards
  Faq.tsx           # accessible accordion
  WaitlistCTA.tsx   # client-side email capture + success state
  Footer.tsx        # wordmark, links, medical disclaimer
  ui/
    Button.tsx      # shared button with hover lift
    Glow.tsx        # reusable warm radial glow
    Reveal.tsx      # scroll-reveal wrapper
    motion.ts       # shared Framer Motion variants
    icons.ts        # lucide icon name → component map
content/
  site.ts           # all copy in one place
tailwind.config.ts  # palette (orange/amber + stone) + fonts
```

## Design notes

- **Palette:** warm white + warm gray (`stone`) with orange/amber accents.
  Orange is used only for accents, icons, highlights, and buttons (deep
  `#EA580C` with white text for WCAG AA contrast) — never for body text.
- **Type:** Fraunces for headlines, Plus Jakarta Sans for body/UI.
- **Motion:** transform + opacity only. Hero load-in, scroll reveals, hover
  micro-interactions, a looping Answer Demo, and a gently pulsing hero glow.
- **Accessibility:** semantic landmarks, one `h1`, visible focus rings,
  keyboard-navigable accordion with `aria-expanded`, ≥44px tap targets, and full
  `prefers-reduced-motion` support (loops and entrances are disabled).

## Wiring up the waitlist

The form in `components/WaitlistCTA.tsx` is client-side only. Search for
`// TODO: wire to email service (e.g. Formspree)` to drop in your POST endpoint.

---

Lumen is not a medical device and does not provide medical advice.
