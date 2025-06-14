import React, { useState } from 'react';
import Sidebar from './ProfileBar'; // Import the sidebar component


// Main Profile Component
export default function ProfilePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className='h-screen bg-[#B0DB9C] p-4 overflow-hidden'>
      <div className='flex h-full gap-4'>
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className='fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm'
            onClick={toggleMobileMenu}
          />
        )}

        {/* Sidebar */}
        <div className='flex-shrink-0'>
          <Sidebar
            isMobileMenuOpen={isMobileMenuOpen}
            onToggleMenu={toggleMobileMenu}
          />
        </div>

        {/* Main Content - Profile Page */}
        <div className='flex-1 min-w-0'>
          <main className='h-full bg-[#ECFAE5] rounded-3xl shadow-lg p-6 flex flex-col overflow-hidden'>
            
            {/* Mobile Header for menu toggle */}
            <div className='lg:hidden flex items-center justify-between mb-4'>
              <button
                onClick={toggleMobileMenu}
                className='p-2 bg-[#9BC53D] text-white rounded-lg'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
              <h1 className='text-lg font-bold text-gray-800'>Profile</h1>
              <div className='w-10'></div>
            </div>

            {/* Scrollable Content Area */}
            <div className='flex-1 overflow-y-auto'>
              <div className=' space-y-6'>
                
                {/* About Section */}
                <div className='bg-transparent p-6'>
                  <h2 className='text-xl font-bold text-gray-800 mb-4'>About</h2>
                  <div className=' flex flex-col items-start gap-4'> 
                    <h2 className ='text-sm text-gray-600'>Member since january 2024</h2>
                    <h2 className ='text-sm text-gray-600'>Language: English</h2>                  
                  </div>
             
                </div>

                {/* My Stats Section */}
                <div className='bg-transparent rounded-2xl p-6 shadow-md border border-black'>
                  <h2 className='text-xl font-bold text-gray-800 mb-4'>My Stats</h2>
                  <div className='text-gray-600'>
                    <p>Statistics will be displayed here.</p>
                  </div>
                </div>

                {/* GitHub Like Heatmap Section */}
                <div className='bg-transparent rounded-2xl p-6 shadow-md border border-black'>
                  <h2 className='text-xl font-bold text-gray-800 mb-4'>Github Like Hitmap</h2>
                  <div className='text-gray-600'>
                    <p>GitHub contribution heatmap will be displayed here.</p>
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