import React from 'react'
import ProjectSummary from './ProjectSummary'
const ProjectList = ({projects}) => {
    return(
    <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
            {projects && projects.map(p => {
                return(                
                    <ProjectSummary project={p} key={p.id}/> 
                    )
            })}
        </div> 
    </div> 
    )
}

export default ProjectList