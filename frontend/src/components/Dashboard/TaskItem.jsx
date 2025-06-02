import React from 'react';

const TaskItem = React.memo(({ task, completed, onToggle }) => (
  <div className='flex items-center gap-3 p-2 hover:bg-white/10 rounded-md transition-colors'>
    <input
      type='checkbox'
      checked={completed}
      onChange={onToggle}
      className='w-4 h-4 rounded border-2 border-gray-400 focus:ring-2 focus:ring-blue-300'
    />
    <span
      className={`text-sm ${
        completed ? 'line-through text-gray-500' : 'text-gray-800'
      }`}
    >
      {task}
    </span>
  </div>
));

export default TaskItem;
