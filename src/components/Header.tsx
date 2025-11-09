import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // ✅ Added import for internal routing
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Rahi Rovers Logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
              Rahi Rovers
            </h1>
          </div>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition">
              Home
            </a>
            <a href="#destinations" className="text-foreground hover:text-primary transition">
              Destinations
            </a>
            <a href="#tours" className="text-foreground hover:text-primary transition">
              Tours
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>

            {/* 🎒 College Events (Dynamic Route Link) */}
            <Link
              to="/college-events"
              className="relative font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 bg-clip-text text-transparent 
              hover:scale-110 hover:brightness-125 transition-all duration-300 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
              after:bg-gradient-to-r from-pink-500 to-teal-500 hover:after:w-full 
              after:transition-all after:duration-300 flex items-center gap-1"
            >
              <span>College Events</span>
              <span className="animate-pulse text-pink-500 text-lg">✨</span>
            </Link>
          </nav>

          {/* ✅ CTA Button */}
          <div className="hidden md:block">
            <Button className="gap-2">
              <Phone className="h-4 w-4" />
              Get in Touch
            </Button>
          </div>

          {/* ✅ Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ✅ Mobile Navigation Drawer */}
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

            {/* 🎒 College Events (Mobile View) */}
            <Link
              to="/college-events"
              onClick={toggleMenu}
              className="block font-semibold text-pink-500 hover:text-purple-500 transition"
            >
              College Events ✨
            </Link>

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
