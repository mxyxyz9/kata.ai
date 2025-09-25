import { Inter } from 'next/font/google'
import { Store, Home, Package, BarChart3, Users, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Heart, ShoppingCart, User, Search, Menu, X, HeartHandshake, Gift, Star, Shield, Truck, CreditCard, Coffee, Info, BookOpen, HelpCircle } from 'lucide-react'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sweet Shop',
  description: 'Delicious sweets and treats for everyone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-gradient-to-br from-white to-neutral-50`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white mt-20">
          {/* Newsletter Section */}
          <div className="border-b border-neutral-700">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Stay Sweet with Our Newsletter</h3>
                      <p className="text-neutral-300">Get exclusive deals, new arrivals, and sweet surprises!</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="sweet-button px-6 py-3 flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Sweet Shop</h3>
                    <p className="text-primary-300 text-sm">Crafting Joy Since 2024</p>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed max-w-md">
                  Your premier destination for artisanal sweets and confections. We blend traditional craftsmanship with modern flavors to create unforgettable experiences.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <HeartHandshake className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Star className="w-5 h-5 text-primary-400" />
                  <span>Quick Links</span>
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/sweets" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <Package className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Our Sweets</span>
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <Info className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>About Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Services</span>
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="/inventory" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <BarChart3 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Inventory</span>
                    </a>
                  </li>
                  <li>
                    <a href="/users" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Users</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary-400" />
                  <span>Our Services</span>
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <Truck className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Fast Delivery</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <CreditCard className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Secure Payment</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <Gift className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Gift Wrapping</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                      <Coffee className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Tasting Events</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact & Hours */}
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-primary-400" />
                    <span>Contact Us</span>
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Phone className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-neutral-200 font-medium">+1 (555) 123-4567</p>
                        <p className="text-neutral-400 text-xs">Mon-Fri 9AM-6PM</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Mail className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-neutral-200 font-medium">hello@sweetshop.com</p>
                        <p className="text-neutral-400 text-xs">We reply within 24 hours</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-neutral-200 font-medium">123 Sweet Street</p>
                        <p className="text-neutral-400 text-xs">Confectionery District, CD 12345</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Business Hours */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary-400" />
                    <span>Hours</span>
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-neutral-300">Monday - Friday</span>
                      <span className="text-white font-semibold">9AM - 8PM</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-neutral-300">Saturday</span>
                      <span className="text-white font-semibold">10AM - 9PM</span>
                    </li>
                    <li className="flex items-center justify-between text-sm">
                      <span className="text-neutral-300">Sunday</span>
                      <span className="text-white font-semibold">11AM - 7PM</span>
                    </li>
                  </ul>
                  <div className="flex items-center space-x-2 mt-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-400">Open Now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Bar */}
            <div className="border-t border-neutral-700 mt-12 pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="text-white font-semibold mb-1">Free Shipping</h5>
                  <p className="text-neutral-400 text-xs">On orders over $50</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="text-white font-semibold mb-1">Secure Payment</h5>
                  <p className="text-neutral-400 text-xs">100% protected</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <HeartHandshake className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="text-white font-semibold mb-1">Quality Guarantee</h5>
                  <p className="text-neutral-400 text-xs">Fresh & delicious</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="text-white font-semibold mb-1">Customer Support</h5>
                  <p className="text-neutral-400 text-xs">24/7 assistance</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-700 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <p className="text-neutral-400 text-sm">
                    © 2024 Sweet Shop. All rights reserved.
                  </p>
                  <div className="hidden md:flex items-center space-x-2 text-xs text-neutral-500">
                    <span>•</span>
                    <span>Made with</span>
                    <Heart className="w-3 h-3 text-red-400" />
                    <span>in the USA</span>
                  </div>
                </div>
                <div className="flex space-x-6 text-sm">
                  <a href="/privacy" className="text-neutral-400 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-neutral-400 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                  <a href="/faq" className="text-neutral-400 hover:text-white transition-colors duration-200">
                    FAQ
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                    Accessibility
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}