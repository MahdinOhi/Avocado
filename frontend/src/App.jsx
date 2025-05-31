import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./components/Dashboard/HomeDashboard";
import "./App.css";

export default function App() {
  return (
    <div>
      <HomeDashboard />
      <Routes>
        <Route path="/tasks" element={<div>Tasks Page</div>} />
        <Route path="/notes" element={<div>Notes Page</div>} />
        <Route path="/calendar" element={<div>Calendar Page</div>} />
      </Routes>
    </div>
  );
}
