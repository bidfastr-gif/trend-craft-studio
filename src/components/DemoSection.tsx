import { ArrowRight, Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import penguinTrend from "@/assets/penguin-trend.jpg";
import brandedSpa from "@/assets/branded-spa.jpg";

const DemoSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            See The <span className="gradient-text">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From viral meme to branded marketing content in minutes
          </p>
        </div>

        {/* Demo Comparison */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Before - Instagram Mockup */}
          <div className="relative">
            <div className="glass-card p-3 rounded-3xl max-w-xs">
              {/* Instagram Header */}
              <div className="flex items-center gap-3 mb-3 px-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600" />
                <div>
                  <p className="text-sm font-semibold">viral_trends</p>
                  <p className="text-xs text-muted-foreground">Trending Now</p>
                </div>
              </div>

              {/* Video */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={penguinTrend}
                  alt="Viral penguin trend"
                  className="w-full aspect-[9/16] object-cover"
                />
              </div>

              {/* Instagram Actions */}
              <div className="flex items-center justify-between px-2 py-3">
                <div className="flex items-center gap-4">
                  <Heart className="w-6 h-6" />
                  <MessageCircle className="w-6 h-6" />
                  <Send className="w-6 h-6" />
                </div>
                <Bookmark className="w-6 h-6" />
              </div>

              {/* Caption */}
              <div className="px-2 pb-2">
                <p className="text-sm">
                  <span className="font-semibold">viral_trends</span>{" "}
                  This penguin trend is taking over! 🐧✨
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  2.5M views • 12 hours ago
                </p>
              </div>
            </div>

            {/* Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-muted rounded-full text-sm font-medium">
              Original Viral Trend
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center rotate-90 lg:rotate-0">
              <ArrowRight className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* After - Branded Instagram Mockup */}
          <div className="relative">
            <div className="glass-card p-3 rounded-3xl max-w-xs border-primary/30">
              {/* Instagram Header */}
              <div className="flex items-center gap-3 mb-3 px-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                  ZS
                </div>
                <div>
                  <p className="text-sm font-semibold">zen_spa_official</p>
                  <p className="text-xs text-muted-foreground">Sponsored</p>
                </div>
              </div>

              {/* Video */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={brandedSpa}
                  alt="Branded spa video"
                  className="w-full aspect-[9/16] object-cover"
                />
                
                {/* Brand Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-semibold">Zen Spa & Wellness</p>
                    <p className="text-xs text-primary">50% OFF • Book Today!</p>
                  </div>
                </div>
              </div>

              {/* Instagram Actions */}
              <div className="flex items-center justify-between px-2 py-3">
                <div className="flex items-center gap-4">
                  <Heart className="w-6 h-6 fill-red-500 text-red-500" />
                  <MessageCircle className="w-6 h-6" />
                  <Send className="w-6 h-6" />
                </div>
                <Bookmark className="w-6 h-6" />
              </div>

              {/* Caption */}
              <div className="px-2 pb-2">
                <p className="text-sm">
                  <span className="font-semibold">zen_spa_official</span>{" "}
                  Even our penguin needs a spa day! 🐧💆‍♀️ Book now for 50% OFF!
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  45.2K views • 2 hours ago
                </p>
              </div>
            </div>

            {/* Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-sm font-medium text-white">
              Your Branded Video
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
