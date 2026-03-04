import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
