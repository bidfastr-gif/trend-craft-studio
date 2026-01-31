import Navbar from "@/components/Navbar";
import RequestForm from "@/components/RequestForm";
import Footer from "@/components/Footer";

const RequestPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default RequestPage;
