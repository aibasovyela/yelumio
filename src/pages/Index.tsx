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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <div id="module0">
          <Module0Section />
        </div>
        
        <PlatformsSection />
        
        <HiggsfieldSection />
        
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
    </div>
  );
};

export default Index;
