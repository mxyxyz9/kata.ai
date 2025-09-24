import { Candy, Package, BarChart3, Users, Store, TrendingUp, Heart, Star, Gift, ShoppingBag, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-secondary-100/20 animate-gradientShift"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulseGlow">
              <Candy className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-6 animate-fadeInUp">
              Sweeten Your
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-gradientShift"> Business</span>
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200">
              The ultimate confectionery management system. Track inventory, manage sales, and delight customers with our sweet solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-400">
              <Link href="/sweets" className="sweet-button text-lg px-8 py-4 interactive-button">
                <Package className="w-5 h-5 mr-2" />
                Explore Sweets
              </Link>
              <Link href="/inventory" className="cream-button text-lg px-8 py-4 interactive-button">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Inventory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">Why Choose Sweet Shop?</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">Experience the perfect blend of tradition and innovation in confectionery management.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="morph-card p-8 text-center interactive-card">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounceIn">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Smart Inventory</h3>
              <p className="text-neutral-600 leading-relaxed">Keep track of your sweet stock with intelligent alerts and real-time updates. Never run out of your customers' favorites.</p>
            </div>
            
            <div className="morph-card p-8 text-center interactive-card">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounceIn animate-delay-200">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Sales Analytics</h3>
              <p className="text-neutral-600 leading-relaxed">Gain insights into your best-selling items and seasonal trends with comprehensive analytics and reporting.</p>
            </div>
            
            <div className="morph-card p-8 text-center interactive-card">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounceIn animate-delay-400">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-4">Customer Love</h3>
              <p className="text-neutral-600 leading-relaxed">Build lasting relationships with integrated customer management and personalized service features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Sweet Success in Numbers</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">See how our sweet shop management system transforms businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="morph-card p-8 text-center interactive-card">
              <div className="text-4xl font-bold text-primary-600 mb-2 animate-countUp">500+</div>
              <div className="text-lg text-neutral-600">Sweet Varieties</div>
              <p className="text-sm text-neutral-500 mt-2">From classic favorites to innovative creations</p>
            </div>
            
            <div className="morph-card p-8 text-center interactive-card">
              <div className="text-4xl font-bold text-secondary-600 mb-2 animate-countUp animate-delay-200">98%</div>
              <div className="text-lg text-neutral-600">Customer Satisfaction</div>
              <p className="text-sm text-neutral-500 mt-2">Our commitment to quality and service</p>
            </div>
            
            <div className="morph-card p-8 text-center interactive-card">
              <div className="text-4xl font-bold text-accent-600 mb-2 animate-countUp animate-delay-400">24/7</div>
              <div className="text-lg text-neutral-600">System Availability</div>
              <p className="text-sm text-neutral-500 mt-2">Always ready when you need it most</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-8 backdrop-blur-sm">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-light text-white mb-6 animate-fadeInUp">
            Ready to Sweeten Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fadeInUp animate-delay-200">
            Join thousands of confectionery businesses that trust Sweet Shop for their inventory and sales management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-400">
            <Link href="/sweets" className="bg-white text-primary-600 px-8 py-4 rounded-xl font-medium hover:bg-neutral-50 transition-colors flex items-center gap-2 group interactive-button">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/inventory" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center gap-2 interactive-button">
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}