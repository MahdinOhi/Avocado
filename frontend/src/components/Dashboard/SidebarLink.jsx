import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarLink({ text, to, active, icon: Icon }) {
  return (
    <Link
      to={to}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer
        ${
          active
            ? 'bg-white/25 text-white shadow-lg font-semibold backdrop-blur-sm border border-white/30'
            : 'text-white/90 hover:bg-white/15 hover:text-white hover:shadow-md'
        }
      `}
      style={{
        boxShadow: active
          ? '0 2px 4px rgba(176, 219, 156, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
          : 'none',
      }}
    >
      {Icon && <Icon className='w-5 h-5' />}
      <span className='font-medium'>{text}</span>
    </Link>
  );
}
