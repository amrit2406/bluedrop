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
import CTA from "../components/Cta";

const Home = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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
      <CTA />
    </div>
  );
};

export default Home;
