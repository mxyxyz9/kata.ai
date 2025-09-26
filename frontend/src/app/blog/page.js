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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100 via-cream-100 to-secondary-100 opacity-50" />
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary-200 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-200 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-200 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <div className="animate-bounce-in mb-8">
            <Candy className="w-20 h-20 mx-auto text-primary-600" />
          </div>
          <h1 className="text-6xl font-bold text-neutral-800 mb-6">
            Sweet Stories & <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Confectionery</span> Tips
          </h1>
          <p className="text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the latest trends, tips, and stories from the world of artisan confectionery. 
            Learn, share, and indulge in sweet knowledge.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="sweet-button interactive-button px-8 py-4 text-lg rounded-2xl">
              <BookOpen className="w-6 h-6 mr-3" />
              Browse Articles
            </button>
            <button className="cream-button interactive-button px-8 py-4 text-lg rounded-2xl">
              <Share2 className="w-6 h-6 mr-3" />
              Share Your Story
            </button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold text-neutral-800 mb-4">Featured Stories</h2>
              <p className="text-xl text-neutral-600">Handpicked articles from our confectionery experts</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
              {featuredPosts.map((post, index) => (
                <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl morph-card interactive-card animate-slide-up group" style={{animationDelay: `${index * 150}ms`}}>
                  <div className="h-56 bg-gradient-to-br from-primary-100 via-cream-100 to-secondary-100 flex items-center justify-center relative">
                    <Sparkles className="w-16 h-16 text-primary-600 animate-pulse" />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-primary-600">
                      Featured
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-neutral-500">
                        <span className="flex items-center">
                          <Clock className="w-5 h-5 mr-2" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <Heart className="w-5 h-5 mr-2" />
                          {post.likes}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-3 hover:text-primary-600 transition-colors cursor-pointer group-hover:translate-x-1 transform duration-200">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-800">{post.author}</p>
                          <p className="text-xs text-neutral-500">{post.authorRole}</p>
                        </div>
                      </div>
                      <button className="sweet-button interactive-button px-6 py-3 rounded-2xl group-hover:scale-105 transform duration-200">
                        Read More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transform duration-200" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-64">
              <div className="bg-white rounded-3xl p-8 shadow-2xl morph-card sticky top-8">
                <h3 className="text-2xl font-bold text-neutral-800 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-primary-100 text-primary-800 shadow-lg'
                            : 'hover:bg-cream-100 text-neutral-700 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center">
                          <IconComponent className="w-6 h-6 mr-4" />
                          <span className="font-medium text-lg">{category.name}</span>
                        </div>
                        <span className="text-sm bg-neutral-200 px-3 py-1 rounded-full font-semibold">{category.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search Bar */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl morph-card mb-8">
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-neutral-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search articles, tips, and stories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="sweet-input w-full pl-16 pr-6 py-4 text-lg rounded-2xl interactive-input"
                  />
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
                {filteredPosts.map((post, index) => (
                  <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl morph-card interactive-card animate-slide-up group" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="h-56 bg-gradient-to-br from-primary-100 via-cream-100 to-secondary-100 flex items-center justify-center">
                      <Candy className="w-16 h-16 text-primary-600 animate-pulse" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-3 text-sm text-neutral-500">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-3 hover:text-primary-600 transition-colors cursor-pointer line-clamp-2 group-hover:translate-x-1 transform duration-200">
                        {post.title}
                      </h3>
                      <p className="text-neutral-600 text-base mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="bg-cream-100 text-neutral-600 px-3 py-1 rounded-full text-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-base font-medium text-neutral-700">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-neutral-500">
                          <button className="flex items-center hover:text-primary-500 transition-colors">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm ml-2">{post.likes}</span>
                          </button>
                          <button className="flex items-center hover:text-secondary-500 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm ml-2">{post.comments}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16 animate-fade-in">
                  <Candy className="w-20 h-20 mx-auto text-neutral-400 mb-6" />
                  <h3 className="text-2xl font-semibold text-neutral-600 mb-3">No articles found</h3>
                  <p className="text-neutral-500 text-lg">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-100 via-cream-100 to-secondary-100">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="animate-bounce-in mb-8">
            <Mail className="w-20 h-20 mx-auto text-primary-600" />
          </div>
          <h2 className="text-4xl font-bold text-neutral-800 mb-6">Stay Sweetly Informed</h2>
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter and get the latest sweet tips, trends, and exclusive recipes delivered to your inbox!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="sweet-input flex-1 interactive-input text-lg py-4 px-6 rounded-2xl"
            />
            <button className="sweet-button interactive-button px-8 py-4 text-lg rounded-2xl">
              Subscribe
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-8">Share Your Sweet Stories</h2>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a sweet tip or story to share? We'd love to hear from our community!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="sweet-button interactive-button px-10 py-6 text-xl rounded-2xl group">
              <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transform duration-200" />
              Submit Article
            </button>
            <button className="cream-button interactive-button px-10 py-6 text-xl rounded-2xl group">
              <Share2 className="w-6 h-6 mr-3 group-hover:rotate-12 transform duration-200" />
              Share Your Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}