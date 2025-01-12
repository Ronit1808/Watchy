import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer mt-auto">
      <div className="wrapper flex flex-col">
        
        {/* Social Section */}
        <div className="socials flex justify-between px-4 sm:px-8 md:px-14 py-6 bg-indigo-900 text-white">
          <div className="left text-xs sm:text-lg">
            Get connected with us on social networks
          </div>
          <div className="right flex gap-2 sm:gap-4">
            <FacebookIcon className="cursor-pointer hover:opacity-80" />
            <XIcon className="cursor-pointer hover:opacity-80" />
            <GoogleIcon className="cursor-pointer hover:opacity-80" />
            <InstagramIcon className="cursor-pointer hover:opacity-80" />
            <LinkedInIcon className="cursor-pointer hover:opacity-80" />
            <GitHubIcon className="cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Main Footer Sections */}
        <div className="top flex flex-col lg:flex-row sm:px-8 md:px-14 px-6 py-6 gap-6 bg-gray-800 text-stone-200">
          
          {/* About Section */}
          <div className="item2 flex flex-col flex-1 p-2">
            <div className="section-heading font-bold mb-4">ABOUT</div>
            <p className="text-wrap text-sm sm:text-base md:text-base">
            Welcome to Wristly, where luxury, precision, and style meet. We are passionate about offering an exclusive selection of the finest watches from the world's most renowned brands. Whether you're a seasoned collector or a first-time buyer, we cater to all watch enthusiasts, offering everything from timeless classics to the latest trending pieces.
            </p>
          </div>
          
          {/* Categories Section */}
          <div className="item2 flex-1 p-2">
            <div className="section-heading font-bold mb-4">CATEGORIES</div>
            <ul>
              <Link to='/products/1'>
                <li className="mb-2 text-sm sm:text-base md:text-lg hover:cursor-pointer hover:text-teal-400">Men</li>
              </Link>
              <Link to='/products/2'>
              <li className="mb-2 text-sm sm:text-base md:text-lg hover:cursor-pointer hover:text-teal-400">Women</li>
              </Link>
              <Link to='/products/3'>
              <li className="mb-2 text-sm sm:text-base md:text-lg hover:cursor-pointer hover:text-teal-400">Kids</li>
              </Link>
              <Link to='/products/4'>
              <li className="mb-2 text-sm sm:text-base md:text-lg hover:cursor-pointer hover:text-teal-400">Accessories</li>
              </Link>
            </ul>
          </div>
          
          {/* Links Section */}
          <div className="item2 flex-1 p-2">
            <div className="section-heading font-bold mb-4">LINKS</div>
            <ul>
              <li className="mb-2 text-sm sm:text-base md:text-lg">FAQ</li>
              <li className="mb-2 text-sm sm:text-base md:text-lg">Help</li>
              <li className="mb-2 text-sm sm:text-base md:text-lg">Stores</li>
              <li className="mb-2 text-sm sm:text-base md:text-lg">Guidelines</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="item2 flex-1 p-2">
            <div className="section-heading font-bold mb-2 sm:mb-4">CONTACT</div>
            <ul>
              <li className="mb-2 flex justify-start items-center gap-3 text-xs sm:text-sm ">
                <span className="material-symbols-outlined">home_pin</span>
                <span>Faridabad, Haryana 121001, India</span>
              </li>
              <li className="mb-2 flex justify-start items-center gap-3 text-xs sm:text-sm ">
                <span className="material-symbols-outlined">contact_mail</span>
                <span>Info@gmail.com</span>
              </li>
              <li className="mb-2 flex justify-start items-center gap-3 text-xs sm:text-sm ">
                <span className="material-symbols-outlined">call</span>
                <span>+91-9999999999</span>
              </li>
              <li className="mb-2 flex justify-start items-center gap-3 text-xs sm:text-sm ">
                <span className="material-symbols-outlined">print</span>
                <span>+12 345 678 90</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
          <div className="left flex justify-center items-center gap-3 text-sm sm:text-lg md:text-xl bg-gray-900 py-6 text-stone-200">
            <span className="logo text-base sm:text-lg md:text-xl font-semibold">WRISTLY</span>
            <span className="copyright text-xs sm:text-base md:text-base font-normal">© Copyright 2024. All Rights Reserved</span>
          </div>
        </div>
      </div>
  );
};

export default Footer;
