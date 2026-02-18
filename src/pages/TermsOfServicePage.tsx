import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary text-primary-foreground shadow-md mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-medium">Legal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold mb-3">
                Terms of Service
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                How Trendcraft works with your brand, assets and payments when creating
                custom trend videos.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8 text-sm sm:text-base text-muted-foreground">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  1. Service Scope
                </h2>
                <p>
                  Trendcraft creates short-form marketing videos based on the brief,
                  trend selection and brand assets you provide. We do not guarantee
                  specific performance metrics such as views, engagement or sales.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  2. Brand Assets and Rights
                </h2>
                <p>
                  You confirm that you have the rights to use all logos, brand names,
                  footage and materials you share with us and that our use of them in
                  your video will not infringe any third-party rights.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  3. Revisions and Delivery
                </h2>
                <p>
                  Standard plans include the number of revisions and delivery timelines
                  mentioned on the Pricing page. Additional revisions or changes outside
                  the original brief may require an extra fee and additional time.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  4. Payments
                </h2>
                <p>
                  All payments are processed securely through our payment partner.
                  Orders are worked on only after successful payment, unless otherwise
                  agreed in writing.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  5. Usage
                </h2>
                <p>
                  Once delivered, you are free to use the final video across your brand
                  channels. Trendcraft may showcase non-sensitive work samples in its
                  portfolio unless you request otherwise in advance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
