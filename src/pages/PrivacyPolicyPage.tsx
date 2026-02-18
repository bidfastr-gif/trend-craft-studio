import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary text-primary-foreground shadow-md mb-4">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-medium">Your data</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold mb-3">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                How Trendcraft collects, uses and protects the information you share
                while ordering branded videos.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 space-y-8 text-sm sm:text-base text-muted-foreground">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  1. Information We Collect
                </h2>
                <p>
                  When you submit a request, we collect details such as your brand name,
                  contact information, video brief and uploaded logo assets. Basic
                  analytics data about how you use our website may also be collected.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  2. How We Use Your Information
                </h2>
                <p>
                  We use your information to create and deliver your videos, process
                  payments, communicate about your order and improve our services. We do
                  not sell your personal data to third parties.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  3. Storage and Security
                </h2>
                <p>
                  Your data is stored with trusted infrastructure providers. We take
                  reasonable technical and organizational measures to protect it, but no
                  online service can be completely risk-free.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  4. Third-Party Services
                </h2>
                <p>
                  We use third-party tools for hosting, storage, analytics and payments.
                  These providers may process limited data as required to provide their
                  services to us.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  5. Your Choices
                </h2>
                <p>
                  You can contact us to request access, updates or deletion of your
                  stored information where applicable. Some data must be retained for
                  legal, accounting or security reasons.
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

export default PrivacyPolicyPage;
