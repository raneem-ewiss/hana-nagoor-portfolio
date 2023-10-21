import React, { useState } from 'react';
import './gallery.css';
import Fade from 'react-reveal/Fade';
import{FaWindowClose} from 'react-icons/fa';
import location1 from '../../assets/locations/location1.webp';
import location2 from '../../assets/locations/location2.webp';
import location3 from '../../assets/locations/location3.webp';
import location4 from '../../assets/locations/location4.webp';
import location5 from '../../assets/locations/location5.webp';
import location6 from '../../assets/locations/location6.webp';
import location7 from '../../assets/locations/location7.webp';
import location8 from '../../assets/locations/location8.webp';
import location9 from '../../assets/locations/location9.webp';

const Locations = () => {
  const photos = [
    { id:1, src: location1, alt: 'location1'},
    { id:2, src: location2, alt: 'location2'},
    { id:3, src: location3, alt: 'location3'},
    { id:4, src: location4, alt: 'location4'},
    { id:5, src: location5, alt: 'location5'},
    { id:6, src: location6, alt: 'location6'},
    { id:7, src: location7, alt: 'location7'},
    { id:8, src: location8, alt: 'location8'},
    { id:9, src: location9, alt: 'location9'},
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
    <div className='photography' id='location'>
    <Fade>
      <h6>Locations</h6>
      <h2>Exploring the World Through My Lens</h2>
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

export default Locations