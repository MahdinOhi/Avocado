import React from 'react';

const VaultItem = React.memo(({ name, description, date }) => (
  <div className='flex items-center justify-between p-3 bg-white/20 rounded-lg mb-2 last:mb-0 hover:bg-white/30 transition-colors'>
    <div className='flex items-center gap-3'>
      <div className='w-8 h-8 bg-black rounded-full flex items-center justify-center'>
        <div className='w-4 h-4 bg-white rounded-sm'></div>
      </div>
      <div>
        <p className='font-medium text-sm'>{name}</p>
        <p className='text-xs text-gray-600'>{description}</p>
      </div>
    </div>
    <p className='text-xs text-gray-500'>{date}</p>
  </div>
));

export default VaultItem;
