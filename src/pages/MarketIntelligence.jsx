import React from 'react';

export default function MarketIntelligence() {
  // Mock data for the top Commodity Trends list
  const trends = [
    { name: 'Rice (Well-milled)', cat: 'Rice & Cereals', price: '₱45.00', trend: '+4.7%', trendVal: '+₱2.00', vol: 'low', state: 'stable' },
    { name: 'Onion (Red)', cat: 'Vegetables', price: '₱135.00', trend: '+12.5%', trendVal: '+₱15.00', vol: 'high', state: 'increasing' },
    { name: 'Pork (Kasim)', cat: 'Meat & Poultry', price: '₱310.00', trend: '+8.8%', trendVal: '+₱25.00', vol: 'medium', state: 'increasing' },
    { name: 'Chicken (Whole)', cat: 'Meat & Poultry', price: '₱175.00', trend: '+4.2%', trendVal: '+₱7.00', vol: 'low', state: 'stable' },
    { name: 'Tomato', cat: 'Vegetables', price: '₱88.00', trend: '-2.2%', trendVal: '-₱2.00', vol: 'medium', state: 'decreasing' },
  ];

  // Mock data for the bottom Regional Insights cards
  const insights = [
    { reg: 'NCR', biz: 352, comp: '97.2%', high: 'Pork (Kasim) - ₱310', low: 'Rice - ₱45', vol: 'Medium', volColor: 'text-yellow-500' },
    { reg: 'Region III', biz: 297, comp: '97.6%', high: 'Pork (Kasim) - ₱295', low: 'Rice - ₱43', vol: 'Low', volColor: 'text-green-500' },
    { reg: 'Region IV-A', biz: 318, comp: '98.4%', high: 'Pork (Kasim) - ₱300', low: 'Rice - ₱44', vol: 'Low', volColor: 'text-green-500' },
    { reg: 'Region VII', biz: 308, comp: '99%', high: 'Pork (Kasim) - ₱315', low: 'Rice - ₱46', vol: 'Medium', volColor: 'text-yellow-500' },
  ];

  return (
    <div className="animate-fade-in pb-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Market Intelligence</h1>
        <p className="text-gray-400 text-sm">Regional price analysis and commodity trends</p>
      </header>

      {/* Section 1: Commodity Price Trends */}
      <div className="bg-[#1e232d] border border-gray-800 rounded-xl mb-6 overflow-hidden">
        <div className="p-6 border-b border-gray-800">
          <h3 className="text-white font-bold">Commodity Price Trends</h3>
        </div>
        <div className="divide-y divide-gray-800">
          {trends.map((item, i) => (
            <div key={i} className="p-4 px-6 flex items-center justify-between hover:bg-[#2a303c] transition-colors">
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                <p className="text-gray-500 text-xs">{item.cat}</p>
              </div>
              
              <div className="text-right mr-8 flex-1">
                <p className="text-white font-bold text-sm">{item.price}</p>
                <p className="text-gray-500 text-[10px]">National Avg</p>
              </div>

              <div className="text-right mr-8 w-24">
                <p className={`text-sm font-bold ${item.trend.startsWith('+') ? 'text-red-400' : 'text-green-400'}`}>
                  {item.trend.startsWith('+') ? '↗' : '↘'} {item.trend}
                </p>
                <p className="text-gray-500 text-xs">{item.trendVal}</p>
              </div>

              <div className="flex space-x-2 w-48 justify-end">
                <span className={`px-2 py-1 text-[10px] font-bold rounded border ${
                  item.vol === 'low' ? 'text-green-400 bg-green-500/10 border-green-500/20' : 
                  item.vol === 'medium' ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' : 
                  'text-red-400 bg-red-500/10 border-red-500/20'
                }`}>
                  {item.vol} volatility
                </span>
                <span className={`px-2 py-1 text-[10px] font-bold rounded border ${
                  item.state === 'stable' ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' : 
                  item.state === 'decreasing' ? 'text-green-400 bg-green-500/10 border-green-500/20' : 
                  'text-red-400 bg-red-500/10 border-red-500/20'
                }`}>
                  {item.state}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* Left Chart: Regional Price Comparison */}
        <div className="bg-[#1e232d] border border-gray-800 p-6 rounded-xl">
          <h3 className="text-white font-bold mb-6">Regional Price Comparison</h3>
          
          {/* CSS Mock Bar Chart (Adapted for 3 items) */}
          <div className="h-48 border-b border-l border-gray-700 flex items-end justify-around px-2 pb-0 pt-4 relative">
            <div className="absolute left-[-25px] top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-500 py-1">
              <span>320</span><span>240</span><span>160</span><span>80</span><span>0</span>
            </div>

            {/* NCR */}
            <div className="flex items-end space-x-1 h-full w-1/4 justify-center relative">
              <div className="w-5 bg-yellow-500 h-[15%] rounded-t-sm"></div>
              <div className="w-5 bg-red-500 h-[95%] rounded-t-sm"></div>
              <div className="w-5 bg-green-500 h-[55%] rounded-t-sm"></div>
              <span className="absolute -bottom-6 text-xs text-gray-400">NCR</span>
            </div>
            {/* Region III */}
            <div className="flex items-end space-x-1 h-full w-1/4 justify-center relative">
              <div className="w-5 bg-yellow-500 h-[14%] rounded-t-sm"></div>
              <div className="w-5 bg-red-500 h-[90%] rounded-t-sm"></div>
              <div className="w-5 bg-green-500 h-[50%] rounded-t-sm"></div>
              <span className="absolute -bottom-6 text-xs text-gray-400">Region III</span>
            </div>
            {/* Region IV-A */}
            <div className="flex items-end space-x-1 h-full w-1/4 justify-center relative">
              <div className="w-5 bg-yellow-500 h-[15%] rounded-t-sm"></div>
              <div className="w-5 bg-red-500 h-[92%] rounded-t-sm"></div>
              <div className="w-5 bg-green-500 h-[52%] rounded-t-sm"></div>
              <span className="absolute -bottom-6 text-xs text-gray-400">Region IV-A</span>
            </div>
            {/* Region VII */}
            <div className="flex items-end space-x-1 h-full w-1/4 justify-center relative">
              <div className="w-5 bg-yellow-500 h-[16%] rounded-t-sm"></div>
              <div className="w-5 bg-red-500 h-[98%] rounded-t-sm"></div>
              <div className="w-5 bg-green-500 h-[58%] rounded-t-sm"></div>
              <span className="absolute -bottom-6 text-xs text-gray-400">Region VII</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-8 text-[10px] text-gray-400">
            <span className="flex items-center"><span className="w-2 h-2 bg-yellow-500 mr-1 rounded-sm"></span> Rice</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-red-500 mr-1 rounded-sm"></span> Pork</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-green-500 mr-1 rounded-sm"></span> Chicken</span>
          </div>
        </div>

        {/* Right Chart: 4-Week Price Trend (SVG Line Chart) */}
        <div className="bg-[#1e232d] border border-gray-800 p-6 rounded-xl">
          <h3 className="text-white font-bold mb-6">4-Week Price Trend</h3>
          
          <div className="h-48 border-b border-l border-gray-700 relative flex flex-col justify-end pb-0 pl-2">
            <div className="absolute left-[-25px] top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-500 py-1">
              <span>320</span><span>240</span><span>160</span><span>80</span><span>0</span>
            </div>
            
            {/* SVG Line Chart */}
            <svg className="w-full h-full absolute inset-0 pl-2 pb-0" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* Grid Lines */}
              <line x1="0" y1="25" x2="100" y2="25" stroke="#374151" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="#374151" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1="75" x2="100" y2="75" stroke="#374151" strokeWidth="0.5" strokeDasharray="2,2" />

              {/* Data Line (Rice Trend) */}
              <polyline 
                points="10,85 36,85 62,84 88,83" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="1.5"
              />
              
              {/* Data Points */}
              <circle cx="10" cy="85" r="2" fill="#3b82f6" className="ring-2 ring-[#1e232d]" />
              <circle cx="36" cy="85" r="2" fill="#3b82f6" className="ring-2 ring-[#1e232d]" />
              <circle cx="62" cy="84" r="2" fill="#3b82f6" className="ring-2 ring-[#1e232d]" />
              <circle cx="88" cy="83" r="2" fill="#3b82f6" className="ring-2 ring-[#1e232d]" />
            </svg>

            {/* X-Axis Labels */}
            <div className="w-full flex justify-between absolute -bottom-6 text-[10px] text-gray-500 pr-4">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8 text-[10px] text-gray-400">
            <span className="flex items-center"><span className="w-2 h-2 bg-yellow-500 mr-1 rounded-sm"></span> Rice</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-red-500 mr-1 rounded-sm"></span> Onion</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-green-500 mr-1 rounded-sm"></span> Pork</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-blue-500 mr-1 rounded-sm"></span> Chicken</span>
          </div>
        </div>

      </div>

      {/* Section 3: Regional Market Insights */}
      <div className="bg-[#1e232d] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white font-bold mb-6">Regional Market Insights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((r, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <span className="text-yellow-500 font-bold text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {r.reg}
                </span>
                <span className="text-white font-bold text-lg">{r.comp}</span>
              </div>
              
              <div className="flex justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-800">
                <span>{r.biz} registered businesses</span>
                <span>Compliance</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Highest Price:</span>
                  <span className="text-white font-semibold">{r.high}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Lowest Price:</span>
                  <span className="text-white font-semibold">{r.low}</span>
                </div>
                <div className="flex justify-between mt-2 pt-2 border-t border-gray-800/50">
                  <span className="text-gray-500">Volatility Index:</span>
                  <span className={`font-bold ${r.volColor}`}>{r.vol}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}