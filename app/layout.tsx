import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

// Display / headings: Lora (warm, classic serif). Body / UI: Plus Jakarta Sans.
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
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
    <html lang="en" className={`${lora.variable} ${jakarta.variable}`}>
      <body className="bg-canvas font-sans text-slate antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
