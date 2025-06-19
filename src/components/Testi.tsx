import React from "react";
import { Star, Quote, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    quote:
      "The water quality is amazing, and the smart features make maintenance so easy!",
    rating: 5,
    color: "bg-blue-50",
    accent: "text-blue-500",
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner",
    quote:
      "Best investment for our restaurant. The commercial unit handles our high demand perfectly.",
    rating: 5,
    color: "bg-cyan-50",
    accent: "text-cyan-500",
  },
  {
    name: "Emily Davis",
    role: "Health Coach",
    quote:
      "I recommend Blue Drop to all my clients. The mineral addition feature is fantastic!",
    rating: 5,
    color: "bg-emerald-50",
    accent: "text-emerald-500",
  },
  {
    name: "David Smith",
    role: "Fitness Trainer",
    quote:
      "Since installing Blue Drop, I can really taste the difference. Highly recommended!",
    rating: 5,
    color: "bg-indigo-50",
    accent: "text-indigo-500",
  },
  {
    name: "Priya Patel",
    role: "Nutritionist",
    quote:
      "A must-have for health-conscious households. The taste is crisp and pure!",
    rating: 5,
    color: "bg-purple-50",
    accent: "text-purple-500",
  },
  {
    name: "John Lee",
    role: "Hotel Manager",
    quote:
      "Perfect for our guest rooms. Weve seen amazing customer satisfaction improvements.",
    rating: 5,
    color: "bg-teal-50",
    accent: "text-teal-500",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Floating water droplets decoration */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 rounded-full bg-blue-200 opacity-20"
        animate={{
          y: [0, -30, 0],
          transition: { duration: 6, repeat: Infinity },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full bg-cyan-200 opacity-15"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          transition: { duration: 8, repeat: Infinity, delay: 1 },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Custom pagination indicator (additional to swiper pagination) */}
        <motion.div
          className="hidden md:flex justify-center gap-2 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-600"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        {/* Animated Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Droplet className="w-8 h-8 text-blue-500 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Voices of Satisfaction
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from our delighted customers about their{" "}
            <span className="font-semibold text-blue-500">
              BlueDrop experience
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            className="mySwiper pb-12"
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-blue-200",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-500",
            }}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`relative p-8 rounded-xl ${testimonial.color} shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-white`}
                >
                  {/* Floating quote icon */}
                  <Quote
                    className={`absolute top-6 right-6 w-10 h-10 ${testimonial.accent} opacity-10`}
                  />

                  {/* Animated Stars */}
                  <motion.div
                    className="flex mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 15,
                          delay: i * 0.1,
                        }}
                      >
                        <Star
                          className={`w-6 h-6 ${testimonial.accent} fill-current`}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.p
                    className="text-gray-700 mb-6 text-lg relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Quote
                      className={`absolute -top-1 -left-6 w-5 h-5 ${testimonial.accent} opacity-70`}
                    />
                    {testimonial.quote}
                  </motion.p>

                  {/* Name & Role */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${testimonial.accent}`}>
                      {testimonial.role}
                    </p>
                  </motion.div>

                  {/* Water droplet decoration */}
                  <motion.div
                    className={`absolute bottom-4 right-4 ${testimonial.accent} opacity-20`}
                    animate={{
                      y: [0, -5, 0],
                      transition: { duration: 3, repeat: Infinity },
                    }}
                  >
                    <Droplet className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
