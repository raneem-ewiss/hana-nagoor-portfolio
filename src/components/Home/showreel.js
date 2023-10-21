import React from 'react'
import Fade from 'react-reveal/Fade';
import './showreel.css'
import ReactPlayer from 'react-player';

const Showreel = () => {
  return (
    <div className='showreel'>
      <Fade>
        <h6>ShowReel</h6>
        <h2>A ShowReel Video</h2>
        <div className='showreelContent'>
            <ReactPlayer className='showreelVideo' controls url='https://www.youtube.com/watch?v=00GSFh91tjY'/>
        </div>
      </Fade>
    </div>
  )
}

export default Showreel