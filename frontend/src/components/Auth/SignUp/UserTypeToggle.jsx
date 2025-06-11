import React from 'react';

export default function UserTypeToggle({ selectedType, onTypeChange }) {
  const types = ['Student', 'Researcher', 'Professional'];
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        I am a <span className="text-red-500">*</span>
      </label>
      <div className="flex bg-gray-100 rounded-lg p-1">
        {types.map(type => (
          <button
            key={type}
            type="button"
            onClick={() => onTypeChange(type)}
            className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
              selectedType === type
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
