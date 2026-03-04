import Navbar from "@/components/Navbar";
import TrendTemplates from "@/components/TrendTemplates";
import Footer from "@/components/Footer";

const TemplatesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        <TrendTemplates />
      </main>
      <Footer />
    </div>
  );
};

export default TemplatesPage;
