import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBriefcase } from 'react-icons/bi';
import { MdOutlineShowChart } from 'react-icons/md';

const BottomNavBar = () => {
  const navItems = [
    { to: '/', label: 'Home', icon: <AiOutlineHome size={24} /> },
    { to: '/portfolio', label: 'Portfolio', icon: <BiBriefcase size={24} /> },
    { to: '/ipos', label: 'IPOs', icon: <MdOutlineShowChart size={24} /> },
    { to: '/profile', label: 'Profile', icon: <AiOutlineUser size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 shadow-inner">
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? 'text-blue-600' : 'text-gray-500'
            }`
          }
        >
          {icon}
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNavBar;
