import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import video1 from "@/assets/Videos/Video1.mp4";
import video2 from "@/assets/Videos/Video2.mp4";
import video3 from "@/assets/Videos/Video3.mp4";
import video4 from "@/assets/Videos/Video4.mp4";
import video5 from "@/assets/Videos/Video5.mp4";
import video6 from "@/assets/Videos/Video6.mp4";
import video7 from "@/assets/Videos/Video7.mp4";
import video8 from "@/assets/Videos/Video8.mp4";

type Template = {
  name: string;
  description: string;
  views: string;
  video?: string;
  image?: string;
};

const templates: Template[] = [
  {
    name: "Skyfall Hook",
    description:
      "Gravity-defying fall shot that stops the scroll and sets up bold offers",
    video: video1,
    views: "9.8M",
  },
  {
    name: "Floating House Reveal",
    description:
      "Magical floating house reveal for storytelling promos and big brand announcements",
    video: video2,
    views: "7.2M",
  },
  {
    name: "Flying Car Launch",
    description:
      "High-energy sky launch clip for hype drops, feature launches and viral reveals",
    video: video3,
    views: "8.4M",
  },
  {
    name: "Billboard Takeover",
    description:
      "Mega-city billboard moment perfect for logo reveals, product drops and brand teasers",
    video: video4,
    views: "6.1M",
  },
  {
    name: "Storefront Splash Reveal",
    description:
      "Clean storefront and signage moment for local shops, cafés and hospitality promos",
    video: video5,
    views: "6.2M",
  },
  {
    name: "Supercar Drop Transition",
    description:
      "Cinematic supercar drop for luxury launches, event highlights and hero transitions",
    video: video6,
    views: "6.7M",
  },
  {
    name: "Serum Swirl Spotlight",
    description:
      "Close-up product swirl shot ideal for skincare, beauty and D2C product hooks",
    video: video7,
    views: "2.5M",
  },
  {
    name: "Neon Smoke Impact",
    description:
      "Bold slow-motion smoke burst shot for dramatic logo reveals and punchy hooks",
    video: video8,
    views: "5.4M",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const TrendTemplates = () => {
  return (
    <section id="templates" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Trending <span className="gradient-text">Templates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick from our library of viral trends ready to be branded for your business
          </p>
        </motion.div>

        {/* Template Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {templates.map((template) => (
            <motion.div
              key={template.name}
              variants={item}
              className="flex flex-col h-full"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                {template.video ? (
                  <video
                    src={template.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-medium">
                  {template.views} views
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-display font-semibold mb-1">{template.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {template.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto"
                  asChild
                >
                  <Link
                    to="/request"
                    state={{
                      presetVideoDescription: `Use the "${template.name}" trend for my brand`,
                    }}
                  >
                    Use this trend
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrendTemplates;
