import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./components/Dashboard/HomeDashboard";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/tasks" element={<HomeDashboard />}>
          <Route index element={<div className="p-4 text-white"><h1 className="text-2xl font-bold mb-4">Tasks Page</h1></div>} />
        </Route>
        <Route path="/notes" element={<HomeDashboard />}>
          <Route index element={<div className="p-4 text-white"><h1 className="text-2xl font-bold mb-4">Notes Page</h1></div>} />
        </Route>
        <Route path="/calendar" element={<HomeDashboard />}>
          <Route index element={<div className="p-4 text-white"><h1 className="text-2xl font-bold mb-4">Calendar Page</h1></div>} />
        </Route>
      </Routes>
    </div>
  );
}
