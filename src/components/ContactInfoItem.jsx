import React from 'react'
import './ContactInfoItem.scss'
import {MdPlace} from 'react-icons/md'


export const ContactInfoItem = ({icon = <MdPlace/> , text}) => {
  return (
    <div className='contactInfoContainer'>
        <div className="icon">
            {icon}
        </div> 
        <div className="infoC">
            {text}
        </div>
    </div>
  )
}
