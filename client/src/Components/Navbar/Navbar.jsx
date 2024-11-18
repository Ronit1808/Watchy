import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-gray-900 text-stone-200 sticky top-0 z-20">
      <div className="wrapper p-3 sm:p-4 md:p-5 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="left flex justify-between items-center w-full md:w-auto gap-5">
          <div className="item logo pl-3 flex cursor-pointer">
            <span className="material-symbols-outlined text-3xl">watch</span>
            <p className="text-2xl font-bold">WATCHY</p>
          </div>

          {/* Mobile Menu Toggle (Hamburger Icon) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        {/* Right Section: Links and Icons - Desktop */}
        <div className="right pr-2 justify-center items-center gap-5 hidden md:flex">
          <div className="item mb-1 hover:text-teal-400">
            <Link to="/">Home</Link>
          </div>
          <div className="item mb-1 hover:text-teal-400">About</div>
          <div className="item mb-1 hover:text-teal-400">Contact</div>
          <div className="item mb-1 hover:text-teal-400">Stores</div>

          {/* Search Icon */}
          <div className="item">
            <span className="material-symbols-outlined text-xl">search</span>
          </div>

          {/* Profile Icon */}
          <div className="item">
            <span className="material-symbols-outlined text-xl">person</span>
          </div>

          {/* Favorite Icon */}
          <div className="item">
            <span className="material-symbols-outlined text-xl">favorite</span>
          </div>

          {/* Cart Icon with Badge */}
          <Link to="/product/cart">
            <div className="item relative">
              <span className="material-symbols-outlined text-xl">shopping_cart</span>
              <span className="bg-blue-400 text-white text-xs flex justify-center items-center absolute left-3.5 top-0 rounded-lg w-4 h-4">
                0
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Visible when Menu is Open on Mobile) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
        <div className="flex flex-col items-center space-y-4">
          <div className="item hover:text-teal-400">
            <Link to="/">Home</Link>
          </div>
          <div className="item hover:text-teal-400">About</div>
          <div className="item hover:text-teal-400">Contact</div>
          <div className="item hover:text-teal-400">Stores</div>
          <div className="item hover:text-teal-400">
            <Link to="/product/cart">Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
