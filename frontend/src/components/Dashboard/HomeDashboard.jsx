import React from "react";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl h-full border border-gray-700/30">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Stats */}
              <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Total Tasks</h3>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
              
              <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Notes</h3>
                <p className="text-2xl font-bold text-white">24</p>
              </div>
              
              <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Events</h3>
                <p className="text-2xl font-bold text-white">5</p>
              </div>
            </div>
            
            {/* Recent Activity Section */}
            <div className="mt-8 bg-gray-800/40 rounded-xl p-4 border border-gray-700/30">
              <h2 className="text-xl text-white font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {/* Activity Items */}
                <div className="flex items-center space-x-4 text-gray-300 hover:bg-gray-700/30 p-2 rounded-lg transition-all duration-200">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <p>New task added to Project X</p>
                  <span className="text-sm text-gray-500 ml-auto">2h ago</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300 hover:bg-gray-700/30 p-2 rounded-lg transition-all duration-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p>Updated meeting notes</p>
                  <span className="text-sm text-gray-500 ml-auto">5h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
