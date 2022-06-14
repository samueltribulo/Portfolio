import './HeroImg.scss'
import '../index.scss'
import React from 'react'

import image1 from '../assets/image1.png'
import { Link } from 'react-router-dom'

export const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={image1} alt='imagen intro'></img>
        </div>
        <div className='content'>
            <p>¡Hola! Soy Samuel.</p>
            <div className='content2'>
              <ul>
                <li>
                  <h1>Full-Stack Developer</h1>
                </li>
                <li>
                  <h1>Front-End Developer</h1>
                </li>
                <li>
                  <h1>Back-End Developer</h1>
                </li>
              </ul>
            </div>
            <div className='btnDiv'>
                <Link className='btn' to='/project'>Proyectos</Link>
                <Link className='btn btn-light' to='/contact'>Contactame</Link>
            </div>
        </div>
    </div>
  )
}
