import React from 'react'
import ProjectSummary from './ProjectSummary'
const ProjectList = () => {
    return(
    <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
               <ProjectSummary title={`Titles`} smalltext={`Subtitles`} author={`Ashhad`} date={`Date`}/> 
               <ProjectSummary title={`Titles2`} smalltext={`Subtitles2`} author={`Ashhad2`} date={`Date2`}/> 
        </div> 
    </div> 
    )
}

export default ProjectList