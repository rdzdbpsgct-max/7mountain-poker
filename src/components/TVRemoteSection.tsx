import type { Translations } from "./LanguageContext";
import AnimatedSection from "./AnimatedSection";
import ImageLightbox from "./ImageLightbox";

export default function TVRemoteSection({ t }: { t: Translations }) {

  return (
    <section id="tv-remote" className="py-24 sm:py-32 poker-felt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-emerald uppercase">
            {t.tvRemote.label}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground">
            {t.tvRemote.title}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            {t.tvRemote.subtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT COLUMN - TV Mode */}
          <AnimatedSection>
            <div className="card-sheen rounded-2xl border border-border/50 bg-surface/50 overflow-hidden">
              {/* TV Bezel Top */}
              <div className="flex items-center gap-2 px-3 py-2 bg-surface/80">
                <div aria-hidden="true" className="w-2 h-2 rounded-full bg-red-accent animate-pulse" />
                <span className="text-[10px] text-muted/60 uppercase tracking-wider">
                  {t.tvRemote.tv.title}
                </span>
              </div>

              {/* Real App Screenshot as TV Screen */}
              <ImageLightbox
                src="/screenshots/tv-mode.jpg"
                alt="7Mountain Poker TV-Modus - Fullscreen timer with tournament statistics, prize pool and scrolling ticker"
                width={1200}
                height={800}
              />
            </div>

            {/* TV Stand */}
            <div className="w-20 h-1 bg-border rounded-full mx-auto mt-2" />

            {/* Layout Variants */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {t.tvRemote.tv.layouts.map((layout) => (
                <span
                  key={layout}
                  className="rounded-full bg-surface border border-border/50 px-3 py-1 text-xs text-muted"
                >
                  {layout}
                </span>
              ))}
            </div>

            {/* Rotating Screens */}
            <div className="mt-3 text-center">
              {t.tvRemote.tv.screens.map((screen, i) => (
                <span key={screen} className="text-xs text-muted/60">
                  {i > 0 && " · "}
                  {screen}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN - Remote Control */}
          <AnimatedSection delay={200}>
            {/* Phone Mockup with Real Screenshot */}
            <div className="card-sheen mx-auto max-w-[240px] sm:max-w-[280px] rounded-[2.5rem] border-2 border-border-strong/70 bg-surface/60 p-3 overflow-hidden shadow-xl shadow-black/40">
              {/* Phone Notch */}
              <div aria-hidden="true" className="w-20 h-1 bg-border/40 rounded-full mx-auto mb-2" />

              {/* Real Screenshot */}
              <ImageLightbox
                src="/screenshots/remote-control.jpg"
                alt="7Mountain Poker Smartphone Remote Control - Timer, blinds, player management and tournament controls"
                width={1100}
                height={1999}
                className="rounded-2xl overflow-hidden"
              />
            </div>

            {/* QR Code Hint */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {/* CSS QR Icon */}
              <div aria-hidden="true" className="grid grid-cols-3 gap-0.5 w-5 h-5">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-[1px] ${
                      [0, 1, 2, 3, 5, 6, 8].includes(i)
                        ? "bg-muted/40"
                        : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted/60">
                {t.tvRemote.remote.qrHint}
              </span>
            </div>

            {/* Remote Controls */}
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              {t.tvRemote.remote.controls.map((control) => (
                <span
                  key={control}
                  className="rounded-full bg-surface border border-border/50 px-3 py-1 text-xs text-muted"
                >
                  {control}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
