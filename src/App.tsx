import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToAnchor from "./components/ScrollToAnchor";
import SmoothScroll from "./components/SmoothScroll";
import FloatingLines from "./components/FloatingLines";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowItWorksPage from "./pages/HowItWorksPage";
import HowItWorksVideoPage from "./pages/HowItWorksVideoPage";
import TemplatesPage from "./pages/TemplatesPage";
import PricingPage from "./pages/PricingPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import RequestPage from "./pages/RequestPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <SmoothScroll />
        <ScrollToAnchor />
        <FloatingLines 
          linesGradient={['#F43F5E', '#D946EF', '#8b5cf6']}
          animationSpeed={0.2}
          parallax={true}
          parallaxStrength={0.5}
          mixBlendMode="soft-light"
          lineCount={[4, 6, 4]}
          lineDistance={[2, 3, 2]}
          className="fixed inset-0 z-0 pointer-events-none"
          triggerElement="window"
        />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/how-it-works-video" element={<HowItWorksVideoPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
