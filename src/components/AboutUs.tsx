import React from "react";
import { motion } from "framer-motion";
import {
  Droplet,
  Check,
  ChevronRight,
  Leaf,
  Shield,
  Zap,
  Award,
} from "lucide-react";
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  const features = [
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Advanced 6-Stage Filtration",
      description:
        "Removes 99.9% of contaminants while retaining essential minerals",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Technology",
      description: "Real-time monitoring and maintenance alerts",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Quality",
      description: "Tested and approved by water quality experts",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Reduces plastic waste from bottled water",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Winning",
      description: "Recognized for innovation in water technology",
    },
  ];

  return (
    <section className="relative overflow-hidden py-10 text-gray-900 bg-gradient-to-br from-blue-50 to-white">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
          transition: { duration: 12, repeat: Infinity },
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-200 opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          transition: { duration: 15, repeat: Infinity, delay: 3 },
        }}
      />

      {/* Water droplet pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots pattern-blue-500 pattern-size-6 pattern-opacity-20" />

      <motion.div
        className="max-w-7xl mx-auto px-6 z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Our Water Revolution
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-700 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            At <span className="font-semibold text-blue-600">BlueDrop</span>,
            we're transforming water purity with cutting-edge technology and a
            passion for health. Every drop tells our story of innovation and
            care.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image with Creative Frame */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/about.jpg"
              alt="About BlueDrop"
              className="rounded-2xl shadow-2xl z-10 relative border-8 border-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-300 z-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-70"
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 5, repeat: Infinity },
              }}
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why <span className="text-blue-600">BlueDrop</span> Stands Out
            </motion.h3>

            <motion.ul
              className="space-y-4 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <motion.div
                    className={`flex-shrink-0 w-10 h-10 rounded-full ${
                      index % 2 === 0
                        ? "bg-blue-100 text-blue-600"
                        : "bg-cyan-100 text-cyan-600"
                    } flex items-center justify-center mr-4`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/about" className="inline-block">
                {" "}
                {/* Add your desired path */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg flex items-center group"
                >
                  Discover Our Technology
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                      transition: { duration: 2, repeat: Infinity },
                    }}
                    className="ml-2"
                  >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating water droplets */}
        <motion.div
          className="absolute bottom-20 left-1/4 w-6 h-6 rounded-full bg-blue-300 opacity-70"
          animate={{
            y: [0, -20, 0],
            transition: { duration: 4, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-cyan-300 opacity-70"
          animate={{
            y: [0, -15, 0],
            transition: { duration: 5, repeat: Infinity, delay: 1 },
          }}
        />
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
