"use client";

type Locale = "de" | "en";

type Props = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  className?: string;
};

const LOCALES: { code: Locale; label: string; name: string }[] = [
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "en", label: "EN", name: "English" },
];

export default function LocaleSwitch({ locale, setLocale, className = "" }: Props) {
  return (
    <div
      role="group"
      aria-label="Sprache / Language"
      className={`flex items-center gap-0.5 rounded-full border border-border/60 bg-surface/70 p-1 ${className}`}
    >
      {LOCALES.map(({ code, label, name }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          aria-label={name}
          className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold tracking-wide transition-all duration-200 ${
            locale === code
              ? "bg-emerald text-background shadow-[0_0_12px_rgba(16,185,129,0.4)]"
              : "text-muted hover:text-foreground"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
