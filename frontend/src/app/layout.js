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
        <footer className="bg-card text-card-foreground mt-20">
          <div className="relative z-10">
          {/* Newsletter Section */}
          <div className="border-b border-border">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="bg-muted rounded-lg p-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Gift className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Stay Sweet with Our Newsletter</h3>
                      <p className="text-muted-foreground text-lg">Get exclusive deals, new arrivals, and sweet surprises!</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                    />
                    <button className="btn btn-primary px-8 py-4 flex items-center space-x-3 text-lg rounded-lg group">
                      <Heart className="w-5 h-5" />
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
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Store className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Sweet Shop</h3>
                    <p className="text-muted-foreground text-base">Crafting Joy Since 2024</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-md text-base">
                  Your premier destination for artisanal sweets and confections. We blend traditional craftsmanship with modern flavors to create unforgettable experiences.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-colors hover:bg-primary/10 group">
                    <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-colors hover:bg-primary/10 group">
                    <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-colors hover:bg-primary/10 group">
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-colors hover:bg-primary/10 group">
                    <HeartHandshake className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-foreground flex items-center space-x-3">
                  <Star className="w-5 h-5 text-secondary" />
                  <span>Quick Links</span>
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <Home className="w-4 h-4" />
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/sweets" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <Package className="w-4 h-4" />
                      <span>Our Sweets</span>
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <Info className="w-4 h-4" />
                      <span>About Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <Heart className="w-4 h-4" />
                      <span>Services</span>
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <Mail className="w-4 h-4" />
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <BookOpen className="w-4 h-4" />
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="/inventory" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <BarChart3 className="w-4 h-4" />
                      <span>Inventory</span>
                    </a>
                  </li>
                  <li>
                    <a href="/users" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <Users className="w-4 h-4" />
                      <span>Users</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-foreground flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>Our Services</span>
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <Truck className="w-4 h-4" />
                      <span>Fast Delivery</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <CreditCard className="w-4 h-4" />
                      <span>Secure Payment</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <Gift className="w-4 h-4" />
                      <span>Gift Wrapping</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-3 group text-base p-2 rounded-lg hover:bg-muted">
                      <Coffee className="w-4 h-4" />
                      <span>Tasting Events</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact & Hours */}
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>Contact Us</span>
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-semibold text-base">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground text-sm">Mon-Fri 9AM-6PM</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-semibold text-base">hello@sweetshop.com</p>
                        <p className="text-muted-foreground text-sm">We reply within 24 hours</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-semibold text-base">123 Sweet Street</p>
                        <p className="text-muted-foreground text-sm">Confectionery District, CD 12345</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Business Hours */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-foreground flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>Hours</span>
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-muted transition-colors">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground font-bold text-base">9AM - 8PM</span>
                    </li>
                    <li className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-muted transition-colors">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-bold text-base">10AM - 9PM</span>
                    </li>
                    <li className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-muted transition-colors">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground font-bold text-base">11AM - 7PM</span>
                    </li>
                  </ul>
                  <div className="flex items-center space-x-2 mt-3 p-2 bg-green-500/10 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-green-400">Open Now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Bar */}
            <div className="border-t border-border mt-16 pt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-primary/20">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                  <h5 className="text-foreground font-bold text-lg mb-2">Free Shipping</h5>
                  <p className="text-muted-foreground text-sm">On orders over $50</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-primary/20">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h5 className="text-foreground font-bold text-lg mb-2">Secure Payment</h5>
                  <p className="text-muted-foreground text-sm">100% protected</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-primary/20">
                    <HeartHandshake className="w-8 h-8 text-primary" />
                  </div>
                  <h5 className="text-foreground font-bold text-lg mb-2">Quality Guarantee</h5>
                  <p className="text-muted-foreground text-sm">Fresh & delicious</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-primary/20">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h5 className="text-foreground font-bold text-lg mb-2">Customer Support</h5>
                  <p className="text-muted-foreground text-sm">24/7 assistance</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border mt-16 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-muted-foreground text-sm">
                  © 2024 Sweet Shop. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                  <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                  <a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
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