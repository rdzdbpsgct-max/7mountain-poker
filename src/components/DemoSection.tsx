import type { Translations } from "./LanguageContext";
import AnimatedSection from "./AnimatedSection";
import ImageLightbox from "./ImageLightbox";

const stepIcons = [
  <svg key="s1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>,
  <svg key="s2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="9" cy="7" r="3" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" /><path d="M19 8v6M16 11h6" />
  </svg>,
  <svg key="s3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="5,3 19,12 5,21" fill="currentColor" opacity="0.3" /><polygon points="5,3 19,12 5,21" />
  </svg>,
];

export default function DemoSection({ t }: { t: Translations }) {

  const steps = [
    { ...t.demo.step1, icon: stepIcons[0] },
    { ...t.demo.step2, icon: stepIcons[1] },
    { ...t.demo.step3, icon: stepIcons[2] },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative bg-gradient-to-b from-transparent via-surface/30 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">{t.demo.label}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">{t.demo.title}</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 150} className="relative text-center">
              <div className="relative mx-auto mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald/10 border border-emerald/20 text-emerald">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-emerald/30 to-transparent" />
              )}
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Real App Screenshots Gallery */}
        <AnimatedSection className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "/screenshots/setup-menu.jpg", alt: "Tournament Setup with Quick Start options" },
              { src: "/screenshots/vorlagen-menu.jpg", alt: "Templates - Save & Load configurations" },
              { src: "/screenshots/liga-mode.jpg", alt: "League management with table, match days, finances and H2H" },
            ].map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 100}>
                <div className="rounded-xl border border-border/40 overflow-hidden shadow-lg shadow-black/20 hover:border-emerald/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald/5">
                  <ImageLightbox
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={800}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          {t.demo.screenshotNote && (
            <p className="mt-4 text-center text-xs text-muted/60 italic">
              {t.demo.screenshotNote}
            </p>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
