import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="Categories flex flex-wrap justify-evenly mb-2 gap-2 md:gap-12 lg:mx-4 pt-2 md:py-4 bg-white">
      {/* Men Category */}
      <Link to="/products/1">
        <div className="category-section flex flex-col h-96 w-full  md:w-80 ">
          <div className="category-section-heading text-center font-semibold text-lg sm:text-2xl pb-2">
            Men
          </div>
          <div className="category-section-image w-full h-64 md:h-96 overflow-hidden relative">
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
        <div className="category-section flex flex-col h-96 w-full  md:w-80 ">
          <div className="category-section-heading text-center font-semibold text-lg sm:text-2xl pb-2">
            Women
          </div>
          <div className="category-section-image w-full h-64 md:h-96 overflow-hidden relative">
            <img
              className="object-cover w-full h-full hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              src="https://images.pexels.com/photos/6691699/pexels-photo-6691699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Women"
            />
          </div>
        </div>
      </Link>
      <Link to="/products/3">
        <div className="category-section flex flex-col h-96  w-[170.66px] sm:w-full md:w-80 ">
          <div className="category-section-heading text-center font-semibold text-lg sm:text-2xl pb-2">
          Kids
          </div>
          <div className="category-section-image w-full h-64 md:h-96 overflow-hidden relative">
            <img
              className="object-cover w-full h-full hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              src="https://images.pexels.com/photos/15227231/pexels-photo-15227231/free-photo-of-cute-boy-doing-thumb-s-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Kids"
            />
          </div>
        </div>
      </Link>
      <Link to="/products/4">
        <div className="category-section flex flex-col h-96 w-[170.66px] sm:w-full  md:w-80 ">
          <div className="category-section-heading text-center font-semibold text-lg sm:text-2xl pb-2">
          Accessories
          </div>
          <div className="category-section-image w-full h-64 md:h-96 overflow-hidden relative">
            <img
              className="object-cover w-full h-full hover:cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              src="https://images.pexels.com/photos/2779018/pexels-photo-2779018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Accessories"
            />
          </div>
        </div>
      </Link>

     
    </div>
  );
};

export default Categories;



             


             