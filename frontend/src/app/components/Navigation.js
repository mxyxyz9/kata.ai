'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Store, Home, Package, BarChart3, Users, Heart, ShoppingCart, User, Search, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/sweets', label: 'Sweets', icon: Package },
    { href: '/inventory', label: 'Inventory', icon: BarChart3 },
    { href: '/users', label: 'Users', icon: Users },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm">
          <p className="flex items-center space-x-2">
            <Heart className="w-4 h-4 animate-pulse" />
            <span>Free shipping on orders over $50!</span>
          </p>
          <div className="flex items-center space-x-4">
            <span>📞 +1 (555) 123-4567</span>
            <span>✉️ hello@sweetshop.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-neutral-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Store className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  Sweet Shop
                </h1>
                <p className="text-xs text-neutral-500">Artisan Confectionery</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative px-4 py-2 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                  </Link>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search sweets, chocolates, candies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors duration-200 relative">
                <Heart className="w-5 h-5 text-neutral-600 hover:text-red-500 transition-colors" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              
              <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors duration-200 relative">
                <ShoppingCart className="w-5 h-5 text-neutral-600 hover:text-primary-600 transition-colors" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </button>

              <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors duration-200">
                <User className="w-5 h-5 text-neutral-600 hover:text-primary-600 transition-colors" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-neutral-600" />
                ) : (
                  <Menu className="w-5 h-5 text-neutral-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-neutral-200 py-4">
              <div className="space-y-2">
                {/* Mobile Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search sweets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}