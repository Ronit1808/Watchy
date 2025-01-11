import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ watch }) => {
  return (
    <Link to={`/product/${watch.id}`}>
      <div className="card-container flex flex-col h-full border shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
        {/* Image Section */}
        <div className="image-container w-full h-64 sm:aspect-[3/4] flex-shrink-0 overflow-hidden bg-gray-100">
          <img
            className="object-cover w-full h-full transform transition duration-300 ease-in-out group-hover:scale-105"
            src={watch.img}
            alt={watch.model}
          />
        </div>

        {/* Content Section */}
        <div className="content-container flex flex-col justify-between p-4 h-full bg-white group-hover:bg-gray-50 transition-colors duration-300">
          {/* Watch Type */}
          <p className="type inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full max-w-fit">
            {watch.type}
          </p>

          {/* Brand and Model */}
          <div className="mt-1">
            <h3 className="brand text-base sm:text-lg font-bold text-gray-800 uppercase">
              {watch.brand}
            </h3>
            <p className="productname text-xs sm:text-sm text-gray-600">
              {watch.model}
            </p>
          </div>

          {/* Price Section */}
          <div className="price mt-2 text-sm sm:text-base">
            <p className="discountprice font-semibold text-gray-800">
              {watch.discountPrice}
            </p>
            <span className="actualprice line-through text-xs sm:text-sm text-gray-400">
              {watch.price}
            </span>
            <span className="off text-green-500 text-xs sm:text-sm pl-4 mt-1">
              {watch.off} off
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
