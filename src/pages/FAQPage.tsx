import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
