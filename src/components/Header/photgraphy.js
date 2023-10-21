import React from 'react'
import bgPhoto from '../../assets/main.jpeg'
import './header.css'
import { Link } from 'react-scroll';

const PhotographyHeader = () => {
  return (
    <div className='header'>
        <div className='headerContent'>
            <img className='headerBG' src={bgPhoto} alt='Background'/>
        </div>
        <div className='headerText'>
            <h1>Photography</h1>
            <ul className='headerLinks'>
                <li><Link to='people'><h3>People</h3></Link></li>
                <li><Link to='location'><h3>Location</h3></Link></li>
                <li><Link to='perfume'><h3>Perfume</h3></Link></li>
                <li><Link to='product'><h3>Product</h3></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default PhotographyHeader