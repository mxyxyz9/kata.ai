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
        <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white mt-20 relative overflow-hidden">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-secondary-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-primary-500/10 rounded-full blur-2xl animate-pulse delay-3000"></div>
          </div>
          <div className="relative z-10">
          {/* Newsletter Section */}
          <div className="border-b border-neutral-700">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-3xl p-8 shadow-3xl morph-card">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce-in group-hover:scale-110 transition-all duration-300">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Stay Sweet with Our Newsletter</h3>
                      <p className="text-neutral-100 text-lg">Get exclusive deals, new arrivals, and sweet surprises!</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-lg"
                    />
                    <button className="sweet-button px-8 py-4 flex items-center space-x-3 text-lg rounded-2xl group">
                      <Heart className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center animate-bounce-in">
                    <Store className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Sweet Shop</h3>
                    <p className="text-secondary-300 text-lg font-medium">Crafting Joy Since 2024</p>
                  </div>
                </div>
                <p className="text-neutral-200 leading-relaxed max-w-md text-lg">
                  Your premier destination for artisanal sweets and confections. We blend traditional craftsmanship with modern flavors to create unforgettable experiences.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-primary-500 hover:scale-110 group">
                    <Facebook className="w-6 h-6 text-neutral-300 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-primary-500 hover:scale-110 group">
                    <Twitter className="w-6 h-6 text-neutral-300 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-primary-500 hover:scale-110 group">
                    <Instagram className="w-6 h-6 text-neutral-300 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-primary-500 hover:scale-110 group">
                    <HeartHandshake className="w-6 h-6 text-neutral-300 group-hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center space-x-3">
                  <Star className="w-6 h-6 text-secondary-400" />
                  <span>Quick Links</span>
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="/" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <Home className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/sweets" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <Package className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Our Sweets</span>
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <Info className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>About Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <Heart className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Services</span>
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <Mail className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <BookOpen className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="/inventory" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <BarChart3 className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Inventory</span>
                    </a>
                  </li>
                  <li>
                    <a href="/users" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <Users className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Users</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-accent-400" />
                  <span>Our Services</span>
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <Truck className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Fast Delivery</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <CreditCard className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Secure Payment</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <Gift className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Gift Wrapping</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-neutral-200 hover:text-white transition-all duration-300 flex items-center space-x-3 group text-lg p-2 rounded-lg hover:bg-white/10">
                      <Coffee className="w-5 h-5 group-hover:scale-125 transition-transform" />
                      <span>Tasting Events</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact & Hours */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-primary-400" />
                    <span>Contact Us</span>
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-neutral-100 font-semibold text-lg">+1 (555) 123-4567</p>
                        <p className="text-neutral-300 text-sm">Mon-Fri 9AM-6PM</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-neutral-100 font-semibold text-lg">hello@sweetshop.com</p>
                        <p className="text-neutral-300 text-sm">We reply within 24 hours</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-neutral-100 font-semibold text-lg">123 Sweet Street</p>
                        <p className="text-neutral-300 text-sm">Confectionery District, CD 12345</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Business Hours */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-accent-400" />
                    <span>Hours</span>
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between text-base p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <span className="text-neutral-200">Monday - Friday</span>
                      <span className="text-white font-bold text-lg">9AM - 8PM</span>
                    </li>
                    <li className="flex items-center justify-between text-base p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <span className="text-neutral-200">Saturday</span>
                      <span className="text-white font-bold text-lg">10AM - 9PM</span>
                    </li>
                    <li className="flex items-center justify-between text-base p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                      <span className="text-neutral-200">Sunday</span>
                      <span className="text-white font-bold text-lg">11AM - 7PM</span>
                    </li>
                  </ul>
                  <div className="flex items-center space-x-3 mt-4 p-3 bg-green-500/20 rounded-xl">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-base font-semibold text-green-400">Open Now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Bar */}
            <div className="border-t border-neutral-600 mt-16 pt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-white font-bold text-lg mb-2">Free Shipping</h5>
                  <p className="text-neutral-300 text-sm">On orders over $50</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-white font-bold text-lg mb-2">Secure Payment</h5>
                  <p className="text-neutral-300 text-sm">100% protected</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    <HeartHandshake className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-white font-bold text-lg mb-2">Quality Guarantee</h5>
                  <p className="text-neutral-300 text-sm">Fresh & delicious</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-white font-bold text-lg mb-2">Customer Support</h5>
                  <p className="text-neutral-300 text-sm">24/7 assistance</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-600 mt-16 pt-12">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex items-center space-x-6">
                  <p className="text-neutral-300 text-base">
                    © 2024 Sweet Shop. All rights reserved.
                  </p>
                  <div className="hidden md:flex items-center space-x-3 text-sm text-neutral-400">
                    <span>•</span>
                    <span>Made with</span>
                    <Heart className="w-4 h-4 text-red-400" />
                    <span>in the USA</span>
                  </div>
                </div>
                <div className="flex space-x-8 text-base">
                  <a href="/privacy" className="text-neutral-300 hover:text-white transition-all duration-300 hover:scale-105">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-neutral-300 hover:text-white transition-all duration-300 hover:scale-105">
                    Terms of Service
                  </a>
                  <a href="/faq" className="text-neutral-300 hover:text-white transition-all duration-300 hover:scale-105">
                    FAQ
                  </a>
                  <a href="#" className="text-neutral-300 hover:text-white transition-all duration-300 hover:scale-105">
                    Accessibility
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </footer>
      </body>
    </html>
  )
}