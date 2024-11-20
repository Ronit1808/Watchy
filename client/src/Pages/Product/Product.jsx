import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '../../Components/Products/Rating';
import { Link } from 'react-router-dom';

function Product() {
  const [selectImage, setSelectImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // state to track if the dropdown is open or closed
  const [isWishlist, setIsWishlist] = useState(false); // Track if the item is in the wishlist

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // toggle the dropdown visibility
  };

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist); // Toggle the wishlist state
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Amazing product! I love it. Worth every penny.",
      reviewer: "John Doe",
    },
    {
      id: 2,
      rating: 4,
      text: "Good quality, but a bit expensive.",
      reviewer: "Jane Smith",
    },
    {
      id: 3,
      rating: 3,
      text: "It's okay, but not as expected.",
      reviewer: "Alice Brown",
    },
    {
      id: 4,
      rating: 5,
      text: "Exceeded my expectations! Highly recommend.",
      reviewer: "David Lee",
    },
  ];

  const images = [
    'https://images.pexels.com/photos/15649353/pexels-photo-15649353/free-photo-of-hand-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15649331/pexels-photo-15649331/free-photo-of-hand-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15649338/pexels-photo-15649338/free-photo-of-hand-holding-watch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  return (
    <div className="product flex flex-col md:flex-row mx-2 md:mx-4 mb-2 h-max bg-white">
      <div className="left flex p-2 gap-4 h-fit  flex-col-reverse xl:flex-row flex-1">
        <div className="images basis-full lg:basis-1/5 flex gap-4 overflow-x-auto xl:flex-col">
          <img
            className="w-24 h-24 lg:w-full lg:h-40 mb-2 object-cover cursor-pointer"
            src={images[0]}
            alt="Image 1"
            onClick={() => setSelectImage(0)}
          />
          <img
            className="w-24 h-24 lg:w-full lg:h-40 mb-2 object-cover cursor-pointer"
            src={images[1]}
            alt="Image 2"
            onClick={() => setSelectImage(1)}
          />
          <img
            className="w-24 h-24 lg:w-full lg:h-40 mb-2 object-cover cursor-pointer"
            src={images[2]}
            alt="Image 3"
            onClick={() => setSelectImage(2)}
          />
        </div>
        <div className="mainimage basis-full lg:basis-4/5">
          <img className="w-full max-h-[400px] sm:max-h-[310px] lg:max-h-[550px] xl:max-h-[600px] object-cover" src={images[selectImage]} alt="Selected Image" />
        </div>
      </div>
      <div className="right mb-4 px-3 md:px-6 py-4 flex-1">
        <div className="product-details mt-2 space-y-1 md:space-y-3">
          <h2 className="brand font-semibold text-lg md:text-2xl text-gray-900 mb-2">Rolex</h2>
          <h3 className="productname font-bold text-xl md:text-3xl text-gray-800 mb-4">Yacht-Master</h3>
          <div className="price flex items-center gap-4 mb-4">
            <span className="discountprice text-xl md:text-2xl font-semibold text-gray-900">₹1,000</span>
            <span className="actualprice line-through text-base md:text-lg text-gray-500">₹2,000</span>
            <span className="off bg-green-500 text-white font-semibold text-xs md:text-sm py-1 px-2 rounded-full">
              50% off
            </span>
          </div>
        </div>
        <div className="buttons mt-6 flex flex-col sm:flex-row gap-4 sm:gap-10 mb-4">
          <Link to="/product/cart">
            <button className="bg-indigo-600 rounded-lg text-white w-2/3 sm:w-48 h-14 flex mx-auto justify-center items-center text-sm md:text-base hover:bg-indigo-700 hover:scale-105 transition-all duration-300 uppercase">
              <ShoppingCartIcon className="mr-2" /> Add to cart
            </button>
          </Link>
          <Link to="/product/cart">
            <button className="bg-green-600 rounded-lg text-white w-2/3 sm:w-48 h-14 mx-auto flex justify-center items-center text-sm md:text-base hover:bg-green-700 hover:scale-105 transition-all duration-300 uppercase">
              <BoltIcon className="mr-2" /> Buy Now
            </button>
          </Link>
        </div>

        <button onClick={toggleWishlist} className="flex items-center space-x-2">
          <span className={`text-2xl ${isWishlist ? 'text-red-500' : 'text-gray-300'}`}>
            {isWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </span>
          <span className="text-base md:text-lg font-semibold mt-1">Add to Wishlist</span>
        </button>
        <div className="max-w-lg mt-8 mb-6 bg-white">
          <div className="flex items-center justify-between cursor-pointer" onClick={toggleDropdown}>
            <h3 className=" text-base md:text-xl font-semibold">Product Details</h3>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </div>
          <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'h-auto' : 'h-0'}`}>
            <div className="mt-4 text-sm p-2 space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Type</span>
                <span>Analog</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Band Material</span>
                <span>Stainless Steel</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Case Diameter</span>
                <span>42mm</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Water Resistance</span>
                <span>100m</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Movement</span>
                <span>Quartz</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Dial Color</span>
                <span>Black</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Glass</span>
                <span>Sapphire Crystal</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Ideal For</span>
                <span>Men</span>
              </div>
            </div>
          </div>
        </div>
        <Rating reviews={reviews} />
      </div>
    </div>
  );
}

export default Product;
