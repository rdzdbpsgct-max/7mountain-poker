import type { Translations } from "./LanguageContext";
import AnimatedSection from "./AnimatedSection";

const featureIcons = [
  // 1. Voice / Megaphone
  <svg key="voice" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
    <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
    <path d="M19 10v2a7 7 0 01-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>,
  // 2. Templates / File
  <svg key="templates" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>,
  // 3. Keyboard
  <svg key="keyboard" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8" />
  </svg>,
  // 4. Currency
  <svg key="currency" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-4a2 2 0 000 4h2a2 2 0 010 4H8" />
    <path d="M12 6v2M12 16v2" />
  </svg>,
  // 5. Rebuy / Refresh
  <svg key="rebuy" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
  </svg>,
  // 6. History / Clock
  <svg key="history" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>,
];

const cardSuits = ["♠", "♥", "♦", "♣", "♠", "♥"];

export default function ProFeaturesSection({ t }: { t: Translations }) {

  const features = [
    t.proFeatures.voiceItem,
    t.proFeatures.templates,
    t.proFeatures.keyboard,
    t.proFeatures.currency,
    t.proFeatures.rebuy,
    t.proFeatures.history,
  ];

  return (
    <section id="pro-features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">
            {t.proFeatures.label}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            {t.proFeatures.title}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {t.proFeatures.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 100}>
              <div className="group rounded-2xl border border-border/50 bg-surface/40 p-6 backdrop-blur-sm h-full relative overflow-hidden transition-all duration-300 hover:border-emerald/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald/10">
                {/* Decorative Card Suit */}
                <span className="absolute top-3 right-3 text-2xl text-emerald/5 group-hover:text-emerald/15 transition-colors duration-500 select-none">
                  {cardSuits[i]}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center mb-4 group-hover:bg-emerald/20 group-hover:scale-110 transition-all duration-300">
                  {featureIcons[i]}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-emerald transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
