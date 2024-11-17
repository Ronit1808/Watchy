import React, { useState } from 'react';
import ProductsCard from '../../Components/ProductsCard/ProductsCard';
import cardimg1 from '../../Images/cardimg1.jpg';
import cardimg2 from '../../Images/cardimg2.jpg';
import cardimg3 from '../../Images/cardimg3.jpg';
import cardimg4 from '../../Images/cardimg4.jpg';
import cardimg5 from '../../Images/cardimg5.jpg';
import cardimg6 from '../../Images/cardimg6.jpg';

function Products() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const watches = [
    {
      id: 1,
      brand: "Rolex",
      model: "Submariner",
      img: cardimg1,
      price: "₹7,500,000",
      discountPrice: "₹6,750,000",
      type: "Luxury"
    },
    {
      id: 2,
      brand: "Patek Philippe",
      model: "Nautilus 5711",
      img: cardimg2,
      price: "₹22,000,000",
      discountPrice: "₹20,500,000",
      type: "Trending"
    },
    {
      id: 3,
      brand: "Omega",
      model: "Speedmaster Professional",
      img: cardimg3,
      price: "₹5,500,000",
      discountPrice: "₹5,200,000",
      type: "Classic"
    },
    {
      id: 4,
      brand: "Tudor",
      model: "Black Bay 58",
      img: cardimg4,
      price: "₹3,500,000",
      discountPrice: "₹3,200,000",
      type: "Dive"
    },
    {
      id: 5,
      brand: "Seiko",
      model: "Presage Cocktail Time SRPB41J1",
      img: cardimg5,
      price: "₹30,000",
      discountPrice: "₹28,000",
      type: "Affordable"
    },
    {
      id: 6,
      brand: "Casio",
      model: "G-Shock DW5600E",
      img: cardimg6,
      price: "₹4,000",
      discountPrice: "₹3,500",
      type: "Trending"
    }
  ];

  return (
    <div className="products flex mx-4 my-4">
      <div className="left basis-1/5 p-4 bg-white">
        <h2 className="text-2xl font-semibold">Filters</h2>

        {/* Gender Filter */}
        <div className="filteritem my-4">
          <h3 className="filterheading font-semibold">Gender</h3>
          <div className="inputitem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Men</label>
          </div>
          <div className="inputitem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Women</label>
          </div>
          <div className="inputitem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Kids</label>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="filteritem my-4">
          <h3 className="filterheading font-semibold">Price</h3>
          <div className="inputitem">
            <span>0</span>
            <input type="range" min={0} max={10000000} />
            <span>1000000</span>
          </div>
        </div>

        {/* Brand Dropdown */}
        <div className="filteritem my-4">
          <button
            onClick={toggleDropdown}
            className="font-semibold rounded-md focus:outline-none"
          >
            Brand
          </button>
          {isOpen && (
            <div className="mt-2 w-full bg-white shadow-lg rounded-md border border-gray-200">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">Rolex</li>
                <li className="px-4 py-2 hover:bg-gray-100">Omega </li>
                <li className="px-4 py-2 hover:bg-gray-100"> Titan </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className={`filteritem transition-all duration-300 ${isOpen ? 'mt-14' : 'mt-4'}`}
        >
          <h3 className="filterheading font-semibold">Sort By</h3>
          <div className="inputitem">
            <input type="radio" id="asc" value="asc" name="price" />
            <label className="ml-2" htmlFor="asc">
              Price (Lowest First)
            </label>
          </div>
          <div className="inputitem">
            <input type="radio" id="desc" value="desc" name="price" />
            <label className="ml-2" htmlFor="desc">
              Price (Highest First)
            </label>
          </div>
        </div>
      </div>

      <div className="right basis-4/5 ml-4 bg-white">
        <div className="productscard-container flex flex-wrap justify-between gap-4 mx-4 my-4">
          {watches.map((watch) => (
            <div key={watch.id} className="card-wrapper w-1/4 h-96">
              <ProductsCard watch={watch} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;