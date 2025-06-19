import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Heart,
  Award,
  Droplet,
  ChevronRight,
} from "lucide-react";
import AboutUsSection from "../components/AboutUs";
import WhyChoose from "../components/Why";

const About = () => {
  const values = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer First",
      description:
        "We prioritize our customers' needs and satisfaction above all else.",
      color: "bg-blue-100",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Excellence",
      description:
        "We strive for excellence in every product and service we deliver.",
      color: "bg-cyan-100",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Social Responsibility",
      description:
        "We're committed to environmental sustainability and community welfare.",
      color: "bg-emerald-100",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Innovation",
      description:
        "We continuously innovate to improve our products and services.",
      color: "bg-indigo-100",
    },
  ];

  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/team-1.jpg",
      quote: "Clean water should be accessible to everyone.",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Technology",
      image: "/team-2.jpg",
      quote: "Innovation drives our water solutions.",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/team-3.jpg",
      quote: "Efficiency meets sustainability in our operations.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-24 overflow-hidden">
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
            className="inline-flex items-center justify-center mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Droplet className="w-8 h-8 text-white mr-2" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-200">Water</span> Story
            </h1>
          </motion.div>
          <motion.p
            className="text-white/90 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Since 2010, we've been on a mission to provide{" "}
            <span className="font-semibold">clean and safe drinking water</span>{" "}
            to millions of households across the country.
          </motion.p>
        </div>
      </section>

      {/* About section */}
      <AboutUsSection />

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              className="space-y-6 p-8 bg-blue-50 rounded-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-600">Our Vision</h2>
              <p className="text-gray-700">
                To be the leading provider of water purification solutions,
                ensuring every household has access to clean and safe drinking
                water.
              </p>
              <div className="w-16 h-1 bg-blue-400 rounded-full"></div>
            </motion.div>

            <motion.div
              className="space-y-6 p-8 bg-cyan-50 rounded-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-cyan-600">Our Mission</h2>
              <p className="text-gray-700">
                To deliver cutting-edge water purification technology that meets
                the highest standards of quality and reliability.
              </p>
              <div className="w-16 h-1 bg-cyan-400 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make at BlueDrop
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col items-center"
              >
                <div
                  className={`w-20 h-20 rounded-full ${value.color} flex items-center justify-center text-blue-600 mb-6`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <WhyChoose />

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The visionary team driving innovation in water purification
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 italic">"{member.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Join Our Water Revolution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/90 text-lg mb-8"
          >
            Discover how BlueDrop can transform your water experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg flex items-center mx-auto group"
              >
                Contact Our Team
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
