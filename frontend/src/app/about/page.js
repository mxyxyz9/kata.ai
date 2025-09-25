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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-bounceIn mb-6">
            <Cake className="w-16 h-16 mx-auto text-pink-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Our Sweet Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '200ms'}}>
            From humble beginnings to becoming your favorite sweet destination, discover the passion and craftsmanship behind every treat we create.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Sweet Journey</h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Sweet Delights was founded in 2015 by a team of passionate confectioners who believed that every sweet treat should be a memorable experience. What started as a small family kitchen has grown into a beloved destination for sweet lovers.
                </p>
                <p className="text-lg leading-relaxed">
                  Our commitment to quality ingredients, traditional techniques, and innovative flavors has earned us recognition as one of the finest sweet shops in the region. We source the finest ingredients locally and internationally to create treats that bring joy to every occasion.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we continue our mission to spread happiness through our carefully crafted sweets, maintaining the same passion and attention to detail that has been our hallmark since day one.
                </p>
              </div>
            </div>
            <div className="animate-fadeInRight">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 morph-card">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-pink-100 rounded-2xl p-6 text-center interactive-card">
                      <Candy className="w-12 h-12 mx-auto text-pink-500 mb-3" />
                      <h3 className="font-bold text-gray-800">500+</h3>
                      <p className="text-sm text-gray-600">Sweet Varieties</p>
                    </div>
                    <div className="bg-purple-100 rounded-2xl p-6 text-center interactive-card">
                      <Heart className="w-12 h-12 mx-auto text-purple-500 mb-3" />
                      <h3 className="font-bold text-gray-800">10,000+</h3>
                      <p className="text-sm text-gray-600">Happy Customers</p>
                    </div>
                    <div className="bg-indigo-100 rounded-2xl p-6 text-center interactive-card">
                      <Award className="w-12 h-12 mx-auto text-indigo-500 mb-3" />
                      <h3 className="font-bold text-gray-800">15+</h3>
                      <p className="text-sm text-gray-600">Awards Won</p>
                    </div>
                    <div className="bg-green-100 rounded-2xl p-6 text-center interactive-card">
                      <Clock className="w-12 h-12 mx-auto text-green-500 mb-3" />
                      <h3 className="font-bold text-gray-800">9+</h3>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl interactive-card animate-cardEntrance">
              <div className="animate-bounceIn mb-6">
                <Heart className="w-16 h-16 mx-auto text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Passion for Quality</h3>
              <p className="text-gray-600">
                Every sweet treat is crafted with love and attention to detail, using only the finest ingredients.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl interactive-card animate-cardEntrance" style={{animationDelay: '200ms'}}>
              <div className="animate-bounceIn mb-6" style={{animationDelay: '200ms'}}>
                <Star className="w-16 h-16 mx-auto text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Delight</h3>
              <p className="text-gray-600">
                We strive to exceed expectations and create memorable experiences for every customer.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl interactive-card animate-cardEntrance" style={{animationDelay: '400ms'}}>
              <div className="animate-bounceIn mb-6" style={{animationDelay: '400ms'}}>
                <Coffee className="w-16 h-16 mx-auto text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation & Tradition</h3>
              <p className="text-gray-600">
                We blend traditional techniques with modern innovation to create unique sweet experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Sweet Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented artisans behind your favorite treats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-white rounded-3xl shadow-xl p-6 text-center interactive-card animate-cardEntrance" style={{animationDelay: `${index * 100}ms`}}>
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center animate-pulseGlow">
                  <Users className="w-12 h-12 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-pink-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-2">{member.experience} experience</p>
                <p className="text-sm text-purple-600 font-medium mb-3">{member.specialty}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition for our commitment to excellence
            </p>
          </div>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.year} className="flex items-center space-x-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 interactive-card animate-fadeInLeft" style={{animationDelay: `${index * 150}ms`}}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-bold text-lg">
                      {achievement.year}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800">{achievement.title}</h3>
                  </div>
                  <p className="text-purple-600 font-semibold mb-2">{achievement.organization}</p>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-6">Visit Our Sweet Shop</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the magic of our handcrafted sweets in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="sweet-button interactive-button">
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </button>
            <button className="cream-button interactive-button">
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </button>
            <button className="sweet-button interactive-button">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}