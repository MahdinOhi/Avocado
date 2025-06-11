import React from 'react';

export default function LeftPanel() {
  return (
    <div className="relative bg-black text-white p-8 flex flex-col min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Design with us</h1>
        <p className="text-lg text-gray-300">
          Access thousands of design resources & templates
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src="https://picsum.photos/300"
          alt="Geometric decoration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
