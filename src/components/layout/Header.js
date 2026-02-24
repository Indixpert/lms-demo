import React from 'react';
import { user } from '../../data/dummyData';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center z-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, {user.name}!</p>
      </div>
      <div className="flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Search courses..." 
          className="hidden md:block px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <img src={user.avatar} alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-gray-200" />
      </div>
    </header>
  );
};

export default Header;