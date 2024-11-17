import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='footer mt-auto '>
        <div className='wrapper flex flex-col '>
          <div className='socials flex justify-between px-20 py-6 bg-indigo-900 text-white'> 
            <div className='left'>
                Get connected with us on social networks
            </div>
            <div className='right flex gap-4'>
              <FacebookIcon className='cursor-pointer hover:opacity-80'/>
              <XIcon className='cursor-pointer hover:opacity-80'/>
              <GoogleIcon className='cursor-pointer hover:opacity-80'/>
              <InstagramIcon className='cursor-pointer hover:opacity-80'/>
              <LinkedInIcon className='cursor-pointer hover:opacity-80'/>
              <GitHubIcon className='cursor-pointer hover:opacity-80'/>
            </div>
          </div>

          <div className='top flex px-24 py-6 gap-10 bg-gray-800 text-stone-200'>
            <div className='item2 flex flex-col flex-1 p-4'> 
              <div className='section-heading font-bold mb-4'> ABOUT </div>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nihil suscipit libero alias enim? Natus, quos iusto fuga nostrum nesciunt provident, 
              obcaecati tempora reprehenderit dolore eius doloremque omnis minima, asperiores modi?
              </p>
            </div>
            <div className='item2 flex-1 p-4'> 
              <div className='section-heading font-bold mb-4'> CATEGORIES </div>
              <ul>
                <li className='mb-2'> Men </li>
                <li className='mb-2'> Women </li>
                <li className='mb-2'> Kids </li>
                <li className='mb-2'> Accesories </li>
              </ul>
            </div>
            <div className='item2 flex-1 p-4'> 
              <div className='section-heading font-bold mb-4'> LINKS </div>
              <ul>
                <li className='mb-2'>FAQ</li>
                <li className='mb-2'>Help</li>
                <li className='mb-2'>Stores</li>
                <li className='mb-2'>Guildlines</li>
              </ul>

            </div>
            <div className='item2 flex-1 p-4'> 
              <div className='section-heading font-bold mb-4'> CONTACT </div> 
              <ul>
                  <li className='mb-2 flex justify-start items-center gap-3'>
                    <span className="material-symbols-outlined">
                      home_pin
                    </span>
                    <span>Faridabad, Haryana 121001, India </span>
                 </li>
                  <li className='mb-2 flex justify-start items-center gap-3'>
                    <span className="material-symbols-outlined">
                    contact_mail
                    </span>
                    <span>Info@gmail.com</span>
                  </li>
                  <li className='mb-2 flex justify-start items-center gap-3'>
                    <span className="material-symbols-outlined">
                    call
                    </span>
                    <span> +91-9999999999</span>
                  </li>
                  <li className='mb-2 flex justify-start items-center gap-3'>
                    <span className="material-symbols-outlined">
                      print
                    </span>
                    <span>+12 345 678 90</span>
                  </li>
              </ul>
              
            </div>
          </div>

          <div className='bottom flex justify-around items-center bg-gray-900 p-2'>
            <div className='left flex justify-center items-center gap-3'>
              <span className='logo text-2xl font-bold text-stone-200'>WATCHY</span>
              <span className='copyright font-semibold text-stone-200'> © Copyright 2024. All Rights Reserved</span>
            </div>
            <div className='right'>
              <img  className="h-20 bg-white" src='../img/stripe.png'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer