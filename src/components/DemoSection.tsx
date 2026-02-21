import { ArrowRight, Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import video2 from "@/assets/Videos/Video2.mp4";
import video9 from "@/assets/Videos/Video9.mp4";
import PotatowalaLogo from "@/assets/PotatowalaLogo.png";

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
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
          {/* Before - Instagram Mockup */}
          <div className="relative flex flex-col items-center">
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
                <video
                  src={video2}
                  autoPlay
                  loop
                  muted
                  playsInline
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
                  This floating building trend is taking over the feed! 🏙✨
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  2.5M views • 12 hours ago
                </p>
              </div>
            </div>

            <div className="mt-6 px-4 py-2 bg-muted rounded-full text-sm font-medium">
              Original Viral Video
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center rotate-90 lg:rotate-0">
              <ArrowRight className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* After - Branded Instagram Mockup */}
          <div className="relative flex flex-col items-center">
            <div className="glass-card p-3 rounded-3xl max-w-xs border-primary/30">
              {/* Instagram Header */}
              <div className="flex items-center gap-3 mb-3 px-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={PotatowalaLogo}
                      alt="Potatowala logo"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold">potatowala_official</p>
                  <p className="text-xs text-muted-foreground">Sponsored</p>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden">
                <video
                  src={video9}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[9/16] object-cover"
                />
                <div className="absolute bottom-1 right-1 w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
                  <img
                    src={PotatowalaLogo}
                    alt="Potatowala logo"
                    className="w-9 h-9 object-contain"
                  />
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
                  <span className="font-semibold">potatowala_official</span>{" "}
                  Turn any viral trend into a branded video for your business ✨
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  45.2K views • 2 hours ago
                </p>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl -z-10" />

            <div className="mt-6 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-sm font-medium text-white">
              Your Branded Video
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
