import { motion } from "framer-motion";
import { Droplet, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white opacity-10 blur-xl"
        animate={{
          y: [0, -20, 0],
          transition: { duration: 8, repeat: Infinity },
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-cyan-300 opacity-10 blur-xl"
        animate={{
          y: [0, 20, 0],
          transition: { duration: 10, repeat: Infinity, delay: 2 },
        }}
      />

      {/* Water droplet pattern */}
      <div className="absolute inset-0 opacity-10 pattern-dots pattern-white pattern-size-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Droplet className="w-8 h-8 text-white mr-2" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience{" "}
              <span className="text-cyan-200">Pure Water</span>?
            </h2>
          </motion.div>

          <motion.p
            className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join{" "}
            <span className="font-semibold">
              thousands of satisfied customers
            </span>{" "}
            who trust BlueDrop for their water purification needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Link to="/contact">
              {" "}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center group shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Today
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                    transition: { duration: 2, repeat: Infinity },
                  }}
                  className="ml-2"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating water droplets */}
          <motion.div
            className="absolute bottom-20 left-1/4 w-6 h-6 rounded-full bg-white opacity-30"
            animate={{
              y: [0, -15, 0],
              transition: { duration: 4, repeat: Infinity },
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-cyan-200 opacity-30"
            animate={{
              y: [0, -10, 0],
              transition: { duration: 5, repeat: Infinity, delay: 1 },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
