import React from 'react'
import Slider from '../../Components/Slider/Slider'
import HomePageCategories from '../../Components/HomePageCategories/HomePageCategories'
import Categories from '../../Components/HomePageCategories/Categories'
import BrandFeatures from '../../Components/HomePageCategories/BrandFeatures'


function Home() {
  return (
    <>
      <div className='slider max-w-full w-full'>
        <Slider  />
      </div>
      <div>
        <HomePageCategories name='Best Offers'/>
        <HomePageCategories name='Trending'/>
        <Categories/>
        <HomePageCategories name='Big Sale'/>
        <BrandFeatures/>
      </div>
    </>
  )
}

export default Home