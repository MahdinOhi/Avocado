import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

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

  const resetTimer = () => {
    setIsRunning(false);
    setTime({ minutes: 25, seconds: 0 });
  };

  return (
    <div className='text-center'>
      <h3 className='text-lg font-semibold text-gray-800 mb-4'>
        Pomodoro Timer
      </h3>
      <div
        className='text-5xl font-bold mb-6 text-gray-800 bg-[#DDF6D2]/50 rounded-2xl p-6 border border-[#CAE8BD]/30'
        style={{
          boxShadow:
            'inset 0 2px 4px rgba(176, 219, 156, 0.1), 0 1px 0 rgba(255, 255, 255, 0.5)',
        }}
      >
        {String(time.minutes).padStart(2, '0')}:
        {String(time.seconds).padStart(2, '0')}
      </div>
      <div className='flex gap-3 justify-center'>
        <button
          onClick={toggleTimer}
          className='w-12 h-12 bg-gradient-to-br from-[#B0DB9C] to-[#CAE8BD] rounded-xl flex items-center justify-center hover:from-[#CAE8BD] hover:to-[#B0DB9C] transition-all duration-200 shadow-md hover:shadow-lg'
          style={{
            boxShadow:
              '0 4px 8px rgba(176, 219, 156, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
          }}
          aria-label={isRunning ? 'Pause timer' : 'Start timer'}
        >
          {isRunning ? (
            <Pause className='w-6 h-6 text-white' />
          ) : (
            <Play className='w-6 h-6 text-white' />
          )}
        </button>
        <button
          onClick={resetTimer}
          className='w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center hover:from-gray-500 hover:to-gray-400 transition-all duration-200 shadow-md hover:shadow-lg'
          style={{
            boxShadow:
              '0 4px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
          }}
          aria-label='Reset timer'
        >
          <RotateCcw className='w-5 h-5 text-white' />
        </button>
      </div>
    </div>
  );
});

export default Timer;
