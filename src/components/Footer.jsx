import './Footer.scss';
import '../index.scss'
import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'
export const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} className='iconColors' style={{marginRight: '2rem'}}/>
                    <p>Buenos Aires, Argentina.</p>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} className='iconColors' style={{marginRight: '2rem'}} /> +54 11 9 2397-6927</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} className='iconColors' style={{marginRight: '2rem'}} />samueltribulo@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>Full Stack Web Developer.</h4>
                <p>Mi nombre es Samuel Tribulo. Encontrame en mis redes:</p>
                <div className='social'>
                    <a href="https://www.instagram.com/samutribulo/">    
                        <FaInstagram  size={30} className='iconColors' style={{marginRight: '1rem'}} />
                    </a>
                    <a href="https://github.com/samueltribulo">
                        <FaGithub  size={30} className='iconColors' style={{marginRight: '1rem'}} />
                    </a>
                    <a href="https://www.linkedin.com/in/samuel-tribulo-663272186/">
                        <FaLinkedin  size={30} className='iconColors' style={{marginRight: '1rem'}} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
