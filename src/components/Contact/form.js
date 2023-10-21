import React, {useRef} from 'react';
import './form.css';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';
import{FaVimeoV, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_0etbgzg","template_zb6ye2e", form.current, 'ZlXvwvCEyXGF6p8j7')
    .then((result) => {
      console.log(result.text);
      console.log("Message Sent");
      alert('SUCCESS');
    }, (error) => {
      console.log(error.text);
      alert('FAILED', error)
    })
    e.target.reset();
  };

  return (
  <div className='contact' id='contact'>
    <Fade>
    <h6>Contact</h6>
    <h2>Get In Touch</h2>
    <h2>Let's Connect and Create Something Amazing Together</h2>
    <h2>Let's Connect and Create Together</h2>
    <p>Social Media</p>
    <ul className='contactIcons'>
      <li><Link to='https://www.instagram.com/hana.nagoor/'><FaInstagram size={20} style={{color: "#fff"}}/></Link></li>
      <li><Link to='https://vimeo.com/hananagoor'><FaVimeoV size={20} style={{color: "#fff"}}/></Link></li>
      <li><Link to='hhtps://linkedin.com/in/hana-nagoor-mohideen-088b93197'><FaLinkedinIn size={20} style={{color: "#fff"}}/></Link></li>
    </ul>
    <form ref={form} onSubmit={sendEmail}>
      <Fade>
      <label className='contactLabel' for='name'>Name*</label>
      <input className='contactInput' id='name' type="text" name="name" placeholder='Name' required/>
      <label className='contactLabel' for='email'>Email*</label>
      <input className='contactInput' id='email' type="email" name="email" placeholder='Email' required/>
      <label className='contactLabel' for='message'>Message*</label>
      <textarea className='contactInput' id='message' name="message" placeholder='Message' required/>
      <input className='contactButton' type="submit" value="Send" />
      </Fade>
    </form>
    </Fade>
  </div>
  )
}

export default Form