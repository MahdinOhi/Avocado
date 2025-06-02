import React from 'react';
import Sidebar from "./Sidebar";
import Searchbar from "../Layout/Searchbar";


export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-6 overflow-hidden">
        <div className="bg-[#ccffb3] rounded-3xl p-6 shadow-[10px_8px_40px_rgba(0,0,0,0.5)] h-full overflow-hidden">
          <Searchbar />
          <h1 className="text-3xl text-black font-bold mb-4">Dashboard</h1>
        </div>
      </main>
    </div>
  );
}

