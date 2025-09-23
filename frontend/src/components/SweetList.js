'use client';

import { useState, useEffect } from 'react';
import APIClient from '../lib/api';

const api = APIClient();

export default function SweetList() {
  const [sweets, setSweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSweets = async () => {
      try {
        const data = await api.get('/sweets/');
        console.log('API Response:', data);
        
        // Check if data is an array, if not try to access results property
        if (Array.isArray(data)) {
          setSweets(data);
        } else if (data && data.results && Array.isArray(data.results)) {
          setSweets(data.results);
        } else if (data && Array.isArray(data.data)) {
          setSweets(data.data);
        } else {
          console.error('Unexpected data format:', data);
          setError('Unexpected data format from API');
        }
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSweets();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="text-xl">Loading sweets...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Sweet Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sweets.map((sweet) => (
          <div key={sweet.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">🍬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{sweet.name}</h3>
            <p className="text-gray-600 mb-4">{sweet.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-green-600">${sweet.price}</span>
              <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-sm">
                {sweet.category}
              </span>
            </div>
            <button className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}