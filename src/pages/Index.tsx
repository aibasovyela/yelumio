import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { Module0Section } from "@/components/sections/Module0Section";
import { PlatformsSection } from "@/components/sections/PlatformsSection";
import { HiggsfieldSection } from "@/components/sections/HiggsfieldSection";
import { CourseProgramSection } from "@/components/sections/CourseProgramSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Module0Section and PlatformsSection hidden to shorten the page */}
        
        {/* HiggsfieldSection hidden */}
        
        <div id="program">
          <CourseProgramSection />
        </div>
        
        <HowItWorksSection />
        
        <ResultsSection />
        
        <div id="pricing">
          <PricingSection />
        </div>
        
        <div id="faq">
          <FAQSection />
        </div>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
