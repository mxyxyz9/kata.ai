import { PlusCircle, Search, ArrowUpDown, MoreHorizontal, FileDown, UserPlus, Mail, Phone, Calendar } from 'lucide-react';

export default function UsersPage() {
  const users = [
    { id: 'USR001', name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-10-26', orders: 15 },
    { id: 'USR002', name: 'Bob Williams', email: 'bob.w@example.com', role: 'Customer', status: 'Active', lastLogin: '2023-10-25', orders: 5 },
    { id: 'USR003', name: 'Charlie Brown', email: 'charlie.b@example.com', role: 'Customer', status: 'Inactive', lastLogin: '2023-09-12', orders: 2 },
    { id: 'USR004', name: 'Diana Miller', email: 'diana.m@example.com', role: 'Staff', status: 'Active', lastLogin: '2023-10-26', orders: 0 },
    { id: 'USR005', name: 'Ethan Davis', email: 'ethan.d@example.com', role: 'Customer', status: 'Active', lastLogin: '2023-10-24', orders: 22 },
    { id: 'USR006', name: 'Fiona Garcia', email: 'fiona.g@example.com', role: 'Customer', status: 'Suspended', lastLogin: '2023-10-01', orders: 8 },
    { id: 'USR007', name: 'George Rodriguez', email: 'george.r@example.com', role: 'Customer', status: 'Active', lastLogin: '2023-10-26', orders: 11 },
    { id: 'USR008', name: 'Hannah Martinez', email: 'hannah.m@example.com', role: 'Staff', status: 'Active', lastLogin: '2023-10-25', orders: 0 },
  ];

  const getStatusChipClass = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">User Management</h1>
            <p className="text-muted-foreground mt-1">Manage your customers and staff.</p>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <button className="px-4 py-2 border rounded-lg flex items-center space-x-2 hover:bg-muted">
                <FileDown size={16} />
                <span>Export</span>
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg flex items-center space-x-2 hover:bg-primary/90">
              <UserPlus size={16} />
              <span>Add New User</span>
            </button>
          </div>
        </div>

        {/* Filters and View Options */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
            <div className="relative w-full md:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input type="text" placeholder="Search by name or email..." className="w-full pl-10 pr-4 py-2 border rounded-lg bg-input" />
            </div>
            <div className="flex items-center space-x-4">
                <select className="border rounded-lg px-3 py-2 bg-input">
                    <option>All Roles</option>
                    <option>Admin</option>
                    <option>Staff</option>
                    <option>Customer</option>
                </select>
                <select className="border rounded-lg px-3 py-2 bg-input">
                    <option>All Statuses</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Suspended</option>
                </select>
            </div>
        </div>

        {/* Users Table */}
        <div className="bg-card rounded-lg shadow-sm overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 font-medium"><input type="checkbox" className="rounded" /></th>
                <th className="p-4 font-medium"><div className="flex items-center">User <ArrowUpDown size={12} className="ml-1" /></div></th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium"><div className="flex items-center">Orders <ArrowUpDown size={12} className="ml-1" /></div></th>
                <th className="p-4 font-medium">Last Login</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-muted/50">
                  <td className="p-4"><input type="checkbox" className="rounded" /></td>
                  <td className="p-4">
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-xs text-muted-foreground">{user.email}</div>
                  </td>
                  <td className="p-4 text-muted-foreground">{user.role}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusChipClass(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">{user.orders}</td>
                  <td className="p-4 text-muted-foreground">{user.lastLogin}</td>
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
            <p className="text-sm text-muted-foreground">Showing 1 to 8 of 50 users</p>
            <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded-lg hover:bg-muted">Previous</button>
                <button className="px-3 py-1 border rounded-lg hover:bg-muted">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
}