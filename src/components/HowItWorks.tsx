import { TrendingUp, Upload, Wand2, Download } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: TrendingUp,
    title: "Pick a Trend",
    description: "Choose a viral trend or paste a reel link.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Upload,
    title: "Add Brand Info",
    description: "Upload logo, brand name, industry, and CTA.",
    gradient: "from-primary to-violet-500",
  },
  {
    icon: Wand2,
    title: "We Create Your Video",
    description: "Our experts adapt the trend into a branded storyline.",
    gradient: "from-violet-500 to-accent",
  },
  {
    icon: Download,
    title: "Receive on WhatsApp",
    description: "Get your ready-to-post video sent directly to your WhatsApp.",
    gradient: "from-accent to-emerald-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From viral trend to branded content in four simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={item}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="glass-card p-6 rounded-2xl h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_hsl(262_83%_58%/0.2)]">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
