import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="Categories px-4 py-8 bg-teal-100 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">Shop By Categories</h2>
        <p className="text-gray-600 mt-2">Explore our exclusive categories curated for every style</p>
      </div>

      <div className="flex flex-wrap justify-evenly gap-6">
        {/* Men Category */}
        <CategoryCard
          link="/products/1"
          title="Men"
          imgSrc="https://images.pexels.com/photos/1578531/pexels-photo-1578531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        {/* Women Category */}
        <CategoryCard
          link="/products/2"
          title="Women"
          imgSrc="https://images.pexels.com/photos/6691699/pexels-photo-6691699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        {/* Kids Category */}
        <CategoryCard
          link="/products/3"
          title="Kids"
          imgSrc="https://images.pexels.com/photos/15227231/pexels-photo-15227231/free-photo-of-cute-boy-doing-thumb-s-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        {/* Accessories Category */}
        <CategoryCard
          link="/products/4"
          title="Accessories"
          imgSrc="https://images.pexels.com/photos/2779018/pexels-photo-2779018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
};

const CategoryCard = ({ link, title, imgSrc }) => {
  return (
    <Link to={link} className="group w-full sm:w-64 md:w-80">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105">
        <div className="relative">
          <img
            className="object-contain w-full h-52 sm:h-64"
            src={imgSrc}
            alt={title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
        <div className="text-center py-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Categories;
