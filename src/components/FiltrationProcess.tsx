import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Droplet, Zap, Shield, Sparkles, Check, ArrowRight, ArrowLeft } from 'lucide-react';

const FiltrationProcess = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: <Filter className="w-12 h-12" />,
      title: "Pre-Filtration",
      description: "The first stage removes larger particles like sediment, rust, and debris through a high-quality sediment filter.",
      details: [
        "Removes particles larger than 5 microns",
        "Extends life of subsequent filters",
        "Prevents clogging of RO membrane",
        "Improves overall efficiency"
      ],
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      icon: <Droplet className="w-12 h-12" />,
      title: "Carbon Filtration",
      description: "Activated carbon filters remove chlorine, bad taste, odors, and organic compounds from the water.",
      details: [
        "Eliminates chlorine and chloramines",
        "Removes volatile organic compounds",
        "Improves taste and odor",
        "Protects RO membrane from chlorine damage"
      ],
      color: "bg-teal-100 text-teal-600"
    },
    {
      id: 3,
      icon: <Shield className="w-12 h-12" />,
      title: "RO Membrane",
      description: "The reverse osmosis membrane removes dissolved solids, including harmful contaminants and impurities.",
      details: [
        "Removes up to 99% of dissolved solids",
        "Eliminates heavy metals",
        "Removes fluoride and arsenic",
        "Filters particles as small as 0.0001 microns"
      ],
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      icon: <Zap className="w-12 h-12" />,
      title: "UV Purification",
      description: "Ultraviolet light eliminates bacteria, viruses, and other microorganisms from the filtered water.",
      details: [
        "Kills 99.99% of harmful bacteria",
        "Eliminates viruses and parasites",
        "Chemical-free disinfection",
        "Maintains water's natural taste"
      ],
      color: "bg-amber-100 text-amber-600"
    },
    {
      id: 5,
      icon: <Sparkles className="w-12 h-12" />,
      title: "Mineral Addition",
      description: "Essential minerals are added back to the water to improve taste and provide health benefits.",
      details: [
        "Adds calcium and magnesium",
        "Balances pH levels",
        "Improves water taste",
        "Provides essential minerals"
      ],
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-24 overflow-hidden">
        {/* Water droplet decorations */}
        <motion.div 
          className="absolute top-20 left-20 w-16 h-16 rounded-full bg-white opacity-20"
          animate={{
            y: [0, -20, 0],
            transition: { duration: 6, repeat: Infinity }
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-cyan-300 opacity-15"
          animate={{
            y: [0, 20, 0],
            transition: { duration: 8, repeat: Infinity, delay: 2 }
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
              Advanced <span className="text-cyan-200">Filtration</span> Process
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 max-w-2xl mx-auto text-lg"
          >
            Discover how our 5-stage purification system delivers the purest drinking water
          </motion.p>
        </div>
      </section>

      {/* Process Visualization */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Progress Bar */}
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(activeStep / steps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                ></motion.div>
              </div>
              <div className="flex justify-between">
                {steps.map((step) => (
                  <motion.button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                      step.id <= activeStep 
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg' 
                        : 'bg-gray-200 text-gray-500'
                    } transition-all duration-300`}
                  >
                    {step.id}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Current Step Display */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-32 h-32 rounded-full ${steps[activeStep-1].color} flex items-center justify-center mb-8 shadow-lg`}
                >
                  {React.cloneElement(steps[activeStep-1].icon, { className: "w-16 h-16" })}
                </motion.div>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  Stage {activeStep}
                </h2>
                <h3 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
                  {steps[activeStep-1].title}
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 text-center"
                >
                  {steps[activeStep-1].description}
                </motion.p>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <Check className="w-6 h-6 text-green-500 mr-3" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {steps[activeStep-1].details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start text-gray-700"
                      >
                        <div className={`w-6 h-6 rounded-full ${steps[activeStep-1].color} bg-opacity-30 flex items-center justify-center mr-4 mt-1`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
                  <motion.button
                    onClick={handlePrev}
                    disabled={activeStep === 1}
                    whileHover={{ scale: activeStep === 1 ? 1 : 1.05 }}
                    whileTap={{ scale: activeStep === 1 ? 1 : 0.95 }}
                    className={`flex items-center px-6 py-3 rounded-full ${
                      activeStep === 1
                        ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                        : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                    } transition-colors`}
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Previous
                  </motion.button>
                  
                  <motion.button
                    onClick={handleNext}
                    disabled={activeStep === steps.length}
                    whileHover={{ scale: activeStep === steps.length ? 1 : 1.05 }}
                    whileTap={{ scale: activeStep === steps.length ? 1 : 0.95 }}
                    className={`flex items-center px-6 py-3 rounded-full ${
                      activeStep === steps.length
                        ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                        : 'text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg'
                    } transition-all`}
                  >
                    Next
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Water Flow Visualization */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-12">
            How Water Flows Through Our System
          </h2>
          <div className="relative h-48">
            {/* Water flow line */}
            <div className="absolute inset-y-0 left-1/2 w-1 bg-gradient-to-b from-blue-200 to-cyan-200 transform -translate-x-1/2"></div>
            
            {/* Steps indicators */}
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`absolute left-1/2 transform -translate-x-1/2 ${
                  index === 0 ? 'top-0' : 
                  index === steps.length - 1 ? 'bottom-0' : 
                  `top-${(index / (steps.length - 1)) * 100}%`
                }`}
                style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.id <= activeStep ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white' : 'bg-white border-2 border-blue-200 text-blue-200'
                } shadow-lg`}>
                  {step.id}
                </div>
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0 ? 'right-8' : 'left-8'
                } w-48 text-sm font-medium ${
                  step.id <= activeStep ? 'text-gray-800' : 'text-gray-400'
                }`}>
                  {step.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiltrationProcess;