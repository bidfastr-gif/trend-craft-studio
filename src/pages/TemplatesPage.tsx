import Navbar from "@/components/Navbar";
import TrendTemplates from "@/components/TrendTemplates";
import Footer from "@/components/Footer";

const TemplatesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <TrendTemplates />
      </main>
      <Footer />
    </div>
  );
};

export default TemplatesPage;
