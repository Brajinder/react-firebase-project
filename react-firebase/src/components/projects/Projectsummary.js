import React from 'react'
//import { Link } from 'react-router-dom'

const Projectsummary= ({ project }) => {
 
    return (

        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the Brajinder</p>
        <p className="grey-text">--Date--</p>
        </div>
        </div>

    );

}
export default Projectsummary