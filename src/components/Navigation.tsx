"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import LocaleSwitch from "./LocaleSwitch";

export default function Navigation() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: t.nav.features },
    { href: "#tv-remote", label: t.nav.tvRemote },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#quick-start", label: t.nav.quickStart },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "/blog", label: t.nav.blog },
  ];

  return (
    <nav
      aria-label="Hauptnavigation"
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl animate-[fadeInDown_0.5s_ease-out]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2 text-lg font-bold text-foreground">
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:-rotate-12">♠</span>
            <span aria-hidden="true">♥</span>
            <span className="font-display font-black tracking-tight">7Mountain Poker</span>
            <span aria-hidden="true">♦</span>
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-12">♣</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted hover:text-foreground transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:rounded-full after:bg-emerald after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}

            <LocaleSwitch locale={locale} setLocale={setLocale} />

            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2 text-sm font-bold text-background transition-all duration-300 hover:bg-emerald-bright glow-emerald"
            >
              <span aria-hidden="true">▶</span> {t.nav.startNow}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            className="md:hidden rounded-lg p-2 text-muted hover:text-foreground hover:bg-surface/60 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl animate-[fadeIn_0.2s_ease-out]"
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3 py-3 text-base text-muted hover:text-foreground hover:bg-surface/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between gap-2 px-3 py-3">
              <LocaleSwitch locale={locale} setLocale={setLocale} />
            </div>
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine block rounded-full bg-emerald px-4 py-3.5 text-center font-bold text-background glow-emerald"
            >
              <span aria-hidden="true">▶</span> {t.nav.startNow}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
