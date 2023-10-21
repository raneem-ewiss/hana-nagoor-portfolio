import React from 'react'
import Navbar from '../components/NavBar/navbar';
import ConactHeader from '../components/Header/contact'
import About from '../components/Contact/about';
import Quote from '../components/Contact/quote';
import Form from '../components/Contact/form';
import Footer from '../components/Footer/footer';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ConactHeader/>
      <About/>
      <Quote/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact