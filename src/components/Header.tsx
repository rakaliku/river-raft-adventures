import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png"; // ✅ Make sure this path is correct

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* ✅ Logo and Brand Name */}
          <div className="flex items-center space-x-4">
            {/* Bigger logo */}
            <img
              src={logo}
              alt="Rahi Rovers Logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
              Rahi Rovers
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-[var(--transition-smooth)]">
              Home
            </a>
            <a href="#destinations" className="text-foreground hover:text-primary transition-[var(--transition-smooth)]">
              Destinations
            </a>
            <a href="#tours" className="text-foreground hover:text-primary transition-[var(--transition-smooth)]">
              Tours
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-[var(--transition-smooth)]">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-[var(--transition-smooth)]">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="gap-2">
              <Phone className="h-4 w-4" />
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a href="#home" className="block text-foreground hover:text-primary" onClick={toggleMenu}>
              Home
            </a>
            <a href="#destinations" className="block text-foreground hover:text-primary" onClick={toggleMenu}>
              Destinations
            </a>
            <a href="#tours" className="block text-foreground hover:text-primary" onClick={toggleMenu}>
              Tours
            </a>
            <a href="#about" className="block text-foreground hover:text-primary" onClick={toggleMenu}>
              About
            </a>
            <a href="#contact" className="block text-foreground hover:text-primary" onClick={toggleMenu}>
              Contact
            </a>
            <Button className="w-full gap-2">
              <Phone className="h-4 w-4" />
              Get in Touch
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
