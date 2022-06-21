import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.scss'
import './NavBar.scss'
import {FaBars, FaTimes} from 'react-icons/fa'

export const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor)
  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <ul className={click ? 'navMenu active' : 'navMenu'}>
            <li>
                <Link onClick={() => setClick(false)}  to={'/'}>Home</Link>
            </li>
            <li>
                <Link onClick={() => setClick(false)}  to={'/project'}>Proyectos</Link>
            </li>
            <li>
                <Link onClick={() => setClick(false)}  to={'/about'}>Sobre mi</Link>
            </li>
            <li>
                <Link onClick={() => setClick(false)}  to={'/contact'}>Contacto</Link>
            </li>
        </ul>
        <div className='hamburguer' onClick={handleClick}>
            {click ? <FaTimes size={20} className='iconColors'></FaTimes> : <FaBars size={20} className='iconColors'></FaBars>}
        </div>
    </div>
  )
}
