'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Candy, Package, BarChart3, Users, Store, TrendingUp, Heart, Star, Gift, ShoppingBag, ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 bg-gradient-to-b from-primary-50 via-white to-secondary-50"
          style={{ y: yPos }}
        />
        
        {/* Parallax background elements */}
        <motion.div className="absolute inset-0 z-10" style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}>
          <Candy className="absolute top-1/4 left-1/4 w-24 h-24 text-primary-200 opacity-30 animate-float" />
        </motion.div>
        <motion.div className="absolute inset-0 z-10" style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]) }}>
          <Package className="absolute top-1/2 right-1/4 w-20 h-20 text-secondary-200 opacity-30 animate-float-delay-1" />
        </motion.div>
        <motion.div className="absolute inset-0 z-10" style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]) }}>
          <Heart className="absolute bottom-1/4 left-1/3 w-16 h-16 text-accent-200 opacity-30 animate-float-delay-2" />
        </motion.div>
        <motion.div className="absolute inset-0 z-10" style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}>
          <Star className="absolute bottom-1/2 right-1/3 w-12 h-12 text-yellow-200 opacity-30 animate-float-delay-3" />
        </motion.div>
        <motion.div className="absolute inset-0 z-10" style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}>
          <Gift className="absolute top-1/3 right-1/2 w-14 h-14 text-primary-200 opacity-30 animate-float-delay-4" />
        </motion.div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 lg:px-8">
          <motion.div 
            className="inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold tracking-wider uppercase">The Ultimate Sweet Shop OS</h2>
          </motion.div>
          
          <motion.h1 
            className="text-6xl lg:text-8xl font-extrabold text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Manage Your <br />
            <span className="text-primary">Sweet</span> Kingdom
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            From artisan chocolates to classic candies, our system helps you track inventory, boost sales, and delight every customer.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/sweets" className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-primary rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center space-x-3">
                <ShoppingBag className="w-7 h-7" />
                <span>Explore Sweets</span>
                <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link href="/inventory" className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-primary bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary-50">
              <span className="relative flex items-center space-x-3">
                <BarChart3 className="w-7 h-7" />
                <span>View Dashboard</span>
              </span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <p className="text-muted-foreground mb-4">Trusted by over 10,000+ sweet businesses</p>
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="font-semibold text-lg">4.9/5</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="font-semibold text-lg">10K+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-lg">Lightning Fast</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why Choose Sweet Shop?
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Experience the perfect blend of tradition and innovation in artisan confectionery management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-card p-10 text-center rounded-lg">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Smart Inventory
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Keep track of your artisan sweet stock with intelligent alerts and real-time updates. Never run out of your customers' favorite confections.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center text-primary font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
            
            <div className="bg-card p-10 text-center rounded-lg">
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-8">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Sales Analytics
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Gain insights into your best-selling artisan items and seasonal trends with comprehensive analytics and beautiful reporting dashboards.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center text-secondary font-semibold">
                  <span>View Reports</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
            
            <div className="bg-card p-10 text-center rounded-lg">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Customer Love
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Build lasting relationships with integrated customer management and personalized service features that create memorable experiences.
              </p>
              <div className="mt-8">
                <div className="inline-flex items-center text-accent font-semibold">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sweet Success in Numbers
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              See how our artisan sweet shop management system transforms confectionery businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-card p-12 text-center rounded-lg">
              <div className="text-6xl font-bold text-primary mb-4">
                500+
              </div>
              <div className="text-2xl text-foreground font-semibold mb-3">Artisan Varieties</div>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                From classic favorites to innovative artisanal creations, manage every sweet delight
              </p>
              <div className="mt-8 w-16 h-1 bg-primary rounded-full mx-auto"></div>
            </div>
            
            <div className="bg-card p-12 text-center rounded-lg">
              <div className="text-6xl font-bold text-secondary mb-4">
                98%
              </div>
              <div className="text-2xl text-foreground font-semibold mb-3">Customer Satisfaction</div>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Our commitment to quality service and exceptional user experience in every interaction
              </p>
              <div className="mt-8 w-16 h-1 bg-secondary rounded-full mx-auto"></div>
            </div>
            
            <div className="bg-card p-12 text-center rounded-lg">
              <div className="text-6xl font-bold text-accent mb-4">
                24/7
              </div>
              <div className="text-2xl text-foreground font-semibold mb-3">System Availability</div>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Always ready when you need it most with reliable cloud infrastructure and support
              </p>
              <div className="mt-8 w-16 h-1 bg-accent rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-primary">
        <div className="max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-12">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-8">
            Ready to Sweeten Your Business?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Join thousands of artisan confectionery businesses that trust Sweet Shop for their inventory and sales management.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/sweets" className="btn btn-secondary text-xl px-10 py-5 rounded-lg flex items-center gap-3">
              <span className="text-xl">Get Started Now</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link href="/inventory" className="btn btn-outline text-xl px-10 py-5 rounded-lg flex items-center gap-3">
              <span className="text-xl">Schedule Demo</span>
            </Link>
          </div>
          
          {/* Additional Trust Elements */}
          <div className="flex justify-center items-center space-x-12 mt-16">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-white/90 font-medium">Free 14-day trial</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-white/90 font-medium">No credit card required</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-white/90 font-medium">24/7 support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}