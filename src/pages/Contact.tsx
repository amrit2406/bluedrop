import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-[#0066CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help you find 
            the perfect water purification solution.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Phone className="w-8 h-8 text-[#0066CC]" />,
                title: "Phone",
                info: "+1 234 567 890",
                subInfo: "Mon-Fri 9am-6pm"
              },
              {
                icon: <Mail className="w-8 h-8 text-[#0066CC]" />,
                title: "Email",
                info: "info@bluedrop.com",
                subInfo: "24/7 Support"
              },
              {
                icon: <MapPin className="w-8 h-8 text-[#0066CC]" />,
                title: "Address",
                info: "123 Water Street",
                subInfo: "Crystal City, ST 12345"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.info}</p>
                <p className="text-gray-500 text-sm">{item.subInfo}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#1A365D] mb-6 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0066CC] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1628614993790!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;