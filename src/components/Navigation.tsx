"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function Navigation() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: t.nav.features },
    { href: "#tv-remote", label: t.nav.tvRemote },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#quick-start", label: t.nav.quickStart },
    { href: "#testimonials", label: t.nav.testimonials },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80 animate-[fadeInDown_0.5s_ease-out]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              <span className="text-foreground">♠</span>{" "}
              <span className="text-foreground">♥</span>{" "}
              <span className="font-black">7Mountain Poker</span>{" "}
              <span className="text-foreground">♦</span>{" "}
              <span className="text-foreground">♣</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted hover:text-foreground transition-colors duration-200 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-emerald after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-1 rounded-lg bg-surface p-1">
              <button
                onClick={() => setLocale("de")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  locale === "de"
                    ? "bg-emerald text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                  locale === "en"
                    ? "bg-emerald text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-dark glow-emerald"
            >
              <span>▶</span> {t.nav.startNow}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-[fadeIn_0.2s_ease-out]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block text-muted hover:text-foreground py-2">
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 py-2">
              <button onClick={() => setLocale("de")} className={`px-3 py-1.5 text-sm rounded-md ${locale === "de" ? "bg-emerald text-white" : "bg-surface text-muted"}`}>DE</button>
              <button onClick={() => setLocale("en")} className={`px-3 py-1.5 text-sm rounded-md ${locale === "en" ? "bg-emerald text-white" : "bg-surface text-muted"}`}>EN</button>
            </div>
            <a href="https://7mountainpoker.vercel.app" target="_blank" rel="noopener noreferrer" className="block text-center rounded-lg bg-emerald px-4 py-3 font-semibold text-white glow-emerald">
              ▶ {t.nav.startNow}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
