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
      <h3 className='font-semibold mb-3 text-sm'>
        {monthNames[currentMonth]} {currentYear}
      </h3>
      <div className='grid grid-cols-7 gap-1 text-xs mb-2'>
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
          <div key={day} className='font-medium text-gray-600 p-1'>
            {day}
          </div>
        ))}
      </div>
      <div className='grid grid-cols-7 gap-1'>
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-2 text-xs rounded-md transition-colors ${
              day === today
                ? 'bg-red-500 text-white font-bold'
                : day
                ? 'hover:bg-white/30 cursor-pointer'
                : ''
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
});

export default MiniCalendar;
