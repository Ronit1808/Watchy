import React from 'react';
import { Link } from 'react-router-dom';
import men from '../../Images/men.jpg';
import women from '../../Images/women.jpg';
import kids from '../../Images/kids.jpg';
import accessories from '../../Images/accesories.jpg';

const Categories = () => {
  return (
    <div className="Categories px-4 py-8 bg-gray-100 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-teal-500 font-pacifico">
          Shop By Categories
        </h2>
        <p className="text-gray-600 font-serif mt-2">
          Explore our exclusive categories curated for every style
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
        {/* Men Category */}
        <CategoryCard link="/products/1" title="Men" imgSrc={men} />
        {/* Women Category */}
        <CategoryCard link="/products/2" title="Women" imgSrc={women} />
        {/* Kids Category */}
        <CategoryCard link="/products/3" title="Kids" imgSrc={kids} />
        {/* Accessories Category */}
        <CategoryCard link="/products/4" title="Accessories" imgSrc={accessories} />
      </div>
    </div>
  );
};

const CategoryCard = ({ link, title, imgSrc }) => {
  return (
    <Link to={link} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 group-hover:scale-105">
        <div className="relative">
          <img
            className="object-cover w-full h-60 md:h-72 lg:h-96"
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
