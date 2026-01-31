import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
