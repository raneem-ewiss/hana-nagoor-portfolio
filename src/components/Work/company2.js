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

const Company2 = () => {
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
    <div className='work' id='company2'>
        <div className='workContent'>
            <div className='workText'>
                <Fade>
                <h2 className='workCompany'>Be Unique Group</h2>
                <p className='workJob'>Videographer / Video editor</p>
                <p className='workDescription'><strong>Filmed and photographed</strong> social media content for clients such as, 'The Box', 'Pramie', Invisalign  center, 'Quironsalud', 'Be Unique Group', 'Broskays', 'Darisuh Soudi' etc.</p>
                <p className='workDescription'><strong>Edited photos and videos, and animated</strong> for social media content on varying subjects such as food photography, action shots, reels, etc.</p>
                <p className='workDescription'><strong>Brainstormed and developed</strong> content plan ideas/strategies, storyboards, campaigns, and scripts that were used for shoots, and posts.</p>
                </Fade>
            </div>
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
        </div>
    </div>
  )
}

export default Company2