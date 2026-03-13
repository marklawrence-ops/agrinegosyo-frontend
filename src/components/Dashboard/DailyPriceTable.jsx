import { useState, useEffect } from 'react';

export default function DailyPriceTable() {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/daily-prices', {
      headers: { 'Accept': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        setPrices(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-gray-400 mt-8">Loading today's prices...</div>;

  return (
    <div className="bg-[#1e232d] rounded-xl border border-gray-800 p-6 mt-6 w-full overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-bold text-lg">Today's Price Monitoring</h2>
        <a href="#" className="text-yellow-500 text-sm hover:underline">View All Commodities &rarr;</a>
      </div>

      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="text-gray-400 text-sm border-b border-gray-700">
            <th className="pb-3 font-medium">Commodity</th>
            <th className="pb-3 font-medium">Category</th>
            <th className="pb-3 font-medium">Market Price</th>
            <th className="pb-3 font-medium">SRP</th>
            <th className="pb-3 font-medium">Variance</th>
            <th className="pb-3 font-medium">Region</th>
            <th className="pb-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {prices.length === 0 ? (
            <tr>
              <td colSpan="7" className="py-4 text-center text-gray-500">No data available for today.</td>
            </tr>
          ) : (
            prices.map((record) => {
              const variance = parseFloat(record.variance_percentage);
              
              // Determine Status and Colors
              let statusText = 'Compliant';
              let statusColor = 'text-green-500 bg-green-500/10 border-green-500/20';
              let varianceColor = 'text-green-500';

              if (!record.is_compliant) {
                statusText = 'Critical';
                statusColor = 'text-red-500 bg-red-500/10 border-red-500/20';
                varianceColor = 'text-red-500';
              } else if (variance > 0 && variance <= 10) {
                statusText = 'Warning';
                statusColor = 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
                varianceColor = 'text-yellow-500';
              }

              return (
                <tr key={record.id} className="border-b border-gray-800/50 hover:bg-[#2a303c] transition-colors">
                  <td className="py-4 text-white font-medium">{record.commodity.name}</td>
                  <td className="py-4 text-gray-400">{record.commodity.category}</td>
                  <td className="py-4 text-white">₱{record.market_price}</td>
                  <td className="py-4 text-gray-400">₱{record.commodity.srp}</td>
                  <td className={`py-4 font-semibold ${varianceColor}`}>
                    {variance > 0 ? '+' : ''}{variance.toFixed(1)}%
                  </td>
                  <td className="py-4 text-gray-400">{record.msme.region.name}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold border ${statusColor}`}>
                      {statusText}
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}