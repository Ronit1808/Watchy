import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Circle } from 'lucide-react';

const Slider = ({ Images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const imgStyle = {
    transform: `translateX(-${100 * imageIndex}%)`,
    transition: 'transform 300ms ease-in-out',
  };

  return (
    <div className="imageSlider w-full h-full relative">
      <div className="w-full h-full flex overflow-hidden">
        {Images.map((url, index) => (
          <img
            className="image w-full h-full object-cover block grow-0 shrink-0"
            key={index}
            src={url}
            style={imgStyle}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="left absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white z-10 text-lg sm:text-xl md:text-2xl"
        onClick={() =>
          setImageIndex((index) => (index === 0 ? Images.length - 1 : index - 1))
        }
      >
        <ArrowBackIosIcon fontSize="inherit" />
      </button>

      {/* Right Arrow */}
      <button
        className="right absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white z-10 text-lg sm:text-xl md:text-2xl"
        onClick={() =>
          setImageIndex((index) => (index === Images.length - 1 ? 0 : index + 1))
        }
      >
        <ArrowForwardIosIcon fontSize="inherit" />
      </button>

      {/* Dots */}
      <div className="imgSlider-selected hidden absolute lg:flex gap-2 bottom-6 left-1/2 -translate-x-1/2 stroke-white fill-black z-10">
        {Images.map((_, index) => (
          <button
            onClick={() => setImageIndex(index)}
            key={index}
            className="dot-button"
          >
            {index === imageIndex ? (
              <Circle className="text-white fill-white opacity-80 text-[5px] sm:text-sm md:text-base" />
            ) : (
              <Circle className="text-white stroke-1 text-[5px] sm:text-sm md:text-base" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
