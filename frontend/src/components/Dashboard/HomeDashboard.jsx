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
    <div className='min-h-screen bg-gradient-to-br from-[#DDF6D2] via-[#CAE8BD] to-[#B0DB9C]'>
      <div className='w-full bg-gradient-to-r from-[#ECFAE5] to-[#DDF6D2] rounded-3xl shadow-2xl overflow-hidden border border-[#CAE8BD]'>
        <div className='flex h-screen'>
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
          <main className='flex-1 p-6 lg:p-8 overflow-auto bg-gradient-to-br from-[#ECFAE5]/50 to-[#DDF6D2]/30'>
            {/* Mobile Header */}
            <MobileHeader onToggleMenu={toggleMobileMenu} />

            {/* Search Bar */}
            <div className='mb-6'>
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>

            {/* Desktop Title */}
            <div className='hidden lg:block mb-8'>
              <h1 className='text-4xl font-bold text-gray-800 mb-2'>
                Dashboard
              </h1>
              <p className='text-gray-600'>
                Welcome back! Here's what's happening today.
              </p>
            </div>

            {/* Improved Grid Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-min'>
              {/* Row 1: Recent Vaults & Timer */}
              <div className='lg:col-span-8'>
                <RecentVaults />
              </div>
              <div className='lg:col-span-4'>
                <Card className='h-full flex items-center justify-center min-h-[200px]'>
                  <Timer />
                </Card>
              </div>

              {/* Row 2: Calendar & Tasks */}
              <div className='lg:col-span-5'>
                <Card className='h-full'>
                  <MiniCalendar />
                </Card>
              </div>
              <div className='lg:col-span-7'>
                <MyTasks tasks={tasks} onToggleTask={toggleTask} />
              </div>

              {/* Row 3: Upcoming Schedule - Full Width */}
              <div className='lg:col-span-12'>
                <UpcomingSchedule />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
