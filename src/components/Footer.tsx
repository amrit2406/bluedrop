import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Droplet,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1A365D] to-[#0D1F3D] text-white relative overflow-hidden">
      {/* Animated water droplets in background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {[...Array(20)].map((_, i) => (
          <Droplet
            key={i}
            size={Math.random() * 20 + 10}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative">
                <Droplet
                  className="h-8 w-8 text-blue-300 animate-pulse"
                  fill="currentColor"
                />
                <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping"></div>
              </div>
              <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                Blue Drop
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Purifying your world, one drop at a time. Our advanced water
              solutions bring purity to your doorstep.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: "hover:text-blue-400" },
                { icon: Twitter, color: "hover:text-sky-400" },
                { icon: Instagram, color: "hover:text-pink-400" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className={`text-gray-300 ${social.color} transition-all transform hover:-translate-y-1`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Products", "About Us", "Blog", "Contact"].map((link) => (
                <li key={link} className="group">
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="flex items-center text-gray-300 hover:text-white transition-all group-hover:translate-x-1"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-1 opacity-0 group-hover:opacity-100 transition-all"
                    />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2 inline-block">
              Our Solutions
            </h3>
            <ul className="space-y-3">
              {[
                { name: "RO Purifiers", path: "/products" },
                { name: "UV Purifiers", path: "/products" },
                { name: "Commercial", path: "/products" },
                { name: "Smart Filters", path: "/products" },
              ].map((product) => (
                <li key={product.name} className="group">
                  <Link
                    to={product.path}
                    className="flex items-center text-gray-300 hover:text-white transition-all group-hover:translate-x-1"
                  >
                    <Droplet
                      size={14}
                      className="mr-2 text-blue-200 opacity-0 group-hover:opacity-100 transition-all"
                    />
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2 inline-block">
              Stay Connected
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                  <Phone size={16} className="text-blue-300" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    +91 9337073434
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                  <Mail size={16} className="text-blue-300" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    bluedropsrosystems@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                  <MapPin size={16} className="text-blue-300" />
                </div>
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-gray-300">
                    Plot No -500, Balisahi Road, Dhauli Bhubaneswar, Odisha,
                    India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="mt-12 bg-blue-500/10 p-6 rounded-lg backdrop-blur-sm border border-blue-400/30">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest in water purification technology
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded bg-blue-900/30 border border-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white placeholder-blue-200/50"
              />
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-all transform hover:-translate-y-0.5 shadow hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        <div className="border-t border-blue-400/30 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Blue Drop. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div> */}
        </div>
      </div>

      {/* Add this to your global CSS or as a style tag */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
