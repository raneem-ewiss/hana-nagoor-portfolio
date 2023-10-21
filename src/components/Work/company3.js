import React from 'react'
import './work.css'
import Fade from 'react-reveal/Fade';

import video1 from '../../assets/work/video1.mp4';
import video2 from '../../assets/work/video2.mp4';
import video3 from '../../assets/work/video3.mp4';
import video4 from '../../assets/work/video4.mp4';
import video5 from '../../assets/work/video5.mp4';
import video6 from '../../assets/work/video6.mp4';
import video7 from '../../assets/work/video7.mp4';
import video8 from '../../assets/work/video8.mp4';

const Company3 = () => {
    const photos = [
        { id:1, src: video1, alt: 'location1', url: 'https://www.youtube.com/watch?v=00GSFh91tjY'},
        { id:2, src: video2, alt: 'location2', url: 'https://www.youtube.com/watch?v=KXrN5gVsBP0'},
        { id:3, src: video3, alt: 'location3', url: 'https://www.youtube.com/watch?v=1yRqvfXfuJ8'},
        { id:4, src: video4, alt: 'location4', url: 'https://www.youtube.com/watch?v=_e9JEYGhSDo'},
        { id:5, src: video5, alt: 'location5', url: 'https://www.youtube.com/watch?v=_NGlVluWxUE'},
        { id:6, src: video6, alt: 'location6', url: 'https://www.youtube.com/watch?v=00GSFh91tjY'},
        { id:7, src: video7, alt: 'location7', url: 'https://www.youtube.com/watch?v=KXrN5gVsBP0'},
        { id:8, src: video8, alt: 'location8', url: 'https://www.youtube.com/watch?v=1yRqvfXfuJ8'},
    ];

  return (
    <div className='work' id='company3'>
        <div className='workContent'>
            <div className='workGallery'>
                {photos.map((item, index)=>{
                    return(
                    <div className='workVideos' key={index}>
                        <Fade>
                            <video src={item.src} style={{width: '100%'}} alt={item.alt} onMouseOver={e => e.target.setAttribute("controls", "true")} onMouseOut={e => e.target.removeAttribute("controls")}/>
                        </Fade>
                    </div>
                )})}
            </div>
            <div className='workText'>
                <Fade>
                <h2 className='workCompany'>Strategic Exhibition and Conferences</h2>
                <p className='workJob'>Video Editor</p>
                <p className='workDescription'>I work on promotional videos for events such as the 'International Human Fraternity Virtual Summit (IHFS)', 'Annual Investment Meeting (AIM)', Dubai Woodshow etc in Dubai, as well as promotional videos for social media, etc.</p>
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default Company3