import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import SafetyPromise from "@/components/SafetyPromise";
import WhoItsFor from "@/components/WhoItsFor";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-sage-btn focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <SafetyPromise />
        <WhoItsFor />
        <Features />
        <Faq />
        <WaitlistCTA />
      </main>

      <Footer />
    </>
  );
}
