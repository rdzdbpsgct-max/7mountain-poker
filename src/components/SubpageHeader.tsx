"use client";

import Link from "next/link";
import type { Locale } from "@/hooks/useLocale";
import LocaleSwitch from "./LocaleSwitch";

type Props = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  backHref?: string;
  backLabel?: { de: string; en: string };
};

export default function SubpageHeader({
  locale,
  setLocale,
  backHref = "/#features",
  backLabel = { de: "← Alle Features", en: "← All Features" },
}: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="text-base sm:text-lg font-bold text-foreground hover:text-emerald-bright transition-colors"
        >
          <span aria-hidden="true">♠ ♥</span>{" "}
          <span className="font-display font-black tracking-tight">7Mountain Poker</span>{" "}
          <span aria-hidden="true">♦ ♣</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <LocaleSwitch locale={locale} setLocale={setLocale} />
          <Link
            href={backHref}
            className="text-sm text-muted hover:text-foreground transition-colors whitespace-nowrap"
          >
            {backLabel[locale]}
          </Link>
        </div>
      </div>
    </header>
  );
}
