import React from 'react'
import Navbar from '../components/NavBar/navbar';
import PhotographerHeader from '../components/Header/photgraphy';
import People from '../components/Photography/people';
import Location from '../components/Photography/location';
import Perfume from '../components/Photography/perfume';
import Product from '../components/Photography/product';
import Footer from '../components/Footer/footer';

const Photography = () => {
  return (
    <div>
      <Navbar/>
      <PhotographerHeader/>
      <People/>
      <Location/>
      <Perfume/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default Photography