import React, { useState } from 'react';
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#0066CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Filtration Process
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Discover how our advanced 5-stage filtration process delivers pure, 
            clean drinking water to your home.
          </p>
        </div>
      </section>

      {/* Process Visualization */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="relative">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${(activeStep / steps.length) * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#0066CC] transition-all duration-500"
                ></div>
              </div>
              <div className="flex justify-between">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.id <= activeStep ? 'bg-[#0066CC] text-white' : 'bg-gray-200 text-gray-500'
                    } transition-colors duration-300`}
                  >
                    {step.id}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Current Step Display */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`transition-opacity duration-500 ${
                  step.id === activeStep ? 'opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="md:flex items-start space-x-8">
                  <div className="md:w-1/3">
                    <div className="bg-[#E3F2FD] w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                      {React.cloneElement(step.icon, {
                        className: "w-12 h-12 text-[#0066CC]"
                      })}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold text-[#1A365D] mb-4">
                      Stage {step.id}: {step.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      {step.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#1A365D] mb-4">
                        Key Benefits:
                      </h3>
                      <ul className="space-y-3">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <Check className="w-5 h-5 text-[#0066CC] mr-3" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={handlePrev}
                disabled={activeStep === 1}
                className={`flex items-center ${
                  activeStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#0066CC] hover:underline'
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous Stage
              </button>
              <button
                onClick={handleNext}
                disabled={activeStep === steps.length}
                className={`flex items-center ${
                  activeStep === steps.length
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#0066CC] hover:underline'
                }`}
              >
                Next Stage
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiltrationProcess;