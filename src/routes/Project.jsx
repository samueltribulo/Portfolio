import React from 'react'
import { Footer } from '../components/Footer'
import { HeroImg2 } from '../components/HeroImg2'
import {NavBar} from '../components/NavBar'
import { ProjectCardsContainer } from '../components/ProjectCardsContainer'
export const Project = () => {
  return (
    <div>
      <HeroImg2 title='Proyectos' text='En esta sección van a encontrar algunos de mis proyectos'></HeroImg2>
      <ProjectCardsContainer></ProjectCardsContainer>
    </div>
  )
}
