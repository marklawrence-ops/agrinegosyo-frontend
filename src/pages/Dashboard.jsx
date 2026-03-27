import StatCards from '../components/Dashboard/StatCards';
import RecentViolationsList from '../components/Dashboard/RecentViolationsList';
import RegionalComplianceBars from '../components/Dashboard/RegionalComplianceBars';
import DailyPriceTable from '../components/Dashboard/DailyPriceTable';

export default function Dashboard() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Market Intelligence Dashboard</h1>
        <p className="text-gray-400 text-sm">Real-time price compliance monitoring for MSME retailers</p>
      </header>
      
      <StatCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 flex flex-col">
          <RecentViolationsList />
        </div>
        <div className="lg:col-span-2 flex flex-col">
          <RegionalComplianceBars />
        </div>
      </div>

      <DailyPriceTable />
    </>
  );
}