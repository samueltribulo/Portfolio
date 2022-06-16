import React from 'react';
import './Slider.scss';

export const Slider = ({array}) => {
  return (
    <div className='slider'>
        <ul>
            {array.map(i =>(<li><img src={i} alt="imagen" /></li>))}
        </ul>
    </div>
  )
}
