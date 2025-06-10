import React from 'react';
import { Star, Check } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'BluePure Pro',
      category: 'RO Water Purifier',
      price: '$599',
      image: '/product-1.png',
      features: [
        '7-Stage Purification',
        'Smart LED Display',
        'Auto-Clean System',
        '15L Storage Capacity'
      ]
    },
    {
      id: 2,
      name: 'AquaGuard UV+',
      category: 'UV Water Purifier',
      price: '$399',
      image: '/product-2.png',
      features: [
        'UV Sterilization',
        'Compact Design',
        'Energy Efficient',
        '10L Storage Capacity'
      ]
    },
    {
      id: 3,
      name: 'Commercial Max',
      category: 'Commercial Purifier',
      price: '$1299',
      image: '/product-3.png',
      features: [
        'Industrial Grade Filtration',
        'High Flow Rate',
        'Digital Monitoring',
        '50L Storage Capacity'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#0066CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Premium Water Purifiers
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Discover our range of advanced water purification solutions designed to provide 
            clean and safe drinking water for your specific needs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="aspect-w-4 aspect-h-3 mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A365D]">{product.name}</h3>
                      <p className="text-gray-600">{product.category}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-600">4.8</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-[#0066CC] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#1A365D]">{product.price}</span>
                    <button className="bg-[#0066CC] text-white px-6 py-2 rounded-full hover:bg-[#0052a3] transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#E3F2FD] to-[#F0F9FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A365D] mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect water purification solution for your needs.
          </p>
          <button className="bg-[#0066CC] text-white px-8 py-3 rounded-full hover:bg-[#0052a3] transition-colors">
            Get Expert Advice
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;