import React from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  User,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Heart,
  MessageCircle,
  Bookmark,
} from "lucide-react";

// ✅ Blog data (You can later move this to a separate file)
const blogPosts = [
  {
    id: "1",
    title: "The Impact of Water Quality on Health",
    excerpt:
      "Discover how water quality affects your daily health and well-being...",
    content: `
      <p class="mb-4">Pure water is essential for maintaining good health and well-being. Every cell in the human body requires water to function optimally. Impurities in water can lead to numerous health issues, ranging from mild stomach discomfort to severe diseases.</p>

      <h2 class="text-2xl font-bold text-dark mb-4 mt-8">The Importance of Clean Water</h2>
      <p class="mb-4">Access to clean, safe drinking water is a fundamental human right. Unfortunately, millions of people globally still suffer from the lack of it. Clean water helps in digestion, absorption of nutrients, and the removal of toxins from the body.</p>

      <h3 class="text-xl font-bold text-dark mb-4 mt-6">Common Water Contaminants</h3>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Heavy metals (lead, mercury, arsenic) – known to cause neurological and developmental issues</li>
        <li class="mb-2">Microorganisms (bacteria, viruses, parasites) – responsible for diseases like cholera, dysentery, and typhoid</li>
        <li class="mb-2">Chemical pollutants – including pesticides and industrial waste that disrupt endocrine functions</li>
        <li class="mb-2">Agricultural runoff – introduces nitrates and phosphates that can affect infant health and ecosystem balance</li>
      </ul>

      <h3 class="text-xl font-bold text-dark mb-4 mt-6">Health Implications of Poor Water Quality</h3>
      <p class="mb-4">Consuming contaminated water can lead to short- and long-term health problems such as:</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Gastrointestinal infections</li>
        <li class="mb-2">Skin diseases and rashes</li>
        <li class="mb-2">Reproductive problems and birth defects</li>
        <li class="mb-2">Chronic illnesses such as cancer and kidney damage</li>
      </ul>

      <blockquote class="border-l-4 border-primary pl-4 italic my-6">
        "Water is the driving force of all nature." - Leonardo da Vinci
      </blockquote>

      <h3 class="text-xl font-bold text-dark mb-4 mt-6">Preventive Measures for Safe Drinking Water</h3>
      <p class="mb-4">To ensure your family drinks clean water:</p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">Use a reliable water purification system</li>
        <li class="mb-2">Regularly test water quality, especially in areas relying on groundwater</li>
        <li class="mb-2">Store water in clean, sealed containers</li>
        <li class="mb-2">Avoid using old plumbing systems that may leach lead</li>
      </ul>

      <h3 class="text-xl font-bold text-dark mb-4 mt-6">How BlueDrop Helps</h3>
      <p class="mb-4">At BlueDrop, we provide advanced multi-stage filtration systems that remove up to 99.99% of harmful contaminants. Our certified technology ensures your drinking water is not just safe but healthy. Experience peace of mind knowing your water is protected by BlueDrop.</p>
      `,
    image: "/b1.webp",
    readTime: "5 min read",
    tags: ["Water Quality", "Health", "Wellness", "Hydration"],
    relatedPosts: [
      {
        id: "2",
        title: "Understanding Water Filtration Methods",
        image: "/b3d.png",
      },
      {
        id: "3",
        title: "Benefits of Mineral Water",
        image: "/b3.webp",
      },
    ],
  },
  {
    id: "2",
    title: "Understanding Water Filtration Methods",
    excerpt:
      "Explore the different techniques used to filter water and their benefits.",
    content: `
        <p class="mb-4">Water filtration is the process of removing impurities, contaminants, and unwanted substances from water to make it safe and healthy for consumption. Whether it's for drinking, cooking, or industrial use, effective filtration plays a crucial role in ensuring water quality.</p>

        <h2 class="text-2xl font-bold text-dark mb-4 mt-8">Why Filtration Matters</h2>
        <p class="mb-4">Filtration eliminates harmful substances like chlorine, sediments, bacteria, and heavy metals from water. These contaminants can affect the taste, odor, and safety of the water, leading to potential health risks if left untreated.</p>

        <h3 class="text-xl font-bold text-dark mb-4 mt-6">Types of Filtration Methods</h3>
        <ul class="list-disc pl-6 mb-6">
          <li class="mb-2"><strong>Activated Carbon:</strong> Removes chlorine, organic compounds, and unpleasant tastes and odors. It’s one of the most common household filtration techniques.</li>
          <li class="mb-2"><strong>Reverse Osmosis (RO):</strong> Uses a semi-permeable membrane to remove dissolved solids, heavy metals, and other particles. Ideal for areas with hard or heavily contaminated water.</li>
          <li class="mb-2"><strong>UV Filtration:</strong> Utilizes ultraviolet light to kill bacteria, viruses, and pathogens without adding chemicals. Often used in conjunction with other filters.</li>
          <li class="mb-2"><strong>Ceramic Filters:</strong> Porous ceramic materials block dirt, debris, and bacteria while allowing water to pass through. Common in gravity-based systems.</li>
        </ul>

        <h3 class="text-xl font-bold text-dark mb-4 mt-6">Choosing the Right Method</h3>
        <p class="mb-4">Each filtration technique serves a specific purpose. For example, activated carbon is excellent for improving taste, while RO systems are more effective at eliminating total dissolved solids. A combination of these methods often yields the best results.</p>

        <h3 class="text-xl font-bold text-dark mb-4 mt-6">Filtration vs. Purification</h3>
        <p class="mb-4">While both processes aim to make water safe, <strong>filtration</strong> focuses on removing physical particles and some chemicals, whereas <strong>purification</strong> may include chemical treatments or UV exposure to kill microorganisms.</p>

        <blockquote class="border-l-4 border-primary pl-4 italic my-6">
          "Thousands have lived without love, not one without water." – W. H. Auden
        </blockquote>

        <h3 class="text-xl font-bold text-dark mb-4 mt-6">Benefits of Using Home Filtration Systems</h3>
        <ul class="list-disc pl-6 mb-6">
          <li class="mb-2">Improved water taste and clarity</li>
          <li class="mb-2">Reduced exposure to harmful contaminants</li>
          <li class="mb-2">Cost-effective compared to bottled water</li>
          <li class="mb-2">Eco-friendly with less plastic usage</li>
        </ul>

        <h3 class="text-xl font-bold text-dark mb-4 mt-6">How BlueDrop Delivers Superior Filtration</h3>
        <p class="mb-4">BlueDrop systems combine RO, UV, and activated carbon technologies to deliver crystal-clear, safe, and great-tasting water. Our intelligent multi-stage design ensures maximum purification without compromising essential minerals.</p>

        <p class="mb-4">Whether you live in a city with municipal water or in a rural area relying on groundwater, our customizable solutions are built to meet your specific needs.</p>
      `,
    image: "/b3d.png",
    readTime: "4 min read",
    tags: ["Filtration", "Technology", "Water Purifier"],
    relatedPosts: [
      {
        id: "1",
        title: "The Impact of Water Quality on Health",
        image: "/b1.webp",
      },
      {
        id: "3",
        title: "Benefits of Mineral Water",
        image: "/b3.webp",
      },
    ],
  },
  {
    id: "3",
    title: "Benefits of Mineral Water",
    excerpt: "Understand how mineral-rich water can contribute to your health.",
    content: `
        <p class="mb-4">Mineral water is water that naturally contains essential minerals such as calcium, magnesium, potassium, and sodium. These minerals are not only vital for hydration but also play a significant role in maintaining overall health and well-being.</p>
        
        <h2 class="text-2xl font-bold text-dark mb-4 mt-8">Why Mineral Water?</h2>
        <p class="mb-4">Unlike regular purified water, mineral water is sourced from natural springs and is rich in nutrients that are beneficial to the human body. These minerals are absorbed during the water's journey through rocks and soil, making it a naturally enriched source of hydration.</p>
        
        <h3 class="text-xl font-bold text-dark mb-4 mt-6">Key Health Benefits</h3>
        <ul class="list-disc pl-6 mb-6">
          <li class="mb-2"><strong>Improves Digestion:</strong> Magnesium in mineral water can aid bowel movement and prevent constipation.</li>
          <li class="mb-2"><strong>Strengthens Bones:</strong> Calcium supports bone density and helps prevent osteoporosis.</li>
          <li class="mb-2"><strong>Boosts Metabolism:</strong> Minerals like bicarbonate can help balance the body's pH and support metabolic function.</li>
          <li class="mb-2"><strong>Replenishes Electrolytes:</strong> Ideal for rehydration after exercise or heat exposure.</li>
        </ul>
        
        <h3 class="text-xl font-bold text-dark mb-4 mt-6">Natural vs. Artificially Mineralized Water</h3>
        <p class="mb-4">Natural mineral water is collected directly from underground sources and contains minerals in their natural form. Artificially mineralized water, on the other hand, has minerals added during processing. While both are safe to drink, natural mineral water is considered more beneficial due to its organic composition.</p>
        
        <h3 class="text-xl font-bold text-dark mb-4 mt-6">When to Choose Mineral Water</h3>
        <p class="mb-4">Mineral water is especially beneficial for:</p>
        <ul class="list-disc pl-6 mb-6">
          <li class="mb-2">People with mineral deficiencies</li>
          <li class="mb-2">Athletes and active individuals needing electrolyte replenishment</li>
          <li class="mb-2">Individuals seeking a healthy, natural hydration option</li>
        </ul>
        
        <blockquote class="border-l-4 border-primary pl-4 italic my-6">
          "Drinking mineral water is like giving your body a daily supplement — naturally." – Health Experts
        </blockquote>
        
        <h3 class="text-xl font-bold text-dark mb-4 mt-6">BlueDrop’s Approach to Mineral Enrichment</h3>
        <p class="mb-4">At BlueDrop, we believe hydration should also be nourishing. Our advanced purification systems retain or reintroduce essential minerals to ensure every sip supports your health. With our mineral boost technology, you get the best of both worlds — purity and nourishment.</p>
        
        <p class="mb-4">Make the switch to mineral water today and experience hydration that works for your body, not just your thirst.</p>
      `,

    image: "/b3.webp",
    readTime: "3 min read",
    tags: ["Mineral Water", "Wellness", "Health"],
    relatedPosts: [
      {
        id: "1",
        title: "The Impact of Water Quality on Health",
        image: "/b1.webp",
      },
      {
        id: "2",
        title: "Understanding Water Filtration Methods",
        image: "/b3d.png",
      },
    ],
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((item) => item.id === id);

  if (!post) {
    return <div className="p-10 text-red-600">Blog not found</div>;
  }

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
            {/* <div className="flex items-center space-x-4 mb-4">
              <span className="bg-primary px-3 py-1 rounded-full text-sm">{post.category}</span>
              <div className="flex items-center"><Calendar size={16} className="mr-2" />{post.date}</div>
              <div className="flex items-center"><User size={16} className="mr-2" />{post.readTime}</div>
            </div> */}
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-white/90">{post.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Author Info */}
        {/* <div className="flex items-center space-x-4 mb-8 p-6 bg-white rounded-xl shadow-lg">
          <img src={post.author.avatar} alt={post.author.name} className="w-16 h-16 rounded-full" />
          <div>
            <h3 className="font-semibold text-dark">{post.author.name}</h3>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </div> */}

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div
            className="prose max-w-none"
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
          <h2 className="text-2xl font-bold text-dark mb-6">
            Related Articles
          </h2>
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
                  {/* <p className="text-gray-600 text-sm mt-2">{relatedPost.date}</p> */}
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
