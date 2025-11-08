import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, ArrowRight, X } from "lucide-react";
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
      details:
        "Experience Kerala’s serene backwaters, misty tea gardens, and sandy beaches. Visit Munnar, Alleppey, Kochi, and Thekkady with premium stays and guided tours.",
      highlights: [
        "Stay in premium houseboats and eco-resorts",
        "Guided tours through Munnar tea estates",
        "Sunset cruise in Alleppey",
        "Wildlife experience in Thekkady",
      ],
    },
  },
  {
    name: "Rajasthan",
    description: "Royal Heritage & Desert Adventures",
    image: rajasthanImg,
    popular: true,
    package: {
      duration: "6 Days / 5 Nights",
      price: "₹22,499",
      details:
        "Discover the royal grandeur of Rajasthan — from Jaipur’s palaces to Jaisalmer’s golden dunes. Enjoy camel safaris, forts, and cultural evenings.",
      highlights: [
        "Camel Safari in Thar Desert",
        "Stay in heritage hotels",
        "Visit Jaipur, Udaipur, Jaisalmer",
        "Traditional Rajasthani folk show",
      ],
    },
  },
  {
    name: "Leh-Ladakh",
    description: "Himalayan Paradise & Mountain Roads",
    image: ladakhImg,
    popular: true,
    package: {
      duration: "7 Days / 6 Nights",
      price: "₹29,999",
      details:
        "Ride through the stunning landscapes of Ladakh. Visit Pangong Lake, Nubra Valley, and monasteries high in the Himalayas.",
      highlights: [
        "Bike ride to Khardung La Pass",
        "Camping at Pangong Lake",
        "Explore Nubra Valley",
        "Monastery visits and local food",
      ],
    },
  },
  {
    name: "Goa",
    description: "Beaches, Nightlife & Portuguese Culture",
    image: goaImg,
    popular: false,
    package: {
      duration: "4 Days / 3 Nights",
      price: "₹15,499",
      details:
        "Enjoy the perfect blend of sun, sand, and sea. Explore Goa’s beaches, markets, and Portuguese architecture.",
      highlights: [
        "Beachside resort stay",
        "Water sports & nightlife",
        "Old Goa churches tour",
        "Cruise on Mandovi River",
      ],
    },
  },
  {
    name: "Uttar Pradesh",
    description: "Taj Mahal & Historical Wonders",
    image: tajmahalImg,
    popular: false,
    package: {
      duration: "3 Days / 2 Nights",
      price: "₹13,999",
      details:
        "Step back in time to the Mughal era. Visit the Taj Mahal, Agra Fort, and Varanasi’s sacred ghats.",
      highlights: [
        "Sunrise at the Taj Mahal",
        "Visit Agra Fort & Fatehpur Sikri",
        "Evening Ganga Aarti in Varanasi",
        "Local street food walk",
      ],
    },
  },
];

const Destinations = () => {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <>
      <section id="destinations" className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore India's most captivating destinations with our carefully
              curated travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Card
                key={destination.name}
                className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-300 bg-card border-0"
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
                      <h3 className="text-2xl font-bold">
                        {destination.name}
                      </h3>
                    </div>
                    <p className="text-white/90 mb-3">
                      {destination.description}
                    </p>

                    {destination.package && (
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/80">Duration:</span>
                          <span className="font-semibold">
                            {destination.package.duration}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/80">Starting from:</span>
                          <span className="font-bold text-accent text-lg">
                            {destination.package.price}
                          </span>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => setSelected(destination)}
                      className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
                    >
                      Explore Now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Modal (for any selected destination) */}
        {selected && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-white rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto p-8 animate-fadeIn">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="rounded-xl w-full md:w-1/2 object-cover shadow-md"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-green-700 mb-3">
                    {selected.name} Adventure Details
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {selected.package?.details}
                  </p>
                  {selected.package?.highlights && (
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                      {selected.package.highlights.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">
                        {selected.package?.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="font-bold text-green-700 text-lg">
                        {selected.package?.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="mt-8 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Destinations;
