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
            ? 'bg-[#7a8f4f] text-white shadow-lg font-semibold'
            : 'text-white/80 hover:bg-white/10 hover:text-white'
        }
      `}
    >
      {Icon && <Icon className='w-5 h-5' />}
      <span className='font-medium'>{text}</span>
    </Link>
  );
}
