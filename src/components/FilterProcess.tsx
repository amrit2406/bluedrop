import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Filter, Clock, CheckCircle, RefreshCw, Settings, Beaker } from 'lucide-react';
import { motion } from 'framer-motion';

const filtrationSteps = [
  {
    step: "01",
    title: "Pre-Filter",
    description: "Removes large particles like sand, dirt, and rust.",
    icon: <Filter />,
    color: "bg-blue-100",
    hoverColor: "hover:shadow-blue-200",
  },
  {
    step: "02",
    title: "Sediment Filter",
    description: "Captures fine particles and enhances clarity.",
    icon: <Clock />,
    color: "bg-yellow-100",
    hoverColor: "hover:shadow-yellow-200",
  },
  {
    step: "03",
    title: "Activated Carbon",
    description: "Eliminates chlorine, odor, and organic impurities.",
    icon: <Beaker />,
    color: "bg-green-100",
    hoverColor: "hover:shadow-green-200",
  },
  {
    step: "04",
    title: "RO Membrane",
    description: "Filters dissolved solids, heavy metals, and salts.",
    icon: <RefreshCw />,
    color: "bg-indigo-100",
    hoverColor: "hover:shadow-indigo-200",
  },
  {
    step: "05",
    title: "UV Sterilization",
    description: "Kills bacteria and viruses for safe consumption.",
    icon: <Settings />,
    color: "bg-purple-100",
    hoverColor: "hover:shadow-purple-200",
  },
  {
    step: "06",
    title: "Mineralizer",
    description: "Adds essential minerals for healthy drinking water.",
    icon: <CheckCircle />,
    color: "bg-pink-100",
    hoverColor: "hover:shadow-pink-200",
  },
];

const FiltrationProcess = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#f9fbfd]">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-4">
          Our Filtration Process
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience our comprehensive 6-stage filtration process that delivers pure and safe drinking water.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtrationSteps.map((step, index) => (
          <motion.div
            key={index}
            className={`relative p-6 bg-white border border-gray-200 rounded-xl ${step.hoverColor} transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`absolute top-6 right-6 text-3xl font-bold text-gray-100`}>
              {step.step}
            </div>
            <div
              className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4 transition-transform duration-300 ${
                hoveredStep === index ? "rotate-12 scale-105" : ""
              }`}
            >
              {React.cloneElement(step.icon, {
                className: `w-8 h-8 text-[#1A365D]`,
              })}
            </div>
            <h3 className="text-xl font-semibold text-[#1A365D] mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
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
    </section>
  );
};

export default FiltrationProcess;
