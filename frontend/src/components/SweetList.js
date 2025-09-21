import APIClient from '../lib/api'

const api = APIClient()

export default function SweetList() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Sweet Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sweet cards will be rendered here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Chocolate Truffles</h3>
          <p className="text-gray-600 mb-4">Rich and creamy chocolate truffles</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-600">$12.99</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Gummy Bears</h3>
          <p className="text-gray-600 mb-4">Colorful and fruity gummy bears</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-600">$8.99</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Lollipops</h3>
          <p className="text-gray-600 mb-4">Classic swirl lollipops</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-600">$6.99</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}