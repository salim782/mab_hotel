"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Layout, Button } from "antd";
import { motion } from "framer-motion";

const { Content } = Layout;

const services = [
  {
    title: "Room Booking",
    description:
      " Easily book luxurious rooms with modern amenities, designed for your comfort and relaxation.",
    image: "/service-images/bookinng.png"
  },
  {
    title: "Restaurant",
    description:
      "Enjoy fine dining with a variety of cuisines, crafted by our expert chefs to delight your taste buds.",
    image: "/service-images/dining.jpg",
  },
  {
    title: "Event & Banquet Hall Bookingt",
    description:
      "Relax and rejuvenate with our premium spa treatments and wellness services designed just for you.",
    image: "/service-images/banquet.png",
  },
  {
    title: "Business Services",
    description:
      "We provide high-speed internet, conference rooms, meeting halls, and support services to ensure a seamless and professional experience for business travelers.",
    image: "/service-images/business.png",
  },
  // {
  //   title: "Restaurant & Dining",
  //   description:
  //     "Enjoy multi-cuisine dining with a relaxing atmosphere and signature dishes.",
  //   image: "/service-images/dining.jpg",
  // },
  {
    title: "Free High-Speed Wi-Fi",
    description:
      "Stay connected with complimentary high-speed internet across the hotel.",
    image: "/service-images/wifi.png",
  },
  {
    title: "Airport Pickup & Drop",
    description:
      "Hassle-free airport transfers with our luxury chauffeur services.",
    image: "/service-images/airport.png",
  },
  {
    title: "Concierge Service",
    description:
      "Our concierge team is here 24/7 to help with bookings, tours, and special requests.",
    image: "/service-images/concierge.png",
  },
  {
    title: "Shopping Arcade",
    description:
      "Exclusive shopping arcade featuring luxury brands and local crafts.",
    image: "/service-images/shopping.png",
  },
  {
    title: "Spa & Wellness",
    description:
      "Relax at our full-service spa offering massages, therapies, and yoga.",
    image: "/service-images/spa.png",
  },
  {
    title: "Entertainment & Events",
    description:
      "From live music to themed events, enjoy unforgettable experiences.",
    image: "/service-images/events.png",
  },
  {
  title: "Swimming Pool",
  description:
    "Relax and unwind at our temperature-controlled swimming pool, complete with poolside service and a serene atmosphere for both leisure and family fun.",
  image: "/service-images/pool.png",
},
  {
    title: "24/7 Support",
    description:
      "Our support desk is always available to make your stay comfortable.",
    image: "/service-images/support.png",
  },
  
// {
//   title: "Laundry & Dry Cleaning",
//   description:
//     "Enjoy hassle-free laundry and dry-cleaning services with quick turnaround, ensuring you always look fresh and elegant during your stay.",
//   image: "/service-images/laundry.png",
// },


];

const whyChooseUs = [
  {
    title: "24/7 Concierge",
    description: "Personalized assistance anytime, anywhere.",
    image: "/service-images/seven.png",
  },
  {
    title: "Fine Dining",
    description: "Award-winning restaurants with world-class chefs.",
    image: "/service-images/dining.png",
  },
  {
    title: "Luxury Spa",
    description: "Rejuvenate your body and soul with relaxing therapies.",
    image: "/service-images/luxury.png",
  },
];

const Services = () => {
  const router = useRouter();
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <Layout className="!bg-[#f3e9dc] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/service-images/service.png"
          alt="Hotel Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Services
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            “At our hotel, every service is more than just a facility—it’s an
            experience. From fine dining to personalized concierge care, we blend
            elegance with comfort to create unforgettable moments. With us,
            luxury isn’t an option, it’s a promise.”
          </p>
          <Button
            className="mt-10 !bg-[#D4AF37] !border-none text-white font-semibold hover:!bg-[#B8860B]"
            onClick={() => router.push("/")}
          >
            Home
          </Button>
        </div>
      </div>

      {/* Services Grid */}
      <Content className="px-6 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From exquisite dining experiences to world-class amenities, we provide
            everything you need for a memorable stay. Our services are designed to
            blend comfort, luxury, and convenience, ensuring every moment at our hotel
            is truly exceptional.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg flex flex-col overflow-hidden rounded-xl hover:shadow-2xl transition-shadow"
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className="h-100 w-full object-cover"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Content>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 text-center bg-[#fdfaf6]">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          We go above and beyond to make your stay luxurious, comfortable, and memorable.
          Every detail is crafted to offer you elegance, style, and personalized service.
          Relax, unwind, and enjoy an experience designed just for you.
          Because your perfect stay is our highest priority.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg flex flex-col overflow-hidden rounded-xl hover:shadow-xl transition-shadow"
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="h-100 w-full object-cover"
                whileHover={{
                  y: -10,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                  scale: 1.03
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-[#1A365D] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Luxury?</h2>
        <p className="text-lg mb-6">
          Book your stay today and indulge in our premium services.
        </p>
        <Button
          type="primary"
          size="large"
          className="!bg-[#D4AF37] !border-none font-semibold px-8 py-5 hover:!bg-[#B8860B] transition-transform hover:scale-105"
        >
          Book Now
        </Button>
      </section>
    </Layout>
  );
};

export default Services;