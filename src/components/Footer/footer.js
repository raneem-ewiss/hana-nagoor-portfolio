import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import{FaVimeoV, FaInstagram, FaLinkedinIn, FaHome, FaEnvelope, FaPhoneAlt, FaRegCopyright} from 'react-icons/fa';
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>
        <div className='footer'></div>
        <footer>
            <section className='footerContent'>
                <div className='footerAbout'>
                    <div className='Logo'>
                        <img src={Logo} width={40}/>
                        <h1>Hana Nagoor Art</h1>
                    </div>
                    <ul className='footerIcons'>
                        <li><Link to='https://www.instagram.com/hana.nagoor/'><FaInstagram size={18} style={{color: "#fff"}}/></Link></li>
                        <li><Link to='https://vimeo.com/hananagoor'><FaVimeoV size={18} style={{color: "#fff"}}/></Link></li>
                        <li><Link to='hhtps://linkedin.com/in/hana-nagoor-mohideen-088b93197'><FaLinkedinIn size={18} style={{color: "#fff"}}/></Link></li>
                    </ul>
                </div>
                <div className='footerLinks'>
                    <h3>Links</h3>
                    <ul className='footerList'>
                        <li><Link to='/' className='footerMenuList'>Home</Link></li>
                        <li><Link to='/work' className='footerMenuList'>Work</Link></li>
                        <li><Link to='/photography' className='footerMenuList'>Photography</Link></li>
                        <li><Link to='/contact' className='footerMenuList'>Contact</Link></li>
                    </ul>
                </div>
                <div className='footerContact'>
                    <h3>Contact</h3>
                    <ul>
                        <li><FaHome/> Dubai, UAE</li>
                        <li><FaEnvelope/> hana@email.com</li>
                        <li><FaPhoneAlt/> +971 (0)50 111 1111</li>
                    </ul>
                </div>
            </section>
            <section>
                <p className='footerCopyright'><FaRegCopyright/> 2023 - Hana Nagoor Art | Designed by Raneem Ewiss</p>
            </section>
        </footer>
    </div>
  )
}

export default Footer