import React from 'react'
import bgPhoto from '../../assets/main.jpeg'
import './header.css'
import { Link } from 'react-scroll';

const WorkHeader = () => {
  return (
    <div className='header'>
        <div className='headerContent'>
            <img className='headerBG' src={bgPhoto} alt='Background'/>
        </div>
        <div className='headerText'>
            <h1>Work</h1>
            <ul className='headerLinks'>
                <li><Link to='company1'><h3>Company1</h3></Link></li>
                <li><Link to='company2'><h3>Company2</h3></Link></li>
                <li><Link to='company3'><h3>Company3</h3></Link></li>
                <li><Link to='company5'><h3>Company4</h3></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default WorkHeader