"use client";

import { LanguageProvider } from "@/components/LanguageContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TVRemoteSection from "@/components/TVRemoteSection";
import DemoSection from "@/components/DemoSection";
import ProFeaturesSection from "@/components/ProFeaturesSection";
import PowerToolsSection from "@/components/PowerToolsSection";
import QuickStartSection from "@/components/QuickStartSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TVRemoteSection />
        <DemoSection />
        <ProFeaturesSection />
        <PowerToolsSection />
        <QuickStartSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
