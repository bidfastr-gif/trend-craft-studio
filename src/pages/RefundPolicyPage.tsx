import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RotateCcw } from "lucide-react";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary text-primary-foreground shadow-md mb-4">
                <RotateCcw className="w-4 h-4" />
                <span className="text-xs font-medium">Refunds</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold mb-3">
                Refund Policy
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                When refunds may be available for Trendcraft orders and how to reach us
                if something goes wrong.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8 text-sm sm:text-base text-muted-foreground">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  1. Eligibility
                </h2>
                <p>
                  Because Trendcraft creates custom videos tailored to your brand,
                  refunds are generally not available once work has started. Exceptions
                  may be made if we are unable to deliver the video as agreed.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  2. Issues With Delivery
                </h2>
                <p>
                  If you believe your video does not match the agreed brief, please
                  contact us within 7 days of delivery. We will first try to resolve the
                  issue through revisions before considering a refund.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  3. Cancellations
                </h2>
                <p>
                  Orders cancelled before any production work begins may be eligible for
                  a partial or full refund at our discretion, minus any processing
                  charges from payment providers.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  4. How to Request a Refund
                </h2>
                <p>
                  To discuss a refund, reach out to our support team with your order
                  details, brief and explanation. We review each request carefully and
                  aim to respond within a reasonable timeframe.
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

export default RefundPolicyPage;
