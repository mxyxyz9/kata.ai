'use client';

import { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Database, Cookie, Mail, Phone, MapPin, Calendar, User, CheckCircle, AlertCircle, ArrowRight, Sparkles, Candy } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    { id: 'overview', title: 'Overview', icon: Shield },
    { id: 'information', title: 'Information We Collect', icon: Database },
    { id: 'usage', title: 'How We Use Information', icon: Eye },
    { id: 'sharing', title: 'Information Sharing', icon: User },
    { id: 'security', title: 'Data Security', icon: Lock },
    { id: 'cookies', title: 'Cookies & Tracking', icon: Cookie },
    { id: 'rights', title: 'Your Rights', icon: CheckCircle },
    { id: 'contact', title: 'Contact Us', icon: Mail }
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
            <Shield className="w-16 h-16 mx-auto text-pink-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fadeInUp">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '200ms'}}>
            Your privacy matters to us. Learn how we protect and respect your personal information.
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
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Privacy Commitment</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Sweet Delights, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe in transparency and want you to understand exactly how your information is handled. By using our website and services, you agree to the practices described in this policy.
              </p>
              <div className="bg-pink-50 rounded-2xl p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Important Notice</h3>
                    <p className="text-gray-600">
                      This policy applies to all information collected through our website, mobile applications, and any related services. We may update this policy periodically, and we will notify you of any significant changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div id="information" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-pink-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-600 mb-3">When you place an order or create an account, we may collect:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Name, email address, and phone number</li>
                    <li>Shipping and billing addresses</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Order history and preferences</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Information</h3>
                  <p className="text-gray-600 mb-3">We automatically collect information about how you interact with our website:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Device type and operating system</li>
                    <li>Referring website information</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-400 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cookies and Tracking</h3>
                  <p className="text-gray-600 mb-3">We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Remember your preferences and shopping cart</li>
                    <li>Improve website performance and user experience</li>
                    <li>Understand how visitors use our site</li>
                    <li>Provide relevant advertising and marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div id="usage" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">How We Use Your Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Processing</h3>
                  <p className="text-gray-600">To process and fulfill your orders, communicate about your purchases, and provide customer support.</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Website Improvement</h3>
                  <p className="text-gray-600">To analyze website usage, improve our products and services, and enhance user experience.</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marketing Communications</h3>
                  <p className="text-gray-600">To send you promotional offers, newsletters, and updates about new products (with your consent).</p>
                </div>
                <div className="bg-pink-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Security & Fraud Prevention</h3>
                  <p className="text-gray-600">To protect against fraud, unauthorized transactions, and other security issues.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div id="sharing" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Information Sharing</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We only share your information in the following circumstances:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Service Providers</h3>
                    <p className="text-gray-600">We may share information with trusted third-party service providers who assist in operating our website, conducting business, or servicing you.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Legal Requirements</h3>
                    <p className="text-gray-600">We may disclose information when required by law or to comply with legal processes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Transfers</h3>
                    <p className="text-gray-600">In the event of a business transfer, merger, or acquisition, your information may be transferred as part of the transaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div id="security" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Data Security</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Encryption</h3>
                    <p className="text-gray-600">All sensitive information is encrypted using industry-standard SSL/TLS encryption.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lock className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Secure Payment Processing</h3>
                    <p className="text-gray-600">Payment information is processed through PCI-compliant third-party payment processors.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Data Storage</h3>
                    <p className="text-gray-600">Personal information is stored on secure servers with restricted access.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Eye className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Regular Monitoring</h3>
                    <p className="text-gray-600">We regularly monitor our systems for vulnerabilities and security threats.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div id="cookies" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Cookies & Tracking Technologies</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.
              </p>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Types of Cookies We Use</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Managing Cookies</h3>
                  <p className="text-gray-600 mb-3">You can control and manage cookies in several ways:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Browser settings to accept or reject cookies</li>
                    <li>Our cookie consent banner to manage preferences</li>
                    <li>Third-party opt-out tools for advertising cookies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div id="rights" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Your Rights</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Access and Correction</h3>
                  <p className="text-gray-600">You have the right to access your personal information and request corrections to inaccurate data.</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Portability</h3>
                  <p className="text-gray-600">You can request a copy of your personal information in a portable format.</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Deletion</h3>
                  <p className="text-gray-600">You can request deletion of your personal information, subject to certain legal obligations.</p>
                </div>
                <div className="bg-pink-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Opt-out</h3>
                  <p className="text-gray-600">You can opt out of marketing communications and certain data processing activities.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-2xl">
                <p className="text-gray-600 text-sm">
                  <strong>Note:</strong> Some rights may be limited by legal requirements or legitimate business interests. Contact us to exercise any of these rights.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div id="contact" className="mb-16 animate-fadeInUp">
            <div className="bg-white rounded-3xl p-8 shadow-xl morph-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">privacy@sweetdelights.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">(555) 123-SWEET</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">
                        Sweet Delights Privacy Office<br />
                        123 Sweet Street<br />
                        Sweet Town, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Data Protection Officer</h3>
                  <p className="text-gray-600 mb-3">Our Data Protection Officer is responsible for overseeing our privacy practices.</p>
                  <p className="text-gray-600">Contact: dpo@sweetdelights.com</p>
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
              <h2 className="text-2xl font-bold mb-4">Thank You for Trusting Us</h2>
              <p className="text-lg opacity-90 mb-6">
                Your privacy and trust are fundamental to our business. We're committed to protecting your information and being transparent about our practices.
              </p>
              <button className="cream-button interactive-button">
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}