import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Droplet, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const blogData = [
  {
    title: 'Importance of Clean Water',
    description: 'Learn why pure water is essential for your family’s health and how to ensure it.',
    image: '/b1.webp',
    icon: <Droplet className="w-6 h-6" />,
    color: 'bg-blue-100',
    accent: 'text-blue-600'
  },
  {
    title: 'Smart Filtration Tech',
    description: 'Explore how smart technology is changing the way we purify water at home.',
    image: '/b2.webp',
    icon: <PenTool className="w-6 h-6" />,
    color: 'bg-cyan-100',
    accent: 'text-cyan-600'
  },
  {
    title: 'Minerals & Health',
    description: 'Understand how essential minerals in water benefit your daily health and energy.',
    image: '/b3.webp',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-teal-100',
    accent: 'text-teal-600'
  },
];

const LatestBlogs = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-200 opacity-10 blur-xl"
        animate={{
          y: [0, -20, 0],
          transition: { duration: 8, repeat: Infinity }
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-cyan-200 opacity-10 blur-xl"
        animate={{
          y: [0, 20, 0],
          transition: { duration: 10, repeat: Infinity, delay: 2 }
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 }
                }}
                className="w-2 h-2 rounded-full bg-blue-500"
              />
            ))}
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Latest Insights
            </span> from BlueDrop
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Stay informed with <span className="font-medium text-blue-500">expert tips</span>, updates, and water health insights
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
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
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.div
                className="group relative h-full"
                whileHover="hover"
                initial="rest"
              >
                <motion.div 
                  className={`absolute -inset-0.5 rounded-2xl ${
                    index === 0 ? '' : blog.color.replace('100', '500')
                  } opacity-0 blur-md group-hover:opacity-30 transition-all duration-300`}
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 0.3 }
                  }}
                />
                
                <motion.div
                  className={`relative p-6 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col ${blog.color} bg-opacity-20`}
                  variants={{
                    rest: { y: 0 },
                    hover: { y: -8 }
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div 
                    className="h-48 rounded-xl overflow-hidden mb-6 relative"
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      className={`absolute inset-0 ${
                        index === 0 ? '' : blog.color.replace('100', '500')
                      } opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                  </motion.div>
                  
                  <motion.div
                    className="flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 ${blog.color} rounded-full flex items-center justify-center mb-4`}>
                      {React.cloneElement(blog.icon, { className: `w-6 h-6 ${blog.accent}` })}
                    </div>
                    
                    <h3 className={`text-xl font-bold text-gray-800 mb-3 group-hover:${blog.accent} transition-colors duration-300`}>
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">{blog.description}</p>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="mt-auto"
                    >
                      <Link
                        to={`/blog/${index + 1}`}
                        className={`inline-flex items-center font-medium ${blog.accent} hover:underline`}
                      >
                        Read article <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    className={`absolute bottom-4 right-4 ${blog.accent} opacity-20`}
                    animate={{
                      y: [0, -5, 0],
                      transition: { duration: 4, repeat: Infinity, delay: index * 0.5 }
                    }}
                  >
                    <Droplet className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

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
              to="/blog"
              className="inline-flex items-center text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-200 transition-all"
            >
              View All Articles
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlogs;
