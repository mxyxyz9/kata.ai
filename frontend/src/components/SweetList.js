'use client';

import { useState, useEffect } from 'react';
import { Package, TrendingUp, AlertCircle, Heart, Star, Filter, Search, Grid, List, SortAsc, Plus, Eye, Edit, Trash2, ShoppingCart, AlertTriangle, RefreshCw } from 'lucide-react';
import APIClient from '../lib/api';

const api = APIClient();

export default function SweetList() {
  const [sweets, setSweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [favorites, setFavorites] = useState(new Set());

  const fetchSweets = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.get('/sweets/');
      console.log('API Response:', data);
      
      // Check if data is an array, if not try to access results property
      if (Array.isArray(data)) {
        setSweets(data);
      } else if (data && data.results && Array.isArray(data.results)) {
        setSweets(data.results);
      } else if (data && Array.isArray(data.data)) {
        setSweets(data.data);
      } else {
        console.error('Unexpected data format:', data);
        setError('Unexpected data format from API');
      }
      setLoading(false);
    } catch (err) {
      console.error('API Error:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  // Helper functions
  const toggleFavorite = (sweetId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(sweetId)) {
      newFavorites.delete(sweetId);
    } else {
      newFavorites.add(sweetId);
    }
    setFavorites(newFavorites);
  };

  const getCategories = () => {
    const categories = ['all', ...new Set(sweets.map(sweet => sweet.category))];
    return categories;
  };

  const filteredAndSortedSweets = sweets
    .filter(sweet => {
      const matchesSearch = sweet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           sweet.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || sweet.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center animate-fadeInUp">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-primary-400 rounded-full animate-ping opacity-20"></div>
            <div className="relative w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center animate-bounceIn">
              <Package className="w-12 h-12 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-neutral-800 mb-3 animate-fadeInUp animate-delay-200">Loading Sweet Collection...</h3>
          <p className="text-neutral-600 text-lg mb-8 animate-fadeInUp animate-delay-300">Preparing your premium confectionery experience</p>
          <div className="w-64 h-3 bg-neutral-200 rounded-full overflow-hidden animate-fadeInUp animate-delay-400 mx-auto">
            <div className="h-full bg-primary-500 rounded-full animate-loading-bar"></div>
          </div>
          <div className="mt-6 flex justify-center space-x-2 animate-fadeInUp animate-delay-500">
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center animate-fadeInUp max-w-md mx-auto">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-red-400 rounded-full animate-pulse opacity-20"></div>
            <div className="relative w-24 h-24 bg-red-500 rounded-full flex items-center justify-center animate-bounceIn">
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-neutral-800 mb-4 animate-fadeInUp animate-delay-200">Oops! Something went wrong</h3>
          <p className="text-neutral-600 mb-8 text-lg animate-fadeInUp animate-delay-300">{error}</p>
          <button 
            onClick={fetchSweets} 
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp animate-delay-400 flex items-center gap-3 mx-auto"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-primary-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounceIn">
              <Package className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInUp">
              Sweet Collection
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fadeInUp animate-delay-200">
              Discover our curated selection of premium confectionery crafted with love
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto animate-fadeInUp animate-delay-300">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for your favorite sweets..."
                className="w-full pl-12 pr-6 py-4 text-lg rounded-full border-0 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters Section */}
        <div className="mb-12 animate-fadeInUp animate-delay-400">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {getCategories().map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white text-neutral-700 hover:bg-primary-50 hover:text-primary-700 shadow-md hover:scale-105'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Sort and View Controls */}
            <div className="flex items-center gap-3 ml-auto">
              <select
                className="px-4 py-3 rounded-full border-0 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="category">Sort by Category</option>
              </select>
              
              <div className="flex bg-white rounded-full shadow-md p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-neutral-600 hover:text-primary-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-neutral-600 hover:text-primary-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="morph-card p-6 mb-8 animate-fadeInUp animate-delay-200">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sweets..."
                className="sweet-input pl-10 pr-4 py-3 w-full interactive-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filters and View */}
            <div className="flex flex-wrap gap-3 items-center">
              <select
                className="sweet-input px-4 py-3 interactive-input"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {getCategories().map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                className="sweet-input px-4 py-3 interactive-input"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
              </select>
              
              <div className="flex bg-neutral-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary-600 scale-105' : 'text-neutral-600 hover:text-neutral-800 hover:scale-105'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-sm text-primary-600 scale-105' : 'text-neutral-600 hover:text-neutral-800 hover:scale-105'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sweet Grid/List */}
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger-children" 
        : "space-y-6 stagger-children"
      }>
        {filteredAndSortedSweets.map((sweet, index) => (
          <div 
            key={sweet.id} 
            className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden interactive-card animate-cardEntrance ${
              viewMode === 'list' ? 'flex items-center p-6' : 'hover:-translate-y-2'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Sweet Image Container */}
            <div className={`relative ${viewMode === 'list' ? 'w-32 h-32 flex-shrink-0 mr-6' : 'aspect-square'} bg-primary-100 rounded-xl flex items-center justify-center border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
              <div className="text-7xl group-hover:scale-110 transition-transform duration-300">🍬</div>
              
              {/* Favorite Button - Top Right */}
              <button
                onClick={() => toggleFavorite(sweet.id)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg hover:shadow-xl hover:scale-110"
              >
                <Heart 
                  className={`w-5 h-5 transition-colors ${
                    favorites.has(sweet.id) ? 'text-red-500 fill-current animate-pulse' : 'text-neutral-400 hover:text-red-500'
                  }`} 
                />
              </button>
              
              {/* Premium Badge */}
              {sweet.rating && sweet.rating >= 4.5 && (
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Premium
                  </span>
                </div>
              )}
              
              {/* Category Badge - Bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-primary-700 text-sm font-semibold rounded-full shadow-md">
                  {sweet.category}
                </span>
              </div>
            </div>
            
            {/* Sweet Details */}
            <div className={viewMode === 'list' ? 'flex-1' : 'p-6'}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors duration-300 line-clamp-1">
                    {sweet.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(sweet.rating || 4.8) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-neutral-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-neutral-600">{sweet.rating || 4.8}</span>
                    <span className="text-xs text-neutral-400">({Math.floor(Math.random() * 50) + 10} reviews)</span>
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-600 mb-6 line-clamp-3 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed">
                {sweet.description}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  Fresh
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  Handmade
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                  Premium
                </span>
              </div>
              
              {/* Price and Actions */}
              <div className={`flex items-center ${viewMode === 'list' ? 'justify-between' : 'justify-between'}`}>
                <div className="text-left">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary-600">${sweet.price}</span>
                    <span className="text-sm text-neutral-500 line-through">${(sweet.price * 1.2).toFixed(2)}</span>
                  </div>
                  <div className="text-xs text-green-600 font-medium mt-1">Save 20% - Limited Time</div>
                </div>
                
                <div className="flex gap-3">
                  <button className="p-3 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-all duration-300 hover:scale-110">
                    <Eye className="w-5 h-5 text-neutral-600" />
                  </button>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredAndSortedSweets.length === 0 && (
        <div className="text-center py-20 animate-fadeInUp">
          <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounceIn shadow-lg">
            <Package className="w-16 h-16 text-primary-600" />
          </div>
          <h3 className="text-3xl font-bold text-neutral-800 mb-4 animate-fadeInUp animate-delay-200">No sweets found</h3>
          <p className="text-neutral-600 mb-8 text-lg animate-fadeInUp animate-delay-300 max-w-md mx-auto">
            We couldn't find any sweets matching your criteria. Try adjusting your search or filters.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSortBy('name');
            }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp animate-delay-400"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}