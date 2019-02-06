import React from 'react'
import ProjectSummary from './ProjectSummary'
const ProjectList = () => {
    return(
    <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
               <ProjectSummary title={`Titles`} smalltext={`Subtitles`} author={`Ashhad`} date={`Date`}/> 
        </div> 
    </div> 
    )
}

export default ProjectList