import type { Translations } from "./LanguageContext";
import AnimatedSection from "./AnimatedSection";

export default function CTASection({ t }: { t: Translations }) {

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl border border-emerald/20 bg-gradient-to-br from-emerald/10 via-surface/50 to-gold/5 p-12 sm:p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <span className="absolute top-8 left-12 text-5xl text-emerald/10 suit-float">♠</span>
            <span className="absolute bottom-8 right-12 text-4xl text-red-accent/10 suit-float" style={{ animationDelay: "2s" }}>♥</span>
            <span className="absolute top-12 right-20 text-3xl text-gold/10 suit-float" style={{ animationDelay: "4s" }}>♣</span>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">{t.cta.title}</h2>
              <p className="text-lg text-muted max-w-xl mx-auto mb-8">{t.cta.subtitle}</p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                {t.cta.features.map((feature, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-emerald/10 border border-emerald/20 px-4 py-1.5 text-sm text-emerald">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7l3 3 5-5" /></svg>
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href="https://7mountainpoker.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-emerald px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:bg-emerald-dark glow-emerald hover:scale-105"
              >
                <span className="text-2xl">▶</span>
                {t.cta.button}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
