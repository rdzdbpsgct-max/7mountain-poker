"use client";

import { useLanguage } from "./LanguageContext";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TVRemoteSection from "./TVRemoteSection";
import DemoSection from "./DemoSection";
import ProFeaturesSection from "./ProFeaturesSection";
import PowerToolsSection from "./PowerToolsSection";
import QuickStartSection from "./QuickStartSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function LandingPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <Navigation />
      <main>
        <HeroSection t={t} />
        <FeaturesSection t={t} />
        <TVRemoteSection t={t} />
        <DemoSection t={t} />
        <ProFeaturesSection t={t} />
        <PowerToolsSection t={t} />
        <QuickStartSection t={t} />
        <TestimonialsSection t={t} />
        <CTASection t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
