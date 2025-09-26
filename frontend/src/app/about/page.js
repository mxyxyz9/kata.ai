'use client';

import { useState, useEffect } from 'react';
import { Users, Award, Heart, Cake, Candy, Coffee, Star, Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Master Chocolatier",
      experience: "15+ years",
      specialty: "Artisan Chocolates",
      image: "/images/team/sarah.jpg",
      bio: "Sarah's passion for chocolate began in her grandmother's kitchen and has taken her around the world learning from master chocolatiers."
    },
    {
      name: "Michael Chen",
      role: "Head Pastry Chef",
      experience: "12+ years",
      specialty: "French Pastries",
      image: "/images/team/michael.jpg",
      bio: "Trained at Le Cordon Bleu Paris, Michael brings traditional French techniques to our sweet creations."
    },
    {
      name: "Emma Rodriguez",
      role: "Sugar Artist",
      experience: "10+ years",
      specialty: "Custom Cakes & Sugar Work",
      image: "/images/team/emma.jpg",
      bio: "Emma's artistic vision transforms sugar into edible masterpieces for special occasions."
    },
    {
      name: "David Kim",
      role: "Quality Control Manager",
      experience: "8+ years",
      specialty: "Quality Assurance",
      image: "/images/team/david.jpg",
      bio: "David ensures every sweet treat meets our highest standards of quality and taste."
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "Best Artisan Sweet Shop",
      organization: "National Confectioners Association",
      description: "Recognized for excellence in artisan sweet making"
    },
    {
      year: "2022",
      title: "Customer Service Excellence",
      organization: "Local Business Awards",
      description: "Outstanding customer service and community engagement"
    },
    {
      year: "2021",
      title: "Sustainable Business Award",
      organization: "Green Business Council",
      description: "Commitment to sustainable and eco-friendly practices"
    },
    {
      year: "2020",
      title: "Innovation in Confectionery",
      organization: "International Sweet Expo",
      description: "Innovative approach to traditional sweet making"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-cream-100 to-secondary-100 opacity-60"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-accent-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-bounce-in mb-8">
            <Cake className="w-24 h-24 mx-auto text-primary-600 animate-pulse" />
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 animate-fade-in bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Our Artisan Story
          </h1>
          <p className="text-2xl text-neutral-700 max-w-4xl mx-auto animate-slide-up font-light leading-relaxed" style={{animationDelay: '200ms'}}>
            From humble beginnings to becoming your favorite artisan sweet destination, discover the passion and craftsmanship behind every handcrafted treat we create.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl animate-float animate-delay-3000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left">
              <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Our Artisan Journey
              </h2>
              <div className="space-y-8 text-neutral-700">
                <p className="text-xl leading-relaxed font-light">
                  Sweet Delights was founded in 2015 by a team of passionate artisan confectioners who believed that every sweet treat should be a memorable experience. What started as a small family kitchen has grown into a beloved destination for sweet connoisseurs.
                </p>
                <p className="text-xl leading-relaxed font-light">
                  Our commitment to premium ingredients, time-honored techniques, and innovative flavors has earned us recognition as one of the finest artisan sweet shops in the region. We meticulously source the finest ingredients locally and internationally to create treats that bring joy to every occasion.
                </p>
                <p className="text-xl leading-relaxed font-light">
                  Today, we continue our mission to spread happiness through our carefully handcrafted sweets, maintaining the same passion and meticulous attention to detail that has been our hallmark since day one.
                </p>
              </div>
            </div>
            <div className="animate-slide-right">
              <div className="relative">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-10 morph-card">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
                      <Candy className="w-16 h-16 mx-auto text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-neutral-900 text-2xl mb-2">500+</h3>
                      <p className="text-sm text-neutral-600 font-medium">Artisan Varieties</p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
                      <Heart className="w-16 h-16 mx-auto text-secondary-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-neutral-900 text-2xl mb-2">10,000+</h3>
                      <p className="text-sm text-neutral-600 font-medium">Happy Customers</p>
                    </div>
                    <div className="bg-gradient-to-br from-accent-100 to-accent-50 rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
                      <Award className="w-16 h-16 mx-auto text-accent-600 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-neutral-900 text-2xl mb-2">15+</h3>
                      <p className="text-sm text-neutral-600 font-medium">Awards Won</p>
                    </div>
                    <div className="bg-gradient-to-br from-cream-100 to-cream-50 rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300">
                      <Clock className="w-16 h-16 mx-auto text-neutral-700 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-neutral-900 text-2xl mb-2">9+</h3>
                      <p className="text-sm text-neutral-600 font-medium">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100/20 rounded-full blur-3xl animate-float animate-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Our Artisan Values
            </h2>
            <p className="text-2xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              The timeless principles that guide every handcrafted creation we make
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-12 bg-gradient-to-br from-primary-50 via-cream-50 to-primary-100 rounded-3xl morph-card group hover:scale-105 transition-all duration-500 animate-slide-up">
              <div className="animate-bounce-in mb-8">
                <Heart className="w-20 h-20 mx-auto text-primary-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">Passion for Quality</h3>
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                Every artisan sweet treat is meticulously crafted with love and unwavering attention to detail, using only the finest premium ingredients sourced from around the world.
              </p>
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
            </div>
            
            <div className="text-center p-12 bg-gradient-to-br from-secondary-50 via-cream-50 to-secondary-100 rounded-3xl morph-card group hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '200ms'}}>
              <div className="animate-bounce-in mb-8" style={{animationDelay: '200ms'}}>
                <Star className="w-20 h-20 mx-auto text-secondary-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">Customer Delight</h3>
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                We strive to consistently exceed expectations and create unforgettable experiences for every valued customer who walks through our doors.
              </p>
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
            </div>
            
            <div className="text-center p-12 bg-gradient-to-br from-accent-50 via-cream-50 to-accent-100 rounded-3xl morph-card group hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '400ms'}}>
              <div className="animate-bounce-in mb-8" style={{animationDelay: '400ms'}}>
                <Coffee className="w-20 h-20 mx-auto text-accent-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">Innovation & Tradition</h3>
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                We masterfully blend traditional artisan techniques with modern culinary innovation to create uniquely exceptional sweet experiences.
              </p>
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl animate-float animate-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Meet Our Artisan Team
            </h2>
            <p className="text-2xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              The masterful artisans behind your favorite handcrafted treats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center morph-card group hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-16 h-16 text-primary-700" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{member.name}</h3>
                <p className="text-primary-600 font-semibold text-lg mb-2">{member.role}</p>
                <p className="text-sm text-neutral-500 mb-2 font-medium">{member.experience} experience</p>
                <p className="text-sm text-secondary-600 font-semibold mb-4">{member.specialty}</p>
                <p className="text-base text-neutral-600 font-light leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-100/20 rounded-full blur-3xl animate-float animate-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Our Artisan Achievements
            </h2>
            <p className="text-2xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              Recognition for our unwavering commitment to artisan excellence and craftsmanship
            </p>
          </div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={achievement.year} className="flex items-center space-x-8 bg-gradient-to-r from-primary-50 via-cream-50 to-secondary-50 rounded-3xl p-10 morph-card group hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: `${index * 150}ms`}}>
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-6 mb-4">
                    <span className="bg-primary-100 text-primary-800 px-6 py-3 rounded-full font-bold text-xl">
                      {achievement.year}
                    </span>
                    <h3 className="text-3xl font-bold text-neutral-900">{achievement.title}</h3>
                  </div>
                  <p className="text-secondary-600 font-semibold text-lg mb-3">{achievement.organization}</p>
                  <p className="text-lg text-neutral-600 font-light leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float animate-delay-2000"></div>
        
        <div className="max-w-5xl mx-auto text-center relative animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">Visit Our Artisan Sweet Shop</h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the magic of our handcrafted artisan sweets in person and discover the artistry behind every creation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="sweet-button interactive-button text-xl px-8 py-4 rounded-2xl">
              <MapPin className="w-6 h-6 mr-3" />
              Get Directions
            </button>
            <button className="cream-button interactive-button text-xl px-8 py-4 rounded-2xl">
              <Phone className="w-6 h-6 mr-3" />
              Call Us
            </button>
            <button className="sweet-button interactive-button text-xl px-8 py-4 rounded-2xl">
              <Mail className="w-6 h-6 mr-3" />
              Send Message
            </button>
          </div>
          
          {/* Additional Trust Elements */}
          <div className="flex justify-center items-center space-x-12 mt-16 animate-fade-in animate-delay-600">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">Open Daily</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">Free Parking</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">Wheelchair Accessible</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}