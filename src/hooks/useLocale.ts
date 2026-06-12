"use client";

import { useState, useCallback } from "react";

export type Locale = "de" | "en";

const STORAGE_KEY = "7mp-locale";

export function useLocale() {
  // Lazy init from localStorage — same pattern as LanguageContext
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      try {
        if (localStorage.getItem(STORAGE_KEY) === "en") return "en";
      } catch {
        // Private browsing or localStorage unavailable
      }
    }
    return "de";
  });

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // Ignore
    }
    document.documentElement.lang = l;
  }, []);

  return { locale, setLocale };
}
