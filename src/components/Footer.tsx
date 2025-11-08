import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Rahi Rovers</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted travel companion for exploring India's incredible destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#destinations" className="text-background/80 hover:text-background transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#tours" className="text-background/80 hover:text-background transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-semibold mb-4">Popular Tours</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Kerala Backwaters</li>
              <li>Leh-Ladakh Adventure</li>
              <li>Rajasthan Heritage</li>
              <li>Goa Beach Paradise</li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-background/80 text-sm mb-4">
              Follow us on social media for travel inspiration and exclusive offers.
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com/rahirovers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/rahirovers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://twitter.com/rahirovers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="mailto:rahirovers@gmail.com"
                aria-label="Email"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-6 text-center text-sm text-background/70 space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Rahi Rovers. All rights reserved.
          </p>

          {/* ✅ Developed by Coledra.com */}
          <p>
            Developed with ❤️ by{" "}
            <a
              href="https://www.coledra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-background hover:text-background/90 underline-offset-2 hover:underline transition"
            >
              Coledra.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
