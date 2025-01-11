import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="navbar bg-gray-100 text-white sticky top-0 z-20 shadow-lg">
      <div className="wrapper px-4 py-4 sm:px-8 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="logo flex items-center cursor-pointer">
          <span className="material-symbols-outlined text-3xl text-teal-500">watch</span>
          <p className="text-xl sm:text-2xl font-semibold font-pacifico tracking-wide ml-2 text-teal-500">WRISTLY</p>
        </div>

        {/* Right Section: Links and Icons */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="nav-links flex text-black items-center gap-6 text-base">
            <Link to="/" className="hover:text-teal-400 transition">Home</Link>
            <Link to="/products/1" className="hover:text-teal-400 transition">Men</Link>
            <Link to="/products/2" className="hover:text-teal-400 transition">Women</Link>
            <Link to="/products/3" className="hover:text-teal-400 transition">Kids</Link>
          </div>

          {/* Search Bar */}
          <div className="search-bar relative flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-white text-black px-4 py-2 border-2 border-teal-500 rounded-full focus:ring-2 focus:ring-teal-400 focus:outline-none w-64"
            />
            <button className="absolute right-2 text-teal-400">
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
          </div>

          {/* Cart Icon with Badge */}
          <Link to="/product/cart" className="relative">
            <span className="material-symbols-outlined text-black text-3xl">shopping_cart</span>
            <span className="bg-red-500 text-white text-xs absolute -top-1 -right-2 rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Hamburger Icon: Mobile */}
        <div className="lg:hidden">
          <button
            ref={toggleButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-100 text-black p-4`}
      >
        <div className="flex flex-col pl-4 space-y-4 text-sm font-medium">
          <Link to="/" className="hover:text-teal-500">Home</Link>
          <Link to="/products/1" className="hover:text-teal-500">Men</Link>
          <Link to="/products/2" className="hover:text-teal-500">Women</Link>
          <Link to="/products/3" className="hover:text-teal-500">Kids</Link>
          <Link to="/product/cart" className="hover:text-teal-500">Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
