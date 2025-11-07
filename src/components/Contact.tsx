import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your adventure? Contact us today and let's plan your perfect journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-6 md:p-8 shadow-[var(--shadow-medium)] border-0 bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your travel plans..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full gap-2" size="lg">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 shadow-[var(--shadow-soft)] border-0 bg-card hover:shadow-[var(--shadow-medium)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  <p className="text-sm text-muted-foreground">Mon-Sat: 9AM - 8PM</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-[var(--shadow-soft)] border-0 bg-card hover:shadow-[var(--shadow-medium)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@rahirovers.com</p>
                  <p className="text-sm text-muted-foreground">24/7 Email Support</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-[var(--shadow-soft)] border-0 bg-card hover:shadow-[var(--shadow-medium)] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Office</h3>
                  <p className="text-muted-foreground">
                    New Delhi, India
                  </p>
                  <p className="text-sm text-muted-foreground">Visit by appointment</p>
                </div>
              </div>
            </Card>

            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
              <h3 className="font-bold text-lg mb-3">Quick Inquiry on WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant responses to your travel queries
              </p>
              <Button variant="secondary" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
