import Sidebar from './components/Layout/Sidebar';
import TopNav from './components/Layout/TopNav'; // Import the new TopNav
import StatCards from './components/Dashboard/StatCards';
import RecentViolationsList from './components/Dashboard/RecentViolationsList';
import RegionalComplianceBars from './components/Dashboard/RegionalComplianceBars';
import DailyPriceTable from './components/Dashboard/DailyPriceTable';

function App() {
  return (
    <div className="flex h-screen bg-[#0f172a] font-sans overflow-hidden">
      
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Scrollable Content Area */}
      <main className="flex-1 ml-64 h-full overflow-y-auto p-8">
        <div className="w-full">
          
          {/* The new Top Navigation Bar */}
          <TopNav />
          
          {/* Dashboard Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-1">Market Intelligence Dashboard</h1>
            <p className="text-gray-400 text-sm">Real-time price compliance monitoring for MSME retailers</p>
          </header>
          
          {/* Top Cards */}
          <StatCards />
          
          {/* Middle Section: Violations & Regional Compliance */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 flex flex-col">
              <RecentViolationsList />
            </div>
            <div className="lg:col-span-2 flex flex-col">
              <RegionalComplianceBars />
            </div>
          </div>

          {/* Bottom Section: Full Width Price Table */}
          <DailyPriceTable />
          
        </div>
      </main>
      
    </div>
  );
}

export default App;