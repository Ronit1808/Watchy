import React from 'react';
import { Link } from 'react-router-dom';

const HomePageCard = ({ item }) => {
  return (
    <Link to={`product/${item.id}`} className="group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        {/* Image */}
        <img
          src={item.img}
          alt={item.model}
          className="w-full h-52 object-cover group-hover:opacity-90"
        />

        {/* Content */}
        <div className="p-4 text-center">
          <h3 className="text-base font-semibold text-gray-800">{item.model}</h3>
          <p className="text-sm text-gray-500">{item.brand}</p>
          <p className="text-lg text-green-600 font-bold">{item.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomePageCard;
