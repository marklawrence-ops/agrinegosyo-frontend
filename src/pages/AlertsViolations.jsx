import React, { useState } from 'react';

export default function AlertsViolations() {
  // Mock data perfectly matching the design mockup
  const rawAlerts = [
    { id: 'ALT-2026-0322-001', prod: 'Pork (Kasim)', biz: 'Metro Meat Market', loc: 'Makati, NCR', price: 310.00, srp: 280.00, var: '+10.7%', isCritical: true, status: 'Pending', reason: 'Price exceeds SRP threshold', time: '2026-03-22 09:15:00' },
    { id: 'ALT-2026-0322-002', prod: 'Onion (Red)', biz: 'Fresh Veggies Hub', loc: 'Mandaluyong, NCR', price: 135.00, srp: 120.00, var: '+12.5%', isCritical: false, status: 'Acknowledged', reason: 'Price approaching critical threshold', time: '2026-03-22 08:45:00' },
    { id: 'ALT-2026-0322-003', prod: 'Tilapia', biz: 'SeaFresh Trading', loc: 'Navotas, NCR', price: 145.00, srp: 130.00, var: '+11.5%', isCritical: false, status: 'Resolved', reason: 'Price exceeds recommended range', time: '2026-03-22 07:30:00' },
    { id: 'ALT-2026-0322-004', prod: 'Rice (Well-milled)', biz: 'Tindahan ni Aling Rosa', loc: 'Quezon City, NCR', price: 60.00, srp: 50.00, var: '+20.0%', isCritical: true, status: 'Pending', reason: 'Critical overpricing detected', time: '2026-03-22 10:05:00' },
    { id: 'ALT-2026-0322-005', prod: 'Garlic (Imported)', biz: 'Market Vendor A', loc: 'Manila, NCR', price: 185.00, srp: 166.00, var: '+11.4%', isCritical: false, status: 'Acknowledged', reason: 'Price exceeds SRP threshold', time: '2026-03-21 14:20:00' },
    { id: 'ALT-2026-0322-006', prod: 'Chicken (Whole)', biz: 'Poultry King', loc: 'Pasig, NCR', price: 195.00, srp: 170.00, var: '+14.7%', isCritical: true, status: 'Resolved', reason: 'Price normalized after review', time: '2026-03-20 11:10:00' },
  ];

  // State for functional tabs
  const [activeTab, setActiveTab] = useState('All');

  // Filter logic based on active tab
  const filteredAlerts = rawAlerts.filter(alert => 
    activeTab === 'All' ? true : alert.status === activeTab
  );

  // Dynamic summary counts
  const counts = {
    total: rawAlerts.length,
    pending: rawAlerts.filter(a => a.status === 'Pending').length,
    acknowledged: rawAlerts.filter(a => a.status === 'Acknowledged').length,
    resolved: rawAlerts.filter(a => a.status === 'Resolved').length,
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Pending': return 'text-yellow-500 border-yellow-500/50 bg-yellow-500/10';
      case 'Acknowledged': return 'text-yellow-600 border-yellow-600/50 bg-yellow-600/10';
      case 'Resolved': return 'text-teal-500 border-teal-500/50 bg-teal-500/10';
      default: return 'text-gray-400 border-gray-400/50 bg-gray-400/10';
    }
  };

  return (
    <div className="animate-fade-in pb-8">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-1">Price Alerts</h1>
        <p className="text-gray-400 text-sm">Automated compliance notifications and webhook alerts</p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-[#1e232d] border border-gray-800 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-gray-400 text-sm font-semibold mb-2">Total Alerts</span>
          <span className="text-white text-3xl font-bold">{counts.total}</span>
        </div>
        <div className="bg-[#1e232d] border border-yellow-900/30 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-gray-400 text-sm font-semibold mb-2">Pending</span>
          <span className="text-white text-3xl font-bold">{counts.pending}</span>
        </div>
        <div className="bg-[#1e232d] border border-gray-800 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-gray-400 text-sm font-semibold mb-2">Acknowledged</span>
          <span className="text-white text-3xl font-bold">{counts.acknowledged}</span>
        </div>
        <div className="bg-[#1e232d] border border-teal-900/30 p-4 rounded-xl flex flex-col justify-between">
          <span className="text-gray-400 text-sm font-semibold mb-2">Resolved</span>
          <span className="text-white text-3xl font-bold">{counts.resolved}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-800 mb-6">
        {['All', 'Pending', 'Acknowledged', 'Resolved'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-semibold transition-colors relative ${
              activeTab === tab ? 'text-yellow-500' : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-yellow-500 rounded-t-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Alert Cards List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert) => (
          <div key={alert.id} className="bg-[#1e232d] border border-gray-800 rounded-xl p-5 flex flex-col transition-colors hover:bg-[#232934]">
            
            {/* Top Row: Title & Badge */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-start">
                <div className={`mt-1 mr-4 flex-shrink-0 ${alert.isCritical ? 'text-red-500' : 'text-yellow-500'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{alert.prod}</h3>
                  <p className="text-gray-400 text-sm">{alert.biz} • {alert.loc}</p>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-md border flex items-center ${getStatusBadge(alert.status)}`}>
                {alert.status === 'Pending' && <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                {alert.status === 'Acknowledged' && <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>}
                {alert.status === 'Resolved' && <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                {alert.status}
              </span>
            </div>

            {/* Middle Row: Data Grid */}
            <div className="grid grid-cols-4 gap-4 mb-4 ml-10">
              <div>
                <p className="text-gray-500 text-xs mb-1">Current Price</p>
                <p className="text-white font-bold">₱{alert.price.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">SRP</p>
                <p className="text-white font-bold">₱{alert.srp.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Variance</p>
                <p className={`font-bold ${alert.isCritical ? 'text-red-500' : 'text-yellow-500'}`}>{alert.var}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Alert ID</p>
                <p className="text-white font-semibold text-xs mt-0.5">{alert.id}</p>
              </div>
            </div>

            {/* Bottom Row: Status Text & Actions */}
            <div className="ml-10 flex justify-between items-end">
              <div>
                <p className="text-gray-300 text-sm">{alert.reason}</p>
                <p className="text-gray-500 text-xs mt-1">{alert.time} • Business owner notified</p>
              </div>
              
              {/* Only show action buttons if the ticket is Pending */}
              {alert.status === 'Pending' && (
                <div className="flex space-x-3">
                  <button className="bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-1.5 px-4 rounded transition-colors text-sm">
                    Acknowledge
                  </button>
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-1.5 px-4 rounded transition-colors text-sm">
                    Resolve
                  </button>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}