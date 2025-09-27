import { PlusCircle, Search, List, Grid, ArrowUpDown, MoreHorizontal, FileDown } from 'lucide-react';

export default function InventoryPage() {
  const sweets = [
    { id: 'SW001', name: 'Sea Salt Caramels', category: 'Caramel', stock: 150, status: 'In Stock', price: 12.99, lastUpdated: '2023-10-26' },
    { id: 'SW002', name: 'Dark Chocolate Truffles', category: 'Chocolate', stock: 80, status: 'In Stock', price: 19.99, lastUpdated: '2023-10-26' },
    { id: 'SW003', name: 'Assorted Fruit Jellies', category: 'Gummy & Jelly', stock: 0, status: 'Out of Stock', price: 9.99, lastUpdated: '2023-10-25' },
    { id: 'SW004', name: 'Peanut Butter Cups', category: 'Chocolate', stock: 20, status: 'Low Stock', price: 14.99, lastUpdated: '2023-10-26' },
    { id: 'SW005', name: 'Classic Lollipops', category: 'Hard Candy', stock: 300, status: 'In Stock', price: 7.99, lastUpdated: '2023-10-24' },
    { id: 'SW006', name: 'Gourmet Marshmallows', category: 'Other', stock: 120, status: 'In Stock', price: 11.99, lastUpdated: '2023-10-26' },
    { id: 'SW007', name: 'Spicy Mango Gummies', category: 'Gummy & Jelly', stock: 50, status: 'In Stock', price: 10.99, lastUpdated: '2023-10-25' },
    { id: 'SW008', name: 'Vanilla Bean Fudge', category: 'Fudge', stock: 5, status: 'Low Stock', price: 16.99, lastUpdated: '2023-10-26' },
  ];

  const getStatusChipClass = (status) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Inventory Management</h1>
            <p className="text-muted-foreground mt-1">Manage your sweet stock with ease.</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <button className="px-4 py-2 border rounded-lg flex items-center space-x-2 hover:bg-muted">
                <FileDown size={16} />
                <span>Export</span>
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg flex items-center space-x-2 hover:bg-primary/90">
              <PlusCircle size={16} />
              <span>Add New Sweet</span>
            </button>
          </div>
        </div>

        {/* Filters and View Options */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
            <div className="relative w-full md:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input type="text" placeholder="Search by name or ID..." className="w-full pl-10 pr-4 py-2 border rounded-lg bg-input" />
            </div>
            <div className="flex items-center space-x-4">
                <select className="border rounded-lg px-3 py-2 bg-input">
                    <option>All Categories</option>
                    <option>Caramel</option>
                    <option>Chocolate</option>
                    <option>Gummy & Jelly</option>
                    <option>Hard Candy</option>
                    <option>Fudge</option>
                    <option>Other</option>
                </select>
                <select className="border rounded-lg px-3 py-2 bg-input">
                    <option>All Statuses</option>
                    <option>In Stock</option>
                    <option>Low Stock</option>
                    <option>Out of Stock</option>
                </select>
                <div className="flex items-center border rounded-lg">
                    <button className="p-2 border-r"><List size={20} /></button>
                    <button className="p-2 bg-muted"><Grid size={20} /></button>
                </div>
            </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-card rounded-lg shadow-sm overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 font-medium"><input type="checkbox" className="rounded" /></th>
                <th className="p-4 font-medium"><div className="flex items-center">ID <ArrowUpDown size={12} className="ml-1" /></div></th>
                <th className="p-4 font-medium"><div className="flex items-center">Name <ArrowUpDown size={12} className="ml-1" /></div></th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium"><div className="flex items-center">Stock <ArrowUpDown size={12} className="ml-1" /></div></th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium"><div className="flex items-center">Price <ArrowUpDown size={12} className="ml-1" /></div></th>
                <th className="p-4 font-medium">Last Updated</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sweets.map((sweet) => (
                <tr key={sweet.id} className="border-b hover:bg-muted/50">
                  <td className="p-4"><input type="checkbox" className="rounded" /></td>
                  <td className="p-4 font-medium text-primary">{sweet.id}</td>
                  <td className="p-4 font-semibold">{sweet.name}</td>
                  <td className="p-4 text-muted-foreground">{sweet.category}</td>
                  <td className="p-4">{sweet.stock}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusChipClass(sweet.status)}`}>
                      {sweet.status}
                    </span>
                  </td>
                  <td className="p-4">${sweet.price.toFixed(2)}</td>
                  <td className="p-4 text-muted-foreground">{sweet.lastUpdated}</td>
                  <td className="p-4">
                    <button className="p-1 hover:bg-muted rounded-full">
                        <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-muted-foreground">Showing 1 to 8 of 50 sweets</p>
            <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded-lg hover:bg-muted">Previous</button>
                <button className="px-3 py-1 border rounded-lg hover:bg-muted">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
}