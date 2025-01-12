import React from 'react';
import heroImage from '../../Images/Wristwatch-bro.png'; 
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-0 flex flex-col md:flex-row items-center">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroImage}
            alt="Hero Section"
            className="rounded-lg object-cover w-full h-96 lg:h-full"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 pl-4 flex flex-col items-start lg:items-start md:pl-4 lg:pl-12">
          <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-pacifico text-center text-gray-800 leading-tight">
            Welcome to <span className= "text-teal-400">Wristly</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base md:text-base lg:text-xl font-serif text-gray-600">
          Wristly is your ultimate destination for discovering the perfect wristwear. Whether you’re seeking luxury watches, affordable timepieces, or cutting-edge smartwatches, Wristly curates a collection that blends sophistication, functionality, and innovation.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link
              to="/"
              className="px-6 py-3 bg-teal-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-teal-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/"
              className="px-6 py-3 bg-gray-200 text-gray-800 text-lg font-medium rounded-lg shadow-md hover:bg-gray-300 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
