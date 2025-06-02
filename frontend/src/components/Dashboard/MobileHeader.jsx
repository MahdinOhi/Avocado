import React from 'react';
import { Menu } from 'lucide-react';

const MobileHeader = React.memo(({ onToggleMenu }) => {
  return (
    <div className='lg:hidden flex items-center justify-between mb-6'>
      <button
        onClick={onToggleMenu}
        className='p-2 text-gray-700 hover:bg-white/20 rounded-md'
      >
        <Menu className='w-6 h-6' />
      </button>
      <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
    </div>
  );
});

export default MobileHeader;
