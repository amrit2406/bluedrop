import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, Heart, MessageCircle, Bookmark } from 'lucide-react';

const BlogDetails = () => {
  const { id } = useParams();

  // Mock data - In a real app, fetch this based on the ID
  const post = {
    title: "The Impact of Water Quality on Health",
    excerpt: "Discover how water quality affects your daily health and well-being...",
    content: `
      <p class="mb-4">Pure water is essential for maintaining good health and well-being. The quality of water we consume daily has a direct impact on our physical health, cognitive function, and overall quality of life.</p>
      
      <h2 class="text-2xl font-bold text-dark mb-4 mt-8">The Importance of Clean Water</h2>
      <p class="mb-4">Access to clean, safe drinking water is a fundamental human right. However, many people around the world still lack access to properly treated water. This can lead to various health issues and complications.</p>
      
      <h3 class="text-xl font-bold text-dark mb-4 mt-6">Common Water Contaminants</h3>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Heavy metals (lead, mercury, arsenic)</li>
        <li class="mb-2">Microorganisms (bacteria, viruses, parasites)</li>
        <li class="mb-2">Chemical pollutants</li>
        <li class="mb-2">Agricultural runoff</li>
      </ul>
      
      <blockquote class="border-l-4 border-primary pl-4 italic my-6">
        "Water is the driving force of all nature." - Leonardo da Vinci
      </blockquote>
    `,
    category: "Health",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "/author-avatar.jpg",
      role: "Water Quality Expert"
    },
    date: "Aug 15, 2023",
    image: "/blog-featured-1.jpg",
    readTime: "5 min read",
    tags: ["Water Quality", "Health", "Wellness", "Hydration"],
    relatedPosts: [
      {
        id: 2,
        title: "Understanding Water Filtration Methods",
        image: "/blog-2.jpg",
        date: "Aug 10, 2023"
      },
      {
        id: 3,
        title: "Benefits of Mineral Water",
        image: "/blog-3.jpg",
        date: "Aug 8, 2023"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-4 animate-fade-in">
              <span className="bg-primary px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 animate-slide-up">
              {post.title}
            </h1>
            <p className="text-lg text-white/90 animate-slide-up delay-100">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Author Info */}
        <div className="flex items-center space-x-4 mb-8 p-6 bg-white rounded-xl shadow-lg animate-scale-up">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-dark">{post.author.name}</h3>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-light text-primary px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              <Tag size={14} className="inline mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Social Share & Actions */}
        <div className="flex items-center justify-between mb-12 p-4 bg-white rounded-xl shadow-lg">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Heart size={20} />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <MessageCircle size={20} />
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
              <Bookmark size={20} />
              <span>Save</span>
            </button>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full hover:bg-light transition-colors">
              <Facebook size={20} className="text-[#1877F2]" />
            </button>
            <button className="p-2 rounded-full hover:bg-light transition-colors">
              <Twitter size={20} className="text-[#1DA1F2]" />
            </button>
            <button className="p-2 rounded-full hover:bg-light transition-colors">
              <Linkedin size={20} className="text-[#0A66C2]" />
            </button>
            <button className="p-2 rounded-full hover:bg-light transition-colors">
              <Share2 size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-dark mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {post.relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-dark group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{relatedPost.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;