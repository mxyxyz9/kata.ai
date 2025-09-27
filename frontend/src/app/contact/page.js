import { Mail, Phone, MapPin, Send, Building, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">We'd love to hear from you! Whether you have a question, a comment, or just want to say hello, we're here to help.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 bg-input rounded-lg focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-muted-foreground mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 bg-input rounded-lg focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-input rounded-lg focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                  <textarea id="message" rows="5" className="w-full px-4 py-3 bg-input rounded-lg focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Our Address</h4>
                      <p className="text-muted-foreground">123 Sweet Street, Confectionery City, 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-muted-foreground">hello@sweetshop.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Opening Hours</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-semibold">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-semibold">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-semibold text-red-500">Closed</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}