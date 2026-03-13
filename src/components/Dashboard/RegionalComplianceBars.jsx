import { useState, useEffect } from 'react';

export default function RegionalComplianceBars() {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/regional-compliance', {
      headers: { 'Accept': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        setRegions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-gray-400">Loading regional data...</div>;

  return (
    <div className="bg-[#1e232d] rounded-xl border border-gray-800 p-6 flex-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-bold text-lg">Regional Compliance</h2>
        <a href="#" className="text-yellow-500 text-sm hover:underline">View Details &rarr;</a>
      </div>

      <div className="space-y-6">
        {regions.length === 0 ? (
          <p className="text-gray-400 text-sm">No regional data available.</p>
        ) : (
          regions.map((region) => (
            <div key={region.id} className="bg-[#2a303c] p-4 rounded-lg flex items-center justify-between">
              
              {/* Left Side: Region Info */}
              <div className="flex-1 pr-6">
                <div className="flex justify-between mb-1">
                  <span className="text-white font-semibold">{region.name}</span>
                  <span className="text-yellow-500 font-bold">{region.compliance_rate}%</span>
                </div>
                
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>{region.total_msmes} MSMEs</span>
                  <span>Compliance Rate</span>
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  {/* Dynamic Progress Bar Fill */}
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{ width: `${region.compliance_rate}%` }}
                  ></div>
                </div>
                
                <div className="text-gray-500 text-xs mt-2">
                  {region.violations} violations
                </div>
              </div>

              {/* Right Side: Huge Percentage Text (Optional, based on your mockup) */}
              <div className="hidden md:block pl-6 border-l border-gray-700">
                <span className="text-4xl font-bold text-yellow-500">
                  {region.compliance_rate}%
                </span>
              </div>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
}