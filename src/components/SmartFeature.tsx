import React from 'react';
import { Droplet, Zap, Sparkles, Cpu, Wifi, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const SmartFeatures = () => {
  const features = [
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "Auto Filtration",
      description: "Smart sensors trigger cleaning cycles automatically",
      color: "from-blue-500 to-cyan-400",
      techIcons: [<Cpu key="cpu" />, <Wifi key="wifi" />],
      animation: { y: [0, -15, 0], transition: { duration: 3, repeat: Infinity } }
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Energy Efficient",
      description: "Consumes 30% less power with intelligent optimization",
      color: "from-amber-500 to-yellow-400",
      techIcons: [<Smartphone key="phone" />],
      animation: { 
        scale: [1, 1.05, 1],
        transition: { duration: 2, repeat: Infinity } 
      }
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Mineral Retention",
      description: "Keeps essential minerals while removing contaminants",
      color: "from-emerald-500 to-green-400",
      techIcons: [],
      animation: { 
        rotate: [0, 5, -5, 0],
        transition: { duration: 4, repeat: Infinity } 
      }
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-10 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Tech pattern background (simplified) */}
      <div className="absolute inset-0 overflow-hidden opacity-5 bg-grid-blue-500/20"></div>
      
      {/* Floating tech bubble */}
      <motion.div 
        className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-blue-400 opacity-20"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Animated heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center justify-center gap-2 mb-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 }
                }}
                className="w-3 h-3 rounded-full bg-blue-500"
              />
            ))}
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Smart Features
            </span> for Modern Living
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            variants={itemVariants}
          >
            Seamless <span className="font-medium text-blue-500">tech integration</span> to 
            revolutionize your water experience
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              {/* Gradient border */}
              <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${feature.color} opacity-75 blur-md group-hover:opacity-100 transition-all duration-300`}></div>
              
              <motion.div
                className="relative p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)"
                }}
              >
                {/* Animated icon */}
                <motion.div 
                  className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} text-white`}
                  animate={feature.animation}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center mb-4">{feature.description}</p>
                
                {/* Tech indicators */}
                {feature.techIcons.length > 0 && (
                  <div className="mt-auto flex gap-2">
                    {feature.techIcons.map((Icon, i) => (
                      <motion.div
                        key={i}
                        className="p-2 rounded-full bg-gray-100 text-gray-700"
                        whileHover={{ scale: 1.2 }}
                      >
                        {React.cloneElement(Icon, { className: "w-5 h-5" })}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connection line */}
        <motion.div 
          className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default SmartFeatures;