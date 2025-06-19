import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ShoppingCart, Check, Droplet, Zap, Shield } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "BlueDrop Water Purifier",
    description: "Advanced 6-stage filtration for pure, clean drinking water",
    image: "/wf.png",
    price: "₹299",
    features: ["Smart monitoring", "Mineral retention", "Eco-friendly"],
    icon: <Droplet className="w-5 h-5" />,
  },
  {
    id: 2,
    name: "Smart Faucet Filter",
    description: "Easy to install, smart water filtration for your kitchen",
    image: "/1.webp",
    price: "₹99",
    features: ["One-click install", "Real-time alerts", "Compact design"],
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 3,
    name: "Mineral Enhancer",
    description: "Adds essential minerals back to your purified water",
    image: "/2.webp",
    price: "₹49",
    features: ["Calcium", "Magnesium", "Potassium"],
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: 4,
    name: "Portable Water Bottle",
    description: "Stay hydrated with our durable filtered water bottle",
    image: "/3.jpg",
    price: "₹39",
    features: ["3-stage filter", "BPA-free", "Leak-proof"],
    icon: <Droplet className="w-5 h-5" />,
  },
  {
    id: 5,
    name: "Commercial Filter",
    description: "High capacity filtration for business needs",
    image: "/4.jpg",
    price: "₹499",
    features: ["Heavy-duty", "Long lifespan", "Easy maintenance"],
    icon: <Zap className="w-5 h-5" />,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-200 opacity-10 blur-xl"
        animate={{
          y: [0, -30, 0],
          transition: { duration: 8, repeat: Infinity },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-32 h-32 rounded-full bg-cyan-200 opacity-10 blur-xl"
        animate={{
          y: [0, 30, 0],
          transition: { duration: 10, repeat: Infinity, delay: 2 },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Droplet className="w-8 h-8 text-blue-500 mr-2" />
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Pure Water Solutions
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover our{" "}
            <span className="font-semibold text-blue-500">award-winning</span>{" "}
            water purification products for every need
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
            className="mySwiper pb-16"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet bg-blue-200",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-500",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 overflow-hidden"
                >
                  {/* Product image */}
                  <div className="relative h-60 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0" />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
                  </div>

                  {/* Product content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-start mb-4">
                      <div
                        className={`w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 ${product.icon.props.className}`}
                      >
                        {product.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4">{product.description}</p>

                    {/* Features */}
                    <ul className="mb-6 space-y-2">
                      {product.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price and CTA */}
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-600">
                        {product.price}
                      </span>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to="/products"
                          className="flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-blue-300 transition-all"
                        >
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Related Products
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* Water droplet decoration */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-blue-300 opacity-30"
                    animate={{
                      y: [0, -5, 0],
                      transition: { duration: 4, repeat: Infinity },
                    }}
                  >
                    <Droplet className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom pagination indicator */}
        <motion.div
          className="hidden md:flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-200"
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
      </div>
    </section>
  );
};

export default ProductsSection;
