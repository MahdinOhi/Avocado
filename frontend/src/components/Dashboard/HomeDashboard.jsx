import React from 'react';
import Sidebar from "./Sidebar";
import Searchbar from "../Layout/Searchbar";


export default function Dashboard() {
  return (
    <div className="flex h-[920px] rounded-3xl bg-[#4e4e4c]">
      <Sidebar />
      <main className="flex-1 p-6">
        <Searchbar />
        <div className="bg-[#676765] rounded-3xl p-6 shadow-[10px_8px_40px_rgba(0,0,0,0.9)] h-full">
          <h1 className="text-3xl text-white font-bold mb-4">Dashboard</h1>
        </div>
      </main>
    </div>
  );
}
