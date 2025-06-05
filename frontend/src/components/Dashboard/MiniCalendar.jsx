import React, { useMemo } from 'react';

const MiniCalendar = React.memo(() => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const days = useMemo(() => {
    const daysArray = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }

    return daysArray;
  }, [daysInMonth, firstDayOfMonth]);

  return (
    <div className='text-center'>
      <h3 className='font-bold text-xl mb-6 text-gray-800'>
        {monthNames[currentMonth]} {currentYear}
      </h3>

      {/* Days of week header */}
      <div className='grid grid-cols-7 gap-2 mb-4'>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
          <div
            key={day}
            className='font-semibold text-gray-600 text-xs p-2 bg-[#DDF6D2]/30 rounded-lg'
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className='grid grid-cols-7 gap-2'>
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-3 text-sm rounded-lg transition-all duration-200 font-medium ${
              day === today
                ? 'bg-gradient-to-br from-[#B0DB9C] to-[#CAE8BD] text-white font-bold shadow-md'
                : day
                ? 'hover:bg-[#DDF6D2]/40 cursor-pointer text-gray-700 hover:shadow-sm border border-transparent hover:border-[#CAE8BD]/30'
                : ''
            }`}
            style={
              day === today
                ? {
                    boxShadow:
                      '0 4px 8px rgba(176, 219, 156, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                  }
                : {}
            }
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
});

export default MiniCalendar;
