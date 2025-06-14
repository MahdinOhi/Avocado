import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckSquare, LayoutDashboard, Lock } from 'lucide-react';

export default function profilebarLink({ text,  icon: Icon, to  }) {

   const location = useLocation();
  const isActive = location.pathname === to;


  return (
    <Link to={to} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
      isActive 
        ? 'bg-white/30 text-black shadow-md' 
        : 'text-black/80 hover:bg-white/20'
    }`}>
      <Icon className='w-5 h-5' />
      <span className='font-medium'>{text}</span>
    </Link>
  );
}
