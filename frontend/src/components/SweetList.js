'use client';

import { useState, useEffect } from 'react';
import { Package, TrendingUp, AlertCircle, Heart, Star, Filter, Search, Grid, List, SortAsc, Plus, Eye, Edit, Trash2, ShoppingCart } from 'lucide-react';
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

  useEffect(() => {
    const fetchSweets = async () => {
      try {
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="text-center animate-fadeInUp">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounceIn">
            <Package className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-neutral-800 mb-2 animate-fadeInUp animate-delay-200">Loading Sweet Collection...</h3>
          <p className="text-neutral-600 animate-fadeInUp animate-delay-300">Preparing your delicious inventory</p>
          <div className="mt-6 w-48 h-2 bg-neutral-200 rounded-full overflow-hidden animate-fadeInUp animate-delay-400">
            <div className="h-full bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="text-center animate-fadeInUp">
          <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounceIn">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-neutral-800 mb-2 animate-fadeInUp animate-delay-200">Oops! Something went wrong</h3>
          <p className="text-neutral-600 mb-6 animate-fadeInUp animate-delay-300">{error}</p>
          <button onClick={fetchSweets} className="sweet-button interactive-button">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header Section */}
        <div className="mb-12 animate-fadeInUp">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center shadow-lg animate-bounceIn">
              <Package className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-4xl font-light text-neutral-900">Sweet Collection</h1>
              <p className="text-neutral-500 text-lg">Curated selection of premium confectionery</p>
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
              
              <div className="flex bg-neutral-100 rounded-lg p-1 interactive-card">
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
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children" 
        : "space-y-4 stagger-children"
      }>
        {filteredAndSortedSweets.map((sweet, index) => (
          <div 
            key={sweet.id} 
            className={`morph-card group hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-2 interactive-card animate-cardEntrance ${
              viewMode === 'list' ? 'flex items-center p-6' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Sweet Image */}
            <div className={`relative ${viewMode === 'list' ? 'w-24 h-24 flex-shrink-0 mr-6' : 'aspect-square'} bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-xl flex items-center justify-center border-2 border-neutral-100 group-hover:border-primary-200 transition-colors`}>
              <div className="text-6xl group-hover:scale-110 transition-transform">🍬</div>
              
              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(sweet.id)}
                className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-sm interactive-button"
              >
                <Heart 
                  className={`w-4 h-4 transition-colors ${
                    favorites.has(sweet.id) ? 'text-red-500 fill-current animate-pulseGlow' : 'text-neutral-400 hover:text-red-500'
                  }`} 
                />
              </button>
              
              {/* Category Badge */}
              <div className="absolute bottom-3 left-3">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                  {sweet.category}
                </span>
              </div>
            </div>
            
            {/* Sweet Details */}
            <div className={viewMode === 'list' ? 'flex-1' : 'p-6'}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors line-clamp-1">
                    {sweet.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-neutral-600">{sweet.rating || 4.8}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-600 mb-4 line-clamp-2 group-hover:text-neutral-700 transition-colors">
                {sweet.description}
              </p>
              
              {/* Price and Actions */}
              <div className={`flex items-center ${viewMode === 'list' ? 'justify-between' : 'justify-between'}`}>
                <div className="text-left">
                  <span className="text-2xl font-bold text-primary-600">${sweet.price}</span>
                  <div className="text-xs text-neutral-400 mt-1">per unit</div>
                </div>
                
                <div className="flex gap-2">
                  <button className="cream-button p-3 group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors interactive-button">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="sweet-button px-4 py-3 flex items-center gap-2 interactive-button">
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-sm font-medium">Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredAndSortedSweets.length === 0 && (
        <div className="text-center py-16 animate-fadeInUp">
          <div className="w-24 h-24 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-bounceIn">
            <Package className="w-12 h-12 text-neutral-400" />
          </div>
          <h3 className="text-2xl font-semibold text-neutral-800 mb-2 animate-fadeInUp animate-delay-200">No sweets found</h3>
          <p className="text-neutral-600 mb-6 animate-fadeInUp animate-delay-300">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
              setSortBy('name');
            }}
            className="sweet-button interactive-button animate-fadeInUp animate-delay-400"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}