import React from 'react';
import { Link } from 'react-router-dom';

const HomePageCard = ({ item }) => {
  return (
    <Link to={`product/${item.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden group">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-52 object-cover transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-95"
        />
        
        {/* Content Section */}
        <div className="p-4 flex flex-col items-center bg-white">
          <h3 className="text-lg font-semibold">{item.model}</h3>
          <p className="text-md text-green-600">{item.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomePageCard;
