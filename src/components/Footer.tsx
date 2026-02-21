import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "How It Works", to: "/how-it-works" },
      { name: "Templates", to: "/templates" },
      { name: "Pricing", to: "/pricing" },
      { name: "FAQ", to: "/faq" },
    ],
    company: [
      { name: "About", to: "/" },
      { name: "Contact", to: "/contact" },
      { name: "Careers", to: "/contact" },
    ],
    legal: [
      { name: "Terms of Service", to: "/terms" },
      { name: "Privacy Policy", to: "/privacy" },
    ],
  };

  return (
    <footer className="relative border-t border-border/50 overflow-hidden bg-[#2D0A12]">
      {/* Main Footer */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-display font-bold text-white">Trendcraft</span>
              </Link>
              <p className="text-pink-100/80 mb-6 max-w-sm">
                AI-powered platform that transforms viral social media trends into
                branded marketing videos for businesses.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-display font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link to={link.to} className="text-pink-100/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.to} className="text-pink-100/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-display font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link to={link.to} className="text-pink-100/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-pink-100/60">
            © {currentYear} Trendcraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
