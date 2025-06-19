import React from "react";
import { motion } from "framer-motion";
import { Star, Check, Droplet, ChevronRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "BluePure Pro",
      category: "RO Water Purifier",
      price: "₹599",
      image: "/1.webp",
      features: [
        "7-Stage Purification",
        "Smart LED Display",
        "Auto-Clean System",
        "15L Storage Capacity",
      ],
      color: "bg-blue-100",
      icon: <Droplet className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "AquaGuard UV+",
      category: "UV Water Purifier",
      price: "₹399",
      image: "/2.webp",
      features: [
        "UV Sterilization",
        "Compact Design",
        "Energy Efficient",
        "10L Storage Capacity",
      ],
      color: "bg-cyan-100",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Commercial Max",
      category: "Commercial Purifier",
      price: "₹1299",
      image: "/3.jpg",
      features: [
        "Industrial Grade Filtration",
        "High Flow Rate",
        "Digital Monitoring",
        "50L Storage Capacity",
      ],
      color: "bg-indigo-100",
      icon: <Droplet className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-24 overflow-hidden">
        {/* Water droplet decorations */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 rounded-full bg-white opacity-20"
          animate={{
            y: [0, -20, 0],
            transition: { duration: 6, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-cyan-300 opacity-15"
          animate={{
            y: [0, 20, 0],
            transition: { duration: 8, repeat: Infinity, delay: 2 },
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <Droplet className="w-8 h-8 text-white mr-2" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium <span className="text-cyan-200">Water Solutions</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 max-w-2xl mx-auto text-lg"
          >
            Discover our range of advanced water purification solutions designed
            to provide clean and safe drinking water for your specific needs.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col">
                  {/* Product image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0" />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" /> */}
                  </div>

                  {/* Product content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-start mb-4">
                      <div
                        className={`w-12 h-12 rounded-full ${product.color} flex items-center justify-center mr-3`}
                      >
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600">{product.category}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-5 h-5 ${
                              star <= 4
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">4.8 (120)</span>
                    </div>

                    {/* Features */}
                    <ul className="mb-6 space-y-2">
                      {product.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-600"
                        >
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price and CTA */}
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        {product.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full shadow-md flex items-center"
                      >
                        Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </motion.button>
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Need Expert Guidance?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our water specialists are ready to help you choose the perfect
              purification system for your needs.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 103, 204, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full shadow-lg flex items-center mx-auto"
              >
                Consult Our Experts
                <ChevronRight className="w-5 h-5 ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
