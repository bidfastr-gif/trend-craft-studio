import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Send, Sparkles, CreditCard } from "lucide-react";
import { toast } from "sonner";

const industries = [
  "Restaurant",
  "Café",
  "Spa",
  "Salon",
  "Mall",
  "Real Estate",
  "D2C",
  "Other",
];

const tones = ["Funny", "Premium", "Cute", "Bold", "Emotional"];

const plans = [
  "Starter (₹4,999)",
  "Creator (₹9,999/mo)",
  "Agency Pro (₹29,999/mo)",
];

const RequestForm = () => {
  const [fileName, setFileName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Request submitted! We will send the created video to your WhatsApp.");
    setIsSubmitting(false);
    
    // Here you would redirect to payment page
    // window.location.href = "/payment";
  };

  return (
    <section id="request-form" className="py-24 lg:py-32 relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Get Your Custom Video
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Submit Your <span className="gradient-text">Request</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your brand and the trend you want to use. We'll create a
            stunning branded video for you.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Video Description */}
              <div className="space-y-2">
                <Label htmlFor="video-description">
                  What video do you want? *
                </Label>
                <Textarea
                  id="video-description"
                  placeholder="Describe the video you want... e.g., 'Penguin trend for my spa, showing relaxation and calm vibes'"
                  className="min-h-[100px] bg-secondary/50"
                  required
                />
              </div>

              {/* Reel Link */}
              <div className="space-y-2">
                <Label htmlFor="reel-link">
                  Paste Instagram reel link (optional)
                </Label>
                <Input
                  id="reel-link"
                  type="url"
                  placeholder="https://www.instagram.com/reel/..."
                  className="bg-secondary/50"
                />
              </div>

              {/* Two Column Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Brand Name */}
                <div className="space-y-2">
                  <Label htmlFor="brand-name">Brand Name *</Label>
                  <Input
                    id="brand-name"
                    placeholder="Your brand name"
                    className="bg-secondary/50"
                    required
                  />
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <Label>Industry *</Label>
                  <Select required>
                    <SelectTrigger className="bg-secondary/50">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry.toLowerCase()}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tone */}
                <div className="space-y-2">
                  <Label>Tone *</Label>
                  <Select required>
                    <SelectTrigger className="bg-secondary/50">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map((tone) => (
                        <SelectItem key={tone} value={tone.toLowerCase()}>
                          {tone}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Logo Upload */}
                <div className="space-y-2">
                  <Label>Logo Upload *</Label>
                  <div className="relative">
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="logo-upload"
                      onChange={handleFileChange}
                      required
                    />
                    <label
                      htmlFor="logo-upload"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-input cursor-pointer hover:bg-secondary transition-colors"
                    >
                      <Upload className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground truncate">
                        {fileName || "Choose logo file..."}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Offer/CTA */}
              <div className="space-y-2">
                <Label htmlFor="offer-cta">Offer / CTA Text *</Label>
                <Input
                  id="offer-cta"
                  placeholder="e.g., '50% off this weekend' or 'Book now'"
                  className="bg-secondary/50"
                  required
                />
              </div>

              {/* Plan & Delivery Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Choose Plan */}
                <div className="space-y-2">
                  <Label>Choose Plan *</Label>
                  <Select required>
                    <SelectTrigger className="bg-secondary/50">
                      <SelectValue placeholder="Select plan" />
                    </SelectTrigger>
                    <SelectContent>
                      {plans.map((plan) => (
                        <SelectItem key={plan} value={plan}>
                          {plan}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Delivery Preference */}
                <div className="space-y-2">
                  <Label>Delivery Preference *</Label>
                  <Select required>
                    <SelectTrigger className="bg-secondary/50">
                      <SelectValue placeholder="Select delivery time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard (48 hours)</SelectItem>
                      <SelectItem value="express">
                        Express (24 hours) +₹999
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="bg-secondary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="bg-secondary/50"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Make Payment
                    <CreditCard className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
