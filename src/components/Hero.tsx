import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0052a3] via-[#0077cc] to-[#00aceb] py-24">
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
          {/* Text Content */}
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-[#0066CC] px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <img
              src="/wf.png"
              alt="Water Purifier"
              className="w-full max-w-lg mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
