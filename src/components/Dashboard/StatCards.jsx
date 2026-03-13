import { useState, useEffect } from 'react';

export default function StatCards() {
  // 1. Set up state to hold the MSMEs from Laravel
  const [msmes, setMsmes] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch the data when the component loads
  useEffect(() => {
    // This URL points exactly to the Laravel API you built!
    fetch('http://127.0.0.1:8000/api/msmes', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setMsmes(data);      // Save the data to state
        setLoading(false);   // Turn off the loading state
      })
      .catch(error => {
        console.error("Error connecting to Laravel API:", error);
        setLoading(false);
      });
  }, []);

  // 3. Show a loading message while waiting for Laravel
  if (loading) {
    return <div className="text-white">Loading market data...</div>;
  }

  // 4. Render the UI using the data
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      
      {/* Total Active Stores Card */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-2 text-gray-400 mb-4">
          <span>📦</span>
          <span>Active Alerts</span>
        </div>
        <div className="text-4xl font-bold text-white">
          {/* Dynamically display the total count of MSMEs from the database */}
          {msmes.length}
        </div>
      </div>

      {/* You can add the other cards (Compliant, Warnings, Violations) here later! */}

    </div>
  );
}