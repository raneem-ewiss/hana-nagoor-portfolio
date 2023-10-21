import React from 'react'
import Navbar from '../components/NavBar/navbar';
import WorkHeader from '../components/Header/work';
import Company1 from '../components/Work/company1';
import Company2 from '../components/Work/company2';
import Company3 from '../components/Work/company3';
import Company4 from '../components/Work/company4';
import Footer from '../components/Footer/footer';

const Work = () => {
  return (
    <div>
      <Navbar/>
      <WorkHeader/>
      <Company1/>
      <Company2/>
      <Company3/>
      <Company4/>
      <Footer/>
    </div>
  )
}

export default Work