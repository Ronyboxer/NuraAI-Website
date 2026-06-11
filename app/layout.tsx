import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nura — The same kind answer, every time they ask.",
  description:
    "Nura is a gentle voice companion for people living with dementia and Alzheimer's. Your family writes the answers — Nura shares them warmly, and only ever the truth you've given it.",
  metadataBase: new URL("https://nura.example"),
  openGraph: {
    title: "Nura — The same kind answer, every time they ask.",
    description:
      "A gentle, voice-first companion for older adults living with dementia and memory loss. Family writes the answers; Nura never makes anything up.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
