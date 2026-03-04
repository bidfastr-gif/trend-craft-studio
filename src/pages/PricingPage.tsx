import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
