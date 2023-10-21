import React from 'react'
import bgVideo from '../../assets/main-video.mp4'
import './header.css'
import{FaArrowRight, FaVimeoV, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <div className='header'>
        <div className='headerContent'>
            <video className='headerBG' src={bgVideo} autoPlay loop muted/>
        </div>
        <div className='headerText'>
            <h1>HANA NAGOOR</h1>
            <ul className='headerList'>
                <li><h3>Filmmaker</h3></li>
                <li><h3>Photographer</h3></li>
                <li><h3>Editor</h3></li>
            </ul>
            <ul className='headerIcons'>
                <li><Link to='https://www.instagram.com/hana.nagoor/'><FaInstagram size={20} style={{color: "#fff"}}/></Link></li>
                <li><Link to='https://vimeo.com/hananagoor'><FaVimeoV size={20} style={{color: "#fff"}}/></Link></li>
                <li><Link to='hhtps://linkedin.com/in/hana-nagoor-mohideen-088b93197'><FaLinkedinIn size={20} style={{color: "#fff"}}/></Link></li>
            </ul>
            <p>Crafting captivating visual stories through the lens and the art of post-production</p>
            <p>A creative professional who captures and crafts visual stories through the lens and post-production techniques</p>
            <p>A filmmaker, photographer, and editor with a keen eye for storytelling through visual media</p>
            <Link to='/contact'><button className='headerButton'>Read More <FaArrowRight size={10}/></button></Link>
        </div>
    </div>
  )
}

export default HomeHeader