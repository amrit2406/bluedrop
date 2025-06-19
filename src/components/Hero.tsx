import React from "react";
import { Link } from 'react-router-dom';

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Droplet,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = ["/wf.png", "/3.jpg", "/6.png"]; // Your image paths here
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0052a3] via-[#0077cc] to-[#00aceb] py-24">
      {/* Animated water droplets in background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Droplet
            key={i}
            size={Math.random() * 20 + 10}
            className="absolute animate-float"
            style={{
              color: "#9cdbff",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Animated Blob - Top Left */}
      <motion.div
        className="absolute top-20 left-5 w-[60px] h-[60px] bg-sky-300 opacity-70"
        style={{
          borderRadius: "70% 0% 70% 50% / 70% 0% 70% 50%",
        }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />

      {/* Animated Blob - Bottom Left */}
      <motion.div
        className="absolute bottom-20 left-40 w-[60px] h-[60px] bg-sky-300 blur-sm opacity-80"
        style={{
          borderRadius: "70% 0% 70% 50% / 70% 0% 70% 50%",
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pure Water, Better Life
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Experience the difference with our advanced water purification
              solutions. Providing clean, safe drinking water for your home and
              family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/about"
                  className="block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition text-center"
                >
                  Learn More
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/contact"
                  className="block bg-white text-[#0066CC] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition text-center"
                >
                  Buy Now
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Swiper Slider */}
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="w-full max-w-lg h-full">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={false}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="h-full rounded-xl overflow-hidden"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`slide-${i}`}
                      className="w-full h-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
