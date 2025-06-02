import React from 'react';
import { Calendar } from 'lucide-react';
import Card from './Card';

const UpcomingSchedule = React.memo(() => {
  return (
    <Card className='lg:col-span-4 lg:row-span-1 flex flex-col items-center justify-center min-h-[200px]'>
      <h2 className='font-bold text-lg mb-4 text-gray-800'>
        Upcoming Schedule
      </h2>
      <div className='text-center text-gray-600'>
        <Calendar className='w-12 h-12 mx-auto mb-2 text-gray-400' />
        <p className='text-sm'>Schedule from google calendar</p>
      </div>
    </Card>
  );
});

export default UpcomingSchedule;
