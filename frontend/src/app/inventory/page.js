'use client';

import { useState, useEffect } from 'react';
import { Package, BarChart3, AlertTriangle, CheckCircle, Clock, Search, Filter, Download, RefreshCw, TrendingUp, TrendingDown, Plus, Edit, Trash2, Eye } from 'lucide-react';
import APIClient from '../../lib/api';

export default function InventoryPage() {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const api = APIClient();

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data = await api.get('/inventory/');
        // Handle different API response formats
        const inventoryData = data.results || data.data || data;
        setInventory(inventoryData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  // Helper functions for filtering and sorting
  const getFilteredAndSortedInventory = () => {
    let filtered = inventory;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.sweet_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(item => {
        if (filterStatus === 'low') return item.needs_restock;
        if (filterStatus === 'in-stock') return !item.needs_restock;
        return true;
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.sweet_name.localeCompare(b.sweet_name);
        case 'quantity':
          return b.quantity - a.quantity;
        case 'status':
          return a.needs_restock - b.needs_restock;
        case 'date':
          return new Date(b.last_updated) - new Date(a.last_updated);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredInventory = getFilteredAndSortedInventory();
  const lowStockCount = inventory.filter(item => item.needs_restock).length;
  const totalValue = inventory.reduce((sum, item) => sum + (item.quantity * (item.price || 0)), 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="text-center animate-fadeInUp">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounceIn">
            <Package className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-neutral-800 mb-2 animate-fadeInUp animate-delay-200">Loading Inventory...</h3>
          <p className="text-neutral-600 animate-fadeInUp animate-delay-300">Fetching your stock data</p>
          <div className="mt-6 w-48 h-2 bg-neutral-200 rounded-full overflow-hidden animate-fadeInUp animate-delay-400">
            <div className="h-full bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="morph-card p-12 text-center animate-fadeInUp">
            <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounceIn">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2 animate-fadeInUp animate-delay-200">Unable to load inventory</h3>
            <p className="text-neutral-500 mb-6 animate-fadeInUp animate-delay-300">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="sweet-button interactive-button px-6 py-3 text-sm font-medium"
            >
              <RefreshCw className="w-4 h-4 mr-2 inline" />
              Refresh
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-8 animate-fadeInUp">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center animate-bounceIn">
              <BarChart3 className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">Inventory Management</h1>
              <p className="text-neutral-500 text-lg">Real-time stock monitoring and control</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 stagger-children">
          <div className="morph-card p-6 text-center interactive-card animate-cardEntrance">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-bounceIn">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-2 animate-countUp">{inventory.length}</div>
            <div className="text-sm text-neutral-600">Total Items</div>
          </div>
          
          <div className="morph-card p-6 text-center interactive-card animate-cardEntrance" style={{ animationDelay: '100ms' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-bounceIn">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-2 animate-countUp">{lowStockCount}</div>
            <div className="text-sm text-neutral-600">Low Stock</div>
          </div>
          
          <div className="morph-card p-6 text-center interactive-card animate-cardEntrance" style={{ animationDelay: '200ms' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-bounceIn">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-2 animate-countUp">{inventory.length - lowStockCount}</div>
            <div className="text-sm text-neutral-600">In Stock</div>
          </div>
          
          <div className="morph-card p-6 text-center interactive-card animate-cardEntrance" style={{ animationDelay: '300ms' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-bounceIn">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-neutral-900 mb-2 animate-countUp">${totalValue.toFixed(2)}</div>
            <div className="text-sm text-neutral-600">Total Value</div>
          </div>
        </div>

        {/* Controls and Filters */}
        <div className="morph-card p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-5 h-5 text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="sweet-input pl-10 pr-4 py-2 w-64"
                />
              </div>

              {/* Status Filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="sweet-input px-3 py-2"
              >
                <option value="all">All Status</option>
                <option value="in-stock">In Stock</option>
                <option value="low">Low Stock</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sweet-input px-3 py-2"
              >
                <option value="name">Sort by Name</option>
                <option value="quantity">Sort by Quantity</option>
                <option value="status">Sort by Status</option>
                <option value="date">Sort by Date</option>
              </select>
            </div>

            <div className="flex items-center space-x-3">
              <button className="cream-button px-4 py-2 flex items-center space-x-2">
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
              <button className="cream-button px-4 py-2 flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button className="sweet-button px-4 py-2 flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Item</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Table */}
        <div className="morph-card overflow-hidden">
          <div className="px-8 py-6 border-b border-neutral-100 bg-gradient-to-r from-neutral-50 to-white">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-neutral-900">Stock Levels</h2>
              <div className="flex items-center space-x-2 text-sm text-neutral-500">
                <Package className="w-4 h-4" />
                <span>{filteredInventory.length} of {inventory.length} items</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Current Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Minimum Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Last Updated</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredInventory.map((item) => (
                  <tr key={item.id} className="hover:bg-neutral-50 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                          <Package className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-neutral-900">{item.sweet_name}</div>
                          <div className="text-xs text-neutral-500">ID: {item.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-semibold ${
                          item.quantity <= item.min_quantity ? 'text-red-600' : 'text-neutral-900'
                        }`}>
                          {item.quantity}
                        </span>
                        {item.quantity <= item.min_quantity ? (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        ) : (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-neutral-600 font-medium">{item.min_quantity}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {item.needs_restock ? (
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                        <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                          item.needs_restock 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {item.needs_restock ? 'Low Stock' : 'In Stock'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2 text-sm text-neutral-500">
                        <Clock className="w-4 h-4" />
                        <span>{new Date(item.last_updated).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="cream-button p-2" title="View Details">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="cream-button p-2" title="Edit Item">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="cream-button p-2 text-red-600 hover:bg-red-50" title="Delete Item">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredInventory.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">No items found</h3>
              <p className="text-neutral-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}