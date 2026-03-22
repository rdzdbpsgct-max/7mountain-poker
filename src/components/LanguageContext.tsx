"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, Translations, getTranslations } from "@/lib/i18n";

export type { Translations };

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");
  const t = getTranslations(locale);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
  };

  useEffect(() => {
    const titles: Record<Locale, string> = {
      de: "Kostenloser Poker Turnier Timer | 7Mountain Poker",
      en: "Free Poker Tournament Timer | 7Mountain Poker",
    };
    const descriptions: Record<Locale, string> = {
      de: "Kostenloser Poker Turnier Timer mit TV-Modus, Smartphone-Fernbedienung, Liga-System & 590 Sprachansagen. Ohne Anmeldung sofort starten.",
      en: "Free poker tournament timer with TV mode, remote control, league system & 590 voice announcements. No signup needed. Works offline.",
    };
    document.title = titles[locale];
    document.documentElement.lang = locale;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", descriptions[locale]);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
