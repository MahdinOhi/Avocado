import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  CheckSquare,
  FileText,
  LayoutDashboard,
  Settings,
  User,
  ArrowLeft,
  ArrowRight,
  X,
  Calendar,
} from 'lucide-react';
import SidebarLink from './SidebarLink';

export default function Sidebar({ isMobileMenuOpen, onToggleMenu }) {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Navigation items with icons
  const navItems = [
    { icon: LayoutDashboard, text: 'Dashboard', to: '/' },
    { icon: CheckSquare, text: 'Tasks', to: '/tasks' },
    { icon: FileText, text: 'Notes', to: '/notes' },
    { icon: Calendar, text: 'Calendar', to: '/calendar' },
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Desktop Collapsed State - Expand Button */}
      {isCollapsed && (
        <div className='hidden lg:flex fixed left-4 top-4 z-40'>
          <button
            onClick={toggleCollapse}
            className='p-3 bg-[#B0DB9C] text-black rounded-xl shadow-lg hover:bg-[#CAE8BD] transition-colors'
          >
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>
      )}

      <aside
        className={`
          ${
            isCollapsed ? 'w-0 lg:w-0' : 'w-64'
          } bg-[#B0DB9C]  flex flex-col justify-between p-4 transition-all duration-300 ease-in-out overflow-hidden
          lg:translate-x-0 lg:relative lg:z-0
          ${
            isMobileMenuOpen
              ? 'translate-x-0'
              : '-translate-x-full lg:translate-x-0'
          }
          ${isCollapsed ? 'lg:-translate-x-full' : ''}
          fixed lg:relative z-30 h-full 
        `}
        style={{
          background: 'transparent',
          boxShadow: 'none',
          border: 'none',
        }}
      >
        <div>
          {/* Mobile Close Button & Desktop Collapse Button */}
          <div className='flex justify-between items-center mb-4'>
            <button
              onClick={toggleCollapse}
              className='hidden lg:block p-2 text-black hover:bg-white/20 rounded-md transition-colors'
            >
              <ArrowLeft className='w-5 h-5' />
            </button>
            <button
              onClick={onToggleMenu}
              className='lg:hidden p-2 text-black hover:bg-white/20 rounded-md'
            >
              <X className='w-5 h-5' />
            </button>
          </div>

          {/* User Section */}
          <div className='px-4 py-6'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md'>
                <span className='text-white text-lg font-bold'>👤</span>
              </div>
              <div>
                <p className='font-semibold text-black text-lg'>Welcome</p>
                <p className='text-sm text-black/90'>Mahdin Ohi</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className='mt-6 space-y-3 '>
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
        <div className='flex justify-around items-center pt-6 border-t border-white/20'>
          <button className='p-3 text-black hover:bg-white/20 rounded-lg transition-colors shadow-sm'>
            <Settings className='w-5 h-5' />
          </button>
          <button className='p-3 text-black hover:bg-white/20 rounded-lg transition-colors shadow-sm'>
            <User className='w-5 h-5' />
          </button>
        </div>
      </aside>
    </>
  );
}
