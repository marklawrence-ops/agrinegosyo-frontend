import React, { useState } from 'react';

export default function PriceMonitoring() {
  // Mock data perfectly matching the design mockup
  const rawData = [
    { cat: 'Rice & Cereals', prod: 'Rice (Well-milled)', reg: 'NCR', srp: 45.00, low: 43.00, high: 47.00, avg: 45.50, updated: '2026-03-22' },
    { cat: 'Rice & Cereals', prod: 'Rice (Regular-milled)', reg: 'NCR', srp: 42.00, low: 40.00, high: 44.00, avg: 42.30, updated: '2026-03-22' },
    { cat: 'Vegetables', prod: 'Onion (Red)', reg: 'NCR', srp: 120.00, low: 115.00, high: 140.00, avg: 127.50, updated: '2026-03-22' },
    { cat: 'Vegetables', prod: 'Tomato', reg: 'NCR', srp: 80.00, low: 75.00, high: 90.00, avg: 82.50, updated: '2026-03-22' },
    { cat: 'Meat & Poultry', prod: 'Pork (Kasim)', reg: 'NCR', srp: 280.00, low: 275.00, high: 320.00, avg: 295.00, updated: '2026-03-22' },
    { cat: 'Meat & Poultry', prod: 'Chicken (Whole)', reg: 'NCR', srp: 170.00, low: 165.00, high: 180.00, avg: 172.50, updated: '2026-03-22' },
    { cat: 'Fish & Seafood', prod: 'Tilapia', reg: 'NCR', srp: 130.00, low: 125.00, high: 140.00, avg: 132.50, updated: '2026-03-22' },
    { cat: 'Fish & Seafood', prod: 'Galunggong', reg: 'NCR', srp: 220.00, low: 210.00, high: 230.00, avg: 220.00, updated: '2026-03-22' },
  ];

  // State for the functional search bar
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the data based on the search input
  const filteredData = rawData.filter(item => 
    item.prod.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in pb-8">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-6">
        <header>
          <h1 className="text-3xl font-bold text-white mb-1">Price Monitoring</h1>
          <p className="text-gray-400 text-sm">DA Daily Price Index - Suggested Retail Prices (SRP)</p>
        </header>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded flex items-center transition-colors text-sm">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Export PDF
        </button>
      </div>

      {/* Info Banner */}
      <div className="bg-[#1e232d] border border-yellow-500/30 rounded-lg p-4 mb-6 flex items-start">
        <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        <div>
          <h3 className="text-yellow-500 font-bold text-sm mb-1">Latest Update: March 22, 2026</h3>
          <p className="text-gray-400 text-xs">Price data sourced from Department of Agriculture (DA) weekly market monitoring reports. Prices are updated every Monday at 8:00 AM.</p>
        </div>
      </div>

      {/* Controls & Data Table Container */}
      <div className="bg-[#1e232d] border border-gray-800 rounded-xl overflow-hidden mb-4">
        
        {/* Search and Filter Bar */}
        <div className="p-4 border-b border-gray-800 flex space-x-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input 
              type="text" 
              className="bg-[#141820] border border-gray-700 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5 outline-none" 
              placeholder="Search by product or category..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <select className="bg-[#141820] border border-gray-700 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5 outline-none appearance-none">
              <option>National Capital Region (NCR)</option>
              <option>Region III (Central Luzon)</option>
              <option>Region IV-A (CALABARZON)</option>
              <option>Region VII (Central Visayas)</option>
            </select>
          </div>
        </div>

        {/* The Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs text-gray-500 bg-[#1a1e26] border-b border-gray-800 uppercase">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Category</th>
                <th scope="col" className="px-6 py-4 font-medium">Product</th>
                <th scope="col" className="px-6 py-4 font-medium">Region</th>
                <th scope="col" className="px-6 py-4 font-medium">SRP</th>
                <th scope="col" className="px-6 py-4 font-medium">Low</th>
                <th scope="col" className="px-6 py-4 font-medium">High</th>
                <th scope="col" className="px-6 py-4 font-medium">Average</th>
                <th scope="col" className="px-6 py-4 font-medium">Last Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <tr key={index} className="hover:bg-[#2a303c] transition-colors">
                    <td className="px-6 py-4">{row.cat}</td>
                    <td className="px-6 py-4 text-white font-medium">{row.prod}</td>
                    <td className="px-6 py-4">{row.reg}</td>
                    <td className="px-6 py-4 text-yellow-500 font-bold">₱{row.srp.toFixed(2)}</td>
                    <td className="px-6 py-4">₱{row.low.toFixed(2)}</td>
                    <td className="px-6 py-4">₱{row.high.toFixed(2)}</td>
                    <td className="px-6 py-4 font-medium">₱{row.avg.toFixed(2)}</td>
                    <td className="px-6 py-4">{row.updated}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-8 text-center text-gray-500">
                    No products found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-gray-500 px-2">
        * SRP (Suggested Retail Price) is provided by the Department of Agriculture for reference. Retailers exceeding SRP by more than 10% will be flagged for compliance review.
      </p>

    </div>
  );
}