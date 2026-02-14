import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const templates = [
  {
    name: "AI Baby Girl 3D Cartoon Dance",
    description: "Cute 3D character dance for attention-grabbing intros",
    image: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=80",
    views: "9.8M",
  },
  {
    name: "AI Shelter Challenge",
    description: "Dramatic reveal challenge with before/after style",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    views: "7.2M",
  },
  {
    name: "Talking to AI in 2026",
    description: "Conversation-style skit with futuristic UI overlays",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    views: "8.4M",
  },
  {
    name: "Assembly Effect (Kling 2.6)",
    description: "Parts assemble into the final product with snappy beats",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
    views: "6.1M",
  },
  {
    name: "New Viral AI Trend",
    description: "Fresh AI-powered effect making rounds this week",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
    views: "10.2M",
  },
  {
    name: "Subway Surfer Overlay",
    description: "Gameplay overlay keeps attention during narration",
    image: "https://images.unsplash.com/photo-1520975922203-d12a0b47f4f1?auto=format&fit=crop&w=800&q=80",
    views: "6.7M",
  },
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
            >
              {/* Image/Video */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

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
