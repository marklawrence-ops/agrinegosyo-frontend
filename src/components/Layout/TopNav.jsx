export default function TopNav() {
  return (
    <div className="flex justify-between items-center pb-6 mb-8 border-b border-gray-800">
      
      {/* Left Side: Global Search */}
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
        <input 
          type="text" 
          placeholder="Search MSMEs, commodities, or regions..." 
          className="w-full bg-[#1e232d] text-white text-sm rounded-lg pl-10 pr-4 py-2.5 border border-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
        />
      </div>

      {/* Right Side: Notifications & Admin Profile */}
      <div className="flex items-center space-x-6">
        
        {/* Notification Bell */}
        <button className="relative text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          {/* Active Notification Dot */}
          <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-[#0f172a]"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold text-white">DTI Admin</p>
            <p className="text-xs text-gray-400">System Operator</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-700 border border-gray-600 overflow-hidden">
            <img 
              src="https://ui-avatars.com/api/?name=DTI+Admin&background=EAB308&color=000" 
              alt="Admin Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}