import { Building, Users, Heart, Award, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">About Sweet Shop</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Discover the story behind our passion for creating the most delightful sweets and how we turned our dream into a reality.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none">
              <h2 className="text-3xl font-semibold text-primary">Our Story</h2>
              <p>Founded in 2023, Sweet Shop started as a small family-owned business with a big dream: to spread joy through the art of confectionery. Our journey began in a humble kitchen, where we experimented with traditional recipes and innovative techniques to create unique and unforgettable flavors.</p>
              <p>Over the years, our commitment to quality and creativity has allowed us to grow into a beloved brand, cherished by customers near and far. We believe that every sweet treat should be a masterpiece, crafted with love, care, and the finest ingredients.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/placeholder-image.jpg" alt="Our Team" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 text-primary p-4 rounded-lg">
                <Target size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">To craft exquisite sweets that create moments of happiness and connection, while upholding the highest standards of quality and customer satisfaction.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 text-primary p-4 rounded-lg">
                <Eye size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">To be the world's most imaginative and beloved confectionery brand, inspiring a sense of wonder and delight in every customer experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-primary mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <Heart size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Passion</h4>
              <p className="text-muted-foreground">We are passionate about our craft and pour our hearts into every creation.</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality</h4>
              <p className="text-muted-foreground">We use only the finest ingredients to ensure an exceptional taste experience.</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="bg-primary/10 text-primary p-4 rounded-full inline-block mb-4">
                <Users size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Community</h4>
              <p className="text-muted-foreground">We are dedicated to building a sweet community around our shared love for confectionery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}