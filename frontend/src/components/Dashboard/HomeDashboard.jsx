import React, { useState } from 'react';

// All imported components (Do not touch it)
import Card from './Card';
import Timer from './Timer';
import MiniCalendar from './MiniCalendar';
import RecentVaults from './RecentVaults';
import MyTasks from './MyTasks';
import UpcomingSchedule from './UpcomingSchedule';
import SearchBar from '../Layout/SearchBar';
import MobileHeader from './MobileHeader';
import Sidebar from './Sidebar';

// Main Dashboard Component
export default function HomeDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review project documentation', completed: false },
    { id: 2, text: 'Update dashboard design', completed: false },
    { id: 3, text: 'Team meeting at 3 PM', completed: true },
    { id: 4, text: 'Complete code review', completed: false },
    { id: 5, text: 'Prepare presentation slides', completed: false },
  ]);

  const toggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#DDF6D2] via-[#CAE8BD] to-[#B0DB9C] p-2'>
      <div className='w-full h-screen bg-gradient-to-r from-[#ECFAE5] to-[#DDF6D2] rounded-3xl shadow-2xl overflow-hidden border border-[#CAE8BD]'>
        <div className='flex h-full'>
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className='fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm'
              onClick={toggleMobileMenu}
            />
          )}

          {/* Sidebar */}
          <Sidebar
            isMobileMenuOpen={isMobileMenuOpen}
            onToggleMenu={toggleMobileMenu}
          />

          {/* Main Content */}
          <main className='flex-1 p-4 lg:p-6 bg-gradient-to-br from-[#ECFAE5]/50 to-[#DDF6D2]/30 flex flex-col h-full'>
            {/* Mobile Header */}
            <MobileHeader onToggleMenu={toggleMobileMenu} />

            {/* Search Bar - Compact */}
            <div className='mb-4'>
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>

            {/* Desktop Title - Compact */}
            <div className='hidden lg:block mb-4'>
              <h1 className='text-2xl font-bold text-gray-800 mb-1'>
                Dashboard
              </h1>
              <p className='text-sm text-gray-600'>
                Welcome back! Here's what's happening today.
              </p>
            </div>

            {/* Optimized Grid Layout - Fixed Height */}
            <div className='flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 h-full min-h-0'>
              {/* Top Row: Recent Vaults & Timer */}
              <div className='lg:col-span-7 flex'>
                <div
                  className='flex-1 bg-[#ECFAE5] rounded-2xl p-4 shadow-lg border border-[#DDF6D2] hover:shadow-xl transition-all duration-300'
                  style={{
                    boxShadow:
                      '0 8px 32px -8px rgba(176, 219, 156, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <h2 className='font-bold text-lg mb-3 text-gray-800'>
                    Recent Vaults
                  </h2>
                  <div className='space-y-2 h-full overflow-y-auto'>
                    {[
                      {
                        name: 'Project Alpha',
                        description: 'Main development vault',
                        date: 'Opened Today',
                      },
                      {
                        name: 'Research Notes',
                        description: 'Latest findings',
                        date: 'Updated 2h ago',
                      },
                      {
                        name: 'Meeting Minutes',
                        description: 'Team discussions',
                        date: 'Yesterday',
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className='flex items-center justify-between p-3 bg-[#DDF6D2]/40 rounded-xl hover:bg-[#CAE8BD]/30 transition-all duration-200 border border-[#CAE8BD]/30 hover:border-[#B0DB9C]/50 cursor-pointer group'
                        style={{
                          boxShadow:
                            '0 2px 8px rgba(176, 219, 156, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                        }}
                      >
                        <div className='flex items-center gap-3'>
                          <div
                            className='w-8 h-8 bg-gradient-to-br from-[#B0DB9C] to-[#CAE8BD] rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow'
                            style={{
                              boxShadow:
                                '0 2px 4px rgba(176, 219, 156, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                            }}
                          >
                            <div className='w-4 h-4 bg-white rounded-sm opacity-90'></div>
                          </div>
                          <div>
                            <p className='font-medium text-gray-800 text-sm'>
                              {item.name}
                            </p>
                            <p className='text-xs text-gray-600'>
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <p className='text-xs text-gray-500'>{item.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='lg:col-span-5 flex'>
                <div
                  className='flex-1 bg-[#ECFAE5] rounded-2xl p-4 shadow-lg border border-[#DDF6D2] hover:shadow-xl transition-all duration-300 flex items-center justify-center'
                  style={{
                    boxShadow:
                      '0 8px 32px -8px rgba(176, 219, 156, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <Timer />
                </div>
              </div>

              {/* Middle Row: Calendar & Tasks */}
              <div className='lg:col-span-5 flex'>
                <div
                  className='flex-1 bg-[#ECFAE5] rounded-2xl p-4 shadow-lg border border-[#DDF6D2] hover:shadow-xl transition-all duration-300'
                  style={{
                    boxShadow:
                      '0 8px 32px -8px rgba(176, 219, 156, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <MiniCalendar />
                </div>
              </div>

              <div className='lg:col-span-7 flex'>
                <div
                  className='flex-1 bg-[#ECFAE5] rounded-2xl p-4 shadow-lg border border-[#DDF6D2] hover:shadow-xl transition-all duration-300'
                  style={{
                    boxShadow:
                      '0 8px 32px -8px rgba(176, 219, 156, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <h2 className='font-bold text-lg mb-3 text-gray-800'>
                    My Tasks
                  </h2>
                  <div className='space-y-2 h-full overflow-y-auto'>
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className='flex items-center gap-3 p-2 hover:bg-[#DDF6D2]/30 rounded-lg transition-all duration-200 border border-transparent hover:border-[#CAE8BD]/50'
                        style={{
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        <input
                          type='checkbox'
                          checked={task.completed}
                          onChange={() => toggleTask(task.id)}
                          className='w-4 h-4 rounded border-2 border-[#B0DB9C] focus:ring-2 focus:ring-[#CAE8BD] text-[#B0DB9C] bg-white'
                        />
                        <span
                          className={`text-sm font-medium transition-all duration-200 ${
                            task.completed
                              ? 'line-through text-gray-500'
                              : 'text-gray-800'
                          }`}
                        >
                          {task.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Upcoming Schedule - Compact */}
              <div className='lg:col-span-12 flex'>
                <div
                  className='flex-1 bg-[#ECFAE5] rounded-2xl p-4 shadow-lg border border-[#DDF6D2] hover:shadow-xl transition-all duration-300'
                  style={{
                    boxShadow:
                      '0 8px 32px -8px rgba(176, 219, 156, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <div className='flex items-center justify-between mb-3'>
                    <h2 className='font-bold text-lg text-gray-800 flex items-center gap-2'>
                      <svg
                        className='w-5 h-5 text-[#B0DB9C]'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                      Today's Schedule
                    </h2>
                    <button
                      className='p-2 bg-[#B0DB9C] text-white rounded-lg hover:bg-[#CAE8BD] transition-colors shadow-md'
                      style={{
                        boxShadow:
                          '0 2px 4px rgba(176, 219, 156, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 4v16m8-8H4'
                        />
                      </svg>
                    </button>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    {[
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
                    ].map((event, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-3 p-3 bg-[#DDF6D2]/30 rounded-xl border border-[#CAE8BD]/30 hover:bg-[#CAE8BD]/20 transition-all duration-200 cursor-pointer group'
                        style={{
                          boxShadow:
                            '0 2px 4px rgba(176, 219, 156, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                        }}
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}
                          style={{
                            boxShadow:
                              '0 4px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                          }}
                        >
                          <svg
                            className='w-4 h-4 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                        </div>
                        <div className='flex-1 min-w-0'>
                          <h3 className='font-medium text-gray-800 text-sm truncate'>
                            {event.title}
                          </h3>
                          <p className='text-xs text-gray-600'>{event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
