import React from 'react'
import { ContactInfoItem } from './ContactInfoItem'
import {MdPlace , MdMailOutline, MdLocalPhone} from 'react-icons/md'
import './ContactSection.scss';
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";
import { ContactForm } from './ContactForm';
import '../index.scss'


export const ContactSection = () => {
  return (
    <div className='contactSectionContainer'>
        <div className='leftSection'>
            <ContactInfoItem icon={<MdPlace className='iconColors' size={20}/>}  text='Buenos Aires, Argentina' />
            <ContactInfoItem icon={<MdMailOutline className='iconColors' size={20}/>}  text='samueltribulo@gmail.com' />
            <ContactInfoItem icon={<MdLocalPhone className='iconColors' size={20}/>}  text='+54 9 11 2397-6927' />
            <ContactInfoItem icon={<FaGithubAlt className='iconColors' size={20}/>}  text='samueltribulo' />
            <ContactInfoItem icon={<FaLinkedin className='iconColors' size={20}/>}  text='Samuel Tribulo' />
        </div>
        <div className='rigthSection'>
            <ContactForm />
        </div>
    </div>
  )
}
