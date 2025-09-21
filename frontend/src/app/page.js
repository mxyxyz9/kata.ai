export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-pink-600 mb-4">
          Welcome to Sweet Shop 🍭
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the most delicious sweets and treats in town. Our carefully curated collection 
          of premium candies will satisfy your sweet tooth and bring joy to your day!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🍫</div>
          <h2 className="text-2xl font-semibold mb-3">Premium Chocolates</h2>
          <p className="text-gray-600 mb-4">
            Indulge in our selection of premium chocolates from around the world.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🍬</div>
          <h2 className="text-2xl font-semibold mb-3">Gummy Candies</h2>
          <p className="text-gray-600 mb-4">
            Colorful and chewy gummy candies in various shapes and flavors.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Browse
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🍭</div>
          <h2 className="text-2xl font-semibold mb-3">Lollipops</h2>
          <p className="text-gray-600 mb-4">
            Classic lollipops in vibrant colors and delicious flavors.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            View All
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🧁</div>
          <h2 className="text-2xl font-semibold mb-3">Specialty Items</h2>
          <p className="text-gray-600 mb-4">
            Unique and seasonal specialty items for special occasions.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Discover
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">📦</div>
          <h2 className="text-2xl font-semibold mb-3">Gift Boxes</h2>
          <p className="text-gray-600 mb-4">
            Beautifully packaged gift boxes perfect for any occasion.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Order Now
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-2xl font-semibold mb-3">Manage Inventory</h2>
          <p className="text-gray-600 mb-4">
            Keep track of stock levels and manage your sweet inventory efficiently.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}