import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="Categories flex flex-wrap justify-evenly  p-4 gap-2 sm:gap-4 md:gap-12 lg:mx-4 py-2 bg-white">
      {/* Men Category */}
      <Link to="/products/1">
        <div className="category-section flex flex-col gap-4 h-96 w-full sm:w-80 md:w-80 mb-2">
          <div className="category-section-heading text-center font-semibold text-xl sm:text-2xl">
            Men
          </div>
          <div className="category-section-image w-full h-64 sm:h-80 md:h-96 overflow-hidden relative">
            <img
              className="object-cover w-full h-full hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              src="https://images.pexels.com/photos/1578531/pexels-photo-1578531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Men"
            />
          </div>
        </div>
      </Link>

      {/* Women Category */}
      <Link to="/products/2">
        <div className="category-section flex flex-col gap-4 h-96 w-full sm:w-80 md:w-80 mb-2">
          <div className="category-section-heading text-center font-semibold text-xl sm:text-2xl">
            Women
          </div>
          <div className="category-section-image w-full h-64 sm:h-80 md:h-96 overflow-hidden relative">
            <img
              className="object-cover w-full h-full hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              src="https://images.pexels.com/photos/6691699/pexels-photo-6691699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Women"
            />
          </div>
        </div>
      </Link>

      {/* Kids Category */}
      <Link to="/products/3">
        <div className="category-section flex flex-col gap-4 h-96 w-full sm:w-80 md:w-80 mb-2">
          <div className="category-section-heading text-center font-semibold text-xl sm:text-2xl">
            Kids
          </div>
          <div className="category-section-image w-full h-64 sm:h-80 md:h-96 overflow-hidden relative">
            <img
              className="object-cover w-full h-full hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              src="https://images.pexels.com/photos/15227231/pexels-photo-15227231/free-photo-of-cute-boy-doing-thumb-s-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Kids"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
