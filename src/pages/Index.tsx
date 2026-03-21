import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { StickyCTA } from "@/components/StickyCTA";
import { lazy, Suspense } from "react";

const CourseProgramSection = lazy(() => import("@/components/sections/CourseProgramSection").then(m => ({ default: m.CourseProgramSection })));
const HowItWorksSection = lazy(() => import("@/components/sections/HowItWorksSection").then(m => ({ default: m.HowItWorksSection })));
const WhyNowSection = lazy(() => import("@/components/sections/WhyNowSection").then(m => ({ default: m.WhyNowSection })));
const NewEraSection = lazy(() => import("@/components/sections/NewEraSection").then(m => ({ default: m.NewEraSection })));
const PricingSection = lazy(() => import("@/components/sections/PricingSection").then(m => ({ default: m.PricingSection })));
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })));
const Footer = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

const SectionFallback = () => (
  <div className="section-padding">
    <div className="container">
      <div className="h-40 bg-muted/20 animate-pulse rounded-2xl" />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionFallback />}>
          <div id="program" className="section-light">
            <CourseProgramSection />
          </div>
          
          <div className="section-dark">
            <HowItWorksSection />
          </div>
          
          <div className="section-light">
            <WhyNowSection />
          </div>

          <div className="section-dark">
            <NewEraSection />
          </div>
          
          <div id="pricing" className="section-light">
            <PricingSection />
          </div>
          
          <div id="faq" className="section-dark">
            <FAQSection />
          </div>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <StickyCTA />
    </div>
  );
};

export default Index;
