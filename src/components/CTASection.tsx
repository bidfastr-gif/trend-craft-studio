import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Ready to Go <span className="gradient-text">Viral</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join 500+ brands creating trend-based content with Trendcraft
          </p>
          <Button variant="hero" size="xl" className="text-black font-bold" asChild>
            <a href="#request-form">
              Create My Trending Video
              <Sparkles className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
