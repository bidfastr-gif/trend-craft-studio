import { TrendingUp, Upload, Wand2, Download, CheckCircle, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: TrendingUp,
    title: "Spot & Select a Trend",
    description: "Browse our curated library of exploding trends or bring your own inspiration from TikTok or Reels.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Upload,
    title: "Customize Identity",
    description: "Upload your logo, define your voice, and tell us exactly what makes your brand unique.",
    gradient: "from-primary to-violet-500",
  },
  {
    icon: Wand2,
    title: "Professional Magic",
    description: "Our expert editors craft a high-quality, thumb-stopping video that aligns perfectly with your brand goals.",
    gradient: "from-violet-500 to-accent",
  },
  {
    icon: Download,
    title: "Get Viral Content",
    description: "Receive your polished video directly on WhatsApp, ready to post and engage your audience instantly.",
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
            Your Journey to <span className="gradient-text">Viral Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From viral trend to branded content in four simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mb-20">
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

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="bg-background/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Get your fully edited video delivered within 24 hours of request.</p>
          </div>
          <div className="bg-background/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
            <p className="text-muted-foreground">Unlimited revisions until you are completely happy with the result.</p>
          </div>
          <div className="bg-background/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Trend Accurate</h3>
            <p className="text-muted-foreground">We stay on top of algorithms so you don't have to.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;