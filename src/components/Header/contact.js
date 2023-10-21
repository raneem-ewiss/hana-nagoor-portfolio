import React from 'react'
import bgPhoto from '../../assets/main.jpeg'
import './header.css'
import { Link } from 'react-scroll';

const ContactHeader = () => {
  return (
    <div className='header'>
        <div className='headerContent'>
            <img className='headerBG' src={bgPhoto} alt='Background'/>
        </div>
        <div className='headerText'>
            <h1>Contact</h1>
            <ul className='headerLinks'>
                <li><Link to='about'><h3>About</h3></Link></li>
                <li><Link to='contact'><h3>Contact</h3></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default ContactHeader