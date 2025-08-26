"use client"

import { useNavigation } from "@/app/NavigationProvider";
import Link from "next/link";
export default function HomePage() {
   const { navigate } = useNavigation();

  //  const [loading, setLoading] = useState(false);

  // const handleClick = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     router.push("/login");
  //   }, 1500);
  // };
  return (
    <main className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 w-full h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home_image/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-2 bg-white/30 backdrop-blur-md z-20">
        <div>
          <img
            src="/home_image/logo.png"
            alt="Hotel Logo"
            className="h-20 w-20 ml-10 rounded-full"
          />
        </div>
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li className="cursor-pointer hover:text-yellow-400">Home</li>
          <li className="cursor-pointer hover:text-yellow-400">Services</li>
          <li className="cursor-pointer hover:text-yellow-400">Contact</li>
        </ul>

        {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold">
          <Link href="/login">Login</Link>
        </button> */}
        <Link href="/login" prefetch>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold">
            Login
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Welcome to Mabsol Hotel
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white drop-shadow">
          Experience luxury and comfort in the heart of the city
        </p>
        <button className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md">
          Book Now
        </button>
      </section>

      {/* About Section */}
      <section className="relative z-10 bg-[#F3E9DC] text-gray-900 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/home_image/hotel2.jpg"
              alt="Hotel Interior"
              className="rounded-lg shadow-lg w-full h-96 max-w-md"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6 text-justify">
              At Mabsol Hotel, we believe hospitality should be seamless,
              modern, and customer-friendly. That’s why we developed a Hotel
              Management System that brings every aspect of your stay into one
              smart digital platform. From room reservations to restaurant
              management, our system provides efficiency for hotel staff and
              convenience for guests.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-md">
              Explore Rooms
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 bg-[#F3E9DC] text-gray-900 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-red-500/70 transition-transform transform hover:-translate-y-2 duration-300">
              <img
                src="/home_image/room.jpg"
                alt="Room Booking"
                className="rounded-lg mb-6 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Room Booking</h3>
              <p className="text-gray-600">
                Easily book luxurious rooms with modern amenities, designed for
                your comfort and relaxation.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-yellow-500/70 transition-transform transform hover:-translate-y-2 duration-300">
              <img
                src="/home_image/resturant.jpg"
                alt="Restaurant"
                className="rounded-lg mb-6 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Restaurant</h3>
              <p className="text-gray-600">
                Enjoy fine dining with a variety of cuisines, crafted by our
                expert chefs to delight your taste buds.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-blue-500/70 transition-transform transform hover:-translate-y-2 duration-300">
              <img
                src="/home_image/spa.jpg"
                alt="Spa & Wellness"
                className="rounded-lg mb-6 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Spa & Wellness</h3>
              <p className="text-gray-600">
                Relax and rejuvenate with our premium spa treatments and
                wellness services designed just for you.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-green-500/70 transition-transform transform hover:-translate-y-2 duration-300">
              <img
                src="/home_image/event.jpg"
                alt="Spa & Wellness"
                className="rounded-lg mb-6 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">
                Event & Banquet Hall Booking
              </h3>
              <p className="text-gray-600">
                Relax and rejuvenate with our premium spa treatments and
                wellness services designed just for you.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-pink-500/70transition-transform transform hover:-translate-y-2 duration-300">
              <img
                src="/home_image/business.jpg"
                alt="Spa & Wellness"
                className="rounded-lg mb-6 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Business Services</h3>
              <p className="text-gray-600">
                We provide high-speed internet, conference rooms, meeting halls,
                and support services to ensure a seamless and professional
                experience for business travelers.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-orange-500/70 transition-transform transform hover:-translate-y-2 duration-300">
              <img
                src="/home_image/concierge.jpg"
                alt="Spa & Wellness"
                className="rounded-lg mb-6 h-40 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-3">Concierge Services</h3>
              <p className="text-gray-600">
                Personalized guest assistance for ticket booking, travel guides,
                and exclusive local experiences — making your stay effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 bg-[#E9E3DF] text-gray-900 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="mb-6 text-lg">
              Have questions or want to celebrate your birthday with us? Get in
              touch and our team will assist you right away!
            </p>

            <div className="space-y-4">
              <p>
                <span className="font-semibold">📍 Address:</span> Mabsol Hotel,
                Main Street, City Center
              </p>
              <p>
                <span className="font-semibold">📞 Phone:</span> +91 98765 43210
              </p>
              <p>
                <span className="font-semibold">📧 Email:</span>{" "}
                contact@mabsolhotel.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-black-500/70transition-transform transform hover:-translate-y-2 duration-300">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Hotel */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Mabsol Hotel</h3>
            <p className="text-sm">
              Experience luxury, comfort, and seamless digital services at
              Mabsol Hotel. Your perfect getaway for relaxation, dining, and
              business stays.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <p className="text-sm">📍 Main Street, City Center</p>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm">📧 contact@mabsolhotel.com</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-yellow-400">
                🌐
              </a>
              <a href="#" className="hover:text-yellow-400">
                📘
              </a>
              <a href="#" className="hover:text-yellow-400">
                🐦
              </a>
              <a href="#" className="hover:text-yellow-400">
                📸
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Mabsol Hotel. All Rights Reserved.
        </div>
      </footer>

       {/* {loading && (
        <div className="fixed !inset-0 bg-black/80 !bg-opacity-30 flex items-center justify-center !z-50">
          <Spin size="large" />
        </div>
      )} */}
    </main>
  );
}
