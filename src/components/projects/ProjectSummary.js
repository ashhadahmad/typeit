import React from 'react'

const ProjectSummary = ({title, smalltext, author, date}) => { 
    return(
        <div className="tile is-parent">
                    <a className="tile is-child notification is-light">
                        <h1 className="title">{title}</h1>
                        <h2 className="subtitle">{smalltext}</h2>
                        <span className="is-dark">Posted by : {author}</span>
                        <div className="content">
                            {date}
                        </div>
                    </a>
        </div>
    )
}

export default ProjectSummary