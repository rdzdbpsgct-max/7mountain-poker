import { LanguageProvider } from "@/components/LanguageContext";
import LandingPageContent from "@/components/LandingPageContent";

export default function Home() {
  return (
    <LanguageProvider>
      <LandingPageContent />
    </LanguageProvider>
  );
}
