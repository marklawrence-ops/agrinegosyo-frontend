import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import TopNav from './components/Layout/TopNav';

// Import Pages
import Dashboard from './pages/Dashboard';
import RegionalAnalysis from './pages/RegionalAnalysis';
import MarketIntelligence from './pages/MarketIntelligence';
import PriceMonitoring from './pages/PriceMonitoring';
import MSMEInventory from './pages/MSMEInventory';
import AlertsViolations from './pages/AlertsViolations';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#0f172a] font-sans overflow-hidden">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main Scrollable Content Area */}
        <main className="flex-1 ml-64 h-full overflow-y-auto p-8">
          <div className="w-full">
            <TopNav />
            
            {/* Dynamic Page Content goes here */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/regional-analysis" element={<RegionalAnalysis />} />
              <Route path="/market-intelligence" element={<MarketIntelligence />} />
              <Route path="/price-monitoring" element={<PriceMonitoring />} />
              <Route path="/msme-inventory" element={<MSMEInventory />} />
              <Route path="/alerts" element={<AlertsViolations />} />
            </Routes>
            
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;