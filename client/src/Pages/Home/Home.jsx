import React from 'react'
import Slider from '../../Components/Slider/Slider'
import HomePageCategories from '../../Components/HomePageCategories/HomePageCategories'
import watch1 from '../../Images/watch1.jpg'
import watch2 from '../../Images/watch2.jpg'
import watch3 from '../../Images/watch3.jpg'
import watch4 from '../../Images/watch4.jpg'
import watch5 from '../../Images/watch5.jpg'
import Categories from '../../Components/HomePageCategories/Categories'
import BrandFeatures from '../../Components/HomePageCategories/BrandFeatures'


const images = [watch1 , watch2 , watch3 , watch4 , watch5]



function Home() {
  return (
    <>
      <div className='slider max-w-full w-full aspect-[12/5] '>
        <Slider Images={images} />
      </div>
      <div>
        <HomePageCategories name='Best Offers'/>
        <HomePageCategories name='Trending'/>
        <Categories/>
        <HomePageCategories name='Big Sale 50% Off'/>
        <BrandFeatures/>
      </div>
    </>
  )
}

export default Home