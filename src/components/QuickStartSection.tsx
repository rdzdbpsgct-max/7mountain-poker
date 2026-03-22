import type { Translations } from "./LanguageContext";
import AnimatedSection from "./AnimatedSection";

export default function QuickStartSection({ t }: { t: Translations }) {

  const modes = [
    {
      ...t.quickStart.turbo,
      icon: "⚡",
      color: "from-emerald/20 to-emerald/5",
      borderColor: "border-emerald/30",
      accent: "text-emerald",
      featured: false,
    },
    {
      ...t.quickStart.standard,
      icon: "♠",
      color: "from-gold/20 to-gold/5",
      borderColor: "border-gold/30",
      accent: "text-gold",
      featured: true,
    },
    {
      ...t.quickStart.deepStack,
      icon: "🎰",
      color: "from-red-accent/15 to-red-accent/5",
      borderColor: "border-red-accent/30",
      accent: "text-red-accent",
      featured: false,
    },
  ];

  return (
    <section id="quick-start" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">{t.quickStart.label}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">{t.quickStart.title}</h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">{t.quickStart.subtitle}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {modes.map((mode, i) => (
            <AnimatedSection key={mode.title} delay={i * 100}>
              <a
                href="https://7mountainpoker.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block rounded-2xl border ${mode.borderColor} bg-gradient-to-b ${mode.color} p-8 transition-all duration-300 card-glow cursor-pointer hover:-translate-y-1.5 hover:scale-[1.02] ${
                  mode.featured ? "md:-mt-4 md:mb-4 ring-1 ring-gold/20" : ""
                }`}
              >
                {mode.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold text-background text-xs font-bold">
                    POPULAR
                  </div>
                )}
                <div className="text-4xl mb-4">{mode.icon}</div>
                <h3 className={`text-2xl font-black ${mode.accent} mb-2`}>{mode.title}</h3>
                <p className="text-3xl font-bold text-foreground mb-1">{mode.duration}</p>
                <p className="text-sm text-muted mb-4">{mode.details}</p>
                <p className="text-muted text-sm">{mode.description}</p>
                <div className={`mt-6 inline-flex items-center gap-2 ${mode.accent} font-semibold text-sm group-hover:gap-3 transition-all`}>
                  {t.quickStart.startDirect}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
