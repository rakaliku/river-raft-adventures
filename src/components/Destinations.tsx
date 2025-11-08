import { useState } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, ArrowRight, X, Phone } from "lucide-react";
import keralaImg from "@/assets/kerala.jpg";
import tajmahalImg from "@/assets/tajmahal.jpg";
import ladakhImg from "@/assets/ladakh.jpg";
import goaImg from "@/assets/goa.jpg";
import rajasthanImg from "@/assets/rajasthan.jpg";

const FORMSPREE_URL = "https://formspree.io/f/xldarbbd";
const WHATSAPP_NUMBER = "917007839871"; // ✅ Replace with your WhatsApp number (no + or spaces)

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
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  // ✅ Booking form submit
  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setShowForm(false);
      setSuccessMsg(true);
      form.reset();
      setTimeout(() => setSuccessMsg(false), 4000);
    } else {
      alert("❌ Something went wrong. Please try again later.");
    }
  };

  // ✅ WhatsApp Chat Handler
  const handleWhatsAppChat = (
    destinationName: string,
    duration: string,
    price: string
  ) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${destinationName} travel package (${duration}, ${price}). Can you share more details?`
    );
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(link, "_blank");
  };

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
              curated travel experiences.
            </p>
          </div>

          {/* ✅ Destination Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Card
                key={destination.name}
                className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all duration-300 bg-card border-0"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    loading="lazy"
                    src={destination.image}
                    alt={`${destination.name} – ${destination.description}`}
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

        {/* ✅ Destination Details Modal */}
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
                  loading="lazy"
                  src={selected.image}
                  alt={`${selected.name} – trip preview`}
                  className="rounded-xl w-full md:w-1/2 object-cover shadow-md"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-green-700 mb-3">
                    {selected.name} Adventure Details
                  </h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {selected.package.details}
                  </p>

                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    {selected.package.highlights.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">
                        {selected.package.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="font-bold text-green-700 text-lg">
                        {selected.package.price}
                      </p>
                    </div>
                  </div>

                  {/* ✅ Action Buttons */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      onClick={() => setShowForm(true)}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                      Book Now
                    </button>

                    <button
                      onClick={() =>
                        handleWhatsAppChat(
                          selected.name,
                          selected.package.duration,
                          selected.package.price
                        )
                      }
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#1ebe5c] transition"
                    >
                      <Phone className="h-5 w-5" />
                      Chat on WhatsApp
                    </button>

                    <button
                    //   onClick={() => setSelected(null)}
                    //   className="flex-1 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                    // >
                    //   Close
                    onClick={() => window.open("https://ig.me/m/rahirovers", "_blank")}
  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="h-5 w-5"
  >
    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5A5.752 5.752 0 0 0 7.75 22h8.5A5.752 5.752 0 0 0 22 16.25v-8.5A5.752 5.752 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.746 2.5c-.277 0-.498.22-.498.498v.004c0 .277.22.498.498.498h.004a.5.5 0 0 0 0-1h-.004Zm-4.996 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 1.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Z" />
  </svg>
  DM on Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ✅ Booking Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <form
              onSubmit={handleBookingSubmit}
              className="relative bg-white rounded-2xl shadow-xl w-11/12 md:w-1/2 p-8 animate-fadeIn"
            >
              <input
                type="hidden"
                name="destination"
                value={selected?.name || ""}
              />
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X className="h-6 w-6" />
              </button>

              <h2 className="text-2xl font-bold text-green-700 mb-6">
                Book Your Adventure
              </h2>

              <div className="flex flex-col gap-4">
                <input
                  name="name"
                  required
                  placeholder="Full Name"
                  className="border rounded-lg p-3 focus:outline-green-600"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="border rounded-lg p-3 focus:outline-green-600"
                />
                <input
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="border rounded-lg p-3 focus:outline-green-600"
                />
                <input
                  name="date"
                  type="date"
                  required
                  className="border rounded-lg p-3 focus:outline-green-600"
                />
                <textarea
                  name="message"
                  placeholder="Message or special requests"
                  rows={3}
                  className="border rounded-lg p-3 focus:outline-green-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Submit Booking
              </button>
            </form>
          </div>
        )}

        {/* ✅ Success Toast */}
        {successMsg && (
          <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg animate-fadeIn">
            ✅ Booking request sent successfully!
          </div>
        )}
      </section>
    </>
  );
};

export default Destinations;
