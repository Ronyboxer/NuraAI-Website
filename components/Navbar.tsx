"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on resize to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-canvas/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8"
      >
        {/* Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-lg font-display text-2xl font-semibold tracking-tight text-deep"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/nura-mark.svg"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 shadow-talk rounded-full"
          />
          Nura
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-[15px] font-medium text-ink">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md transition-colors hover:text-sky"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#waitlist" className="px-5 py-2.5 text-[15px]">
            {nav.cta}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl text-ink hover:bg-tint md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-canvas md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-tint"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-1 pb-1 pt-2">
                <Button
                  href="#waitlist"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {nav.cta}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
