import React, { useState } from 'react';

export default function MSMEInventory() {
  // Mock data perfectly matching Aldrin's design mockup
  const rawData = [
    { id: 'INV-001', prod: 'Rice (Well-milled)', cat: 'Rice & Cereals', biz: 'Tindahan ni Aling Maria', loc: 'Quezon City, NCR', price: 45.00, srp: 45.00, stock: '250 kg', var: '0%', status: 'Compliant' },
    { id: 'INV-002', prod: 'Onion (Red)', cat: 'Vegetables', biz: 'Fresh Veggies Hub', loc: 'Mandaluyong, NCR', price: 135.00, srp: 120.00, stock: '80 kg', var: '+12.5%', status: 'Warning' },
    { id: 'INV-003', prod: 'Pork (Kasim)', cat: 'Meat & Poultry', biz: 'Metro Meat Market', loc: 'Makati, NCR', price: 310.00, srp: 280.00, stock: '45 kg', var: '+10.7%', status: 'Critical' },
    { id: 'INV-004', prod: 'Tomato', cat: 'Vegetables', biz: 'Green Mart Supplies', loc: 'Pasig, NCR', price: 78.00, srp: 80.00, stock: '120 kg', var: '-2.5%', status: 'Compliant' },
    { id: 'INV-005', prod: 'Rice (Regular-milled)', cat: 'Rice & Cereals', biz: 'Sari-Sari Store - Juan', loc: 'Taguig, NCR', price: 42.00, srp: 42.00, stock: '180 kg', var: '0%', status: 'Compliant' },
    { id: 'INV-006', prod: 'Chicken (Whole)', cat: 'Meat & Poultry', biz: 'Poultry Express', loc: 'Caloocan, NCR', price: 175.00, srp: 170.00, stock: '60 kg', var: '+2.9%', status: 'Compliant' },
    { id: 'INV-007', prod: 'Tilapia', cat: 'Fish & Seafood', biz: 'SeaFresh Trading', loc: 'Navotas, NCR', price: 145.00, srp: 130.00, stock: '95 kg', var: '+11.5%', status: 'Warning' },
    { id: 'INV-008', prod: 'Galunggong', cat: 'Fish & Seafood', biz: 'Fishing Port Market', loc: 'Malabon, NCR', price: 220.00, srp: 220.00, stock: '75 kg', var: '0%', status: 'Compliant' },
  ];

  // State for the functional search bar
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the data based on product, business, or category
  const filteredData = rawData.filter(item => 
    item.prod.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.biz.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper function for status badge styling
  const getStatusStyle = (status) => {
    switch(status) {
      case 'Compliant': return 'text-green-400 bg-green-500/10 border border-green-500/20';
      case 'Warning': return 'text-yellow-400 bg-yellow-500/10 border border-yellow-500/20';
      case 'Critical': return 'text-red-400 bg-red-500/10 border border-red-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border border-gray-500/20';
    }
  };

  return (
    <div className="animate-fade-in pb-8">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-6">
        <header>
          <h1 className="text-3xl font-bold text-white mb-1">MSME Inventory</h1>
          <p className="text-gray-400 text-sm">Track product pricing compliance across registered businesses</p>
        </header>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded flex items-center transition-colors text-sm">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Add Product
        </button>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#1e232d] border border-gray-800 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-gray-400 text-sm font-semibold mb-2">Total Products</span>
          <span className="text-white text-3xl font-bold">8</span>
        </div>
        <div className="bg-[#1e232d] border border-green-900/50 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-gray-400 text-sm font-semibold mb-2">Compliant</span>
          <span className="text-green-500 text-3xl font-bold">5</span>
        </div>
        <div className="bg-[#1e232d] border border-yellow-900/50 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-gray-400 text-sm font-semibold mb-2">Warning</span>
          <span className="text-yellow-500 text-3xl font-bold">2</span>
        </div>
        <div className="bg-[#1e232d] border border-red-900/50 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-gray-400 text-sm font-semibold mb-2">Critical</span>
          <span className="text-red-500 text-3xl font-bold">1</span>
        </div>
      </div>

      {/* Controls & Data Table Container */}
      <div className="bg-[#1e232d] border border-gray-800 rounded-xl overflow-hidden mb-6">
        
        {/* Search and Filter Bar */}
        <div className="p-4 border-b border-gray-800 flex space-x-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input 
              type="text" 
              className="bg-[#141820] border border-gray-700 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5 outline-none" 
              placeholder="Search products, businesses, or categories..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-[#141820] border border-gray-700 hover:bg-gray-800 text-gray-400 py-2 px-4 rounded-lg flex items-center transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
          </button>
        </div>

        {/* The Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs text-gray-500 bg-[#1a1e26] border-b border-gray-800">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">ID</th>
                <th scope="col" className="px-6 py-4 font-medium">Product</th>
                <th scope="col" className="px-6 py-4 font-medium">Business</th>
                <th scope="col" className="px-6 py-4 font-medium">Location</th>
                <th scope="col" className="px-6 py-4 font-medium">Current Price</th>
                <th scope="col" className="px-6 py-4 font-medium">SRP</th>
                <th scope="col" className="px-6 py-4 font-medium">Stock</th>
                <th scope="col" className="px-6 py-4 font-medium">Variance</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <tr key={index} className="hover:bg-[#2a303c] transition-colors">
                    <td className="px-6 py-4">{row.id}</td>
                    <td className="px-6 py-4">
                      <p className="text-white font-semibold">{row.prod}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{row.cat}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{row.biz}</td>
                    <td className="px-6 py-4">{row.loc}</td>
                    <td className="px-6 py-4 text-white font-bold">₱{row.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-gray-500">₱{row.srp.toFixed(2)}</td>
                    <td className="px-6 py-4">{row.stock}</td>
                    <td className={`px-6 py-4 font-bold ${row.var.startsWith('+') ? (row.status === 'Critical' ? 'text-red-500' : 'text-yellow-500') : 'text-green-500'}`}>
                      {row.var}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-md ${getStatusStyle(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="px-6 py-8 text-center text-gray-500">
                    No records found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Notice Banner */}
      <div className="bg-yellow-900/10 border border-yellow-700/30 rounded-lg p-5 flex items-start">
        <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        <div>
          <h3 className="text-yellow-500 font-bold text-sm mb-1">Price Compliance Notice</h3>
          <p className="text-gray-400 text-xs">Products with variance exceeding +10% from SRP are flagged for review. Business owners will be notified to adjust pricing or provide justification.</p>
        </div>
      </div>

    </div>
  );
}