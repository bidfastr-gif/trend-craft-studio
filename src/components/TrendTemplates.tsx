import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const templates = [
  {
    name: "Penguin Trend",
    description: "Cute penguin reaction going viral",
    image: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=800&q=80",
    views: "2.5M",
  },
  {
    name: "Anime AI Transform",
    description: "Turn your footage into Studio Ghibli style",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    views: "5.4M",
  },
  {
    name: "Before/After Calm",
    description: "Satisfying transformation reveal",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    views: "1.8M",
  },
  {
    name: "Crowd Gasp Trend",
    description: "Dramatic crowd reaction meme",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
    views: "3.2M",
  },
  {
    name: "Statue Reveal",
    description: "Epic product unveil moment",
    image: "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?auto=format&fit=crop&w=800&q=80",
    views: "2.1M",
  },
  {
    name: "Festival Reaction",
    description: "High-energy celebration vibes",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    views: "4.1M",
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {templates.map((template) => (
            <motion.div
              key={template.name}
              variants={item}
              className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(262_83%_58%/0.2)]"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) {
                  if (!video.getAttribute("src") && template.video) {
                    video.setAttribute("src", template.video);
                    video.load();
                  }
                  video.play();
                }
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                  if (video.getAttribute("src")) {
                    video.removeAttribute("src");
                    video.load();
                  }
                }
              }}
            >
              {/* Image */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Views Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-medium">
                  {template.views} views
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display font-semibold mb-1">{template.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {template.description}
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="#request-form">Use this trend</a>
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
