'use client';

import { useState, useEffect } from 'react';
import { Truck, Calendar, Gift, Heart, Clock, Users, Star, Check, Cake, Coffee, Candy, Sparkles, Package, Phone, Mail, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 'delivery',
      title: "Sweet Delivery Service",
      icon: Truck,
      description: "Fresh sweets delivered right to your doorstep with our premium delivery service.",
      features: [
        "Same-day delivery available",
        "Temperature-controlled transport",
        "Gift wrapping included",
        "Real-time tracking",
        "Contactless delivery options",
        "Nationwide shipping"
      ],
      pricing: [
        { name: "Local Delivery", price: "$5.99", description: "Within 10 miles" },
        { name: "Express Delivery", price: "$12.99", description: "Same-day service" },
        { name: "Nationwide Shipping", price: "$15.99+", description: "2-3 business days" }
      ],
      cta: "Order Delivery Now",
      color: "pink"
    },
    {
      id: 'catering',
      title: "Event Catering",
      icon: Calendar,
      description: "Professional catering services for weddings, corporate events, and special occasions.",
      features: [
        "Custom dessert tables",
        "Professional setup service",
        "On-site attendants",
        "Dietary accommodations",
        "Themed presentations",
        "Full-service packages"
      ],
      pricing: [
        { name: "Small Events", price: "$299+", description: "Up to 50 guests" },
        { name: "Medium Events", price: "$599+", description: "50-150 guests" },
        { name: "Large Events", price: "$999+", description: "150+ guests" }
      ],
      cta: "Book Catering",
      color: "purple"
    },
    {
      id: 'custom',
      title: "Custom Sweet Creations",
      icon: Gift,
      description: "Personalized sweet treats designed specifically for your special moments.",
      features: [
        "Custom flavors and designs",
        "Personalized packaging",
        "Corporate branding",
        "Photo printing on sweets",
        "Unique gift combinations",
        "Seasonal specialties"
      ],
      pricing: [
        { name: "Basic Custom", price: "$25+", description: "Simple customization" },
        { name: "Premium Custom", price: "$75+", description: "Complex designs" },
        { name: "Luxury Custom", price: "$150+", description: "Elaborate creations" }
      ],
      cta: "Start Custom Order",
      color: "indigo"
    },
    {
      id: 'subscription',
      title: "Sweet Subscription Box",
      icon: Package,
      description: "Monthly curated boxes of our finest seasonal sweets delivered to your door.",
      features: [
        "Monthly themed boxes",
        "Exclusive flavors",
        "Early access to new items",
        "Member-only discounts",
        "Flexible delivery schedule",
        "Gift subscription options"
      ],
      pricing: [
        { name: "Monthly Box", price: "$39.99", description: "Month-to-month" },
        { name: "3-Month Plan", price: "$109.99", description: "Save $10" },
        { name: "Annual Plan", price: "$399.99", description: "Save $80" }
      ],
      cta: "Subscribe Now",
      color: "green"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description: "Discuss your needs and preferences with our expert team",
      icon: Phone,
      color: "pink"
    },
    {
      step: 2,
      title: "Planning",
      description: "We'll create a customized plan tailored to your requirements",
      icon: Calendar,
      color: "purple"
    },
    {
      step: 3,
      title: "Creation",
      description: "Our artisans craft your sweets with precision and care",
      icon: Cake,
      color: "indigo"
    },
    {
      step: 4,
      title: "Delivery",
      description: "Fresh sweets delivered to your specified location",
      icon: Truck,
      color: "green"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      event: "Wedding Reception",
      rating: 5,
      comment: "The dessert table was absolutely stunning! Our guests couldn't stop talking about the beautiful presentation and delicious sweets. The team was professional and attentive throughout the entire event.",
      service: "Event Catering"
    },
    {
      name: "Michael Chen",
      event: "Corporate Event",
      rating: 5,
      comment: "Outstanding service for our company anniversary. The custom-branded sweets were a huge hit with our clients and employees. Highly recommend their catering services!",
      service: "Corporate Catering"
    },
    {
      name: "Emma Rodriguez",
      event: "Birthday Party",
      rating: 5,
      comment: "I ordered a custom cake and sweet favors for my daughter's birthday. Everything was perfect - the designs were exactly what we wanted and tasted amazing!",
      service: "Custom Creations"
    }
  ];

  const colorClasses = {
    pink: {
      bg: "from-primary-50 to-cream-100",
      icon: "text-primary-600",
      button: "sweet-button",
      border: "border-primary-200",
      gradient: "from-primary-500 to-primary-600"
    },
    purple: {
      bg: "from-secondary-50 to-cream-100",
      icon: "text-secondary-600",
      button: "sweet-button",
      border: "border-secondary-200",
      gradient: "from-secondary-500 to-secondary-600"
    },
    indigo: {
      bg: "from-accent-50 to-cream-100",
      icon: "text-accent-600",
      button: "cream-button",
      border: "border-accent-200",
      gradient: "from-accent-500 to-accent-600"
    },
    green: {
      bg: "from-neutral-50 to-cream-100",
      icon: "text-neutral-600",
      button: "sweet-button",
      border: "border-neutral-200",
      gradient: "from-neutral-500 to-neutral-600"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-200/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-secondary-200/30 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-accent-200/30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-neutral-200/30 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="animate-bounce-in mb-8">
            <Sparkles className="w-24 h-24 mx-auto text-primary-500" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Our Sweet Services
            </span>
          </h1>
          <p className="text-2xl text-neutral-600 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '200ms'}}>
            From artisan delivery to custom creations, we offer a range of services to make your sweet dreams come true.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Premium Services
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover our artisan-crafted services designed to bring sweetness to every occasion
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const colors = colorClasses[service.color];
              return (
                <div key={service.id} className={`morph-card bg-gradient-to-br ${colors.bg} p-10 group hover:scale-105 hover:shadow-3xl transition-all duration-500 animate-slide-up`} style={{animationDelay: `${index * 200}ms`}}>
                  <div className="flex items-center mb-8">
                    <div className="animate-bounce-in mr-6">
                      <service.icon className={`w-16 h-16 ${colors.icon} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-neutral-800 mb-3">{service.title}</h3>
                      <p className="text-lg text-neutral-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-neutral-800 mb-4">Premium Features:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-base text-neutral-600">
                          <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-neutral-800 mb-4">Pricing Options:</h4>
                    <div className="space-y-3">
                      {service.pricing.map((price, idx) => (
                        <div key={idx} className="flex justify-between items-center p-4 bg-white/70 rounded-2xl hover:bg-white transition-colors duration-300">
                          <div>
                            <span className="font-semibold text-neutral-800 text-lg">{price.name}</span>
                            <p className="text-neutral-600">{price.description}</p>
                          </div>
                          <span className={`font-bold text-xl ${colors.icon}`}>{price.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`${colors.button} w-full text-lg py-4 px-8 rounded-2xl group`}>
                    {service.cta}
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Our Artisan Process
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our time-honored process to bring handcrafted sweetness to your door
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => {
              const colors = colorClasses[step.color];
              return (
                <div key={step.step} className="text-center group hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
                  <div className={`w-24 h-24 ${colors.icon} mx-auto mb-8 bg-gradient-to-br ${colors.bg} rounded-3xl flex items-center justify-center animate-bounce-in group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-12 h-12" />
                  </div>
                  <div className={`w-12 h-12 ${colors.icon} mx-auto mb-6 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse`}>
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Customer Love
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our delighted customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="morph-card bg-white p-10 group hover:scale-105 hover:shadow-3xl transition-all duration-500 animate-slide-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-600 mb-8 italic text-lg leading-relaxed">"{testimonial.comment}"</p>
                <div className="border-t border-neutral-200 pt-6">
                  <p className="font-bold text-neutral-800 text-lg">{testimonial.name}</p>
                  <p className="text-secondary-600 font-medium">{testimonial.event}</p>
                  <p className="text-sm text-neutral-500 mt-2">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-6xl font-bold text-white mb-8">Ready to Experience Our Artisan Services?</h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Contact us today to discuss how we can make your next event or celebration extra special with our handcrafted sweets!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="cream-button text-lg py-4 px-10 rounded-2xl group">
              <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Call Now
            </button>
            <button className="sweet-button text-lg py-4 px-10 rounded-2xl group">
              <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Send Message
            </button>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-white/80">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <p className="font-semibold">24/7 Support</p>
              <p className="text-sm opacity-80">Always here to help</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <p className="font-semibold">Expert Team</p>
              <p className="text-sm opacity-80">Skilled artisans ready</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <p className="font-semibold">Satisfaction Guaranteed</p>
              <p className="text-sm opacity-80">Love it or we'll make it right</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}