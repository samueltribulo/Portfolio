import React from 'react'
import samuel from '../assets/samuel.png'
import './Samuel.scss'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import javascript from '../assets/javascript.png'
import sass from '../assets/sass.png'
import nodejs from '../assets/nodejs.png'
import postgresql from '../assets/postgresql.png'
import express from '../assets/express.png'
import sequelize from '../assets/sequelize.png'


import { Slider } from './Slider'


export const Samuel = () => {
    const frontend = [
        javascript,
        react,
        redux,
        sass
    ]
    const backend = [
        nodejs,
        postgresql,
        express,
        sequelize
    ]
  return (
    <div className='samuelContainer'>
        <div className='samuelContainer2'>
            <img src={samuel} className='avatarSamuel' alt="samuel" />
            <h1>Soy Samuel..<span>&#160;</span></h1>
            <div className="aboutSamuelContainer">
                <p>Tengo 22 años y soy de Argentina. Soy desarrollador Full Stack con orientación al Front-end. Desde que descubrí el mundo de la programación y la infinidad de cosas que se puede hacer en este campo, decidí dar un giro de 180 grados y dedicarme a lo que me gusta. Programar se convirtió en una de las actividades que haría en mis últimos días de vida.</p>
            </div>
            <h1>Tecnologías</h1>
            <h2>Front-End</h2>
            <div className='sliderContainer'>
                <Slider array={frontend} ></Slider>
            </div>
            <h2>Back-End</h2>
            <div className='sliderContainer'>
                <Slider array={backend} ></Slider>
            </div>
        </div>
    </div>
  )
}
