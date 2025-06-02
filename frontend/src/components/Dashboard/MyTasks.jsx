import React from 'react';
import Card from './Card';
import TaskItem from './TaskItem';

const MyTasks = React.memo(({ tasks, onToggleTask }) => {
  return (
    <Card className='lg:col-span-4 lg:row-span-1'>
      <h2 className='font-bold text-lg mb-4 text-gray-800'>My Tasks</h2>
      <div className='space-y-2 max-h-48 lg:max-h-none overflow-y-auto'>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task.text}
            completed={task.completed}
            onToggle={() => onToggleTask(task.id)}
          />
        ))}
      </div>
    </Card>
  );
});

export default MyTasks;
