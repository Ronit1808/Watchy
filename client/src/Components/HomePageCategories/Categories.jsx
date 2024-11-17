import React from 'react'
import {Link} from 'react-router-dom'

const Categories = () => {
  return (
    <div className='Categories flex p-4 justify-center gap-40 mx-8 shadow-md bg-gray-900 '>
        <Link to = '/products/1'>
            <div className='category-section flex flex-col gap-4 h-96 w-80 mb-4'>
                <div className='category-section-heading text-center text-slate-200 font-semibold text-2xl'>
                 Men 
                </div>
            <div className='category-section-image w-full h-96 overflow-y-hidden'>
                <img className='object-cover w-full h-full hover:cursor-pointer' src='https://images.pexels.com/photos/1578531/pexels-photo-1578531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
        </div>
        </Link>
        <Link to = '/products/2'>
        <div className='category-section flex flex-col gap-4  h-96 w-80 mb-4'>
            <div className='category-section-heading text-center  text-slate-200 font-semibold text-2xl'>
             Women 
            </div>
            <div className='category-section-image w-full h-96 overflow-y-hidden'>
                <img className='object-cover w-full h-full hover:cursor-pointer' src='https://images.pexels.com/photos/6691699/pexels-photo-6691699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
        </div>
        </Link>
        <Link to = '/products/3'>
        <div className='category-section flex flex-col gap-4  h-96 w-90 mb-4 '>
            <div className='category-section-heading text-center  text-slate-200  font-semibold text-2xl'>
             Kids
            </div>
            <div className='category-section-image w-full h-96 overflow-y-hidden'>
                <img className='object-cover w-full h-full hover:cursor-pointer' src='https://images.pexels.com/photos/15227231/pexels-photo-15227231/free-photo-of-cute-boy-doing-thumb-s-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Categories