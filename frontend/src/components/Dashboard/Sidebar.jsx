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
  LockOpenIcon,
} from 'lucide-react';
import SidebarLink from './SidebarLink';

export default function Sidebar({ isMobileMenuOpen, onToggleMenu, userName }) {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, text: 'Dashboard', to: '/' },
    { icon: CheckSquare, text: 'Tasks', to: '/tasks' },
    { icon: FileText, text: 'Notes', to: '/notes' },
    { icon: Calendar, text: 'Calendar', to: '/calendar' },
    { icon: LockOpenIcon, text: 'Login', to: '/login' },
  ];

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      {/* Expand button when collapsed */}
      {isCollapsed && (
        <div className='hidden lg:flex fixed bottom-4 left-4 z-40'>
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
          ${isCollapsed ? 'w-0 p-0' : 'w-64 p-4'}
          bg-[#B0DB9C] flex flex-col justify-between transition-all duration-300 ease-in-out overflow-hidden
          fixed lg:relative z-30 h-full
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{
          background: 'transparent',
          boxShadow: 'none',
          border: 'none',
        }}
      >
        <div>
          {/* Close button for mobile */}
          <div className='flex justify-end items-center mb-2 lg:hidden'>
            <button
              onClick={onToggleMenu}
              className='p-2 text-black hover:bg-white/20 rounded-md'
            >
              <X className='w-5 h-5' />
            </button>
          </div>

          {/* User Info */}
          <div className='px-4 py-6'>
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md'>
                <span className='text-white text-lg font-bold'>👤</span>
              </div>
              <div>
                <p className='font-semibold text-black text-lg'>Welcome</p>
                <p className='text-sm text-black/90'>{userName || 'Guest'}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className='mt-6 space-y-3'>
            {!isCollapsed &&
              navItems.map((item, index) => (
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

        {/* Bottom Icons + Toggle Button */}
        {!isCollapsed && (
          <div className='flex items-center justify-center gap-2 pt-6 border-t border-white/20'>
            <button className='p-3 text-black hover:bg-white/20 rounded-lg transition-colors shadow-sm'>
              <Settings className='w-5 h-5' />
            </button>
            <button className='p-3 text-black hover:bg-white/20 rounded-lg transition-colors shadow-sm'>
              <User className='w-5 h-5' />
            </button>
            <button
              onClick={toggleCollapse}
              className='p-3 text-black hover:bg-white/20 rounded-lg transition-colors shadow-sm'
            >
              <ArrowLeft className='w-5 h-5' />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
