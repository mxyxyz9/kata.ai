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

  const faqData = {
    'Ordering & Shipping': [
      { q: 'How do I place an order?', a: 'You can place an order directly through our website by adding items to your cart and proceeding to checkout.', icon: <CreditCard /> },
      { q: 'What are your shipping options?', a: 'We offer standard, expedited, and overnight shipping. Costs and delivery times vary by location.', icon: <Truck /> },
      { q: 'Can I track my order?', a: 'Yes, you will receive a tracking number via email once your order has shipped.', icon: <Package /> },
    ],
    'Products & Ingredients': [
      { q: 'Are your sweets handmade?', a: 'Absolutely! All our sweets are handcrafted with love and the finest ingredients.', icon: <Heart /> },
      { q: 'Do you offer vegan or gluten-free options?', a: 'Yes, we have a dedicated selection of vegan and gluten-free treats. Look for the special icons on our product pages.', icon: <Sparkles /> },
      { q: 'Where do you source your ingredients?', a: 'We prioritize local and organic ingredients whenever possible to ensure the highest quality.', icon: <Candy /> },
    ],
    'Account & Support': [
      { q: 'How do I create an account?', a: 'You can create an account during checkout or by clicking the “Sign Up” button on our homepage.', icon: <Users /> },
      { q: 'What is your return policy?', a: 'Due to the perishable nature of our products, we do not accept returns. However, if you have an issue with your order, please contact us.', icon: <Shield /> },
      { q: 'How can I contact customer support?', a: 'You can reach us via email at support@sweetshop.com or by phone at 1-800-S-W-E-E-T-S.', icon: <Mail /> },
    ],
  };

  const toggleItem = (index) => {
    setOpenItems(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const filteredFaqData = Object.keys(faqData).reduce((acc, category) => {
    const filteredQuestions = faqData[category].filter(item =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredQuestions.length > 0) {
      acc[category] = filteredQuestions;
    }
    return acc;
  }, {});

  return (
    <div className={`min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50 p-4 sm:p-6 lg:p-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="mx-auto h-16 w-16 text-primary animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mt-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground mt-2">Find answers to common questions about our sweets, shipping, and more.</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={24} />
          <input
            type="text"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-4 py-4 text-lg border-2 border-neutral-200 rounded-full bg-white shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-10">
          {Object.keys(filteredFaqData).map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                {faqData[category][0].icon && <span className="mr-3">{faqData[category][0].icon}</span>}
                {category}
              </h2>
              <div className="space-y-4">
                {filteredFaqData[category].map((item, itemIndex) => {
                  const globalIndex = `${catIndex}-${itemIndex}`;
                  const isOpen = openItems.includes(globalIndex);
                  return (
                    <div key={globalIndex} className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full flex justify-between items-center text-left p-6 font-semibold text-lg text-foreground"
                      >
                        <span>{item.q}</span>
                        {isOpen ? <Minus className="text-primary" /> : <Plus className="text-muted-foreground" />}
                      </button>
                      <div className={`transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                        <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {Object.keys(filteredFaqData).length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No questions found. Try a different search term!</p>
          </div>
        )}

        {/* Contact Us Section */}
        <div className="mt-20 text-center bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
            <p className="text-lg text-muted-foreground mb-6">Our support team is here to help you with anything you need.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="mailto:support@sweetshop.com" className="flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    <Mail /> Email Us
                </a>
                <a href="tel:1-800-S-W-E-E-T-S" className="flex items-center gap-3 px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                    <Phone /> Call Us
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}