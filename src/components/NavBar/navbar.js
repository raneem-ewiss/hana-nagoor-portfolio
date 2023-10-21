import React, {useState} from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import{FaBars, FaTimes} from 'react-icons/fa';
import FullLogo from '../../assets/Full Logo.png'


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 10){
        setColor(true);
    }
    else {
        setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
    });
  };

  return (
    <nav className={color ? "navbar navbarBG" : "navbar"}>
      <div className='logo'>
        <NavLink to='/'><img src={FullLogo} alt='Hana Nagoor Arts'></img></NavLink>
      </div>
      <ul className={click ? "navMenu navMenuShow" : "navMenu"}>
        <li><NavLink to='/' className='navMenuList' onClick={goToTop}>Home</NavLink></li>
        <li><NavLink to='/work' className='navMenuList' onClick={goToTop}>Work</NavLink></li>
        <li><NavLink to='/photography' className='navMenuList' onClick={goToTop}>Photography</NavLink></li>
        <li><NavLink to='/contact' className='navMenuList' onClick={goToTop}>Contact</NavLink></li>
      </ul>
      <div className='toggle' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: "#fff"}}/>) : (<FaBars size={20} style={{color: "#fff"}}/>)}          
      </div>
    </nav>
  )
}

export default Navbar