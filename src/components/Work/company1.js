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

const Company1 = () => {
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
    <div className='work' id='company1'>
        <h6>Work</h6>
        <h2>Past Creations, Future Inspiration</h2>
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
                <h2 className='workCompany'>Company Name</h2>
                <p className='workJob'>Videographer / Video editor / Photographer</p>
                <p className='workDescription'><strong>Filmed and edited</strong> content for various upscale clients in the fashion and perfume industry including- Hind al Oud, Baruni, Style Gallery, Madame Tussauds etc.</p>
                <p className='workDescription'><strong>Coordinated shoots</strong>, worked with models when filming, and photographed in various fields including editorial, product photography, jewellery, fashion etc.</p>
                <p className='workDescription'><strong>Curated content</strong> for Instagram grids and worked to tight deadlines to develop ideas and create content for social media platforms.</p>
                </Fade>
            </div>
        </div>
    </div>
  )
}

export default Company1