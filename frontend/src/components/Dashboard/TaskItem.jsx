import React from 'react';

const TaskItem = React.memo(({ task, completed, onToggle }) => (
  <div
    className='flex items-center gap-3 p-3 hover:bg-[#DDF6D2]/30 rounded-lg transition-all duration-200 border border-transparent hover:border-[#CAE8BD]/50'
    style={{
      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    }}
  >
    <input
      type='checkbox'
      checked={completed}
      onChange={onToggle}
      className='w-4 h-4 rounded border-2 border-[#B0DB9C] focus:ring-2 focus:ring-[#CAE8BD] text-[#B0DB9C] bg-white'
    />
    <span
      className={`text-sm font-medium transition-all duration-200 ${
        completed ? 'line-through text-gray-500' : 'text-gray-800'
      }`}
    >
      {task}
    </span>
  </div>
));

export default TaskItem;
