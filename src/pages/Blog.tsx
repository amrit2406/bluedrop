import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, ChevronRight, ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  tags: string[];
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Water Quality',
    'Health',
    'Technology',
    'Sustainability',
    'Maintenance'
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Impact of Water Quality on Health",
      excerpt: "Discover how water quality affects your daily health and well-being, from immune system function to cognitive performance.",
      category: "Health",
      date: "Aug 15, 2023",
      readTime: "5 min read",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "/author-1.jpg"
      },
      image: "/blog-1.jpg",
      tags: ["Health", "Water Quality", "Wellness"]
    },
    {
      id: 2,
      title: "Advanced Water Filtration Technologies",
      excerpt: "Explore the latest innovations in water purification technology and how they're shaping the future of clean water.",
      category: "Technology",
      date: "Aug 12, 2023",
      readTime: "7 min read",
      author: {
        name: "Michael Chen",
        avatar: "/author-2.jpg"
      },
      image: "/blog-2.jpg",
      tags: ["Technology", "Innovation", "Filtration"]
    },
    {
      id: 3,
      title: "Sustainable Water Management at Home",
      excerpt: "Learn practical tips for managing water consumption and reducing waste in your household.",
      category: "Sustainability",
      date: "Aug 10, 2023",
      readTime: "4 min read",
      author: {
        name: "Emma Wilson",
        avatar: "/author-3.jpg"
      },
      image: "/blog-3.jpg",
      tags: ["Sustainability", "Tips", "Conservation"]
    },
    {
      id: 4,
      title: "Water Purifier Maintenance Guide",
      excerpt: "Essential maintenance tips to keep your water purifier running efficiently and effectively.",
      category: "Maintenance",
      date: "Aug 8, 2023",
      readTime: "6 min read",
      author: {
        name: "James Miller",
        avatar: "/author-4.jpg"
      },
      image: "/blog-4.jpg",
      tags: ["Maintenance", "Guide", "Tips"]
    },
    {
      id: 5,
      title: "Understanding Water TDS Levels",
      excerpt: "A comprehensive guide to Total Dissolved Solids (TDS) and their impact on water quality.",
      category: "Water Quality",
      date: "Aug 5, 2023",
      readTime: "8 min read",
      author: {
        name: "Dr. Lisa Park",
        avatar: "/author-5.jpg"
      },
      image: "/blog-5.jpg",
      tags: ["Water Quality", "Education", "Science"]
    },
    {
      id: 6,
      title: "Choosing the Right Water Purifier",
      excerpt: "Expert advice on selecting the perfect water purifier for your specific needs and requirements.",
      category: "Technology",
      date: "Aug 3, 2023",
      readTime: "6 min read",
      author: {
        name: "Robert Brown",
        avatar: "/author-6.jpg"
      },
      image: "/blog-6.jpg",
      tags: ["Buying Guide", "Technology", "Tips"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#0066CC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Stay informed about water quality, health, and the latest in water purification technology.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      {/* <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066CC] focus:border-transparent outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#0066CC] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Post */}
      {/* <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/blog/${blogPosts[0].id}`} className="block">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-[#0066CC] px-3 py-1 rounded-full text-sm">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock size={16} className="mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1A365D] mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={blogPosts[0].author.avatar}
                        alt={blogPosts[0].author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-[#1A365D]">{blogPosts[0].author.name}</p>
                        <p className="text-sm text-gray-600">{blogPosts[0].date}</p>
                      </div>
                    </div>
                    <ArrowRight className="text-[#0066CC]" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section> */}

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#0066CC] px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock size={16} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1A365D] mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm text-gray-600">{post.author.name}</span>
                      </div>
                      <ChevronRight className="text-[#0066CC]" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;