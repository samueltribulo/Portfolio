import React from 'react'
import './ProjectCardsContainer.scss'
import { ProjectCard } from './ProjectCard'
import exmine from '../assets/exmine.png'
import portfolio from '../assets/portfolio.png'
import recipeapp from '../assets/recipeapp.png'
export const ProjectCardsContainer = () => {
    const proyectos = [
        {
            image: recipeapp,
            projectTitle: 'Recipe App',
            projectDescription: 'Proyecto individual realizado en la primer etapa de labs en Henry. Es una SPA donde se pueden buscar, ordenar, filtrar, crear y eliminar recetas.',
            projectTechs: 'React, Redux, NodeJS, ExpressJs, PostgreSQL, Sequelize.',
            projectButtonType: 'video',
            projectURL: 'https://www.linkedin.com/feed/update/urn:li:activity:6940329623180181504/'
         },
         {
            image: exmine,
            projectTitle: 'Exmine',
            projectDescription: 'Proyecto grupal realizado en la etapa final de labs en Henry. Es un ecommerce enfocado a la venta de insumos para la mineria de criptomonedas.',
            projectTechs: 'React, Redux, NodeJS, ExpressJs, PostgreSQL, Sequelize, MaterialUI.',
            projectButtonType: 'video',
            projectURL: 'https://vimeo.com/719112521'
         },        
         {
            image: portfolio,
            projectTitle: 'Portfolio',
            projectDescription: 'Portfolio personal realizado con el fin de mostrar un poco sobre mi, mis proyectos y para que puedan contactarme.',
            projectTechs: 'React, SASS',
            projectButtonType: '',
            projectURL: 'https://vimeo.com/719112521'
         },
    ]
  return (
    <div className='projectCardContainer'>
        {proyectos.map(p => <ProjectCard {...p} ></ProjectCard>)}
    </div>
  )
}
