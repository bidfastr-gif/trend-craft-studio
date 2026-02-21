import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import howItWorksVideo from "@/assets/Videos/Trendcraft.mp4";
import { Play, Pause, Sparkles, MessageCircle, CheckCircle2 } from "lucide-react";

const HowItWorksVideoPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleIconClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setShowIcon(true);
    } else {
      video.play();
      setIsPlaying(true);
      setHasPlayed(true);
      setShowIcon(false);
    }
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setShowIcon(true);
      setHasPlayed(true);
    } else {
      video.play();
      setIsPlaying(true);
      setHasPlayed(true);
      setShowIcon(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-background to-background -z-10" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.25),_transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
              See How Trendcraft Works
            </h1>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Watch this short walkthrough to understand how your request form, payment
              and WhatsApp delivery come together into one smooth trending video flow.
            </p>
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-primary text-primary-foreground mb-8 text-xs sm:text-sm shadow-lg border border-white/20">
              <Sparkles className="w-4 h-4" />
              <span>Trending video demo • 24-hour delivery flow</span>
            </div>
            <div className="max-w-xl mx-auto aspect-square rounded-[2.5rem] overflow-hidden bg-black/80 shadow-[0_0_80px_rgba(236,72,153,0.45)] border border-white/10 relative">
              <video
                ref={videoRef}
                src={howItWorksVideo}
                className="w-full h-full object-cover"
                onClick={handleVideoClick}
                onEnded={() => {
                  setIsPlaying(false);
                  setShowIcon(true);
                  setHasPlayed(false);
                }}
              />
              {showIcon && (
                <button
                  type="button"
                  onClick={handleIconClick}
                  className="absolute inset-0 m-auto rounded-full bg-gradient-to-r from-primary to-pink-500 text-primary-foreground w-24 h-24 flex items-center justify-center shadow-lg hover:brightness-110 transition"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {hasPlayed ? (
                    <Pause className="w-10 h-10" />
                  ) : (
                    <Play className="w-10 h-10" />
                  )}
                </button>
              )}
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">WhatsApp-first flow</p>
                  <p>Request, updates and final video delivered straight to chat.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">On-trend formats</p>
                  <p>Designed for Reels and Shorts so you stay ahead of trends.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Done-for-you editing</p>
                  <p>No templates or timelines—just a finished trending video.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksVideoPage;
