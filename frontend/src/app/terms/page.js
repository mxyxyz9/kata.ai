'use client';

import { useState, useEffect } from 'react';
import { FileText, CheckCircle, AlertTriangle, Clock, CreditCard, Truck, Shield, Users, Mail, Phone, MapPin, ArrowRight, Sparkles, Candy } from 'lucide-react';

export default function TermsOfServicePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    { id: 'overview', title: 'Overview', icon: FileText },
    { id: 'use', title: 'Use of Service', icon: CheckCircle },
    { id: 'orders', title: 'Orders & Payment', icon: CreditCard },
    { id: 'shipping', title: 'Shipping & Returns', icon: Truck },
    { id: 'intellectual', title: 'Intellectual Property', icon: Shield },
    { id: 'liability', title: 'Liability', icon: AlertTriangle },
    { id: 'termination', title: 'Termination', icon: Clock },
    { id: 'contact', title: 'Contact', icon: Mail }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            <FileText className="w-16 h-16 mx-auto text-pink-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '200ms'}}>
            Please read these terms carefully before using our services and website
          </p>
          <div className="mt-8 animate-fadeInUp" style={{animationDelay: '400ms'}}>
            <p className="text-sm text-gray-500">
              Last updated: <span className="font-semibold">January 1, 2024</span>
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-pink-100 text-pink-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <div id="overview" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Welcome to Sweet Delights</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the Sweet Delights website, mobile applications, and all related services (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms.
              </p>
              
              <div className="bg-pink-50 rounded-2xl p-6 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Important Notice</h3>
                    <p className="text-gray-600">
                      Please read these Terms carefully. If you do not agree to these Terms, you may not access or use our Service. Your continued use of the Service constitutes your acceptance of these Terms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Eligibility</h3>
                  <p className="text-gray-600">You must be at least 18 years old or have permission from a parent or guardian to use our Service.</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Updates to Terms</h3>
                  <p className="text-gray-600">We may update these Terms from time to time. We will notify you of any material changes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Use of Service */}
          <div id="use" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Use of Service</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Permitted Uses</h3>
                  <p className="text-gray-600 mb-3">You may use our Service to:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Browse and purchase our sweet products</li>
                    <li>Create and manage your account</li>
                    <li>Read our blog and educational content</li>
                    <li>Contact our customer service team</li>
                    <li>Participate in promotions and loyalty programs</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Uses</h3>
                  <p className="text-gray-600 mb-3">You may not:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use the Service for any illegal purpose</li>
                    <li>Interfere with or disrupt the Service</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use automated means to access the Service</li>
                    <li>Upload or transmit malicious code</li>
                    <li>Impersonate another person or entity</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-2xl p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      <strong>Important:</strong> We reserve the right to suspend or terminate your access to the Service if you violate these Terms or engage in any prohibited activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orders & Payment */}
          <div id="orders" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Orders & Payment</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-purple-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Order Acceptance</h3>
                  <p className="text-gray-600">All orders are subject to acceptance by us. We reserve the right to refuse or cancel any order for any reason.</p>
                </div>
                <div className="bg-indigo-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Pricing</h3>
                  <p className="text-gray-600">Prices are subject to change without notice. The price charged will be the price in effect at the time of order placement.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Terms</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Accepted Payment Methods</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                        <li>Credit cards (Visa, Mastercard, American Express)</li>
                        <li>Debit cards</li>
                        <li>Digital wallets (Apple Pay, Google Pay)</li>
                        <li>PayPal</li>
                        <li>Cash (in-store only)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Payment Processing</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                        <li>Payment is due at the time of order</li>
                        <li>All transactions are processed securely</li>
                        <li>We do not store complete payment card information</li>
                        <li>International orders may incur additional fees</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Modifications & Cancellations</h3>
                  <p className="text-gray-600 mb-3">Orders may be modified or cancelled within 2 hours of placement, subject to the following conditions:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Custom orders may have different modification policies</li>
                    <li>Orders that have already been processed may not be cancelled</li>
                    <li>Refunds for cancelled orders will be processed within 5-7 business days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping & Returns */}
          <div id="shipping" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Shipping & Returns</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-orange-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Shipping Options</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Standard shipping (3-5 business days)</li>
                    <li>Express shipping (1-2 business days)</li>
                    <li>Same-day delivery (local area only)</li>
                    <li>International shipping (select countries)</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Return Policy</h3>
                  <p className="text-gray-600 text-sm mb-2">Due to the perishable nature of our products, returns are handled on a case-by-case basis.</p>
                  <p className="text-gray-600 text-sm">Please contact us within 7 days if you have any issues with your order.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Shipping Terms</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• Shipping costs are calculated at checkout based on order size, weight, and destination</p>
                  <p>• Free shipping is available on orders over $75 (domestic orders only)</p>
                  <p>• Delivery times are estimates and not guaranteed</p>
                  <p>• We are not responsible for delays caused by carriers or customs</p>
                  <p>• International customers are responsible for customs duties and taxes</p>
                  <p>• Products are carefully packaged to ensure freshness during transit</p>
                </div>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div id="intellectual" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Intellectual Property</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Ownership</h3>
                  <p className="text-gray-600">
                    All content, features, and functionality of the Service, including but not limited to text, graphics, logos, images, and software, are owned by Sweet Delights or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-cyan-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Trademarks</h3>
                    <p className="text-gray-600 text-sm">
                      Sweet Delights, our logos, and all related names, logos, product and service names, designs, and slogans are trademarks of Sweet Delights or our affiliates.
                    </p>
                  </div>
                  <div className="bg-indigo-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-800 mb-3">Copyright</h3>
                    <p className="text-gray-600 text-sm">
                      All content on the Service is copyrighted and may not be used without our express written permission.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-2xl p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Prohibited Use</h3>
                      <p className="text-gray-600 text-sm">
                        You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service without our prior written consent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liability */}
          <div id="liability" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Limitation of Liability</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Disclaimer of Warranties</h3>
                  <p className="text-gray-600 mb-3">
                    The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, express or implied, regarding the Service or products sold through the Service.
                  </p>
                  <p className="text-gray-600 text-sm">
                    We do not guarantee that the Service will be uninterrupted, secure, or error-free, nor do we make any warranty as to the accuracy, reliability, or completeness of any content or information provided through the Service.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Limitation of Damages</h3>
                  <p className="text-gray-600 mb-3">
                    To the fullest extent permitted by law, Sweet Delights shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Our total liability to you for any damages shall not exceed the amount you paid for products or services through the Service in the 12 months preceding the claim.
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Liability</h3>
                  <p className="text-gray-600 text-sm">
                    Our products are intended for consumption by the general public. However, individuals with specific allergies, dietary restrictions, or health conditions should carefully review product ingredients and consult with healthcare providers as necessary. We are not liable for any adverse reactions or health issues resulting from product consumption.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div id="termination" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Termination</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Termination by Us</h3>
                  <p className="text-gray-600 mb-3">
                    We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Upon termination, your right to use the Service will immediately cease, and we may delete your account and any related content or information.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Termination by You</h3>
                  <p className="text-gray-600 mb-3">
                    You may terminate your account at any time by contacting our customer service team or using the account deletion feature in your account settings.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Upon termination by you, we will cease using your personal information in accordance with our Privacy Policy, except as necessary to comply with legal obligations.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Survival</h3>
                  <p className="text-gray-600 text-sm">
                    All provisions of these Terms that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity provisions, and limitations of liability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">legal@sweetdelights.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">(555) 123-SWEET ext. 101</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Legal Department</h3>
                      <p className="text-gray-600">
                        Sweet Delights Legal Affairs<br />
                        123 Sweet Street<br />
                        Sweet Town, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Legal Counsel</h3>
                  <p className="text-gray-600 mb-3">For legal matters and formal notices:</p>
                  <p className="text-gray-600 text-sm">
                    Sweet Delights Legal Department<br />
                    Attn: General Counsel<br />
                    Email: legal@sweetdelights.com<br />
                    Response time: 5-7 business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="animate-fadeInUp">
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-8 text-white text-center">
              <div className="animate-bounceIn mb-4">
                <Sparkles className="w-12 h-12 mx-auto" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank You for Choosing Sweet Delights</h2>
              <p className="text-lg opacity-90 mb-6">
                We appreciate your business and trust in our products and services. We're committed to providing you with the best possible experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cream-button interactive-button">
                  Back to Home
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="sweet-button interactive-button">
                  Contact Support
                  <Users className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}