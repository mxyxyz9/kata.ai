'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Tag, Search, ArrowRight, Heart, Share2, MessageCircle, BookOpen, Coffee, Star, Candy, Sparkles, Mail, Gift } from 'lucide-react';

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Chocolate Making: From Bean to Bar",
      excerpt: "Discover the fascinating journey of chocolate from cacao bean to the delicious bars we all love.",
      content: "Chocolate making is an ancient art that combines science, skill, and passion. The process begins with harvesting cacao pods, which contain the precious beans that will eventually become chocolate. These beans undergo fermentation, drying, roasting, and grinding before being transformed into the smooth, velvety chocolate we know and love. At Sweet Delights, we source our cacao beans from sustainable farms around the world, ensuring both quality and ethical production. Our master chocolatiers then craft each batch with precision and care, creating unique flavor profiles that tell the story of their origin.",
      author: "Sarah Johnson",
      authorRole: "Master Chocolatier",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "chocolate",
      tags: ["chocolate", "craftsmanship", "process", "sustainability"],
      image: "/images/blog/chocolate-making.jpg",
      featured: true,
      likes: 142,
      comments: 23
    },
    {
      id: 2,
      title: "5 Sweet Trends to Watch in 2024",
      excerpt: "Explore the latest confectionery trends that are taking the sweet world by storm this year.",
      content: "The confectionery world is constantly evolving, with new trends emerging each year. In 2024, we're seeing a rise in plant-based sweets, exotic flavor combinations, and artisanal craftsmanship. Consumers are becoming more conscious about ingredients, seeking treats that are both delicious and responsibly made. Functional sweets with added health benefits are also gaining popularity, as are nostalgic flavors that bring back childhood memories. At Sweet Delights, we're embracing these trends while staying true to our commitment to quality and innovation.",
      author: "Michael Chen",
      authorRole: "Head Pastry Chef",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "trends",
      tags: ["trends", "2024", "innovation", "flavors"],
      image: "/images/blog/sweet-trends.jpg",
      featured: true,
      likes: 98,
      comments: 15
    },
    {
      id: 3,
      title: "The Perfect Pairing: Coffee and Sweets",
      excerpt: "Learn how to perfectly pair your favorite coffees with our artisanal sweet treats.",
      content: "The marriage of coffee and sweets is a match made in heaven. The key to perfect pairing lies in understanding flavor profiles and how they complement each other. Rich, bold coffees pair beautifully with chocolate-based treats, while lighter roasts work well with fruit-flavored sweets. The temperature and brewing method also play crucial roles in the pairing experience. We've spent countless hours experimenting with different combinations to create the ultimate coffee and sweet pairings for our customers. Whether you prefer espresso, cappuccino, or cold brew, there's a perfect sweet companion waiting for you.",
      author: "Emma Rodriguez",
      authorRole: "Sugar Artist",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "pairing",
      tags: ["coffee", "pairing", "flavors", "tips"],
      image: "/images/blog/coffee-pairing.jpg",
      featured: false,
      likes: 87,
      comments: 19
    },
    {
      id: 4,
      title: "Behind the Scenes: Creating Our Signature Truffles",
      excerpt: "Get an exclusive look at how our famous signature truffles are crafted with love and precision.",
      content: "Our signature truffles are the crown jewels of Sweet Delights. Each truffle begins with selecting the finest ingredients - premium chocolate, fresh cream, and natural flavorings. The ganache is carefully prepared and allowed to set before being hand-rolled into perfect spheres. Each truffle is then coated with a thin layer of chocolate and decorated with unique designs that reflect their flavors. The final step involves packaging them in our elegant boxes, ready to be enjoyed or gifted. The entire process requires patience, skill, and attention to detail that our customers have come to expect from us.",
      author: "David Kim",
      authorRole: "Quality Control Manager",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "behind-scenes",
      tags: ["truffles", "craftsmanship", "process", "signature"],
      image: "/images/blog/truffle-making.jpg",
      featured: false,
      likes: 156,
      comments: 31
    },
    {
      id: 5,
      title: "Sweet Gift Ideas for Every Occasion",
      excerpt: "Find the perfect sweet gift for birthdays, anniversaries, holidays, and corporate events.",
      content: "Giving sweets as gifts is a timeless tradition that brings joy to both the giver and receiver. When selecting sweet gifts, consider the recipient's preferences, dietary restrictions, and the occasion. For birthdays, personalized cakes or custom sweet boxes make wonderful presents. Anniversaries call for romantic chocolate assortments or elegant macarons. Corporate gifts should be sophisticated and professional, while holiday gifts can be more festive and fun. We offer curated gift collections for every occasion, complete with beautiful packaging and personalized messages. Our team can also create custom gift baskets tailored to specific themes or preferences.",
      author: "Sarah Johnson",
      authorRole: "Master Chocolatier",
      date: "2024-01-03",
      readTime: "5 min read",
      category: "gifts",
      tags: ["gifts", "occasions", "custom", "packaging"],
      image: "/images/blog/sweet-gifts.jpg",
      featured: false,
      likes: 112,
      comments: 27
    },
    {
      id: 6,
      title: "The Science of Sugar: Understanding Sweetness",
      excerpt: "Explore the fascinating science behind what makes sweets so irresistible to our taste buds.",
      content: "Sweetness is one of the five basic tastes, and our attraction to it is deeply rooted in biology. Sugar activates reward centers in our brain, releasing feel-good chemicals like dopamine. Different types of sugar - sucrose, fructose, glucose - have varying levels of sweetness and behave differently in recipes. Temperature, texture, and presentation all influence how we perceive sweetness. Understanding these scientific principles helps us create sweets that are perfectly balanced and satisfying. We use this knowledge to develop new recipes and improve existing ones, ensuring that every bite delivers the perfect sweet experience.",
      author: "Michael Chen",
      authorRole: "Head Pastry Chef",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "science",
      tags: ["science", "sugar", "taste", "chemistry"],
      image: "/images/blog/sugar-science.jpg",
      featured: false,
      likes: 89,
      comments: 12
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: blogPosts.length },
    { id: 'chocolate', name: 'Chocolate', icon: Candy, count: blogPosts.filter(p => p.category === 'chocolate').length },
    { id: 'trends', name: 'Trends', icon: Sparkles, count: blogPosts.filter(p => p.category === 'trends').length },
    { id: 'pairing', name: 'Pairing', icon: Coffee, count: blogPosts.filter(p => p.category === 'pairing').length },
    { id: 'behind-scenes', name: 'Behind Scenes', icon: Star, count: blogPosts.filter(p => p.category === 'behind-scenes').length },
    { id: 'gifts', name: 'Gifts', icon: Gift, count: blogPosts.filter(p => p.category === 'gifts').length },
    { id: 'science', name: 'Science', icon: BookOpen, count: blogPosts.filter(p => p.category === 'science').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-bounceIn mb-6">
            <BookOpen className="w-16 h-16 mx-auto text-pink-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Sweet Stories & Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '200ms'}}>
            Discover the latest trends, tips, and stories from the world of sweets and confectionery.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fadeInUp">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Stories</h2>
              <p className="text-lg text-gray-600">Our most popular and trending articles</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 stagger-children">
              {featuredPosts.map((post, index) => (
                <div key={post.id} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl overflow-hidden shadow-xl interactive-card animate-cardEntrance" style={{animationDelay: `${index * 200}ms`}}>
                  <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                    <Candy className="w-16 h-16 text-pink-600 animate-pulseGlow" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-pink-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.authorRole}</p>
                        </div>
                      </div>
                      <button className="sweet-button interactive-button">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-64">
              <div className="bg-white rounded-3xl p-6 shadow-xl morph-card sticky top-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-pink-100 text-pink-800'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center">
                          <IconComponent className="w-5 h-5 mr-3" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">{category.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="bg-white rounded-3xl p-6 shadow-xl morph-card mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles, tips, and stories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="sweet-input w-full pl-12 pr-4 py-3 interactive-input"
                  />
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                {filteredPosts.map((post, index) => (
                  <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-xl interactive-card animate-cardEntrance" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="h-48 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center">
                      <Candy className="w-12 h-12 text-pink-600 animate-pulseGlow" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-pink-600 transition-colors cursor-pointer line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <button className="flex items-center hover:text-pink-500 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span className="text-xs ml-1">{post.likes}</span>
                          </button>
                          <button className="flex items-center hover:text-purple-500 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-xs ml-1">{post.comments}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12 animate-fadeInUp">
                  <Candy className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <div className="animate-bounceIn mb-6">
            <Mail className="w-16 h-16 mx-auto text-pink-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Sweetly Informed</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter and get the latest sweet tips, trends, and exclusive recipes delivered to your inbox!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="sweet-input flex-1 interactive-input"
            />
            <button className="sweet-button interactive-button px-6">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-6">Share Your Sweet Stories</h2>
          <p className="text-xl text-white/90 mb-8">
            Have a sweet tip or story to share? We'd love to hear from our community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="sweet-button interactive-button">
              <Mail className="w-5 h-5 mr-2" />
              Submit Article
            </button>
            <button className="cream-button interactive-button">
              <Share2 className="w-5 h-5 mr-2" />
              Share Your Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}