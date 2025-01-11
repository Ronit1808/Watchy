import React from 'react';
import HomePageCard from './HomePageCard.jsx';
import cardimg1 from '../../Images/cardimg1.jpg';
import cardimg2 from '../../Images/cardimg2.jpg';
import cardimg3 from '../../Images/cardimg3.jpg';
import cardimg4 from '../../Images/cardimg4.jpg';
import cardimg5 from '../../Images/cardimg5.jpg';
import cardimg6 from '../../Images/cardimg6.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


// Custom Next Arrow component
const CustomNextArrow = ({ className, onClick }) => (
  <div
    className={`custom-next-arrow ${className}`} 
    onClick={onClick}
  >
    <span className="text-xl md:text-2xl"><ArrowForwardIosIcon/></span> 
  </div>
);

// Custom Prev Arrow component
const CustomPrevArrow = ({ className, onClick }) => (
  <div
    className={`custom-prev-arrow ${className}`} 
    onClick={onClick}
  >
    <span className="text-xl md:text-2xl"><ArrowBackIosNewIcon/></span> 
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <CustomNextArrow />,  
  prevArrow: <CustomPrevArrow />,  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        autoplay: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
      },
    },
  ],
};
const data = [
  {
    id: 1,
    brand: 'TUDOR',
    model: 'Black Bay 58',
    img: cardimg1,
    price: '₹3,20,000',
    discountPrice: '₹3,00,000',
    type: 'Affordable'
  },
  {
    id: 2,
    brand: 'ROLEX',
    model: 'Submariner',
    img: cardimg2,
    price: '₹2,00,000',
    discountPrice: '₹180,000',
    type: 'Luxury'
  },
  {
    id: 3,
    brand: 'ROLEX',
    model: 'Yacht-Master',
    img: cardimg3,
    price: '₹5,00,000',
    discountPrice: '₹450',
    type: 'Classic'
  },
  {
    id: 4,
    brand: 'CITIZEN',
    model: 'Eco-Drive',
    img: cardimg4,
    price: '₹45,000',
    discountPrice: '₹42,000',
    type: 'Dive'
  },
  {
    id: 5,
    brand: 'CASIO',
    model: 'G-Shock',
    img: cardimg5,
    price: '₹17,000',
    discountPrice: '₹15,500',
    type: 'Trending'
  },
  {
    id: 6,
    brand: 'OMEGA',
    model: 'Seamaster',
    img: cardimg6,
    price: '₹85,000',
    discountPrice: '₹80,000',
    type: 'Classic'
  }
];

const HomePageCategories = ({ name }) => {
  return (
    <div className="HomePageCategories px-4 py-10 sm:py-16 bg-gray-100 shadow-lg rounded-lg">
      {/* Component Heading */}
      <div className="component_heading mb-6 flex items-center justify-center space-x-4">
        {/* Left Line */}
        <div className="w-1/5 border-t-2 border-teal-500"></div>

        {/* Name */}
        <p className="text-2xl md:text-3xl font-extrabold font-pacifico text-teal-500 tracking-wide">
          {name}
        </p>

        {/* Right Line */}
        <div className="w-1/5 border-t-2 border-teal-500"></div>
      </div>

      {/* Slider */}
      <div className="relative">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="p-2">
              <HomePageCard item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageCategories;