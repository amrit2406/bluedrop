import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Droplet, BookOpen, PenTool } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  icon: JSX.Element;
  color: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Importance of Clean Water",
      excerpt: "Learn why pure water is essential for your family’s health and how to ensure it.",
      image: "/b1.webp",
      icon: <Droplet className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Smart Filtration Tech",
      excerpt: "Learn how proper hydration with clean water can boost your brain function and productivity.",
      image: "/b2.webp",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 3,
      title: "Minerals & Health",
      excerpt: "Understand how essential minerals in water benefit your daily health and energy.",
      image: "/b3.webp",
      icon: <PenTool className="w-6 h-6" />,
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-24 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-16 h-16 rounded-full bg-white opacity-20"
          animate={{ y: [0, -20, 0], transition: { duration: 6, repeat: Infinity } }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-cyan-300 opacity-15"
          animate={{ y: [0, 20, 0], transition: { duration: 8, repeat: Infinity, delay: 2 } }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <BookOpen className="w-8 h-8 text-white mr-2" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Water <span className="text-cyan-200">Wisdom</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/90 max-w-2xl mx-auto text-lg"
          >
            Insights on water health, purification technology, and sustainable living from our experts.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-full ${post.color} flex items-center justify-center mr-3`}>
                          {post.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Want More Water Insights?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest articles and water health tips.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 103, 204, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full shadow-lg flex items-center mx-auto"
            >
              Subscribe Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
