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
      bg: "from-pink-50 to-pink-100",
      icon: "text-pink-500",
      button: "sweet-button",
      border: "border-pink-200"
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      icon: "text-purple-500",
      button: "sweet-button",
      border: "border-purple-200"
    },
    indigo: {
      bg: "from-indigo-50 to-indigo-100",
      icon: "text-indigo-500",
      button: "cream-button",
      border: "border-indigo-200"
    },
    green: {
      bg: "from-green-50 to-green-100",
      icon: "text-green-500",
      button: "sweet-button",
      border: "border-green-200"
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
            <MessageCircle className="w-16 h-16 mx-auto text-pink-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '200ms'}}>
            We'd love to hear from you! Whether you have questions about our sweets, want to place a custom order, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {contactInfo.map((info, index) => {
              const colors = colorClasses[info.color];
              return (
                <div key={info.title} className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-8 text-center interactive-card animate-cardEntrance`} style={{animationDelay: `${index * 100}ms`}}>
                  <div className="animate-bounceIn mb-6">
                    <info.icon className={`w-16 h-16 mx-auto ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                  <p className="text-gray-600 mb-2">{info.content}</p>
                  {info.subtitle && <p className="text-sm text-gray-500 mb-6">{info.subtitle}</p>}
                  <button className={`${colors.button} interactive-button w-full`}>
                    {info.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Have a question or special request? Fill out the form below and we'll get back to you soon!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-3xl p-8 morph-card animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="sweet-input w-full interactive-input"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    <MailIcon className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="sweet-input w-full interactive-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    <PhoneIcon className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="sweet-input w-full interactive-input"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Star className="w-4 h-4 inline mr-2" />
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="sweet-input w-full interactive-input"
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
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="sweet-input w-full interactive-input resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              {submitMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl animate-fadeInUp">
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    {submitMessage}
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="sweet-button interactive-button px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us Here</h2>
            <p className="text-xl text-gray-600">
              Come visit our charming sweet shop in person!
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden morph-card animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center" style={{aspectRatio: '16/9'}}>
              <div className="text-center">
                <MapPinIcon className="w-24 h-24 mx-auto text-pink-500 mb-4 animate-bounceIn" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Sweet Delights Location</h3>
                <p className="text-gray-600 mb-4">123 Sweet Street, Confectionery District</p>
                <p className="text-gray-600 mb-6">Sugar City, SC 12345</p>
                <button className="sweet-button interactive-button">
                  <MapPin className="w-5 h-5 mr-2" />
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Connected</h2>
          <p className="text-xl text-white/90 mb-8">
            Follow us on social media for the latest sweet creations and special offers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all duration-200 interactive-button">
              Facebook
            </button>
            <button className="bg-white text-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-200 interactive-button">
              Instagram
            </button>
            <button className="bg-white text-indigo-500 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all duration-200 interactive-button">
              Twitter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}