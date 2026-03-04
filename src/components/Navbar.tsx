import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/assets/-Logo-.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Templates", href: "/templates" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-border/50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src={Logo} 
              alt="Viral Reels" 
              className="h-16 lg:h-20 w-auto object-contain" 
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="default" asChild>
              <a href="/request">Create My Trending Video</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/90 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="default" asChild>
                <a href="/request">Create My Trending Video</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
