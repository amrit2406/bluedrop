import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-blue-50 hidden sm:block border-b md-block border-blue-100 text-sm text-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1">
              <Phone size={14} className="text-blue-600" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} className="text-blue-600" />
              <span>info@bluedrops.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-blue-600" />
              <span>Bhubaneswar, India</span>
            </div>
          </div>

          {/* Right: Social Media */}
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-blue-600 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="hover:text-sky-500 transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/bd2.png" alt="Blue Drop Logo" className="h-10 w-10 drop-shadow" />
              <span className="text-3xl font-extrabold text-blue-700 tracking-wide">BLUE DROPS</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-[16px] font-medium">
              {['Home', 'About', 'Products', 'Filtration Process', 'Blog', 'Contact'].map((label, idx) => {
                const path = '/' + label.toLowerCase().replace(/ /g, '-');
                return (
                  <Link
                    key={idx}
                    to={label === 'Home' ? '/' : path}
                    className="relative text-gray-700 hover:text-blue-700 transition-colors duration-300 group"
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
                  </Link>
                );
              })}
              <button className="ml-4 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors shadow-md">
                Get Quote
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-700 transition-transform duration-300"
              >
                {isOpen ? <X size={28} className="transition-transform rotate-90" /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-md transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-3 text-sm font-medium">
            {['Home', 'Products', 'Filtration Process', 'Blog', 'About', 'Contact'].map((label, idx) => {
              const path = '/' + label.toLowerCase().replace(/ /g, '-');
              return (
                <Link
                  key={idx}
                  to={label === 'Home' ? '/' : path}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <button className="w-full text-left px-3 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
