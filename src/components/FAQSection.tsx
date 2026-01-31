import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast is delivery?",
    answer:
      "Standard delivery is 48 hours. Express delivery is 24 hours for an additional ₹999. Agency Pro members get express 12-hour delivery included.",
  },
  {
    question: "Can I upload my own trend?",
    answer:
      "Absolutely! You can paste any Instagram reel link or describe a trend you've seen. Our AI will analyze it and create a branded version for you.",
  },
  {
    question: "Do you add my logo automatically?",
    answer:
      "Yes, we seamlessly integrate your logo, brand colors, and CTA into the video. The result looks natural and on-brand, not like a simple overlay.",
  },
  {
    question: "Can agencies resell videos?",
    answer:
      "Yes! Our Agency Pro plan includes white-label options. You can resell the videos to your clients without any Trendcraft branding.",
  },
  {
    question: "Is this AI-generated or edited manually?",
    answer:
      "We use a hybrid approach. AI handles the trend analysis and initial video creation, while our creative team adds finishing touches to ensure quality and brand alignment.",
  },
  {
    question: "What video formats do you deliver?",
    answer:
      "We deliver in all major formats including 9:16 (Reels/Stories), 1:1 (Feed posts), and 16:9 (YouTube). Agency Pro members also get 4K quality.",
  },
  {
    question: "Do you provide captions and hashtags?",
    answer:
      "Yes! Every video comes with optimized captions and trending hashtag suggestions to maximize your reach.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Trendcraft
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
