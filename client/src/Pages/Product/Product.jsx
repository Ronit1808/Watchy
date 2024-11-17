import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '../../Components/Products/rating';
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
    <div className="product flex mx-4 bg-white">
      <div className="left flex p-2 gap-4 flex-1">
        <div className="images basis-1/5">
          <img
            className="w-full h-40 mb-2 object-cover cursor-pointer"
            src={images[0]}
            alt=""
            onClick={(e) => setSelectImage(0)}
          />
          <img
            className="w-full h-40 mb-2 object-cover cursor-pointer"
            src={images[1]}
            alt=""
            onClick={(e) => setSelectImage(1)}
          />
          <img
            className="w-full h-40 mb-2 object-cover cursor-pointer"
            src={images[2]}
            alt=""
            onClick={(e) => setSelectImage(2)}
          />
        </div>
        <div className="mainimage basis-4/5">
          <img className="w-full max-h-[600px] object-cover" src={images[selectImage]} alt="" />
        </div>
      </div>
      <div className="right mb-4 px-6 flex-1 py-2">
      <div className="product-details mt-2 space-y-3">
        <h2 className="brand font-semibold text-2xl text-gray-900 mb-2">Rolex</h2>
        <h3 className="productname font-bold text-4xl text-gray-800 mb-4">  Yacht-Master </h3>
        <div className="price flex items-center gap-4 mb-4">
          <span className="discountprice text-3xl font-semibold text-gray-900">₹1,000</span>
          <span className="actualprice line-through text-lg text-gray-500">₹2,000</span>
          <span className="off bg-green-500 text-white font-semibold text-sm py-1 px-2 rounded-full">
            50% off
          </span>
        </div>
        </div>
        <div className="buttons mt-6 flex gap-10 mb-4">
          <Link to='/product/cart'>
            <button className="bg-indigo-600 rounded-lg text-white w-48 h-14 flex justify-center items-center text-base hover:bg-indigo-700 hover:scale-105 transition-all duration-300 uppercase">
              <ShoppingCartIcon className="mr-2" /> Add to cart
            </button>
          </Link>
          <Link to='/product/cart'>
          <button className="bg-green-600 rounded-lg text-white w-48 h-14 flex justify-center items-center text-base hover:bg-green-700 hover:scale-105 transition-all duration-300 uppercase">
            <BoltIcon className="mr-2" /> Buy Now
          </button>
          </Link>
        </div>

        <button onClick={toggleWishlist} className="flex items-center space-x-2">
          <span className={`text-2xl ${isWishlist ? 'text-red-500' : 'text-gray-300'}`}>
            {isWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </span>
          <span className="text-lg font-semibold mt-1">Add to Wishlist</span>
        </button>
        <div className="max-w-lg mt-8 mb-6 bg-white">
          <div className="flex items-center justify-between cursor-pointer" onClick={toggleDropdown}>
            <h3 className="text-xl font-semibold">Product Details</h3>
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
            <div className="mt-4 space-y-4 text-gray-700">
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