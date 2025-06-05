import React from 'react';
import { Calendar, Clock, Plus } from 'lucide-react';
import Card from './Card';

const UpcomingSchedule = React.memo(() => {
  const mockEvents = [
    {
      time: '9:00 AM',
      title: 'Team Standup',
      color: 'from-[#B0DB9C] to-[#CAE8BD]',
    },
    {
      time: '11:30 AM',
      title: 'Client Meeting',
      color: 'from-blue-400 to-blue-500',
    },
    {
      time: '2:00 PM',
      title: 'Design Review',
      color: 'from-purple-400 to-purple-500',
    },
    {
      time: '4:30 PM',
      title: 'Project Planning',
      color: 'from-orange-400 to-orange-500',
    },
  ];

  return (
    <Card className='min-h-[250px]'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='font-bold text-xl text-gray-800 flex items-center gap-2'>
          <Calendar className='w-6 h-6 text-[#B0DB9C]' />
          Today's Schedule
        </h2>
        <button
          className='p-2 bg-[#B0DB9C] text-white rounded-lg hover:bg-[#CAE8BD] transition-colors shadow-md'
          style={{
            boxShadow:
              '0 2px 4px rgba(176, 219, 156, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
          }}
        >
          <Plus className='w-5 h-5' />
        </button>
      </div>

      <div className='space-y-4'>
        {mockEvents.map((event, index) => (
          <div
            key={index}
            className='flex items-center gap-4 p-4 bg-[#DDF6D2]/30 rounded-xl border border-[#CAE8BD]/30 hover:bg-[#CAE8BD]/20 transition-all duration-200 cursor-pointer group'
            style={{
              boxShadow:
                '0 2px 4px rgba(176, 219, 156, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            }}
          >
            <div
              className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}
              style={{
                boxShadow:
                  '0 4px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
              }}
            >
              <Clock className='w-5 h-5 text-white' />
            </div>
            <div className='flex-1'>
              <h3 className='font-semibold text-gray-800 mb-1'>
                {event.title}
              </h3>
              <p className='text-sm text-gray-600 flex items-center gap-1'>
                <Clock className='w-4 h-4' />
                {event.time}
              </p>
            </div>
            <div className='w-2 h-2 bg-gradient-to-br from-[#B0DB9C] to-[#CAE8BD] rounded-full'></div>
          </div>
        ))}
      </div>

      <div className='text-center mt-6 pt-4 border-t border-[#CAE8BD]/20'>
        <p className='text-sm text-gray-600'>Synced with Google Calendar</p>
      </div>
    </Card>
  );
});

export default UpcomingSchedule;
