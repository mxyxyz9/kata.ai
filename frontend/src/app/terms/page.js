'use client';

import { useState, useEffect } from 'react';
import { FileText, CheckCircle, XCircle, CreditCard, Truck, Shield, Users, Mail, Phone, ArrowRight } from 'lucide-react';

export default function TermsOfServicePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { id: 'introduction', title: 'Introduction', icon: <FileText size={20} /> },
    { id: 'user-accounts', title: 'User Accounts', icon: <Users size={20} /> },
    { id: 'orders-payment', title: 'Orders & Payment', icon: <CreditCard size={20} /> },
    { id: 'shipping-returns', title: 'Shipping & Returns', icon: <Truck size={20} /> },
    { id: 'prohibited-conduct', title: 'Prohibited Conduct', icon: <XCircle size={20} /> },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: <Shield size={20} /> },
    { id: 'contact-us', title: 'Contact Us', icon: <Mail size={20} /> },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50 text-foreground transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className="text-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <FileText className="mx-auto h-20 w-20 text-primary animate-pulse" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mt-6">Terms of Service</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Please read these terms and conditions carefully before using Our Service.</p>
        <p className="text-sm text-muted-foreground mt-4">Last Updated: October 26, 2023</p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Navigation */}
          <aside className="lg:w-1/4 lg:sticky top-24 self-start">
            <nav className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">Sections</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <a 
                      href={`#${link.id}`}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${activeSection === link.id ? 'bg-primary text-white shadow-sm' : 'hover:bg-gray-100'}`}>
                      {link.icon}
                      <span className="font-semibold">{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 space-y-16">
            <section id="introduction" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><FileText /> Introduction</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">Welcome to Sweet Shop! These Terms of Service govern your use of our website and the services we offer. By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.</p>
              </div>
            </section>

            <section id="user-accounts" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><Users /> User Accounts</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                    <span>You are responsible for safeguarding the password that you use to access the Service.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                    <span>You agree not to disclose your password to any third party.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="orders-payment" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><CreditCard /> Orders and Payment</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">By placing an order, you warrant that you are legally capable of entering into binding contracts. All prices are listed in USD and are subject to change. We accept various forms of payment, which will be processed through a secure third-party payment gateway.</p>
              </div>
            </section>

            <section id="shipping-returns" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><Truck /> Shipping and Returns</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">We ship to locations within the United States. Shipping times may vary. For information about returns and refunds, please review our Shipping & Returns Policy, which is incorporated by reference into these Terms of Service.</p>
              </div>
            </section>

            <section id="prohibited-conduct" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><XCircle /> Prohibited Conduct</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">You agree not to use the Service for any unlawful purpose or to solicit others to perform or participate in any unlawful acts. Prohibited conduct includes, but is not limited to:</p>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" />
                    <span>Harassing, abusing, or harming another person.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" />
                    <span>Infringing upon or violating our intellectual property rights or the intellectual property rights of others.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="text-red-500 flex-shrink-0 mt-1" />
                    <span>Submitting false or misleading information.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="intellectual-property" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><Shield /> Intellectual Property</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">The Service and its original content, features, and functionality are and will remain the exclusive property of Sweet Shop and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Sweet Shop.</p>
              </div>
            </section>

            <section id="contact-us" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><Mail /> Contact Us</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">If you have any questions about these Terms, please contact us:</p>
                <div className="mt-4 text-lg">
                  <p className="flex items-center gap-3"><Mail className="text-secondary"/> Email: <a href="mailto:support@sweetshop.com" className="text-primary hover:underline">support@sweetshop.com</a></p>
                  <p className="flex items-center gap-3"><Phone className="text-secondary"/> Phone: <a href="tel:1-800-S-W-E-E-T-S" className="text-primary hover:underline">1-800-S-W-E-E-T-S</a></p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}