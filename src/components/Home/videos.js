import React, {useState, useEffect} from 'react';
import './video-edit.css';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactPlayer from 'react-player';

const Videos = () => {
  const slides = [
    {
      "id": "00GSFh91tjY",
      "url": "https://www.youtube.com/watch?v=00GSFh91tjY",
      "emb_url": "https://www.youtube.com/embed/00GSFh91tjY",
      "img_url": "https://i.ytimg.com/vi/00GSFh91tjY/hqdefault.jpg",
      "title": "This is the title of this video. This is the title of this video. This is the title of this video"
    },
    {
      "id": "2",
      "url": "https://www.youtube.com/watch?v=KXrN5gVsBP0",
      "emb_url": "https://www.youtube.com/embed/00GSFh91tjY",
      "img_url": "https://i.ytimg.com/vi/KXrN5gVsBP0/hqdefault.jpg",
      "title": "This is the title of this video. This is the title of this video. This is the title of this video"
    },
    {
      "id": "3",
      "url": "https://www.youtube.com/watch?v=1yRqvfXfuJ8",
      "emb_url": "https://www.youtube.com/embed/00GSFh91tjY",
      "img_url": "https://i.ytimg.com/vi/1yRqvfXfuJ8/hqdefault.jpg",
      "title": "This is the title of this video. This is the title of this video. This is the title of this video"
    },
    {
      "id": "4",
      "url": "https://www.youtube.com/watch?v=_e9JEYGhSDo",
      "emb_url": "https://www.youtube.com/embed/00GSFh91tjY",
      "img_url": "https://i.ytimg.com/vi/e9JEYGhSDo/hqdefault.jpg",
      "title": "This is the title of this video. This is the title of this video. This is the title of this video"
    },{
      "id": "5",
      "url": "https://www.youtube.com/watch?v=_NGlVluWxUE",
      "emb_url": "https://www.youtube.com/embed/00GSFh91tjY",
      "img_url": "https://i.ytimg.com/vi/NGlVluWxUE/hqdefault.jpg",
      "title": "This is the title of this video. This is the title of this video. This is the title of this video"
    }
  ]

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const CustomRightArrow = ({ onClick }) => {
    return <i className="custom-right-arrow" onClick={() => onClick()} />;
  };
  
  const CustomLeftArrow = ({ onClick }) => {
    return <i className="custom-left-arrow" onClick={() => onClick()} />;
  };
  
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  
  function getWindowSize() {
    const {innerWidth} = window;
    return {innerWidth};
  }

  return (
    <div className='skill' id='skills'>
      <Fade>
      <div className='VideoEdit'>
        <h6>Edits and Videos</h6>
        <h2>Edited Videos By Me</h2>
      </div>
      <div className='container'>
       
            <div className='skill-bx'>
              <Carousel centerMode responsive={responsive} autoPlay autoPlaySpeed={1500} infinite draggable swipeable customRightArrow={<CustomRightArrow/>} customLeftArrow={<CustomLeftArrow/>} className='skill-slider'>
                {
                  slides.map(slides=> 
                    <div className="item">
                      <ReactPlayer url={slides.url} className='sliders-player' width={320 * windowSize.innerWidth / 1400} height={180 * windowSize.innerWidth / 1400} light controls/>
                      <p className='number'>{slides.title}</p>
                    </div>
                )}
              </Carousel>
            </div>
          
      </div>
      </Fade>
    </div>
  )
}

export default Videos