import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./components/Dashboard/HomeDashboard";
import "./App.css";
import './index.css';

export default function App() {
  return (
    <div>
      <HomeDashboard />
      <Routes>
        {/* Add other routes here */}
        <Route path="/tasks" element={<div>Tasks Page</div>} />
        <Route path="/notes" element={<div>Notes Page</div>} />
        <Route path="/calendar" element={<div>Calendar Page</div>} />
      </Routes>
    </div>
  );
}
