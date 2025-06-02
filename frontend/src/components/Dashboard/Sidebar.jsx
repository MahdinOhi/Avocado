import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  CheckSquare,
  FileText,
  LayoutDashboard,
  Settings,
  User,
  ArrowLeft,
  X,
  Calendar,
} from 'lucide-react';
import SidebarLink from './SidebarLink';

export default function Sidebar({ isMobileMenuOpen, onToggleMenu }) {
  const location = useLocation();

  // Navigation items with icons
  const navItems = [
    { icon: LayoutDashboard, text: 'Dashboard', to: '/' },
    { icon: CheckSquare, text: 'Tasks', to: '/tasks' },
    { icon: FileText, text: 'Notes', to: '/notes' },
    { icon: Calendar, text: 'Calendar', to: '/calendar' },
  ];

  return (
    <aside
      className={`
        w-64 bg-[#9fb86f] flex flex-col justify-between p-4 transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:relative lg:z-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed lg:relative z-30 h-full rounded-l-3xl
      `}
    >
      <div>
        {/* Mobile Close Button */}
        <div className='lg:hidden flex justify-end mb-4'>
          <button
            onClick={onToggleMenu}
            className='p-2 text-white hover:bg-white/20 rounded-md'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* User Section */}
        <div className='px-4 py-6'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center'>
              <span className='text-white text-sm font-bold'>👤</span>
            </div>
            <div>
              <p className='font-semibold text-white'>Welcome</p>
              <p className='text-sm text-white/80'>Mahdin Ohi</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className='mt-4 space-y-2'>
          {navItems.map((item, index) => (
            <SidebarLink
              key={index}
              text={item.text}
              to={item.to}
              icon={item.icon}
              active={location.pathname === item.to}
            />
          ))}
        </nav>
      </div>

      {/* Bottom Icons */}
      <div className='flex justify-around items-center pt-4 border-t border-white/20'>
        <button className='p-2 text-white hover:bg-white/20 rounded-md transition-colors'>
          <Settings className='w-5 h-5' />
        </button>
        <button className='p-2 text-white hover:bg-white/20 rounded-md transition-colors'>
          <User className='w-5 h-5' />
        </button>
        <button className='p-2 text-white hover:bg-white/20 rounded-md transition-colors'>
          <ArrowLeft className='w-5 h-5' />
        </button>
      </div>
    </aside>
  );
}
