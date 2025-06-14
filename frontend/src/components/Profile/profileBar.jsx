import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  CheckSquare,
  LayoutDashboard,
  Lock,
  Settings,
  User,
  ArrowLeft,
  ArrowRight,
  X
} from 'lucide-react';
import SidebarLink from './profilebarLink'; 

export default function profileBar({ isMobileMenuOpen, onToggleMenu }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, text: 'Overview', to: '/profile' },
    { icon: CheckSquare, text: 'Setting', to: '/profile/settings' },
    { icon: Lock, text: 'LogOut', to: '/logout' },
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
          ${isCollapsed ? 'w-0 lg:w-0' : 'w-64'}
          bg-[#B0DB9C] flex flex-col p-4 transition-all duration-300 ease-in-out overflow-hidden
          lg:translate-x-0 lg:relative lg:z-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'lg:-translate-x-full' : ''}
          fixed lg:relative z-30 h-full
        `}
        style={{
          background: 'transparent',
          boxShadow: 'none',
          border: 'none',
        }}
      >
        <div className='flex-1'>
          <div className='flex justify-between items-center mb-4'>
      
          </div>

          {/* User Info */}
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

          <nav className='mt-6 space-y-3'>
            {navItems.map((item, index) => (
              <SidebarLink
                key={index}
                text={item.text}
                icon={item.icon}
                active={item.active}
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
                     <Link to ='/profile'>
                  <button className='p-3 text-black hover:bg-white/20 rounded-lg transition-colors shadow-sm'>
                    <User className='w-5 h-5' />
                  </button>
                  </Link>
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
