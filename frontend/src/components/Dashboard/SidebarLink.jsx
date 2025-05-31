import React from "react";
import { Link } from "react-router-dom";

export default function SidebarLink({ text, to, active }) {
  return (
    <Link
      to={to}
      className={`block px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
        active ? "bg-blue-200 text-black font-semibold" : "hover:bg-white/30 text-black"
      }`}
    >
      {text}
    </Link>
  );
}
