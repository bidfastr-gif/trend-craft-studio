import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const StickyButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        variant="hero"
        size="lg"
        className="rounded-full shadow-[0_0_30px_hsl(262_83%_58%/0.5)]"
        asChild
      >
        <a href="#request-form">
          <Sparkles className="w-5 h-5" />
          Create Video
        </a>
      </Button>
    </div>
  );
};

export default StickyButton;
