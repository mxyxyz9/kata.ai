'use client';

import { useState, useEffect } from 'react';
import { Search, Plus, Minus, Clock, Truck, Package, Heart, Shield, CreditCard, Gift, Mail, Phone, MapPin, Star, Candy, HelpCircle, Users, Sparkles } from 'lucide-react';

export default function FAQPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Add floating background elements styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(-20px) translateX(10px); }
        100% { transform: translateY(0px) translateX(0px); }
      }
      @keyframes float-delayed {
        0% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(15px) translateX(-15px); }
        100% { transform: translateY(0px) translateX(0px); }
      }
      @keyframes float-slow {
        0% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(-25px) translateX(5px); }
        100% { transform: translateY(0px) translateX(0px); }
      }
      @keyframes float-delayed-slow {
        0% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(20px) translateX(-10px); }
        100% { transform: translateY(0px) translateX(0px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      .animate-float-delayed {
        animation: float-delayed 8s ease-in-out infinite;
      }
      .animate-float-slow {
        animation: float-slow 10s ease-in-out infinite;
      }
      .animate-float-delayed-slow {
        animation: float-delayed-slow 12s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqCategories = [
    {
      id: 'ordering',
      title: 'Ordering & Payment',
      icon: CreditCard,
      color: 'from-pink-500 to-rose-500',
      questions: [
        {
          id: 1,
          question: 'How do I place an order?',
          answer: 'Placing an order is easy! Simply browse our sweet collection, add your favorite items to your cart, and proceed to checkout. You can order online through our website, call us directly, or visit our store. We accept all major credit cards, digital wallets, and cash payments. For large orders or custom requests, we recommend calling us directly for personalized assistance.'
        },
        {
          id: 2,
          question: 'What payment methods do you accept?',
          answer: 'We accept a wide variety of payment methods including Visa, Mastercard, American Express, Discover, Apple Pay, Google Pay, PayPal, and cash. For corporate orders, we also accept business checks and wire transfers. All online payments are processed securely through encrypted connections to protect your financial information.'
        },
        {
          id: 3,
          question: 'Can I modify or cancel my order?',
          answer: 'Yes, you can modify or cancel your order within 2 hours of placing it, as long as it hasn\'t been processed or shipped. For custom orders, modifications may be limited once production has begun. Please contact our customer service team immediately at (555) 123-SWEET or email us at orders@sweetdelights.com for assistance with order changes.'
        },
        {
          id: 4,
          question: 'Do you offer gift wrapping and personal messages?',
          answer: 'Absolutely! We offer beautiful gift wrapping services for all our products. You can choose from our elegant wrapping paper options and add a personalized message card at checkout. We also provide gift boxes, ribbons, and custom packaging for special occasions. Corporate gift wrapping is available with your company branding upon request.'
        }
      ]
    },
    {
      id: 'shipping',
      title: 'Shipping & Delivery',
      icon: Truck,
      color: 'from-purple-500 to-indigo-500',
      questions: [
        {
          id: 5,
          question: 'What are your shipping options and delivery times?',
          answer: 'We offer several shipping options: Standard shipping (3-5 business days), Express shipping (1-2 business days), and Same-day delivery within our local area. International shipping is available to select countries with delivery times varying by destination. All orders are carefully packaged to ensure freshness and protection during transit. Tracking information is provided for all shipments.'
        },
        {
          id: 6,
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to many countries worldwide! International shipping rates and delivery times vary by destination. Please note that international customers may be responsible for customs duties, taxes, and import fees. Some products may have shipping restrictions due to customs regulations. Contact us for specific international shipping inquiries and rates.'
        },
        {
          id: 7,
          question: 'How do you ensure products stay fresh during shipping?',
          answer: 'We use specialized packaging materials including insulated containers, gel ice packs, and protective cushioning to maintain optimal temperature and prevent damage. Perishable items are shipped with expedited delivery to ensure maximum freshness. Our packaging is designed to withstand various weather conditions and handling during transit.'
        },
        {
          id: 8,
          question: 'What is your shipping cost?',
          answer: 'Shipping costs vary based on order size, weight, destination, and shipping method. Standard shipping starts at $5.99 for orders under $50, with free shipping on orders over $75. Express and international shipping rates are calculated at checkout based on your location and order details. We frequently offer free shipping promotions, so check our website for current offers.'
        }
      ]
    },
    {
      id: 'products',
      title: 'Products & Ingredients',
      icon: Package,
      color: 'from-green-500 to-teal-500',
      questions: [
        {
          id: 9,
          question: 'Do you offer sugar-free or dietary restriction options?',
          answer: 'Yes! We offer a variety of options for different dietary needs including sugar-free, gluten-free, vegan, keto-friendly, and nut-free products. Each product page clearly lists ingredients and dietary information. Our staff is trained to handle allergen concerns, and we maintain strict protocols to prevent cross-contamination. Please contact us for specific dietary requirements or custom orders.'
        },
        {
          id: 10,
          question: 'Are your products made with natural ingredients?',
          answer: 'We prioritize using high-quality, natural ingredients whenever possible. Many of our products are made with organic ingredients, natural flavorings, and no artificial preservatives. We source locally when available and work with trusted suppliers who share our commitment to quality. Ingredient lists are available for all products, and we\'re happy to answer questions about specific ingredients.'
        },
        {
          id: 11,
          question: 'How long do your sweets stay fresh?',
          answer: 'Freshness varies by product type. Chocolates and truffles typically stay fresh for 2-3 weeks when stored properly. Hard candies and caramels can last 1-2 months. Each product comes with specific storage instructions and expiration dates. We recommend storing sweets in a cool, dry place away from direct sunlight. Refrigeration may be required for some items, which will be clearly indicated on the packaging.'
        },
        {
          id: 12,
          question: 'Can I request custom flavors or designs?',
          answer: 'Absolutely! We love creating custom sweets for special occasions. Whether it\'s unique flavor combinations, specific designs, or personalized packaging, our team can bring your vision to life. Custom orders require advance notice, typically 1-2 weeks depending on complexity. Contact our custom orders team to discuss your ideas and receive a quote.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Services & Events',
      icon: Gift,
      color: 'from-orange-500 to-red-500',
      questions: [
        {
          id: 13,
          question: 'Do you offer catering services for events?',
          answer: 'Yes! We provide comprehensive catering services for weddings, corporate events, birthday parties, and other special occasions. Our services include sweet tables, dessert bars, candy buffets, and custom sweet favors. We work with you to create a menu that matches your theme and budget. Our team handles setup, service, and cleanup, ensuring a stress-free experience for your event.'
        },
        {
          id: 14,
          question: 'Can you create custom gift baskets?',
          answer: 'We specialize in creating beautiful, customized gift baskets for any occasion. Choose from our pre-designed options or work with our team to create a completely unique basket. We can include specific products, colors, themes, and add personalized messages or corporate branding. Gift baskets are perfect for corporate gifts, holidays, thank you presents, and special celebrations.'
        },
        {
          id: 15,
          question: 'Do you offer subscription boxes?',
          answer: 'Yes! Our Sweet Subscription Box delivers a curated selection of our finest treats to your door monthly. Each box features seasonal favorites, new products, and exclusive items not available in our regular store. Subscriptions are available in 3, 6, and 12-month options, with discounts for longer commitments. Perfect for sweet lovers or as a gift that keeps on giving.'
        },
        {
          id: 16,
          question: 'Can you accommodate large corporate orders?',
          answer: 'We regularly handle large corporate orders for events, employee gifts, and client appreciation. Our corporate services include bulk pricing, custom packaging with company branding, scheduled delivery, and dedicated account management. We can accommodate orders of any size and work within your timeline and budget requirements. Contact our corporate sales team for a customized quote.'
        }
      ]
    },
    {
      id: 'support',
      title: 'Customer Support',
      icon: HelpCircle,
      color: 'from-blue-500 to-cyan-500',
      questions: [
        {
          id: 17,
          question: 'How can I contact customer service?',
          answer: 'Our customer service team is available Monday through Saturday, 9 AM to 6 PM EST. You can reach us by phone at (555) 123-SWEET, email at support@sweetdelights.com, or through our website\'s live chat feature. For urgent matters, we recommend calling. We strive to respond to all inquiries within 24 hours and provide excellent service to every customer.'
        },
        {
          id: 18,
          question: 'What is your return and refund policy?',
          answer: 'We stand behind the quality of our products. If you\'re not completely satisfied, please contact us within 7 days of receiving your order. Due to the perishable nature of our products, returns are handled on a case-by-case basis. Refunds or replacements are provided for damaged or defective items. Custom orders are generally non-refundable once production has begun. We work with customers to ensure satisfaction with every purchase.'
        },
        {
          id: 19,
          question: 'Do you have a loyalty program?',
          answer: 'Yes! Our Sweet Rewards program offers points for every purchase, birthday bonuses, exclusive member discounts, and early access to new products. Members earn 1 point for every $1 spent, with bonus points for referrals and special promotions. Points can be redeemed for discounts, free products, and exclusive experiences. Sign up is free and can be done online or in-store.'
        },
        {
          id: 20,
          question: 'How do I track my order status?',
          answer: 'Once your order is processed, you\'ll receive an email with tracking information and estimated delivery date. You can track your order through our website using your order number and email address. For any questions about your order status, contact our customer service team with your order number. We provide regular updates throughout the fulfillment and shipping process.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-cream-50 to-secondary-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary-200/40 to-secondary-200/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-cream-200/40 to-accent-200/40 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-gradient-to-br from-secondary-200/30 to-primary-200/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-br from-accent-200/30 to-cream-200/30 rounded-full blur-3xl animate-float-delayed-slow"></div>
      </div>
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-cream-100 to-secondary-100 opacity-60"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-primary-200/30 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="animate-bounce-in mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <HelpCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-neutral-900 mb-6 animate-slide-up bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Sweet Help Center
          </h1>
          <p className="text-2xl text-neutral-600 max-w-4xl mx-auto animate-slide-up font-light leading-relaxed" style={{animationDelay: '200ms'}}>
            Find answers to all your sweet questions and get the help you need with our comprehensive FAQ
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl morph-card animate-slide-up">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-neutral-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for answers... (e.g., shipping, ingredients, custom orders)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 text-lg rounded-2xl border-2 border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-300 bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl morph-card group hover:scale-105 transition-all duration-500 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-neutral-800 text-lg mb-2">Call Us</h3>
              <p className="text-neutral-600 font-medium">(555) 123-SWEET</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl morph-card group hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '100ms'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-neutral-800 text-lg mb-2">Email Us</h3>
              <p className="text-neutral-600 font-medium">support@sweetdelights.com</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl morph-card group hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '200ms'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-neutral-800 text-lg mb-2">Hours</h3>
              <p className="text-neutral-600 font-medium">Mon-Sat 9AM-6PM</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl morph-card group hover:scale-105 transition-all duration-500 animate-slide-up" style={{animationDelay: '300ms'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-neutral-800 text-lg mb-2">Visit Us</h3>
              <p className="text-neutral-600 font-medium">123 Sweet Street</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-20 animate-slide-up" style={{animationDelay: `${categoryIndex * 200}ms`}}>
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${category.color} mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-neutral-900 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">{category.title}</h2>
              </div>
              
              <div className="space-y-6 stagger-children">
                {category.questions.map((item, index) => (
                  <div key={item.id} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl morph-card group animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 rounded-3xl transition-all duration-300 group"
                    >
                      <h3 className="text-xl font-semibold text-neutral-800 pr-6 group-hover:text-primary-600 transition-colors duration-300">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {openItems.includes(item.id) ? (
                          <Minus className="w-5 h-5 text-primary-600" />
                        ) : (
                          <Plus className="w-5 h-5 text-secondary-600" />
                        )}
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-8">
                        <div className="border-t border-neutral-100 pt-6">
                          <p className="text-neutral-600 leading-relaxed text-lg font-light">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-100 via-cream-100 to-secondary-100">
        <div className="max-w-6xl mx-auto text-center animate-slide-up">
          <div className="animate-bounce-in mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Still Need Help?</h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Can't find what you're looking for? Our sweet team is here to help you with any questions or concerns!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 morph-card shadow-2xl group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-neutral-800 text-xl mb-3">Call Us</h3>
              <p className="text-primary-600 font-bold text-lg mb-2">(555) 123-SWEET</p>
              <p className="text-neutral-500 font-medium">Mon-Sat 9AM-6PM EST</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 morph-card shadow-2xl group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-neutral-800 text-xl mb-3">Email Us</h3>
              <p className="text-secondary-600 font-bold text-lg mb-2">support@sweetdelights.com</p>
              <p className="text-neutral-500 font-medium">Response within 24 hours</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 morph-card shadow-2xl group hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-neutral-800 text-xl mb-3">Visit Us</h3>
              <p className="text-accent-600 font-bold text-lg mb-2">123 Sweet Street</p>
              <p className="text-neutral-500 font-medium">Sweet Town, ST 12345</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="sweet-button interactive-button text-lg px-8 py-4 rounded-2xl group">
              <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Send Message
            </button>
            <button className="cream-button interactive-button text-lg px-8 py-4 rounded-2xl group">
              <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Live Chat
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-br from-primary-200 via-cream-200 to-secondary-200">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-slide-up">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Mail className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-neutral-900 mb-6 bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent">Stay Sweet with Our Newsletter</h2>
          <p className="text-xl text-neutral-700 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Get exclusive offers, new product updates, and sweet surprises delivered to your inbox! Join our community of sweet lovers.
          </p>
          <form className="max-w-lg mx-auto flex gap-4 mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-2xl border-2 border-neutral-300 focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg"
            />
            <button className="purple-button interactive-button text-lg px-8 py-4 rounded-2xl group">
              <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Subscribe
            </button>
          </form>
          <p className="text-base text-neutral-600 font-medium">
            We respect your privacy. Unsubscribe at any time. No spam, just sweet treats!
          </p>
        </div>
      </section>
    </div>
  );
}