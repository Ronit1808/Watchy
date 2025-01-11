import React, { useState } from "react";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import cardimg1 from "../../Images/cardimg1.jpg";
import cardimg2 from "../../Images/cardimg2.jpg";
import cardimg3 from "../../Images/cardimg3.jpg";
import cardimg4 from "../../Images/cardimg4.jpg";
import cardimg5 from "../../Images/cardimg5.jpg";
import cardimg6 from "../../Images/cardimg6.jpg";
import cardimg7 from "../../Images/cardimg7.jpg";
import cardimg8 from "../../Images/cardimg8.jpg";
import { ChevronDown } from "lucide-react";

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleMobileFilters = () => {
    setMobileFiltersOpen((prev) => !prev);
  };

  const watches = [
    {
      id: 1,
      brand: "Rolex",
      model: "Submariner",
      img: cardimg1,
      price: "₹7,500,000",
      discountPrice: "₹6,750,000",
      type: "Luxury",
      off: "10%",
    },
    {
      id: 2,
      brand: "Patek Philippe",
      model: "Nautilus 5711",
      img: cardimg2,
      price: "₹20,000,000",
      discountPrice: "₹18,000,000",
      type: "Trending",
      off: "10%",
    },
    {
      id: 3,
      brand: "Omega",
      model: "Speedmaster Professional",
      img: cardimg3,
      price: "₹5,000,000",
      discountPrice: "₹4,500,000",
      type: "Classic",
      off: "10%",
    },
    {
      id: 4,
      brand: "Tudor",
      model: "Black Bay 58",
      img: cardimg4,
      price: "₹4,000,000",
      discountPrice: "₹3,200,000",
      type: "Dive",
      off: "20%",
    },
    {
      id: 5,
      brand: "Seiko",
      model: "Presage Cocktail Time SRPB41J1",
      img: cardimg5,
      price: "₹40,000",
      discountPrice: "₹32,000",
      type: "Affordable",
      off: "20%",
    },
    {
      id: 6,
      brand: "Casio",
      model: "G-Shock DW5600E",
      img: cardimg6,
      price: "₹5,000",
      discountPrice: "₹4,000",
      type: "Trending",
      off: "20%",
    },
    {
      id: 7,
      brand: "Tag Heuer",
      model: "Carrera Chronograph",
      img: cardimg7,
      price: "₹5,000,000",
      discountPrice: "₹4,000,000",
      type: "Sport",
      off: "20%",
    },
    {
      id: 8,
      brand: "Citizen",
      model: "Eco-Drive Promaster Diver",
      img: cardimg8,
      price: "₹50,000",
      discountPrice: "₹45,000",
      type: "Dive",
      off: "10%",
    },
  ];
  
  return (
    <div className="products grid grid-cols-1 lg:grid-cols-5 gap-4 lg:p-2">
      {/* Mobile Filters Button */}
      <button
        className="block lg:hidden bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
        onClick={toggleMobileFilters}
      >
        Filters <ChevronDown className={`inline ml-2 ${mobileFiltersOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Sidebar Filters */}
      <div
        className={`left bg-white p-4 rounded-md shadow-md ${
          mobileFiltersOpen ? "block" : "hidden lg:block"
        } lg:col-span-1 `}
      >
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>

        {/* Gender Filter */}
        <div className="filteritem my-4">
          <h3 className="filterheading font-semibold mb-2">Gender</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Men
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Women
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Kids
            </label>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="filteritem my-4">
          <h3 className="filterheading font-semibold mb-2">Price</h3>
          <div className="inputitem flex items-center space-x-2">
            <span className="text-sm">0</span>
            <input
              type="range"
              min={0}
              max={10000000}
              className="w-full accent-green-500"
            />
            <span className="text-sm">10M</span>
          </div>
        </div>


        {/* Brand Dropdown Select */}
        <div className="filteritem my-4">
          <label htmlFor="brand" className="block font-semibold mb-2">Brand</label>
          <select
            id="brand"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <option value="">Select Brand</option>
            <option value="Rolex">Rolex</option>
            <option value="Omega">Omega</option>
            <option value="Titan">Titan</option>
            <option value="Casio">Casio</option>
            <option value="Seiko">Seiko</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="filteritem my-4">
          <h3 className="filterheading font-semibold mb-2">Sort By</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="sort" className="mr-2" />
              Price (Lowest First)
            </label>
            <label className="flex items-center">
              <input type="radio" name="sort" className="mr-2" />
              Price (Highest First)
            </label>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="right lg:col-span-4 bg-white rounded-md shadow-md p-4">
        <div className="productscard-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:px-0 gap-4 lg:gap-4">
          {watches.map((watch) => (
            <div key={watch.id} className="card-wrapper">
              <ProductsCard watch={watch} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
