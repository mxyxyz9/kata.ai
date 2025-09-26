'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon, Candy, Coffee, Star, Heart } from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Shop",
      content: "123 Sweet Street, Confectionery District, Sugar City, SC 12345",
      buttonText: "Get Directions",
      color: "pink"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) 123-SWEET",
      subtitle: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
      buttonText: "Call Now",
      color: "purple"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@sweetdelights.com",
      subtitle: "We respond within 24 hours",
      buttonText: "Send Email",
      color: "indigo"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Saturday: 9:00 AM - 8:00 PM",
      subtitle: "Sunday: 10:00 AM - 6:00 PM",
      buttonText: "View Full Schedule",
      color: "green"
    }
  ];

  const colorClasses = {
    pink: {
      bg: "from-primary-50 via-cream-50 to-primary-100",
      icon: "text-primary-600",
      button: "sweet-button",
      border: "border-primary-200"
    },
    purple: {
      bg: "from-secondary-50 via-cream-50 to-secondary-100",
      icon: "text-secondary-600",
      button: "sweet-button",
      border: "border-secondary-200"
    },
    indigo: {
      bg: "from-accent-50 via-cream-50 to-accent-100",
      icon: "text-accent-600",
      button: "cream-button",
      border: "border-accent-200"
    },
    green: {
      bg: "from-neutral-50 via-cream-50 to-neutral-100",
      icon: "text-neutral-600",
      button: "sweet-button",
      border: "border-neutral-200"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-primary-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-cream-100/30 to-secondary-100/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-30 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary-200 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-cream-200 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-bounce-in mb-8">
            <MessageCircle className="w-20 h-20 mx-auto text-primary-600" />
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 animate-fade-in bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Connect With Our Artisans
          </h1>
          <p className="text-2xl text-neutral-600 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '200ms'}}>
            We'd love to hear from you! Whether you have questions about our artisan sweets, want to place a custom order, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl animate-float animate-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {contactInfo.map((info, index) => {
              const colors = colorClasses[info.color];
              return (
                <div key={info.title} className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-10 text-center morph-card group hover:scale-105 transition-all duration-500 animate-slide-up`} style={{animationDelay: `${index * 150}ms`}}>
                  <div className="animate-bounce-in mb-8 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className={`w-20 h-20 mx-auto ${colors.icon}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">{info.title}</h3>
                  <p className="text-lg text-neutral-600 mb-4 leading-relaxed">{info.content}</p>
                  {info.subtitle && <p className="text-base text-neutral-500 mb-8">{info.subtitle}</p>}
                  <button className={`${colors.button} interactive-button w-full text-lg py-4 rounded-2xl group-hover:scale-105 transition-all duration-300`}>
                    {info.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cream-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-100/20 rounded-full blur-3xl animate-float animate-delay-2000"></div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Send Us a Message
            </h2>
            <p className="text-2xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              Have a question or special request? Fill out the form below and our artisan team will get back to you within 24 hours!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50 rounded-3xl p-12 morph-card animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-neutral-700 mb-4">
                    <User className="w-5 h-5 inline mr-3" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="sweet-input w-full interactive-input text-lg py-4 px-6 rounded-2xl"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-neutral-700 mb-4">
                    <MailIcon className="w-5 h-5 inline mr-3" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="sweet-input w-full interactive-input text-lg py-4 px-6 rounded-2xl"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold text-neutral-700 mb-4">
                    <PhoneIcon className="w-5 h-5 inline mr-3" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="sweet-input w-full interactive-input text-lg py-4 px-6 rounded-2xl"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-lg font-semibold text-neutral-700 mb-4">
                    <Star className="w-5 h-5 inline mr-3" />
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="sweet-input w-full interactive-input text-lg py-4 px-6 rounded-2xl"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Custom Order</option>
                    <option value="delivery">Delivery Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-neutral-700 mb-4">
                  <MessageCircle className="w-5 h-5 inline mr-3" />
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  className="sweet-input w-full interactive-input resize-none text-lg py-4 px-6 rounded-2xl"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              {submitMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-2xl animate-fade-in">
                  <div className="flex items-center text-lg">
                    <Heart className="w-6 h-6 mr-3" />
                    {submitMessage}
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="sweet-button interactive-button px-10 py-6 text-xl disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-4"></div>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-6 h-6 mr-3" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-100/20 rounded-full blur-3xl animate-float animate-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Find Our Artisan Shop
            </h2>
            <p className="text-2xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
              Come visit our charming artisan sweet shop in person and experience the magic!
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-3xl overflow-hidden morph-card animate-slide-up">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary-100 via-cream-100 to-secondary-100 flex items-center justify-center p-12" style={{aspectRatio: '16/9'}}>
              <div className="text-center">
                <MapPinIcon className="w-32 h-32 mx-auto text-primary-600 mb-8 animate-bounce-in" />
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">Artisan Sweet Delights</h3>
                <p className="text-xl text-neutral-600 mb-6">123 Sweet Street, Artisan District</p>
                <p className="text-xl text-neutral-600 mb-8">Sugar City, SC 12345</p>
                <button className="sweet-button interactive-button text-xl px-8 py-4 rounded-2xl">
                  <MapPin className="w-6 h-6 mr-3" />
                  Open in Google Maps
                </button>
              </div>
            </div>
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
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">Stay Connected With Our Artisans</h2>
          <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Follow us on social media for the latest artisan sweet creations, behind-the-scenes content, and exclusive special offers!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold hover:bg-primary-50 transition-all duration-300 interactive-button text-lg">
              Facebook
            </button>
            <button className="bg-white text-secondary-600 px-8 py-4 rounded-2xl font-semibold hover:bg-secondary-50 transition-all duration-300 interactive-button text-lg">
              Instagram
            </button>
            <button className="bg-white text-accent-600 px-8 py-4 rounded-2xl font-semibold hover:bg-accent-50 transition-all duration-300 interactive-button text-lg">
              Twitter
            </button>
          </div>
          
          {/* Social Proof */}
          <div className="flex justify-center items-center space-x-16 mt-16 animate-fade-in animate-delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Artisan Creations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}