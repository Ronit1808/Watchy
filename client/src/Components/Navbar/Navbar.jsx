import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className= "navbar bg-gray-900 text-stone-200 sticky top-0 z-20">
        <div className='wrapper p-5 flex justify-between items-center ' >
            <div className='left flex justify-center items-center gap-5'>
              <div className='item logo pl-3 flex cursor-default '> 
              <span class="material-symbols-outlined text-3xl">
                  watch
              </span>
                <p className=' text-2xl font-bold'> WATCHY </p>
              </div>
              <div className='category ml-10 flex justify-center items-center gap-7'>
                <div className='item mb-1 hover:text-teal-400'> <Link to ="products/1">Men </Link> </div>
                <div className='item mb-1 hover:text-teal-400'><Link to ="products/1">Women </Link></div>
                <div className='item mb-1  hover:text-teal-400'><Link to ="products/1">Kids </Link></div>
              </div>
            </div>
  
            <div className='right pr-2 flex justify-center items-center gap-5'>
              <div className='item mb-1  hover:text-teal-400'> <Link to='/'>Home</Link></div>
              <div className='item mb-1  hover:text-teal-400'>About</div>
              <div className='item mb-1  hover:text-teal-400'>Contact</div>
              <div className='item  mb-1 mr-2  hover:text-teal-400'>Stores</div>
              <div className='item'> 
              <span class="material-symbols-outlined text-2xl">
                  search
              </span>
              </div>
              <div className='item'> 
                <span class="material-symbols-outlined text-2xl">
                    person
                </span>
              </div>
              <div className='item'> 
                <span class="material-symbols-outlined text-2xl">
                    favorite
                </span>
              </div>
              <Link to='/product/cart'>
              <div className='item relative'> 
              <span className= "material-symbols-outlined text-2xl ">
                  shopping_cart 
              </span>
              <span className='bg-blue-400 text-white text-xs flex justify-center items-center absolute left-3.5 top-0 rounded-lg w-4 h-4'>  0 </span>
              </div>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar