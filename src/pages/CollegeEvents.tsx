import { useState } from "react";
import { motion } from "framer-motion";
import { Mountain, Users, Calendar, MapPin, CalendarDays, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventImg from "@/assets/college-trek.png"; // 👈 replace with your image

const CollegeEvents = () => {
  const [showEvents, setShowEvents] = useState(false);

  // 🎉 Sample event data
  const sampleEvents = [
    {
      title: "Goa Beach Escape 🏖️",
      date: "Dec 14 - 17, 2025",
      location: "Baga & Palolem, Goa",
      desc: "4-day fun-filled beach adventure with bonfire, water sports, and sunset parties.",
      price: "₹7,999",
    },
    {
      title: "Himalayan Trek Expedition 🏔️",
      date: "Jan 5 - 10, 2026",
      location: "Kasol & Kheerganga, Himachal Pradesh",
      desc: "Trek through snow-capped trails, camp under the stars, and vibe with music by the river.",
      price: "₹10,499",
    },
    {
      title: "Rajasthan Cultural Ride 🏰",
      date: "Feb 8 - 12, 2026",
      location: "Jaipur, Jodhpur & Jaisalmer",
      desc: "Experience desert camping, camel rides, and royal cultural nights in a 5-day adventure.",
      price: "₹8,999",
    },
    {
      title: "Coorg Forest Campout 🌲",
      date: "Mar 1 - 3, 2026",
      location: "Madikeri, Karnataka",
      desc: "2-night forest stay with campfire, coffee estate tours, and waterfall treks.",
      price: "₹6,499",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-muted/40 to-background text-foreground py-20">
      <div className="container mx-auto px-4">
        {/* 🌄 Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Campus to Mountains 🌄
          </motion.h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Kickstart your college adventure! Join exclusive treks, tours, and
            cultural experiences — designed for students who want to explore,
            connect, and live the vibe. 🎒✨
          </p>
        </div>

        {/* 🧭 Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* 1️⃣ Trek */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card rounded-2xl p-6 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all"
          >
            <div className="flex items-center justify-center mb-4">
              <Mountain className="h-10 w-10 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Trek & Explore</h3>
            <p className="text-muted-foreground">
              From hilltops to waterfalls, join weekend escapes made for college crews.
            </p>
          </motion.div>

          {/* 2️⃣ Meet New Vibes */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-card rounded-2xl p-6 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all"
          >
            <div className="flex items-center justify-center mb-4">
              <Users className="h-10 w-10 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Meet New Vibes</h3>
            <p className="text-muted-foreground">
              Travel with people who match your energy. New friends. New memories.
            </p>
          </motion.div>

          {/* 3️⃣ Monthly Events (clickable modal trigger) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowEvents(true)}
            className="bg-card rounded-2xl p-6 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-10 w-10 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Monthly Events</h3>
            <p className="text-muted-foreground">
              Exclusive campus-to-destination experiences every month. Limited seats!
            </p>
          </motion.div>
        </div>

        {/* 📸 Visual / CTA Section */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={eventImg}
            alt="College Trek"
            className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Let’s Turn Your Weekends Into Adventures 🚀
            </h2>
            <p className="text-muted-foreground">
              Whether it’s a midnight bonfire, a mountain trek, or a chill beach
              escape — Rahi Rovers brings the adventure to your college. Sign up
              to get early invites for our next event.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/917007839871?text=Hi! I'm interested in college treks and events.",
                    "_blank"
                  )
                }
                className="bg-gradient-to-r from-teal-500 to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                Join on WhatsApp
              </Button>
              <Button
                onClick={() => window.open("https://www.coledra.com", "_blank")}
                variant="outline"
                className="border-2 border-foreground/40 px-6 py-3 rounded-xl hover:bg-foreground hover:text-background transition-all"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🪩 Modal Popup for Monthly Events */}
      {showEvents && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={(e) => {
      // ✅ Close if clicked outside modal content
      if (e.target === e.currentTarget) {
        setShowEvents(false);
      }
    }}
  >
    <div
      className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-8 animate-fadeIn"
      onClick={(e) => e.stopPropagation()} // 🚫 Prevent closing when clicking inside modal
    >
      <button
        onClick={() => setShowEvents(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        <X className="h-6 w-6" />
      </button>

      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Upcoming College Events
      </h2>

      <div className="space-y-6">
        {sampleEvents.map((event) => (
          <div
            key={event.title}
            className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold text-foreground mb-2">
              {event.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4 text-green-600" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>{event.location}</span>
              </div>
            </div>
            <p className="text-gray-700 mb-3">{event.desc}</p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-green-700">
                Starting from {event.price}
              </span>
              <Button
                onClick={() =>
                  window.open(
                    `https://wa.me/917007839871?text=Hi! I'm interested in joining the ${event.title} trip.`,
                    "_blank"
                  )
                }
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Join Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default CollegeEvents;
