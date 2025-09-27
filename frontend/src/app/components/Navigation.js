'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Store, Home, Package, BarChart3, Users, Heart, ShoppingCart, User, Search, Menu, X, Info, Mail, Phone, FileText, HelpCircle, BookOpen } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
      <div className="bg-secondary text-primary py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm">
          <p className="flex items-center space-x-2">
            <Heart className="w-4 h-4" />
            <span className="font-medium">Free shipping on orders over $50!</span>
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-primary shadow-md m-4 rounded-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-neutral-800">
                  Sweet Shop
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-md text-neutral-700 hover:bg-neutral-100 hover:text-secondary transition-colors duration-300"
                >
                  <span className="text-sm font-semibold">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-xs mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-neutral-100 border-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 text-sm font-medium"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              <button className="btn btn-secondary p-3">
                <Heart className="w-5 h-5" />
              </button>
              <button className="btn btn-secondary p-3">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="btn btn-secondary p-3">
                <User className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden btn btn-secondary p-3"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="p-6">
              {/* Logo and Close Button */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Store className="w-5 h-5 text-primary" />
                  </div>
                  <h1 className="text-xl font-bold text-neutral-800">Sweet Shop</h1>
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-neutral-500 hover:text-neutral-800">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-neutral-100 border-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 text-sm font-medium"
                />
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-4 px-4 py-3 rounded-md text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-secondary transition-colors duration-300"
                  >
                    <item.icon className="w-6 h-6" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}