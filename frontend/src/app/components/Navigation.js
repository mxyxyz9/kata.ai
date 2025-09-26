'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Store, Home, Package, BarChart3, Users, Heart, ShoppingCart, User, Search, Menu, X, Info, Mail, Phone, FileText, HelpCircle, BookOpen } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/sweets', label: 'Sweets', icon: Package },
    { href: '/about', label: 'About', icon: Info },
    { href: '/services', label: 'Services', icon: Heart },
    { href: '/contact', label: 'Contact', icon: Mail },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/inventory', label: 'Inventory', icon: BarChart3 },
    { href: '/users', label: 'Users', icon: Users },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-2 px-4 animate-slide-down">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <p className="flex items-center space-x-2">
            <Heart className="w-4 h-4 animate-pulse float" />
            <span className="font-medium">🍬 Free shipping on orders over $50! 🍭</span>
          </p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </span>
            <span className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>hello@sweetshop.com</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-xl border-b border-neutral-100 shadow-sm animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Store className="w-6 h-6 text-white animate-bounce-in" />
              </div>
              <div className="animate-fade-in">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent font-playfair">
                  Sweet Shop
                </h1>
                <p className="text-sm text-neutral-500 font-medium">Artisan Confectionery</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative px-4 py-3 rounded-xl text-neutral-700 hover:text-primary-600 hover:bg-primary-50/80 transition-all duration-300 morph-card hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 group-hover:text-primary-500" />
                      <span className="text-sm font-semibold">{item.label}</span>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full morph-card hover:scale-105 transition-all duration-300">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 transition-colors duration-200" />
                <input
                  type="text"
                  placeholder="Search artisan sweets & chocolates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-3 bg-white border-2 border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-sm font-medium placeholder-neutral-400"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-3 rounded-full hover:bg-neutral-100 transition-all duration-300 relative group morph-card hover:scale-110">
                <Heart className="w-5 h-5 text-neutral-600 group-hover:text-red-500 transition-all duration-300 group-hover:scale-110" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce-in shadow-lg">
                  3
                </span>
              </button>
              
              <button className="p-3 rounded-full hover:bg-neutral-100 transition-all duration-300 relative group morph-card hover:scale-110">
                <ShoppingCart className="w-5 h-5 text-neutral-600 group-hover:text-primary-600 transition-all duration-300 group-hover:scale-110" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce-in shadow-lg">
                  2
                </span>
              </button>

              <button className="p-3 rounded-full hover:bg-neutral-100 transition-all duration-300 group morph-card hover:scale-110">
                <User className="w-5 h-5 text-neutral-600 group-hover:text-primary-600 transition-all duration-300 group-hover:scale-110" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-full hover:bg-neutral-100 transition-all duration-300 morph-card hover:scale-110 group"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-neutral-600 group-hover:text-primary-600 transition-colors" />
                ) : (
                  <Menu className="w-6 h-6 text-neutral-600 group-hover:text-primary-600 transition-colors" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-neutral-100 py-6 animate-slide-down">
              <div className="space-y-4">
                {/* Mobile Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search artisan sweets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-white border-2 border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-base font-medium placeholder-neutral-400 morph-card"
                  />
                </div>
                
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-4 px-6 py-4 rounded-2xl text-neutral-700 hover:text-primary-600 hover:bg-primary-50/80 transition-all duration-300 morph-card hover:scale-105 group"
                    >
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 group-hover:text-primary-500" />
                      <span className="text-base font-semibold">{item.label}</span>
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