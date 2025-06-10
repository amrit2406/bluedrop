import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A365D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/water-drop.svg" alt="Blue Drop Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Blue Drop</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing premium water purification solutions for a healthier tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/ro" className="text-gray-300 hover:text-white transition-colors">
                  RO Water Purifiers
                </Link>
              </li>
              <li>
                <Link to="/products/uv" className="text-gray-300 hover:text-white transition-colors">
                  UV Water Purifiers
                </Link>
              </li>
              <li>
                <Link to="/products/commercial" className="text-gray-300 hover:text-white transition-colors">
                  Commercial Solutions
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-gray-300 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <span>info@bluedrop.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>123 Water Street, Crystal City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Blue Drop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;