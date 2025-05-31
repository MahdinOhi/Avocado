import React from "react";
import { useLocation } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import SidebarIcons from "./SidebarIcons";

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-transparent flex flex-col justify-between py-4 px-3 h-full rounded-l-3xl overflow-hidden text-black">
      <div>
        <div className="px-4 py-6">
          <p className="font-semibold">User</p>
          <p className="text-sm">Placeholder</p>
        </div>

        <nav className="mt-4 space-y-2 rounded-3xl bg-black/20 h-full pt-20">
          <SidebarLink text="Dashboard" to="/" active={location.pathname === "/"} />
          <SidebarLink text="Tasks" to="/tasks" active={location.pathname === "/tasks"} />
          <SidebarLink text="Notes" to="/notes" active={location.pathname === "/notes"} />
          <SidebarLink text="Calender" to="/calendar" active={location.pathname === "/calendar"} />
        </nav>
      </div>

      <SidebarIcons />
    </aside>

  );
}
