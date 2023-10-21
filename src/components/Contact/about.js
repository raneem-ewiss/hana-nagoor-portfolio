import React from 'react';
import './about.css'
import Fade from 'react-reveal/Fade';
import photo from '../../assets/Hana.webp'

const About = () => {
  return (
    <div className='about' id='about'>
      <Fade>
      <h6>About</h6>
      <h2>Discover the Story Behind the Creative Journey</h2>
      <h2>Discover the Creative Journey Behind the Work</h2>
      <h2>Discover the Creative Mind Behind the Work</h2>
      <div className='aboutContent'>
        <div className='aboutRow'>
          <div className='aboutColTop'>
            <Fade><div><h6 className='aboutPhoto'>Photo</h6></div></Fade>
          </div>
        </div>
        <div className='aboutRow'>
          <div className='aboutCol'>
            <Fade><div><h6 className='aboutVideo'>Video</h6></div></Fade>
          </div>
          <div className='aboutCol'>
            <div><img className='aboutPicture' src={photo} alt='Profile'/></div>
          </div>
          <div className='aboutCol'>
            <div className='aboutText'>
            <Fade>
              <p className='aboutTextP'>
                Filmmaker, editor and Photographer working in animation and film. 
              </p>
              <p className='aboutTextP'>
                I have a good eye for detail and am passionate about creating content that impacts people. 
              </p>
              <p className='aboutTextP'>
                When I'm not brainstorming ideas or making long lists I enjoy photography, traveling, hiking, and participating in activities that benefit the environment and community! 
              </p>
              <p className='aboutTextP'>
                Graduate of Bristol School of Animation with a First Class degree in BA (Hons) Animation.
              </p>
            </Fade>
              </div>
          </div>
        </div>
        <div className='aboutRow'>
          <div className='aboutColBottom'>
            <Fade><div><h6 className='aboutEdit'>Edit</h6></div></Fade>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default About