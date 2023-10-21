import React, { useState } from 'react';
import './gallery.css';
import Fade from 'react-reveal/Fade';
import{FaWindowClose} from 'react-icons/fa';
import product1 from '../../assets/products/product1.webp';
import product2 from '../../assets/products/product2.webp';
import product3 from '../../assets/products/product3.webp';
import product4 from '../../assets/products/product4.webp';
import product5 from '../../assets/products/product5.webp';
import product6 from '../../assets/products/product6.webp';

const Products = () => {
  const photos = [
    { id:1, src: product1, alt: 'product1'},
    { id:2, src: product2, alt: 'product2'},
    { id:3, src: product3, alt: 'product3'},
    { id:4, src: product4, alt: 'product4'},
    { id:5, src: product5, alt: 'product5'},
    { id:6, src: product6, alt: 'product6'},
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
    <div className='photography' id='product'>
    <Fade>
      <h6>Products</h6>
      <h2>Showcasing Quality in Every Detail</h2>
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

export default Products