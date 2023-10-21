import React, { useState } from 'react';
import './gallery.css';
import Fade from 'react-reveal/Fade';
import{FaWindowClose} from 'react-icons/fa';
import people1 from '../../assets/people/people1.webp';
import people2 from '../../assets/people/people2.webp';
import people3 from '../../assets/people/people3.webp';
import people4 from '../../assets/people/people4.webp';
import people5 from '../../assets/people/people5.webp';
import people6 from '../../assets/people/people6.webp';
import people7 from '../../assets/people/people7.webp';
import people8 from '../../assets/people/people8.webp';
import people9 from '../../assets/people/people9.webp';
import people10 from '../../assets/people/people10.webp';
import people11 from '../../assets/people/people11.webp';
import people12 from '../../assets/people/people12.webp';
import people13 from '../../assets/people/people13.webp';

const People = () => {
  const photos = [
    { id:1, src: people1, alt: 'people1'},
    { id:2, src: people2, alt: 'people2'},
    { id:3, src: people3, alt: 'people3'},
    { id:4, src: people4, alt: 'people4'},
    { id:5, src: people5, alt: 'people5'},
    { id:6, src: people6, alt: 'people6'},
    { id:7, src: people7, alt: 'people7'},
    { id:8, src: people8, alt: 'people8'},
    { id:9, src: people9, alt: 'people9'},
    { id:10, src: people10, alt: 'people10'},
    { id:11, src: people11, alt: 'people11'},
    { id:12, src: people12, alt: 'people12'},
    { id:13, src: people13, alt: 'people13'},
  ];
  
  const [model, setModel] = useState(false);
  const [tempsrc, setTempsrc] = useState('');
  const [tempalt, setTempalt] = useState('');
  const getImage = (src, alt) => {
    setTempsrc(src);
    setTempalt(alt);
    setModel(true);
  }

  return (
    <div className='photography' id='people'>
    <Fade>
      <h6>People</h6>
      <h2>Capturing Life's Beautiful Moments</h2>
      <div className={model? 'model open' : 'model'}>
        <img src={tempsrc} alt={tempalt}/>
        <FaWindowClose onClick={() => setModel(false)}/>
      </div>
      <div className='gallery'>
        {photos.map((item, index)=>{
          return(
          <div className='galleryImages' key={index} onClick={() => getImage(item.src)}>
            <Fade>
            <img src={item.src} style={{width: '100%'}} alt={item.alt}/>
            </Fade>
            <div className='galleryText'><p>{item.alt}</p></div>        
          </div>
        )
      })}
      </div>
    </Fade>
    </div>
  )
}

export default People