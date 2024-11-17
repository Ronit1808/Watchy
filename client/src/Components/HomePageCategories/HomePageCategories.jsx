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
    className={`custom-next-arrow ${className}`} // Tailwind + Custom class
    onClick={onClick}
  >
    <span className="text-2xl"><ArrowForwardIosIcon/></span> {/* Right arrow */}
  </div>
);

// Custom Prev Arrow component
const CustomPrevArrow = ({ className, onClick }) => (
  <div
    className={`custom-prev-arrow ${className}`} // Tailwind + Custom class
    onClick={onClick}
  >
    <span className="text-2xl"><ArrowBackIosNewIcon/></span> {/* Left arrow */}
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
  nextArrow: <CustomNextArrow />,  // Custom Next Arrow
  prevArrow: <CustomPrevArrow />,  // Custom Prev Arrow
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
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const data = [
  {
    id: 1,
    brand: 'TITAN',
    model: 'Titan Analog',
    img: cardimg1,
    price: '₹2,000',
    discountPrice: '₹1,800',
    type: 'Affordable'
  },
  {
    id: 2,
    brand: 'ROLEX',
    model: 'Rolex Submariner',
    img: cardimg2,
    price: '₹200,000',
    discountPrice: '₹180,000',
    type: 'Luxury'
  },
  {
    id: 3,
    brand: 'ANALOG',
    model: 'Analog Watch',
    img: cardimg3,
    price: '₹500',
    discountPrice: '₹450',
    type: 'Classic'
  },
  {
    id: 4,
    brand: 'DIGITAL',
    model: 'Digital Watch',
    img: cardimg4,
    price: '₹3,500',
    discountPrice: '₹3,200',
    type: 'Dive'
  },
  {
    id: 5,
    brand: 'CASIO',
    model: 'Casio G-Shock',
    img: cardimg5,
    price: '₹17,000',
    discountPrice: '₹15,500',
    type: 'Trending'
  },
  {
    id: 6,
    brand: 'OMEGA',
    model: 'Omega Seamaster',
    img: cardimg6,
    price: '₹85,000',
    discountPrice: '₹80,000',
    type: 'Classic'
  }
];


const HomePageCategories = ({ name }) => {
  return (
    <div className="HomePageCategories flex flex-col px-2 pb-4 mx-8 my-8 shadow-md bg-white relative">
      <div className="component_heading p-4">
        <p className="text-3xl font-semibold text-gray-800">{name}</p>
      </div>

      <div className="w-full relative">
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
