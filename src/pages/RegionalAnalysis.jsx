import React from 'react';

export default function RegionalAnalysis() {
  // Mock data based on the design
  const regions = [
    { name: 'NCR', desc: 'National Capital Region', rate: '97.2%', biz: 352, prod: 1247, alerts: 23, avg: '₱145.50', trend: '+3.2%', color: 'text-yellow-500', barColor: 'bg-yellow-500' },
    { name: 'Region III', desc: 'Central Luzon', rate: '97.6%', biz: 297, prod: 1089, alerts: 15, avg: '₱138.20', trend: '+2.8%', color: 'text-green-500', barColor: 'bg-green-500' },
    { name: 'Region IV-A', desc: 'CALABARZON', rate: '98.4%', biz: 318, prod: 1156, alerts: 12, avg: '₱142.75', trend: '+1.9%', color: 'text-blue-500', barColor: 'bg-blue-500' },
    { name: 'Region VII', desc: 'Central Visayas', rate: '99%', biz: 308, prod: 1098, alerts: 8, avg: '₱148.90', trend: '-0.5%', color: 'text-red-500', barColor: 'bg-red-500' },
  ];

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Regional Analysis</h1>
        <p className="text-gray-400 text-sm">Compare market compliance and pricing across different regions</p>
      </header>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {regions.map((r, i) => (
          <div key={i} className="bg-[#1e232d] border border-gray-800 p-5 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white font-bold">{r.name}</h3>
                <p className="text-gray-500 text-xs">{r.desc}</p>
              </div>
              <span className={`font-bold ${r.color}`}>{r.rate}</span>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-1.5 mb-4">
              <div className={`${r.barColor} h-1.5 rounded-full`} style={{ width: r.rate }}></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <p className="text-gray-500 text-xs">Businesses</p>
                <p className="text-white font-semibold">{r.biz}</p>
                <p className="text-gray-500 text-xs mt-2">Alerts</p>
                <p className="text-yellow-500 font-semibold">{r.alerts}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Products</p>
                <p className="text-white font-semibold">{r.prod}</p>
                <p className="text-gray-500 text-xs mt-2">Avg Price</p>
                <p className="text-white font-semibold">{r.avg}</p>
              </div>
            </div>
            <p className={`text-xs ${r.trend.startsWith('+') ? 'text-red-400' : 'text-green-400'}`}>
              ↗ {r.trend} from last week
            </p>
          </div>
        ))}
      </div>

      {/* Middle Chart Section */}
      <div className="bg-[#1e232d] border border-gray-800 p-6 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-6">Regional Price Comparison</h3>
        {/* CSS Mock Bar Chart */}
        <div className="h-64 border-b border-l border-gray-700 flex items-end justify-around px-4 pb-0 pt-4 relative">
          {/* Y-Axis Labels */}
          <div className="absolute left-[-30px] top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-2">
            <span>320</span><span>240</span><span>160</span><span>80</span><span>0</span>
          </div>

          {/* Group 1: Rice */}
          <div className="flex items-end space-x-1 h-full w-1/5 justify-center group relative">
            <div className="w-4 bg-yellow-500 h-[15%] rounded-t-sm"></div>
            <div className="w-4 bg-green-500 h-[14%] rounded-t-sm"></div>
            <div className="w-4 bg-blue-500 h-[15%] rounded-t-sm"></div>
            <div className="w-4 bg-red-500 h-[16%] rounded-t-sm"></div>
            <span className="absolute -bottom-6 text-xs text-gray-400">Rice</span>
          </div>

          {/* Group 2: Onion */}
          <div className="flex items-end space-x-1 h-full w-1/5 justify-center relative">
            <div className="w-4 bg-yellow-500 h-[40%] rounded-t-sm"></div>
            <div className="w-4 bg-green-500 h-[38%] rounded-t-sm"></div>
            <div className="w-4 bg-blue-500 h-[38%] rounded-t-sm"></div>
            <div className="w-4 bg-red-500 h-[42%] rounded-t-sm"></div>
            <span className="absolute -bottom-6 text-xs text-gray-400">Onion</span>
          </div>

          {/* Group 3: Pork */}
          <div className="flex items-end space-x-1 h-full w-1/5 justify-center relative">
            <div className="w-4 bg-yellow-500 h-[95%] rounded-t-sm"></div>
            <div className="w-4 bg-green-500 h-[90%] rounded-t-sm"></div>
            <div className="w-4 bg-blue-500 h-[92%] rounded-t-sm"></div>
            <div className="w-4 bg-red-500 h-[98%] rounded-t-sm"></div>
            <span className="absolute -bottom-6 text-xs text-gray-400">Pork</span>
          </div>

          {/* Group 4: Chicken */}
          <div className="flex items-end space-x-1 h-full w-1/5 justify-center relative">
            <div className="w-4 bg-yellow-500 h-[55%] rounded-t-sm"></div>
            <div className="w-4 bg-green-500 h-[50%] rounded-t-sm"></div>
            <div className="w-4 bg-blue-500 h-[52%] rounded-t-sm"></div>
            <div className="w-4 bg-red-500 h-[58%] rounded-t-sm"></div>
            <span className="absolute -bottom-6 text-xs text-gray-400">Chicken</span>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center space-x-6 mt-10 text-xs text-gray-400">
          <span className="flex items-center"><span className="w-3 h-3 bg-yellow-500 mr-2 rounded-sm"></span> NCR</span>
          <span className="flex items-center"><span className="w-3 h-3 bg-green-500 mr-2 rounded-sm"></span> Region III</span>
          <span className="flex items-center"><span className="w-3 h-3 bg-blue-500 mr-2 rounded-sm"></span> Region IV-A</span>
          <span className="flex items-center"><span className="w-3 h-3 bg-red-500 mr-2 rounded-sm"></span> Region VII</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Highest Priced Products */}
        <div className="bg-[#1e232d] border border-gray-800 p-6 rounded-xl">
          <h3 className="text-white font-bold mb-4">Highest Priced Products by Region</h3>
          <div className="space-y-4">
            {[
              { id: '#1', name: 'Rice (Well-milled)', reg: 'Region VII', price: '₱46.00', inc: '+2.2%' },
              { id: '#2', name: 'Onion (Red)', reg: 'Region VII', price: '₱140.00', inc: '+16.7%' },
              { id: '#3', name: 'Pork (Kasim)', reg: 'Region VII', price: '₱315.00', inc: '+12.5%' },
              { id: '#4', name: 'Chicken (Whole)', reg: 'Region VII', price: '₱180.00', inc: '+5.9%' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 hover:bg-[#2a303c] rounded-lg transition-colors">
                <div className="flex items-center">
                  <span className="w-8 h-8 rounded bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-xs mr-4">{item.id}</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.reg}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{item.price}</p>
                  <p className="text-red-400 text-xs">{item.inc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Summary */}
        <div className="bg-[#1e232d] border border-gray-800 p-6 rounded-xl">
          <h3 className="text-white font-bold mb-4">Regional Summary</h3>
          <div className="space-y-3">
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg flex flex-col">
              <span className="text-yellow-500 text-sm font-semibold mb-1">Total Registered Businesses</span>
              <span className="text-white text-2xl font-bold">1275</span>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg flex flex-col">
              <span className="text-green-500 text-sm font-semibold mb-1">Total Products Monitored</span>
              <span className="text-white text-2xl font-bold">4590</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col">
              <span className="text-gray-400 text-sm font-semibold mb-1">Active Alerts</span>
              <span className="text-white text-2xl font-bold">58</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
              <span className="text-gray-400 text-sm font-semibold">Overall Compliance Rate</span>
              <span className="text-yellow-500 text-xl font-bold">98.1% <span className="text-xs text-green-500 ml-1">Excellent</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}