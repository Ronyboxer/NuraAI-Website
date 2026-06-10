import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumen — The same kind answer, every time they ask.",
  description:
    "Lumen is a gentle voice companion for people living with dementia and Alzheimer's. Your family writes the answers — Lumen shares them warmly, and only ever the truth you've given it.",
  metadataBase: new URL("https://lumen.example"),
  openGraph: {
    title: "Lumen — The same kind answer, every time they ask.",
    description:
      "A gentle, voice-first companion for older adults living with dementia and memory loss. Family writes the answers; Lumen never makes anything up.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="bg-white font-sans text-stone-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
