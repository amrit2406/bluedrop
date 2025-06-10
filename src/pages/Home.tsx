import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhyChoose from "../components/Why";
import SmartFeatures from "../components/SmartFeature";
import {
  ArrowRight,
  Shield,
  Award,
  ThumbsUp,
  Droplet,
  Zap,
  Sparkles,
  Filter,
  Clock,
  CheckCircle,
  ChevronRight,
  Star,
  Settings,
  RefreshCw,
  Trash2,
  Gauge,
  Beaker,
  TestTube,
} from "lucide-react";
import Testimonials from "../components/Testi";
import LatestBlogs from "../components/BlogsSection";
import HeroSection from "../components/Hero";
import ProductsSection from "../components/ProductSec";
import AboutUsSection from "../components/AboutUs";
import FilP from "../components/Fp";

const Home = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const filtrationSteps = [
    {
      step: "1",
      title: "Pre-Filtration",
      description: "Removes large particles, sediment, and visible impurities",
      icon: <Filter className="w-8 h-8" />,
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-200",
      border: " border border-gray-200 hover:border-blue-500",
    },
    {
      step: "2",
      title: "Carbon Filtration",
      description: "Eliminates chlorine, bad taste, and odors",
      icon: <Beaker className="w-8 h-8" />,
      color: "bg-green-100",
      hoverColor: "hover:bg-green-200",
      border: " border border-gray-200 hover:border-green-500",
    },
    {
      step: "3",
      title: "RO Membrane",
      description: "Removes dissolved solids and impurities",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-purple-100",
      hoverColor: "hover:bg-purple-200",
      border: " border border-gray-200 hover:border-purple-500",
    },
    {
      step: "4",
      title: "UV Purification",
      description: "Eliminates bacteria and other microorganisms",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-yellow-100",
      hoverColor: "hover:bg-yellow-200",
      border: " border border-gray-200 hover:border-yellow-500",
    },
    {
      step: "5",
      title: "Mineral Addition",
      description: "Adds essential minerals for healthy water",
      icon: <TestTube className="w-8 h-8" />,
      color: "bg-pink-100",
      hoverColor: "hover:bg-pink-200",
      border: " border border-gray-200 hover:border-pink-500",
    },
    {
      step: "6",
      title: "Final Polish",
      description: "Ensures fresh, great-tasting water",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-indigo-100",
      hoverColor: "hover:bg-indigo-200",
      border: " border border-gray-200 hover:border-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About section */}
      <AboutUsSection />

      {/* Why Choose */}
      <WhyChoose />

      {/* Products Section */}
      <ProductsSection />

      {/* Smart Features */}
      <SmartFeatures />

      {/* Filtration Process Section */}
      {/* <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">
              Our Filtration Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience our comprehensive 6-stage filtration process that
              delivers pure and safe drinking water.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtrationSteps.map((step, index) => (
              <div
                key={index}
                className={`relative p-6 bg-white ${step.border} rounded-xl ${step.hoverColor} transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div
                  className={`absolute top-6 right-6 text-3xl font-bold text-gray-100 transition-colors duration-300 ${
                    hoveredStep === index ? "text-black" : "text-gray-50"
                  }`}
                >
                  {step.step}
                </div>
                <div
                  className={`${
                    step.color
                  } w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 ${
                    hoveredStep === index ? "transform rotate-12" : ""
                  }`}
                >
                  {React.cloneElement(step.icon, {
                    className: `w-8 h-8 text-${step.color.split("-")[0]}-600`,
                  })}
                </div>
                <h3 className="text-xl font-semibold text-[#1A365D] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/filtration-process"
              className="inline-flex items-center text-[#0066CC] font-semibold hover:underline"
            >
              Learn more about our filtration process
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section> */}
      <FilP />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog Section */}
      <LatestBlogs />

      {/* CTA Section */}
      <section className="py-10 bg-[#5495f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Pure Water?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who have chosen Blue Drop for
            their water purification needs.
          </p>
          <button className="bg-white text-[#0066CC] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
