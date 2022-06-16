import React from 'react';
import './ProjectCard.scss';
import { NavLink } from 'react-router-dom';

export const ProjectCard = ({image, projectTitle, projectDescription, projectTechs, projectButtonType, projectURL}) => {

  return (
    <div className='card'>
        <div className='infoContainer'>
            <img src={image} alt="imagen" />
            <h4>{projectTitle}</h4>
            <p>{projectDescription}</p>
            <h4>Tecnologias</h4>
            <p>{projectTechs}</p>
        </div>
        <div className='btnContainer'>
            {projectButtonType === 'video' ? <a className='btnCard' href={projectURL} >Ver video</a> : <NavLink className='btnCard' to={'/'}>Volver al home</NavLink>}
        </div>
    </div>
  )
}
