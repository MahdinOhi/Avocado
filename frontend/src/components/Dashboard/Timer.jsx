import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const Timer = React.memo(() => {
  const [time, setTime] = useState({ minutes: 25, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && (time.minutes > 0 || time.seconds > 0)) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
          } else if (prev.minutes > 0) {
            return { minutes: prev.minutes - 1, seconds: 59 };
          } else {
            setIsRunning(false);
            return { minutes: 0, seconds: 0 };
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const toggleTimer = () => setIsRunning(!isRunning);

  return (
    <div className='text-center'>
      <div className='text-4xl font-bold mb-4'>
        {String(time.minutes).padStart(2, '0')}:
        {String(time.seconds).padStart(2, '0')}
      </div>
      <button
        onClick={toggleTimer}
        className='w-12 h-12 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors'
        aria-label={isRunning ? 'Pause timer' : 'Start timer'}
      >
        <Play className='w-6 h-6' />
      </button>
    </div>
  );
});

export default Timer;
