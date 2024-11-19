import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ watch }) => {
  return (
    <Link to={`/product/${watch.id}`}>
      <div className="card-container flex flex-col h-full border shadow-lg rounded-lg overflow-hidden group">
        <div className="image-container w-full h-64 sm:aspect-[3/4] flex-shrink-0 overflow-hidden">
          <img
            className="object-cover w-full h-full transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-95"
            src={watch.img}
            alt={watch.model}
          />
        </div>

        {/* Content Section */}
        <div className="content-container flex flex-col justify-between px-2 py-2 sm:px-3 h-full">
          <p className="type inline-block px-2 py-1 text-[8px] sm:text-xs bg-green-200 text-green-700 max-w-fit flex-shrink-0">
            {watch.type}
          </p>

          {/* Brand Name */}
          <p className="brand font-semibold uppercase text-xs sm:text-base md:text-base">{watch.brand}</p>


          {/* Product Name */}
          <p className="productname text-[12px] sm:text-base md:text-base">{watch.model}</p>

          {/* Price Section */}
          <div className="price mt-auto text-xs sm:text-sm md:text-base">
            <span className="discountprice font-semibold text-xs sm:text-base">{watch.price}</span>
            <span className="actualprice line-through pl-2 text-[10px] text-gray-600">{watch.discountPrice}</span>
            <span className="off text-green-500 ml-1 text-[10px] sm:text-sm md:text-base">50% off</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
