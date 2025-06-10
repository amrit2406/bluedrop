import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0066CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Since 2010, we've been on a mission to provide clean and safe drinking water 
            to millions of households across the country.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#1A365D]">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading provider of water purification solutions, ensuring every 
                household has access to clean and safe drinking water. We envision a world 
                where water-borne diseases are eliminated through our innovative solutions.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#1A365D]">Our Mission</h2>
              <p className="text-gray-600">
                To deliver cutting-edge water purification technology that meets the highest 
                standards of quality and reliability, while maintaining affordability and 
                providing exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A365D] text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-[#0066CC]" />,
                title: "Customer First",
                description: "We prioritize our customers' needs and satisfaction above all else."
              },
              {
                icon: <Target className="w-12 h-12 text-[#0066CC]" />,
                title: "Excellence",
                description: "We strive for excellence in every product and service we deliver."
              },
              {
                icon: <Heart className="w-12 h-12 text-[#0066CC]" />,
                title: "Social Responsibility",
                description: "We're committed to environmental sustainability and community welfare."
              },
              {
                icon: <Award className="w-12 h-12 text-[#0066CC]" />,
                title: "Innovation",
                description: "We continuously innovate to improve our products and services."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A365D] text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "/team-1.jpg"
              },
              {
                name: "Sarah Johnson",
                role: "Head of Technology",
                image: "/team-2.jpg"
              },
              {
                name: "Michael Chen",
                role: "Head of Operations",
                image: "/team-3.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1A365D]">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;