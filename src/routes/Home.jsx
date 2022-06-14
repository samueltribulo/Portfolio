import React from 'react'
import { HeroImg } from '../components/HeroImg'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import './Home.scss'

export const Home = () => {
  return (
    <div className='home'>
        <HeroImg/>
    </div>
  )
}
