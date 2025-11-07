import { Card } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import keralaImg from "@/assets/kerala.jpg";
import tajmahalImg from "@/assets/tajmahal.jpg";
import ladakhImg from "@/assets/ladakh.jpg";
import goaImg from "@/assets/goa.jpg";
import rajasthanImg from "@/assets/rajasthan.jpg";

const destinations = [
  {
    name: "Kerala",
    description: "God's Own Country - Backwaters & Beaches",
    image: keralaImg,
    popular: true,
    package: {
      duration: "5 Days / 4 Nights",
      price: "₹18,999",
      places: ["Munnar Tea Gardens", "Alleppey Backwaters", "Kochi Fort", "Thekkady Wildlife"]
    }
  },
  {
    name: "Rajasthan",
    description: "Royal Heritage & Desert Adventures",
    image: rajasthanImg,
    popular: true,
  },
  {
    name: "Leh-Ladakh",
    description: "Himalayan Paradise & Mountain Roads",
    image: ladakhImg,
    popular: true,
  },
  {
    name: "Goa",
    description: "Beaches, Nightlife & Portuguese Culture",
    image: goaImg,
    popular: false,
  },
  {
    name: "Uttar Pradesh",
    description: "Taj Mahal & Historical Wonders",
    image: tajmahalImg,
    popular: false,
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore India's most captivating destinations with our carefully curated travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card
              key={destination.name}
              className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-300 cursor-pointer bg-card border-0"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {destination.popular && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                  </div>
                  <p className="text-white/90 mb-3">{destination.description}</p>
                  
                  {destination.package && (
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/80">Duration:</span>
                        <span className="font-semibold">{destination.package.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/80">Starting from:</span>
                        <span className="font-bold text-accent text-lg">{destination.package.price}</span>
                      </div>
                      <div className="mt-3">
                        <p className="text-xs text-white/70 mb-2">Key Places:</p>
                        <div className="flex flex-wrap gap-2">
                          {destination.package.places.map((place) => (
                            <span key={place} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                              {place}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    Explore Now
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
