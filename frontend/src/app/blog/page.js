import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: 'The Secret to Perfectly Tempered Chocolate',
      author: 'Jane Doe',
      date: 'October 26, 2023',
      tags: ['Chocolate', 'Techniques', 'Baking'],
      excerpt: 'Master the art of tempering chocolate with our step-by-step guide. Achieve that perfect snap and glossy finish every time.',
      image: '/images/blog/chocolate.jpg',
    },
    {
      title: 'A Journey Through the World of Artisan Caramels',
      author: 'John Smith',
      date: 'October 20, 2023',
      tags: ['Caramel', 'History', 'Artisan'],
      excerpt: 'Explore the rich history and diverse flavors of handcrafted caramels from around the globe. From salted to spiced, there is a world to discover.',
      image: '/images/blog/caramel.jpg',
    },
    {
      title: 'The Ultimate Guide to Pairing Sweets with Coffee',
      author: 'Emily White',
      date: 'October 15, 2023',
      tags: ['Pairing', 'Coffee', 'Lifestyle'],
      excerpt: 'Elevate your coffee break by learning which sweets complement different coffee roasts and brewing methods. A guide for the true connoisseur.',
      image: '/images/blog/coffee-pairing.jpg',
    },
    {
        title: 'Baking with Kids: Fun and Easy Sweet Recipes',
        author: 'Michael Brown',
        date: 'October 10, 2023',
        tags: ['Family', 'Recipes', 'Baking'],
        excerpt: 'Get your little ones in the kitchen with these simple and delicious sweet recipes that are perfect for a family baking session.',
        image: '/images/blog/baking-kids.jpg',
    },
    {
        title: 'The Healthier Side of Sweet: Natural Sugar Alternatives',
        author: 'Dr. Sarah Green',
        date: 'October 5, 2023',
        tags: ['Health', 'Ingredients', 'Lifestyle'],
        excerpt: 'Indulge your sweet tooth without the guilt. Learn about the best natural sugar alternatives for baking and cooking.',
        image: '/images/blog/natural-sugars.jpg',
    },
    {
        title: 'Behind the Scenes: A Day in the Life of a Sweet Shop Artisan',
        author: 'The Sweet Shop Team',
        date: 'September 30, 2023',
        tags: ['Behind the Scenes', 'Artisan', 'Our Story'],
        excerpt: 'Ever wondered what goes into making your favorite sweets? Spend a day with us and see the magic happen from start to finish.',
        image: '/images/blog/artisan-day.jpg',
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">The Sweet Shop Journal</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Stories, recipes, and inspiration from our world of artisan sweets.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="relative w-full md:max-w-md">
              <input type="text" placeholder="Search articles..." className="w-full pl-12 pr-4 py-3 bg-input rounded-lg focus:ring-2 focus:ring-primary" />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm whitespace-nowrap">All</button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm whitespace-nowrap">Recipes</button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm whitespace-nowrap">Techniques</button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm whitespace-nowrap">Lifestyle</button>
              <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm whitespace-nowrap">Behind the Scenes</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-card rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-primary/80 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 h-14 overflow-hidden">{post.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 h-20 overflow-hidden">{post.excerpt}</p>
                  <a href="#" className="font-semibold text-primary flex items-center group-hover:underline">
                    Read More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex space-x-2">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">1</button>
                <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg">2</button>
                <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg">3</button>
                <span className="px-4 py-2 text-muted-foreground">...</span>
                <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg">10</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}