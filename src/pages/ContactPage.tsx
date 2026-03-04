import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;