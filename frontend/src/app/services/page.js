import { Truck, Gift, ShoppingBag, Star, CheckCircle, Heart } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: ShoppingBag,
      title: 'Custom Sweet Creations',
      description: 'Bring your sweet dreams to life with our custom confectionery services. Perfect for birthdays, weddings, and corporate events.',
      features: ['Personalized designs and flavors', 'Handcrafted by artisan chefs', 'Wide range of options'],
    },
    {
      icon: Gift,
      title: 'Artisan Gift Boxes',
      description: 'Surprise and delight with our beautifully curated gift boxes, filled with a selection of our finest artisan sweets.',
      features: ['Themed and seasonal collections', 'Customizable gift messages', 'Elegant and eco-friendly packaging'],
    },
    {
      icon: Truck,
      title: 'Nationwide Sweet Delivery',
      description: 'Get your favorite sweets delivered right to your doorstep. We offer fast, reliable, and carefully packaged shipping across the country.',
      features: ['Freshness guaranteed', 'Real-time order tracking', 'Secure and insulated packaging'],
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">From custom creations to nationwide delivery, we offer a range of services to satisfy your sweet cravings.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-primary/10 text-primary p-4 rounded-lg">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="text-primary" size={20} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-primary">Why Choose Sweet Shop?</h2>
            <p className="text-lg text-muted-foreground mt-2">Experience the difference that passion and quality make.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <Star size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
              <p className="text-muted-foreground">We use only the finest, locally-sourced ingredients in all our creations.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Handcrafted with Love</h4>
              <p className="text-muted-foreground">Every sweet is made by our skilled artisans with passion and precision.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <Truck size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Fast & Reliable Delivery</h4>
              <p className="text-muted-foreground">Enjoy our sweets no matter where you are with our nationwide shipping.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <Gift size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Perfect for Gifting</h4>
              <p className="text-muted-foreground">Our beautifully packaged sweets make the perfect gift for any occasion.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}