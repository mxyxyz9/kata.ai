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
            <HelpCircle className="w-16 h-16 mx-auto text-pink-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Sweet Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '200ms'}}>
            Find answers to all your sweet questions and get the help you need
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 shadow-xl morph-card animate-fadeInUp">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers... (e.g., shipping, ingredients, custom orders)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="sweet-input w-full pl-12 pr-4 py-4 interactive-input text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg morph-card interactive-card animate-cardEntrance">
              <Phone className="w-8 h-8 mx-auto text-pink-500 mb-3" />
              <h3 className="font-semibold text-gray-800">Call Us</h3>
              <p className="text-sm text-gray-600">(555) 123-SWEET</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg morph-card interactive-card animate-cardEntrance" style={{animationDelay: '100ms'}}>
              <Mail className="w-8 h-8 mx-auto text-purple-500 mb-3" />
              <h3 className="font-semibold text-gray-800">Email Us</h3>
              <p className="text-sm text-gray-600">support@sweetdelights.com</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg morph-card interactive-card animate-cardEntrance" style={{animationDelay: '200ms'}}>
              <Clock className="w-8 h-8 mx-auto text-green-500 mb-3" />
              <h3 className="font-semibold text-gray-800">Hours</h3>
              <p className="text-sm text-gray-600">Mon-Sat 9AM-6PM</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg morph-card interactive-card animate-cardEntrance" style={{animationDelay: '300ms'}}>
              <MapPin className="w-8 h-8 mx-auto text-orange-500 mb-3" />
              <h3 className="font-semibold text-gray-800">Visit Us</h3>
              <p className="text-sm text-gray-600">123 Sweet Street</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-16 animate-fadeInUp" style={{animationDelay: `${categoryIndex * 200}ms`}}>
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
              </div>
              
              <div className="space-y-4 stagger-children">
                {category.questions.map((item, index) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-lg morph-card interactive-card animate-cardEntrance" style={{animationDelay: `${index * 100}ms`}}>
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openItems.includes(item.id) ? (
                          <Minus className="w-5 h-5 text-pink-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-pink-500" />
                        )}
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <div className="animate-bounceIn mb-6">
            <Users className="w-16 h-16 mx-auto text-pink-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Can\'t find what you\'re looking for? Our sweet team is here to help you!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-pink-50 rounded-2xl p-6 morph-card">
              <Phone className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-pink-600 font-medium">(555) 123-SWEET</p>
              <p className="text-sm text-gray-600">Mon-Sat 9AM-6PM EST</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 morph-card">
              <Mail className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-purple-600 font-medium">support@sweetdelights.com</p>
              <p className="text-sm text-gray-600">Response within 24 hours</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 morph-card">
              <MapPin className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-green-600 font-medium">123 Sweet Street</p>
              <p className="text-sm text-gray-600">Sweet Town, ST 12345</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="sweet-button interactive-button">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </button>
            <button className="cream-button interactive-button">
              <Sparkles className="w-5 h-5 mr-2" />
              Live Chat
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <div className="animate-bounceIn mb-6">
            <Mail className="w-16 h-16 mx-auto text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Get Sweet Updates</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for sweet tips, exclusive offers, and new product announcements!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="sweet-input flex-1 interactive-input"
            />
            <button className="cream-button interactive-button px-6">
              Subscribe
              <Sparkles className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}