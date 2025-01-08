import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-gray-900 text-white sticky top-0 z-20 shadow-lg">
      <div className="wrapper px-4 py-5 sm:px-8 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="logo flex items-center cursor-pointer">
          <span className="material-symbols-outlined text-3xl text-teal-400">watch</span>
          <p className="text-2xl font-bold ml-2 text-teal-400">WATCHY</p>
        </div>

        {/* Right Section: Links and Icons */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="nav-links flex items-center gap-6 text-base ">
            <Link to="/" className="hover:text-teal-400 transition">Home</Link>
            <Link to="/men" className="hover:text-teal-400 transition">Men</Link>
            <Link to="/women" className="hover:text-teal-400 transition">Women</Link>
            <Link to="/kids" className="hover:text-teal-400 transition">Kids</Link>
          </div>

          {/* Search Bar */}
          <div className="search-bar relative flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-gray-800 text-white px-4 py-2 rounded-full focus:ring-2 focus:ring-teal-400 focus:outline-none w-64"
            />
            <button className="absolute right-2 text-teal-400">
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
          </div>

          {/* Cart Icon with Badge */}
          <Link to="/product/cart" className="relative">
            <span className="material-symbols-outlined text-3xl">shopping_cart</span>
            <span className="bg-red-500 text-white text-xs absolute -top-1 -right-2 rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Hamburger Icon: Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
        <div className="flex flex-col items-center space-y-4 text-sm font-medium">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <Link to="/men" className="hover:text-teal-400">Men</Link>
          <Link to="/women" className="hover:text-teal-400">Women</Link>
          <Link to="/kids" className="hover:text-teal-400">Kids</Link>
          <Link to="/product/cart" className="hover:text-teal-400">Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
