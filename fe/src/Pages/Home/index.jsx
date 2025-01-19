import React from 'react'
import ImageSlider from '../../Components/Slider'
import AboutUs from '../AboutUs'
import HomeCollection from '../../Components/HomeCollection'
import Banner from '../../Components/Banner'
import Footer from '../../Components/Footer'
const Home = () => {
  return (
    <>
      <ImageSlider/>
      <AboutUs/>
      <HomeCollection/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default Home