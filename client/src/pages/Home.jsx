import Announcement from '../components/Announcement'
import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
