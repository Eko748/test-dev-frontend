import React from 'react';

// Layout Navbar
const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h5 className="text-white text-xl font-bold">Test Dev Frontend</h5>
        <ul className="flex space-x-4">
          <li><a href="#esa" className="text-white hover:text-gray-300">Esa</a></li>
          <li><a href="#case" className="text-white hover:text-gray-300">Case</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
