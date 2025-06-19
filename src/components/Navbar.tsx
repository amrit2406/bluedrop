import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Droplet } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
    message: ''
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const handleSubmitQuote = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    // Handle form submission here (API call, etc.)
    console.log('Quote submitted:', formData);
    setShowQuoteModal(false);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      requirement: '',
      message: ''
    });
  };

  const navItems = ['Home', 'About', 'Products', 'Filtration Process', 'Blog', 'Contact'];

  return (
    <>
      {/* Top Header Bar */}
      <motion.div 
        className="bg-gradient-to-r from-blue-50 to-blue-100 hidden sm:block border-b border-blue-200 text-sm text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-6">
            <motion.div 
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              whileHover={{ x: 2 }}
            >
              <Phone size={14} className="text-blue-600" />
              <span>+91 9337073434</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              whileHover={{ x: 2 }}
            >
              <Mail size={14} className="text-blue-600" />
              <span>bluedropsrosystems@gmail.com</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              whileHover={{ x: 2 }}
            >
              <MapPin size={14} className="text-blue-600" />
              <span>Plot No -500, Balisahi Road,Bhubaneswar, Odisha</span>
            </motion.div>
          </div>

          {/* Right: Social Media */}
          <motion.div className="flex items-center space-x-4">
            {[
              { icon: <Facebook size={16} />, color: 'hover:text-blue-600' },
              { icon: <Instagram size={16} />, color: 'hover:text-pink-600' },
              { icon: <Twitter size={16} />, color: 'hover:text-sky-500' },
              { icon: <Linkedin size={16} />, color: 'hover:text-blue-700' }
            ].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className={`${item.color} transition-colors`}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav 
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/bd1.svg" alt="Blue Drop Logo" className="w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] md:w-[150px] md:h-[75px]" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-[16px] font-medium">
              {navItems.map((label, idx) => {
                const path = label === 'Home' ? '/' : `/${label.toLowerCase().replace(/ /g, '-')}`;
                const isActive = location.pathname === path;
                
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={path}
                      className={`relative ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300`}
                    >
                      {label}
                      {isActive && (
                        <motion.span 
                          className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600"
                          layoutId="navUnderline"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 14px rgba(0, 103, 204, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full shadow-md flex items-center gap-1"
                onClick={() => setShowQuoteModal(true)}
              >
                <Droplet size={16} />
                Get Quote
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <motion.div 
              className="md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-700 p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white overflow-hidden shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {navItems.map((label, idx) => {
                  const path = label === 'Home' ? '/' : `/${label.toLowerCase().replace(/ /g, '-')}`;
                  const isActive = location.pathname === path;
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={path}
                        className={`block px-4 py-3 rounded-lg ${isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-blue-50'} transition-colors`}
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-md"
                  onClick={() => {
                    setIsOpen(false);
                    setShowQuoteModal(true);
                  }}
                >
                  <Droplet size={16} />
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Quote Request Modal */}
      <AnimatePresence>
        {showQuoteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Request a Quote</h2>
                  <button
                    onClick={() => setShowQuoteModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmitQuote} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-1">
                      Water Filter Requirement*
                    </label>
                    <select
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    Submit Request
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;