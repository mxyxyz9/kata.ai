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
      bg: "from-pink-50 to-pink-100",
      icon: "text-pink-500",
      button: "sweet-button",
      border: "border-pink-200",
      gradient: "from-pink-500 to-pink-600"
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      icon: "text-purple-500",
      button: "sweet-button",
      border: "border-purple-200",
      gradient: "from-purple-500 to-purple-600"
    },
    indigo: {
      bg: "from-indigo-50 to-indigo-100",
      icon: "text-indigo-500",
      button: "cream-button",
      border: "border-indigo-200",
      gradient: "from-indigo-500 to-indigo-600"
    },
    green: {
      bg: "from-green-50 to-green-100",
      icon: "text-green-500",
      button: "sweet-button",
      border: "border-green-200",
      gradient: "from-green-500 to-green-600"
    }
  };

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
            <Sparkles className="w-16 h-16 mx-auto text-pink-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Our Sweet Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '200ms'}}>
            From delivery to custom creations, we offer a range of services to make your sweet dreams come true.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 stagger-children">
            {services.map((service, index) => {
              const colors = colorClasses[service.color];
              return (
                <div key={service.id} className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-8 interactive-card animate-cardEntrance`} style={{animationDelay: `${index * 150}ms`}}>
                  <div className="flex items-center mb-6">
                    <div className="animate-bounceIn">
                      <service.icon className={`w-12 h-12 ${colors.icon} mr-4`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Pricing Options:</h4>
                    <div className="space-y-2">
                      {service.pricing.map((price, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                          <div>
                            <span className="font-medium text-gray-800">{price.name}</span>
                            <p className="text-sm text-gray-600">{price.description}</p>
                          </div>
                          <span className={`font-bold ${colors.icon}`}>{price.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`${colors.button} w-full interactive-button`}>
                    {service.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Our simple process to bring sweetness to your door
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {processSteps.map((step, index) => {
              const colors = colorClasses[step.color];
              return (
                <div key={step.step} className="text-center interactive-card animate-cardEntrance" style={{animationDelay: `${index * 150}ms`}}>
                  <div className={`w-20 h-20 ${colors.icon} mx-auto mb-6 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center animate-bounceIn`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className={`w-10 h-10 ${colors.icon} mx-auto mb-4 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center text-white font-bold`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl interactive-card animate-cardEntrance" style={{animationDelay: `${index * 150}ms`}}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-purple-600">{testimonial.event}</p>
                  <p className="text-xs text-gray-500">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss how we can make your next event or celebration extra special!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="sweet-button interactive-button">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
            <button className="cream-button interactive-button">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}