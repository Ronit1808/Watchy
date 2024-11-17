import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ watch }) => {
  return (
    <Link to='/product/:id'>
    <div className="card-container flex flex-col h-full border shadow-lg rounded-lg overflow-hidden group">
      <div className="image-container w-full h-4/6 flex-shrink-0 overflow-hidden">
        <img
          className="object-cover w-full h-full transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-95"
          src={watch.img}
          alt={watch.model}
        />
      </div>

      {/* Content Section */}
      <div className="content-container flex flex-col justify-between p-4 h-2/6">
        <p className="type inline-block px-2 py-1 text-xs bg-green-200 text-green-700 max-w-fit flex-shrink-0">
          {watch.type}
        </p>
        <p className="brand font-semibold uppercase">{watch.brand}</p>
        <p className="productname text-normal">{watch.model}</p>

        {/* Price Section */}
        <div className="price mt-auto">
          <span className="discountprice font-semibold">{watch.price}</span>
          <span className="actualprice line-through pl-2 text-sm text-gray-600">{watch.discountPrice}</span>
          <span className="off text-green-500 font-semibold ml-1">50% off</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductsCard;
