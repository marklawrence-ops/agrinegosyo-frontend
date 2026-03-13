import { useState, useEffect } from 'react';

export default function RecentViolationsList() {
  const [violations, setViolations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/violations', {
      headers: { 'Accept': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        setViolations(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-gray-400">Loading violations...</div>;

  return (
    <div className="bg-[#1e232d] rounded-xl border border-gray-800 p-6 flex-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-bold text-lg">Recent Violations</h2>
        <a href="#" className="text-yellow-500 text-sm hover:underline">View All &rarr;</a>
      </div>

      <div className="space-y-4">
        {violations.length === 0 ? (
          <p className="text-gray-400 text-sm">No recent violations found.</p>
        ) : (
          violations.map((record) => (
            <div key={record.id} className="bg-[#2a303c] p-4 rounded-lg flex flex-col">
              <div className="flex justify-between items-start">
                <span className="text-white font-semibold">{record.msme.store_name}</span>
                <span className="text-red-500 text-xs font-bold bg-red-500/10 px-2 py-1 rounded">
                  +{parseFloat(record.variance_percentage).toFixed(1)}%
                </span>
              </div>
              <span className="text-gray-400 text-sm mt-1">{record.commodity.name}</span>
              <span className="text-gray-500 text-xs mt-2">
                {record.msme.region.name} • ₱{record.market_price} vs SRP ₱{record.commodity.srp}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}