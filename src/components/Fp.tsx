import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Filter,
  Activity,
  Droplet,
  Sun,
  PlusCircle,
  Sparkle,
  ChevronRight
} from 'lucide-react';

const FilP = () => {
  const [hoveredStep, setHoveredStep] = React.useState(null);

  const filtrationSteps = [
    {
      step: '01',
      title: 'Sediment Filtration',
      description: 'Removes large particles like sand and rust',
      icon: <Filter className="w-8 h-8" />,
      color: 'bg-blue-100',
      border: 'border-l-4 border-blue-500',
      hoverColor: 'hover:bg-blue-50',
      animation: { scale: 1.05 }
    },
    {
      step: '02',
      title: 'Carbon Filtration',
      description: 'Eliminates chlorine and organic compounds',
      icon: <Activity className="w-8 h-8" />,
      color: 'bg-teal-100',
      border: 'border-l-4 border-teal-500',
      hoverColor: 'hover:bg-teal-50',
      animation: { rotate: 5 }
    },
    {
      step: '03',
      title: 'Reverse Osmosis',
      description: 'Removes dissolved solids and microorganisms',
      icon: <Droplet className="w-8 h-8" />,
      color: 'bg-cyan-100',
      border: 'border-l-4 border-cyan-500',
      hoverColor: 'hover:bg-cyan-50',
      animation: { y: -5 }
    },
    {
      step: '04',
      title: 'UV Purification',
      description: 'Destroys bacteria and viruses',
      icon: <Sun className="w-8 h-8" />,
      color: 'bg-purple-100',
      border: 'border-l-4 border-purple-500',
      hoverColor: 'hover:bg-purple-50',
      animation: { x: 5 }
    },
    {
      step: '05',
      title: 'Mineral Infusion',
      description: 'Adds essential minerals for better taste',
      icon: <PlusCircle className="w-8 h-8" />,
      color: 'bg-emerald-100',
      border: 'border-l-4 border-emerald-500',
      hoverColor: 'hover:bg-emerald-50',
      animation: { rotate: -5 }
    },
    {
      step: '06',
      title: 'Final Polishing',
      description: 'Ensures crystal clear, great tasting water',
      icon: <Sparkle className="w-8 h-8" />,
      color: 'bg-indigo-100',
      border: 'border-l-4 border-indigo-500',
      hoverColor: 'hover:bg-indigo-50',
      animation: { scale: 1.1 }
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Water droplet decoration */}
      <motion.div 
        className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-blue-200 opacity-10 blur-xl"
        animate={{
          y: [0, -20, 0],
          transition: { duration: 6, repeat: Infinity }
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
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
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Our Advanced Filtration Process
            </h2>
          </motion.div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience our comprehensive <span className="font-semibold text-blue-500">6-stage purification</span> that delivers the purest drinking water
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {filtrationSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.div
                className={`relative p-8 bg-white rounded-xl shadow-md ${step.border} ${step.hoverColor} transition-all duration-300 overflow-hidden`}
                whileHover={{
                  ...step.animation,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
                // onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Animated background glow */}
                <motion.div 
                  className={`absolute -z-10 inset-0 ${step.color.replace('100', '50')} opacity-0`}
                  animate={{
                    opacity: hoveredStep === index ? 0.3 : 0,
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Step Number */}
                <motion.div
                  className={`absolute top-6 right-6 text-3xl font-bold transition-all duration-300 ${
                    hoveredStep === index ? 'text-gray-900' : 'text-gray-200'
                  }`}
                  animate={{
                    scale: hoveredStep === index ? 1.2 : 1
                  }}
                >
                  {step.step}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300`}
                  animate={{
                    rotate: hoveredStep === index ? 12 : 0,
                    scale: hoveredStep === index ? 1.1 : 1
                  }}
                >
                  {React.cloneElement(step.icon, {
                    className: `w-8 h-8 ${step.color.replace('100', '600')}`
                  })}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center"
          >
            <Link
              to="/filtration-process"
              className="inline-flex items-center text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-200 transition-all"
            >
              Explore Full Filtration Process
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated dots */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-2 overflow-hidden z-0">
        <motion.div
          className="flex justify-center gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 rounded-full bg-blue-300"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FilP;
