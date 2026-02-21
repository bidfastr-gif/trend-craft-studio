import { useState, useEffect } from "react";
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
import { supabase } from "@/integrations/supabase/client";
import {
  loadRazorpay,
  openRazorpayCheckout,
  RazorpayOptions,
  RazorpayResponse,
} from "@/integrations/razorpay/client";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  const presetVideoDescription =
    (location.state as { presetVideoDescription?: string } | null)
      ?.presetVideoDescription ?? "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    videoDescription: presetVideoDescription,
    reelLink: "",
    brandName: "",
    industry: "",
    tone: "",
    offerCta: "",
    plan: "",
    deliveryPreference: "",
    whatsapp: "",
    email: "",
    fileName: "",
  });

  useEffect(() => {
    if (presetVideoDescription) {
      setFormData((prev) => ({
        ...prev,
        videoDescription: presetVideoDescription,
      }));
    }
  }, [presetVideoDescription]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      setFormData((prev) => ({ ...prev, fileName: file.name }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const requestId = crypto.randomUUID();
      let logoPath: string | null = null;
      let logoUrl: string | null = null;

      const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID as string | undefined;
      if (!keyId) {
        toast.error("Razorpay key not configured.");
        return;
      }
      const ok = await loadRazorpay();
      if (!ok) {
        toast.error("Failed to load payment gateway.");
        return;
      }
      if (!supabase) {
        toast.error("Service not configured. Please try again later.");
        return;
      }

      if (logoFile) {
        const ext = logoFile.name.split(".").pop() || "png";
        const path = `logos/${requestId}.${ext}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("brand-logos")
          .upload(path, logoFile, {
            cacheControl: "3600",
            upsert: false,
            contentType: logoFile.type || undefined,
          });
        if (uploadError) throw uploadError;
        logoPath = uploadData?.path ?? path;
        const { data } = supabase.storage
          .from("brand-logos")
          .getPublicUrl(logoPath);
        logoUrl = data.publicUrl || null;
      }

      const { error } = await supabase.from("requests").insert([
        {
          id: requestId,
          video_description: formData.videoDescription,
          reel_link: formData.reelLink,
          brand_name: formData.brandName,
          industry: formData.industry,
          tone: formData.tone,
          logo_filename: logoUrl || logoPath || formData.fileName,
          offer_cta: formData.offerCta,
          plan: formData.plan,
          delivery_preference: formData.deliveryPreference,
          whatsapp: formData.whatsapp,
          email: formData.email,
          status: "pending_payment", // Initial status
        }
      ]);

      if (error) throw error;

      try {
        await fetch("https://formspree.io/f/xgolyeal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            requestId,
            videoDescription: formData.videoDescription,
            reelLink: formData.reelLink,
            brandName: formData.brandName,
            industry: formData.industry,
            tone: formData.tone,
            offerCta: formData.offerCta,
            plan: formData.plan,
            deliveryPreference: formData.deliveryPreference,
            whatsapp: formData.whatsapp,
            email: formData.email,
          logoUrl: logoUrl,
            status: "pending_payment",
          }),
        });
      } catch (formspreeErr) {
        console.error("Error sending data to Formspree:", formspreeErr);
      }

      const planToAmount: Record<string, number> = {
        "Starter (₹4,999)": 4999,
        "Creator (₹9,999/mo)": 9999,
        "Agency Pro (₹29,999/mo)": 29999,
      };

      const baseAmountRupees = planToAmount[formData.plan];
      if (baseAmountRupees === undefined) {
        toast.error("Invalid plan selected. Please refresh and try again.");
        return;
      }

      const deliveryFeeRupees =
        formData.deliveryPreference === "express" ? 999 : 0;
      const totalAmountRupees = baseAmountRupees + deliveryFeeRupees;
      const amountPaise = totalAmountRupees * 100;

      const options: RazorpayOptions = {
        key: keyId,
        amount: amountPaise.toString(),
        currency: "INR",
        name: "Trendcraft",
        description: formData.plan || "Trending video order",
        method: {
          card: true,
          upi: true,
          netbanking: true,
          wallet: false,
          emi: false,
          paylater: false,
        },
        prefill: {
          name: formData.brandName || "Customer",
          email: formData.email,
          contact: formData.whatsapp,
        },
        theme: { color: "#f31260" },
        handler: async (response: RazorpayResponse) => {
          try {
            await supabase
              .from("requests")
              .update({ status: "paid" })
              .eq("id", requestId);

            toast.success(
              "Payment successful. We’ve received your request and will start editing.",
            );

            setFormData({
              videoDescription: "",
              reelLink: "",
              brandName: "",
              industry: "",
              tone: "",
              offerCta: "",
              plan: "",
              deliveryPreference: "",
              whatsapp: "",
              email: "",
              fileName: "",
            });
            setLogoFile(null);
          } catch (e) {
            const msg =
              e instanceof Error
                ? e.message
                : "Failed to update payment status.";
            toast.error(msg);
          }
        },
        modal: {
          ondismiss: () => {
            toast.error("Payment cancelled.");
          },
        },
      };

      openRazorpayCheckout(options);
      toast.success("Opening payment...");
    } catch (err) {
      console.error("Error submitting request:", err);
      const message = err instanceof Error ? err.message : "Failed to submit request. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="request-form" className="py-24 lg:py-32 relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-lg mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
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
                  value={formData.videoDescription}
                  onChange={(e) => handleInputChange("videoDescription", e.target.value)}
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
                  value={formData.reelLink}
                  onChange={(e) => handleInputChange("reelLink", e.target.value)}
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
                    value={formData.brandName}
                    onChange={(e) => handleInputChange("brandName", e.target.value)}
                  />
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <Label>Industry *</Label>
                  <Select required onValueChange={(val) => handleInputChange("industry", val)}>
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
                  <Select required onValueChange={(val) => handleInputChange("tone", val)}>
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
                      required={!formData.fileName}
                    />
                    <label
                      htmlFor="logo-upload"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-input cursor-pointer hover:bg-secondary transition-colors"
                    >
                      <Upload className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground truncate">
                        {formData.fileName || "Choose logo file..."}
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
                  value={formData.offerCta}
                  onChange={(e) => handleInputChange("offerCta", e.target.value)}
                />
              </div>

              {/* Plan & Delivery Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Choose Plan */}
                <div className="space-y-2">
                  <Label>Choose Plan *</Label>
                  <Select required onValueChange={(val) => handleInputChange("plan", val)}>
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
                  <Select required onValueChange={(val) => handleInputChange("deliveryPreference", val)}>
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
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
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
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
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
