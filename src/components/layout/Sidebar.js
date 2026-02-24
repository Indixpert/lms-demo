import React from 'react';

const NavLink = ({ children, isActive }) => (
  <a href="#" className={`flex items-center px-4 py-2.5 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition duration-200 ${isActive ? 'bg-gray-900 text-white' : ''}`}>
    {children}
  </a>
);

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <span className="text-white font-bold uppercase text-xl tracking-wider">LMS Portal</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto p-4">
        <nav className="flex-1 space-y-2">
          <NavLink isActive={true}>Dashboard</NavLink>
          <NavLink>My Courses</NavLink>
          <NavLink>Catalog</NavLink>
          <NavLink>Grades</NavLink>
          <NavLink>Profile</NavLink>
        </nav>
        <div className="mt-auto">
            <NavLink>Settings</NavLink>
            <NavLink>Logout</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;