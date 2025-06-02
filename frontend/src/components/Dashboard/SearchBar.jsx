import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = React.memo(({ searchQuery, onSearchChange }) => {
  return (
    <div className='relative mb-6'>
      <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5' />
      <input
        type='text'
        placeholder='Search through your notes, tasks, and projects'
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className='w-full pl-12 pr-4 py-3 bg-white rounded-2xl shadow-sm border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-700'
      />
    </div>
  );
});

export default SearchBar;
