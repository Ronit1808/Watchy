import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="footer mt-auto">
      <div className="wrapper flex flex-col">
        
        {/* Social Section */}
        <div className="socials flex justify-between px-4 sm:px-10 md:px-24 py-6 bg-indigo-900 text-white">
          <div className="left text-sm sm:text-lg">
            Get connected with us on social networks
          </div>
          <div className="right flex gap-4 text-base sm:text-xl md:text-2xl">
            <FacebookIcon className="cursor-pointer hover:opacity-80" />
            <XIcon className="cursor-pointer hover:opacity-80" />
            <GoogleIcon className="cursor-pointer hover:opacity-80" />
            <InstagramIcon className="cursor-pointer hover:opacity-80" />
            <LinkedInIcon className="cursor-pointer hover:opacity-80" />
            <GitHubIcon className="cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Main Footer Sections */}
        <div className="top flex flex-col md:flex-row sm:px-12 md:px-24 px-6 py-6 gap-10 bg-gray-800 text-stone-200">
          
          {/* About Section */}
          <div className="item2 flex flex-col flex-1 p-4">
            <div className="section-heading font-bold mb-4">ABOUT</div>
            <p className="text-justify text-sm sm:text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit libero alias enim? Natus, quos iusto fuga nostrum nesciunt provident, obcaecati tempora reprehenderit dolore eius doloremque omnis minima, asperiores modi?
            </p>
          </div>
          
          {/* Categories Section */}
          <div className="item2 flex-1 p-4">
            <div className="section-heading font-bold mb-4">CATEGORIES</div>
            <ul>
              <li className="mb-2 text-sm sm:text-base md:text-lg">Men</li>
              <li className="mb-2 text-sm sm:text-base md:text-lg">Women</li>
              <li className="mb-2 text-sm sm:text-base md:text-lg">Kids</li>
              <li className="mb-2 text-sm sm:text-base md:text-lg">Accessories</li>
            </ul>
          </div>
          
          {/* Links Section */}
          <div className="item2 flex-1 p-4">
            <div className="section-heading font-bold mb-4">LINKS</div>
            <ul>
              <li className="mb-2 text-sm sm:text-base md:text-lg">FAQ</li>
              <li className="mb-2 text-sm sm:text-base md:text-lg">Help</li>
              <li className="mb-2 text-sm sm:text-base md:text-lg">Stores</li>
              <li className="mb-2 text-sm sm:text-base md:text-lg">Guidelines</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="item2 flex-1 p-4">
            <div className="section-heading font-bold mb-4">CONTACT</div>
            <ul>
              <li className="mb-2 flex justify-start items-center gap-3 text-sm sm:text-base md:text-lg">
                <span className="material-symbols-outlined">home_pin</span>
                <span>Faridabad, Haryana 121001, India</span>
              </li>
              <li className="mb-2 flex justify-start items-center gap-3 text-sm sm:text-base md:text-lg">
                <span className="material-symbols-outlined">contact_mail</span>
                <span>Info@gmail.com</span>
              </li>
              <li className="mb-2 flex justify-start items-center gap-3 text-sm sm:text-base md:text-lg">
                <span className="material-symbols-outlined">call</span>
                <span>+91-9999999999</span>
              </li>
              <li className="mb-2 flex justify-start items-center gap-3 text-sm sm:text-base md:text-lg">
                <span className="material-symbols-outlined">print</span>
                <span>+12 345 678 90</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
          <div className="left flex justify-center items-center gap-3 text-sm sm:text-lg md:text-xl bg-gray-900 py-6 text-stone-200">
            <span className="logo text-xl font-semibold">WATCHY</span>
            <span className="copyright font-normal">© Copyright 2024. All Rights Reserved</span>
          </div>
        </div>
      </div>
  );
};

export default Footer;
