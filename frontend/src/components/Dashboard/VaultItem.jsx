import React from 'react';

const VaultItem = React.memo(({ name, description, date }) => (
  <div
    className='flex items-center justify-between p-4 bg-[#DDF6D2]/40 rounded-xl mb-3 last:mb-0 hover:bg-[#CAE8BD]/30 transition-all duration-200 border border-[#CAE8BD]/30 hover:border-[#B0DB9C]/50 cursor-pointer group'
    style={{
      boxShadow:
        '0 2px 4px rgba(176, 219, 156, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
    }}
  >
    <div className='flex items-center gap-4'>
      <div
        className='w-10 h-10 bg-gradient-to-br from-[#B0DB9C] to-[#CAE8BD] rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow'
        style={{
          boxShadow:
            '0 2px 4px rgba(176, 219, 156, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        }}
      >
        <div className='w-5 h-5 bg-white rounded-md opacity-90'></div>
      </div>
      <div>
        <p className='font-semibold text-gray-800 mb-1'>{name}</p>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </div>
    <div className='text-right'>
      <p className='text-xs text-gray-500 max-w-32 leading-tight'>{date}</p>
    </div>
  </div>
));

export default VaultItem;
