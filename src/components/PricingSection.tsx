import { Button } from "@/components/ui/button";
import { Check, Zap, Star, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "one-time",
    description: "Perfect for trying out Trendcraft",
    icon: Zap,
    features: [
      "1 trend video",
      "48-hour delivery",
      "HD quality output",
      "2 revision included",
    ],
    cta: "Start Now",
    popular: false,
  },
  {
    name: "Creator",
    price: "₹9,999",
    period: "per month",
    description: "For regular content creators and brands",
    icon: Star,
    features: [
      "10 trend videos/month",
      "Priority queue",
      "24-hour delivery",
      "4K quality output",
      "Unlimited revisions",
      "Caption & hashtag suggestions",
    ],
    cta: "Start Now",
    popular: true,
  },
  {
    name: "Agency Pro",
    price: "₹29,999",
    period: "per month",
    description: "For agencies managing multiple brands",
    icon: Building2,
    features: [
      "Unlimited trend videos",
      "Custom brand scenes",
      "Express 12-hour delivery",
      "4K + vertical formats",
      "Dedicated account manager",
      "White-label option",
      "API access",
    ],
    cta: "Start Now",
    popular: false,
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

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      {/* Background */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your content needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              className={`relative glass-card rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 flex flex-col h-full ${
                plan.popular
                  ? "border-[#39ff14] shadow-[0_0_40px_#39ff14]"
                  : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 rounded-full bg-[#39ff14] text-sm font-semibold text-black">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary to-accent"
                    : "bg-secondary"
                }`}
              >
                <plan.icon
                  className={`w-6 h-6 ${
                    plan.popular ? "text-white" : "text-primary"
                  }`}
                />
              </div>

              {/* Plan Name & Price */}
              <h3 className="text-xl font-display font-semibold mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-display font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant="hero"
                size="lg"
                className="w-full mt-auto"
                asChild
              >
                <a href="/request">{plan.cta}</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
