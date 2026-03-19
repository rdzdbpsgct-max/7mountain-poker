"use client";

import { useLanguage } from "./LanguageContext";
import AnimatedSection from "./AnimatedSection";

const toolIcons = {
  sidePot: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v12M6 12h12" />
    </svg>
  ),
  icm: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M3 3v18h18" /><path d="M7 12l4-5 4 3 5-6" />
    </svg>
  ),
  payoutSim: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" /><path d="M6 16h4" />
    </svg>
  ),
  bounty: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <circle cx="12" cy="8" r="5" /><path d="M3 21v-2a7 7 0 0114 0v2" /><path d="M19 8l2 2-2 2" />
    </svg>
  ),
  multiTable: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <rect x="2" y="3" width="8" height="7" rx="1" /><rect x="14" y="3" width="8" height="7" rx="1" /><rect x="2" y="14" width="8" height="7" rx="1" /><rect x="14" y="14" width="8" height="7" rx="1" />
    </svg>
  ),
  autoSave: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
    </svg>
  ),
  tournamentLog: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h6" />
    </svg>
  ),
  themes: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  casting: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 20M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6" /><line x1="2" y1="20" x2="2.01" y2="20" />
    </svg>
  ),
  handForHand: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  lateReg: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /><path d="M16 3l3 3M8 3L5 6" />
    </svg>
  ),
  guidedTour: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald">
      <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
};

const iconKeys: (keyof typeof toolIcons)[] = [
  "sidePot", "icm", "payoutSim", "bounty", "multiTable", "autoSave",
  "tournamentLog", "themes", "casting", "handForHand", "lateReg", "guidedTour",
];

const featureKeys = [
  "sidePot", "icm", "payoutSim", "bounty", "multiTable", "autoSave",
  "tournamentLog", "themes", "casting", "handForHand", "lateReg", "guidedTour",
] as const;

export default function PowerToolsSection() {
  const { t } = useLanguage();

  return (
    <section id="power-tools" className="py-24 sm:py-32 relative bg-gradient-to-b from-transparent via-surface/20 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">
            {t.powerTools.label}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            {t.powerTools.title}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {t.powerTools.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featureKeys.map((key, i) => {
            const feature = t.powerTools[key];
            return (
              <AnimatedSection key={key} delay={i * 50}>
                <div className="group rounded-xl border border-border/40 bg-surface/30 p-5 backdrop-blur-sm h-full transition-all duration-300 hover:border-emerald/30 hover:-translate-y-0.5 hover:shadow-md hover:shadow-emerald/10">
                  <div className="w-10 h-10 rounded-lg bg-emerald/10 border border-emerald/20 flex items-center justify-center mb-3 group-hover:bg-emerald/20 group-hover:scale-110 transition-all duration-300">
                    {toolIcons[iconKeys[i]]}
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5 group-hover:text-emerald transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
