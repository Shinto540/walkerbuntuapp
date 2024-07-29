import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-800">
              MchongoTZ
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Shop
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Contact
            </a>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search"
              />
            </div>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Cart
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
