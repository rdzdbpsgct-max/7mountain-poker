import type { Translations } from "./LanguageContext";
import ImageLightbox from "./ImageLightbox";

export default function HeroSection({ t }: { t: Translations }) {
  return (
    <section className="bg-noise relative flex min-h-screen items-center justify-center overflow-hidden poker-bg pt-28 pb-16">
      {/* Floating card suits */}
      <span aria-hidden="true" className="absolute text-6xl text-emerald/5 select-none pointer-events-none suit-float" style={{ left: "10%", top: "20%" }}>♠</span>
      <span aria-hidden="true" className="absolute text-5xl text-emerald/5 select-none pointer-events-none suit-float" style={{ left: "85%", top: "15%", animationDelay: "1.5s" }}>♥</span>
      <span aria-hidden="true" className="absolute text-4xl text-emerald/5 select-none pointer-events-none suit-float" style={{ left: "75%", top: "70%", animationDelay: "3s" }}>♦</span>
      <span aria-hidden="true" className="absolute text-5xl text-emerald/5 select-none pointer-events-none suit-float" style={{ left: "15%", top: "75%", animationDelay: "2s" }}>♣</span>

      {/* Gradient orbs */}
      <div aria-hidden="true" className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up animate-delay-200">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-4 py-1.5 mb-8">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-emerald">{t.hero.badge}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="animate-fade-in-up animate-delay-300">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="text-foreground">{t.hero.title}</span>
            <br />
            <span className="text-gradient">{t.hero.titleAccent}</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-in-up animate-delay-500">
          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        {/* CTAs */}
        <div className="animate-fade-in-up animate-delay-700">
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://7mountainpoker.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex items-center gap-3 rounded-full bg-emerald px-8 py-4 text-lg font-bold text-background transition-all duration-300 hover:bg-emerald-bright glow-emerald hover:scale-[1.03]"
            >
              <span aria-hidden="true" className="text-xl group-hover:translate-x-0.5 transition-transform">▶</span>
              {t.hero.cta}
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-8 py-4 text-lg font-semibold text-muted transition-all hover:border-emerald/50 hover:text-foreground hover:bg-surface/50"
            >
              {t.hero.ctaSecondary}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M10 4v12M4 10l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stat strip */}
        <div className="animate-fade-in-up animate-delay-700">
          <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-4">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="card-sheen bg-surface/70 px-4 py-5 backdrop-blur-sm">
                <dd className="font-mono text-2xl sm:text-3xl font-bold text-emerald-bright">{stat.value}</dd>
                <dt className="mt-1 text-[11px] sm:text-xs uppercase tracking-widest text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Real App Screenshot in app-window frame */}
        <div className="animate-fade-in-up animate-delay-1000">
          <div className="mt-16 mx-auto max-w-4xl">
            <div className="card-sheen relative overflow-hidden rounded-2xl border border-border-strong/70 bg-surface shadow-2xl shadow-black/50">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-border/60 bg-surface-2/80 px-4 py-2.5">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-red-accent/70" />
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-gold/70" />
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald/70" />
                <span className="mx-auto rounded-md bg-background/60 px-3 py-0.5 font-mono text-[10px] text-muted/80">
                  7mountainpoker.vercel.app
                </span>
              </div>
              <ImageLightbox
                src="/screenshots/timer-view.jpg"
                alt="7Mountain Poker Timer - Level 1, Blinds 25/50, Live Tournament View"
                width={1200}
                height={900}
                priority
              />
            </div>
            <div aria-hidden="true" className="h-20 bg-gradient-to-b from-emerald/10 to-transparent rounded-b-3xl blur-2xl -mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
