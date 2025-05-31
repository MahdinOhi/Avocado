import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import './index.css';

export default function App() {
  return (
    <div>
      <Dashboard />
      <Routes>
        {/* Add other routes here */}
        <Route path="/tasks" element={<div>Tasks Page</div>} />
        <Route path="/notes" element={<div>Notes Page</div>} />
        <Route path="/calendar" element={<div>Calendar Page</div>} />
      </Routes>
    </div>
  );
}
