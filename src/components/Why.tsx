import React from "react";
import { Shield, Award, ThumbsUp, Droplet, Waves } from "lucide-react";
import { motion } from "framer-motion";

const WhyChoose = () => {
  const items = [
    {
      icon: Shield,
      title: "Advanced Purification",
      desc: "Multi-stage filtration process for the purest water",
      color: "text-blue-500",
      bg: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBorder: "hover:border-blue-600",
    },
    {
      icon: Award,
      title: "Certified Quality",
      desc: "ISO certified products and processes",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      borderColor: "border-emerald-200",
      hoverBorder: "hover:border-emerald-600",
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      desc: "24/7 support and maintenance services",
      color: "text-cyan-500",
      bg: "bg-cyan-50",
      borderColor: "border-cyan-200",
      hoverBorder: "hover:border-cyan-600",
    },
  ];

  // Water droplet animation variants
  const dropletVariants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
    hover: {
      y: -10,
      transition: {
        y: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative water elements */}
      <motion.div
        className="absolute top-0 left-0 w-full opacity-10"
        animate={{
          x: ["0%", "5%", "0%"],
          transition: { duration: 8, repeat: Infinity, ease: "linear" },
        }}
      >
        <Waves className="w-full h-24 text-blue-300" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Droplet className="w-8 h-8 text-blue-500 mr-2" />
            </motion.div>
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Why Choose <span className="text-blue-600">BlueDrop</span>?
            </motion.h2>
          </div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            We combine{" "}
            <span className="font-medium text-blue-500">
              advanced technology
            </span>{" "}
            with{" "}
            <span className="font-medium text-cyan-500">
              exceptional service
            </span>{" "}
            for the purest water experience.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className={`absolute -inset-1 rounded-xl ${item.bg} opacity-0 group-hover:opacity-100 blur-md transition-all duration-300`}
              ></div>

              <motion.div
                className={`relative p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center 
              ${item.bg} bg-opacity-20 backdrop-blur-sm border-2 
              ${item.borderColor} ${item.hoverBorder}`}
                whileHover={{ y: -5 }}
                variants={dropletVariants}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">{item.desc}</p>

                {/* Animated water droplet indicator */}
                <motion.div
                  className={`mt-6 ${item.color}`}
                  animate={{
                    y: [0, -5, 0],
                    transition: { duration: 2, repeat: Infinity },
                  }}
                >
                  <Droplet className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
