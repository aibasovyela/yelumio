import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { StickyCTA } from "@/components/StickyCTA";
import { GlassBackground } from "@/components/GlassBackground";
import { lazy, Suspense } from "react";

const CourseProgramSection = lazy(() => import("@/components/sections/CourseProgramSection").then(m => ({ default: m.CourseProgramSection })));
const HowItWorksSection = lazy(() => import("@/components/sections/HowItWorksSection").then(m => ({ default: m.HowItWorksSection })));
const WhyNowSection = lazy(() => import("@/components/sections/WhyNowSection").then(m => ({ default: m.WhyNowSection })));
const Module0Section = lazy(() => import("@/components/sections/Module0Section").then(m => ({ default: m.Module0Section })));
const NewEraSection = lazy(() => import("@/components/sections/NewEraSection").then(m => ({ default: m.NewEraSection })));
const ShowcaseSection = lazy(() => import("@/components/sections/ShowcaseSection").then(m => ({ default: m.ShowcaseSection })));
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
    <div className="min-h-screen bg-background relative">
      {/* Animated abstract background with yellow orbs */}
      <GlassBackground />

      {/* All content above the background */}
      <div className="relative z-10">
        <Header />
        
        <main>
          <HeroSection />
          
          <Suspense fallback={<SectionFallback />}>
            <ShowcaseSection />

            {/* Module0Section hidden */}
            {/* HowItWorksSection hidden */}

            <div id="program">
              <CourseProgramSection />
            </div>
            
            {/* WhyNowSection hidden */}
            {/* NewEraSection hidden */}
            
            <div id="pricing">
              <PricingSection />
            </div>
            
            <div id="faq">
              <FAQSection />
            </div>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <StickyCTA />
      </div>
    </div>
  );
};

export default Index;
