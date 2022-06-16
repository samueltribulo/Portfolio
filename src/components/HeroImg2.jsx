import React from 'react'
import './HeroImg2.scss'

export const HeroImg2 = ({title, text}) => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>
                {title}
            </h1>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}
