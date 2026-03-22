import type { Translations } from "./LanguageContext";
import AnimatedSection from "./AnimatedSection";

export default function TestimonialsSection({ t }: { t: Translations }) {

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative bg-gradient-to-b from-transparent via-surface/20 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">{t.testimonials.label}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">{t.testimonials.title}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="group relative rounded-2xl border border-border/50 bg-surface/40 p-6 backdrop-blur-sm h-full transition-all duration-300 hover:border-emerald/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald/10">
                <div className="text-emerald/30 group-hover:text-emerald/50 text-4xl font-serif mb-3 transition-colors duration-300">&ldquo;</div>
                <p className="text-foreground leading-relaxed mb-6">{item.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald/20 border border-emerald/30 flex items-center justify-center text-emerald font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.author}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-emerald/5 group-hover:text-emerald/15 text-3xl select-none transition-colors duration-500">
                  {["♠", "♥", "♦"][i]}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
