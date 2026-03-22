import Link from "next/link";
import type { Translations } from "./LanguageContext";
import AnimatedSection from "./AnimatedSection";

const featureIcons = {
  timer: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <circle cx="12" cy="13" r="9" /><path d="M12 9v4l2.5 2.5" /><path d="M9 1h6" /><path d="M12 1v3" />
    </svg>
  ),
  blinds: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M3 3v18h18" /><path d="M7 16l4-6 4 4 5-8" />
    </svg>
  ),
  players: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <circle cx="9" cy="7" r="3" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" /><circle cx="17" cy="7" r="2" /><path d="M21 21v-1.5a3 3 0 00-2-2.83" />
    </svg>
  ),
  series: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M8 21h8M12 17v4M7 4h10l-1 8H8L7 4z" /><path d="M5 4h14" /><circle cx="12" cy="10" r="1" fill="currentColor" />
    </svg>
  ),
  tv: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ),
  remote: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  voice: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M19.07 4.93a10 10 0 010 14.14" /><path d="M15.54 8.46a5 5 0 010 7.07" />
    </svg>
  ),
  pwa: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
};

function FeatureCard({ title, description, icon, href }: { title: string; description: string; icon: React.ReactNode; href?: string }) {
  const content = (
    <div className="group relative rounded-2xl border border-border/50 bg-surface/50 p-6 transition-all duration-300 hover:border-emerald/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald/10 card-glow backdrop-blur-sm h-full">
      <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald/10 border border-emerald/20 group-hover:bg-emerald/20 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-emerald transition-colors duration-300">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
      {href && (
        <span className="mt-3 inline-flex items-center gap-1 text-xs text-emerald/70 group-hover:text-emerald transition-colors">
          Mehr erfahren
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 2l4 4-4 4" /></svg>
        </span>
      )}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }
  return content;
}

export default function FeaturesSection({ t }: { t: Translations }) {

  const coreFeatures = [
    { icon: featureIcons.timer, ...t.features.timer, href: undefined as string | undefined },
    { icon: featureIcons.blinds, ...t.features.blinds, href: "/features/blindstruktur" },
    { icon: featureIcons.players, ...t.features.players, href: "/features/liga" },
    { icon: featureIcons.series, ...t.features.series, href: undefined as string | undefined },
  ];

  const advancedFeatures = [
    { icon: featureIcons.tv, ...t.features.tv, href: "/features/tv-modus" },
    { icon: featureIcons.remote, ...t.features.remote, href: "/features/fernbedienung" },
    { icon: featureIcons.voice, ...t.features.voice, href: undefined as string | undefined },
    { icon: featureIcons.pwa, ...t.features.pwa, href: undefined as string | undefined },
  ];

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">{t.features.label}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">{t.features.title}</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">{t.features.subtitle}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 100}>
              <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} href={feature.href} />
            </AnimatedSection>
          ))}

          {/* Divider */}
          <div className="col-span-full flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-bold tracking-[0.2em] text-emerald/60 uppercase">{t.features.advancedLabel}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {advancedFeatures.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 100}>
              <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} href={feature.href} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
