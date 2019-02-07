import React from 'react'
import {Link} from 'react-router-dom'

const ProjectSummary = ({project}) => {
    return(
        <div className="tile is-parent">
                    <Link to={`/project/${project.id}`} className="tile is-child notification is-primary">
                        <h1 className="title">{project.title}</h1>
                        <h2 className="subtitle">SS</h2>
                        <span className="is-dark">Posted by :</span>
                        <div className="content">
                            Date
                        </div>
                    </Link>
        </div>
    )
}

export default ProjectSummary