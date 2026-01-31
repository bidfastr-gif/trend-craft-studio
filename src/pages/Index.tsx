import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TrendTemplates from "@/components/TrendTemplates";
import PricingSection from "@/components/PricingSection";
import DemoSection from "@/components/DemoSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <TrendTemplates />
        <PricingSection />
        <DemoSection />
        <TrustSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <StickyButton />
    </div>
  );
};

export default Index;
