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
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: true },
    { id: 4, text: 'Task 4', completed: false },
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
    <div className='min-h-screen bg-gradient-to-br from-[#b8c892] to-[#a4b373]'>
      <div className='w-full bg-[#e8f0d0] rounded-3xl shadow-2xl overflow-hidden'>
        <div className='flex h-screen'>
          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              className='fixed inset-0 bg-black/50 z-20 lg:hidden'
              onClick={toggleMobileMenu}
            />
          )}

          {/* Sidebar */}
          <Sidebar
            isMobileMenuOpen={isMobileMenuOpen}
            onToggleMenu={toggleMobileMenu}
          />

          {/* Main Content */}
          <main className='flex-1 p-4 lg:p-6 overflow-auto'>
            {/* Mobile Header */}
            <MobileHeader onToggleMenu={toggleMobileMenu} />

            {/* Search Bar */}
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {/* Desktop Title */}
            <h1 className='hidden lg:block text-3xl font-bold text-gray-800 mb-6'>
              Dashboard
            </h1>

            {/* Grid Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 h-auto lg:h-[calc(100vh-200px)]'>
              {/* Recent Vaults */}
              <RecentVaults />

              {/* Timer */}
              <Card className='lg:col-span-3 lg:row-span-1 flex items-center justify-center min-h-[200px]'>
                <Timer />
              </Card>

              {/* Calendar */}
              <Card className='lg:col-span-4 lg:row-span-2'>
                <MiniCalendar />
              </Card>

              {/* My Tasks */}
              <MyTasks tasks={tasks} onToggleTask={toggleTask} />

              {/* Upcoming Schedule */}
              <UpcomingSchedule />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
