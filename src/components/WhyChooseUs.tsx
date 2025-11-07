import { Award, Shield, Headphones, Star } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Tour Managers",
    description: "Experienced professionals guide you through every journey with local insights and expertise",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority with verified accommodations and reliable transportation",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you anytime during your travels",
  },
  {
    icon: Star,
    title: "Best Price Guarantee",
    description: "Competitive pricing with transparent costs and no hidden charges",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Rahi Rovers?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            We're committed to creating unforgettable travel experiences with personalized care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center space-y-4 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-primary-foreground/80">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="text-primary-foreground/80">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">50+</div>
              <div className="text-primary-foreground/80">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">100+</div>
              <div className="text-primary-foreground/80">Tour Packages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">4.9/5</div>
              <div className="text-primary-foreground/80">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
