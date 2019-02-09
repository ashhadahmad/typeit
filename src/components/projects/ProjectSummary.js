import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    const date = (moment.unix(project.createdAt.seconds).calendar());
    return(
        <div className="tile is-parent">
                    <Link to={`/project/${project.id}`} className="tile is-child notification is-primary">
                        <h1 className="title">{project.title}</h1>
                        <h2 className="subtitle">{project.content.substring(0,60)+ '...'}</h2>
                        <span className="is-dark">Posted by : {`${project.authorFirstName} ${project.authorLastName}`}</span>
                        <div className="content">
                            Date : {date}
                        </div>
                    </Link>
        </div>
    )
}

export default ProjectSummary