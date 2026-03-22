import Link from "next/link";
import type { Translations } from "./LanguageContext";

export default function Footer({ t }: { t: Translations }) {

  return (
    <footer className="border-t border-border/30 bg-surface/20 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold text-foreground mb-2">
              <span>♠</span>{" "}
              <span>♥</span>{" "}
              7Mountain Poker{" "}
              <span>♦</span>{" "}
              <span>♣</span>
            </div>
            <p className="text-sm text-muted">{t.footer.tagline}</p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] text-muted uppercase mb-4">
              {t.footer.product}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {t.footer.links.features}
                </a>
              </li>
              <li>
                <a
                  href="#quick-start"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {t.footer.links.quickStart}
                </a>
              </li>
              <li>
                <a
                  href="https://7mountainpoker.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald hover:text-emerald-dark transition-colors"
                >
                  {t.footer.links.app} →
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] text-muted uppercase mb-4">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {t.footer.links.imprint}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {t.footer.links.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">{t.footer.copyright}</p>
          <div className="flex items-center gap-2 text-muted/40 text-lg">
            <span>♠</span>
            <span>♥</span>
            <span>♦</span>
            <span>♣</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
