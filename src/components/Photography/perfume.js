import React, { useState } from 'react';
import './gallery.css';
import Fade from 'react-reveal/Fade';
import{FaWindowClose} from 'react-icons/fa';
import perfumes1 from '../../assets/perfumes/perfume1.webp';
import perfumes2 from '../../assets/perfumes/perfume2.webp';
import perfumes3 from '../../assets/perfumes/perfume3.webp';
import perfumes4 from '../../assets/perfumes/perfume4.webp';
import perfumes5 from '../../assets/perfumes/perfume5.webp';
import perfumes6 from '../../assets/perfumes/perfume6.webp';
import perfumes7 from '../../assets/perfumes/perfume7.webp';
import perfumes8 from '../../assets/perfumes/perfume8.webp';
import perfumes9 from '../../assets/perfumes/perfume9.webp';

const Perfumes = () => {
  const photos = [
    { id:1, src: perfumes1, alt: 'perfumes1'},
    { id:2, src: perfumes2, alt: 'perfumes2'},
    { id:3, src: perfumes3, alt: 'perfumes3'},
    { id:4, src: perfumes4, alt: 'perfumes4'},
    { id:5, src: perfumes5, alt: 'perfumes5'},
    { id:6, src: perfumes6, alt: 'perfumes6'},
    { id:7, src: perfumes7, alt: 'perfumes7'},
    { id:8, src: perfumes8, alt: 'perfumes8'},
    { id:9, src: perfumes9, alt: 'perfumes9'},
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
    <div className='photography' id='perfume'>
    <Fade>
      <h6>Perfume</h6>
      <h2>The Essence of Elegance</h2>
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

export default Perfumes