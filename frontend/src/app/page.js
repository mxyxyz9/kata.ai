import { Candy, Package, BarChart3, Users, Store, TrendingUp, Heart, Star, Gift, ShoppingBag, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-cream-100/20 to-secondary-100/30 animate-pulse-slow"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl animate-float animate-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-200/15 rounded-full blur-3xl animate-pulse-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Animated Logo */}
            <div className="w-32 h-32 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl animate-bounce-in hover:scale-110 transition-transform duration-500">
              <Candy className="w-16 h-16 text-white animate-spin-slow" />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-bold text-neutral-900 mb-8 animate-fade-in">
              Sweeten Your
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent animate-gradient-shift block mt-2">
                Sweet Business
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-2xl lg:text-3xl text-neutral-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-200 font-light">
              Experience the ultimate confectionery management system. Track inventory, manage sales, and delight customers with our artisan sweet solution.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-400">
              <Link href="/sweets" className="sweet-button text-xl px-10 py-5 rounded-2xl group hover:scale-105 transition-all duration-300 flex items-center space-x-3 shadow-xl">
                <Package className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore Artisan Sweets</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/inventory" className="cream-button text-xl px-10 py-5 rounded-2xl group hover:scale-105 transition-all duration-300 flex items-center space-x-3 border-2 border-neutral-200">
                <BarChart3 className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>View Analytics</span>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-8 mt-16 animate-fade-in animate-delay-600">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-neutral-600 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary-500" />
                <span className="text-neutral-600 font-medium">10K+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-accent-500" />
                <span className="text-neutral-600 font-medium">Free Trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-32 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Why Choose Sweet Shop?
            </h2>
            <p className="text-2xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              Experience the perfect blend of tradition and innovation in artisan confectionery management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="morph-card p-10 text-center group hover:scale-105 transition-all duration-500 animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:rotate-6">
                <Package className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-neutral-800 mb-6 group-hover:text-primary-600 transition-colors duration-300">
                Smart Inventory
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed font-light">
                Keep track of your artisan sweet stock with intelligent alerts and real-time updates. Never run out of your customers' favorite confections.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
            
            <div className="morph-card p-10 text-center group hover:scale-105 transition-all duration-500 animate-slide-up animate-delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 via-secondary-500 to-secondary-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:rotate-6">
                <TrendingUp className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-neutral-800 mb-6 group-hover:text-secondary-600 transition-colors duration-300">
                Sales Analytics
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed font-light">
                Gain insights into your best-selling artisan items and seasonal trends with comprehensive analytics and beautiful reporting dashboards.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center text-secondary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>View Reports</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
            
            <div className="morph-card p-10 text-center group hover:scale-105 transition-all duration-500 animate-slide-up animate-delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-400 via-accent-500 to-accent-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:rotate-6">
                <Users className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-neutral-800 mb-6 group-hover:text-accent-600 transition-colors duration-300">
                Customer Love
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed font-light">
                Build lasting relationships with integrated customer management and personalized service features that create memorable experiences.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center text-accent-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl animate-float animate-delay-3000"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Sweet Success in Numbers
            </h2>
            <p className="text-2xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              See how our artisan sweet shop management system transforms confectionery businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="morph-card p-12 text-center group hover:scale-105 transition-all duration-500 animate-slide-up">
              <div className="text-6xl font-bold text-primary-600 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                500+
              </div>
              <div className="text-2xl text-neutral-700 font-semibold mb-3">Artisan Varieties</div>
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                From classic favorites to innovative artisanal creations, manage every sweet delight
              </p>
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
            </div>
            
            <div className="morph-card p-12 text-center group hover:scale-105 transition-all duration-500 animate-slide-up animate-delay-200">
              <div className="text-6xl font-bold text-secondary-600 mb-4 group-hover:text-secondary-700 transition-colors duration-300">
                98%
              </div>
              <div className="text-2xl text-neutral-700 font-semibold mb-3">Customer Satisfaction</div>
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                Our commitment to quality service and exceptional user experience in every interaction
              </p>
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
            </div>
            
            <div className="morph-card p-12 text-center group hover:scale-105 transition-all duration-500 animate-slide-up animate-delay-400">
              <div className="text-6xl font-bold text-accent-600 mb-4 group-hover:text-accent-700 transition-colors duration-300">
                24/7
              </div>
              <div className="text-2xl text-neutral-700 font-semibold mb-3">System Availability</div>
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                Always ready when you need it most with reliable cloud infrastructure and support
              </p>
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float animate-delay-2000"></div>
        
        <div className="max-w-5xl mx-auto text-center px-6 relative">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-12 backdrop-blur-sm animate-scale-in">
            <Heart className="w-12 h-12 text-white animate-pulse" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 animate-fade-in">
            Ready to Sweeten Your Business?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-slide-up animate-delay-200 font-light leading-relaxed">
            Join thousands of artisan confectionery businesses that trust Sweet Shop for their inventory and sales management.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up animate-delay-400">
            <Link href="/sweets" className="bg-white text-primary-700 px-10 py-5 rounded-2xl font-semibold hover:bg-neutral-50 transition-all duration-300 flex items-center gap-3 group hover:scale-105 shadow-2xl">
              <span className="text-xl">Get Started Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link href="/inventory" className="border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-3 group hover:scale-105 backdrop-blur-sm">
              <span className="text-xl">Schedule Demo</span>
            </Link>
          </div>
          
          {/* Additional Trust Elements */}
          <div className="flex justify-center items-center space-x-12 mt-16 animate-fade-in animate-delay-600">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">Free 14-day trial</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">No credit card required</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">24/7 support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}