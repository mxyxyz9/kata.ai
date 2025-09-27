'use client';

import { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Database, Cookie, Mail, Phone, User, CheckCircle, FileText, Server, Users } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
    { id: 'data-collection', title: 'Data We Collect', icon: <Database size={20} /> },
    { id: 'data-usage', title: 'How We Use Your Data', icon: <Eye size={20} /> },
    { id: 'data-security', title: 'Data Security', icon: <Lock size={20} /> },
    { id: 'user-rights', title: 'Your Rights', icon: <Users size={20} /> },
    { id: 'contact-us', title: 'Contact Us', icon: <Mail size={20} /> },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50 text-foreground transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className="text-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <Shield className="mx-auto h-20 w-20 text-primary animate-pulse" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mt-6">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Your trust is important to us. This policy outlines how we collect, use, and protect your personal information.</p>
        <p className="text-sm text-muted-foreground mt-4">Last Updated: October 26, 2023</p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Navigation */}
          <aside className="lg:w-1/4 lg:sticky top-24 self-start">
            <nav className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">Table of Contents</h3>
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
                <p className="text-lg text-muted-foreground leading-relaxed">Welcome to Sweet Shop! We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy explains how we collect, use, and safeguard your information when you visit our website. By using our services, you consent to the data practices described in this policy.</p>
              </div>
            </section>

            <section id="data-collection" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><Database /> Data We Collect</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">We collect information to provide better services to all our users. The types of information we collect include:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <User className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-xl">Personal Information</h4>
                      <p className="text-muted-foreground">This includes your name, email address, shipping address, and phone number, which you provide when you create an account or place an order.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Server className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-xl">Usage Data</h4>
                      <p className="text-muted-foreground">We automatically collect information about your interaction with our website, such as your IP address, browser type, pages visited, and the time and date of your visit.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Cookie className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-xl">Cookies and Tracking Technologies</h4>
                      <p className="text-muted-foreground">We use cookies to enhance your browsing experience, remember your preferences, and analyze our website traffic. You can control the use of cookies at the individual browser level.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="data-usage" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><Eye /> How We Use Your Data</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">We use the information we collect to operate, maintain, and improve our services. This includes processing your orders, personalizing your experience, communicating with you, and for internal analytics to improve our product offerings.</p>
              </div>
            </section>

            <section id="data-security" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><Lock /> Data Security</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">We implement a variety of security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.</p>
              </div>
            </section>

            <section id="user-rights" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><Users /> Your Rights</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">You have the right to access, correct, or delete your personal information. You can also object to or restrict the processing of your data. To exercise these rights, please contact us using the information provided below.</p>
              </div>
            </section>

            <section id="contact-us" className="scroll-mt-24">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3"><Mail /> Contact Us</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="mt-4 text-lg">
                  <p className="flex items-center gap-3"><Mail className="text-secondary"/> Email: <a href="mailto:privacy@sweetshop.com" className="text-primary hover:underline">privacy@sweetshop.com</a></p>
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