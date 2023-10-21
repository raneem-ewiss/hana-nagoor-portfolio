import React from 'react';
import Navbar from '../components/NavBar/navbar';
import HomeHeader from '../components/Header/home';
import Showreel from '../components/Home/showreel';
import Videos from '../components/Home/videos';
import Edits from '../components/Home/edits';
import Footer from '../components/Footer/footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeHeader/>
      <Showreel/>
      <Videos/>
      <Edits/>
      <Footer/>
    </div>
  )
}

export default Home