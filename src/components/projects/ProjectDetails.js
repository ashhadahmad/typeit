import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {
  const {project, auth} = props;
  const date = (moment.unix(project.createdAt.seconds).calendar());
  if(!auth.uid) return <Redirect to= '/signin' />
  if (project) {
    return (<div>
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <h1 className="title typeit-title">
                  {project.title}
                  </h1>
                  <h3 className="subtitle">
                  By : {`${project.authorFirstName} ${project.authorLastName}`} <br />
                  Date : {date}
                  </h3>
                </div>
              </div>
            </div>
            </div>
        </section>

        <section className="section">
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">
              <article>
                <p className="is-justified">{project.content}</p>
              </article>
            </div>
          </div>
        </section>
    </div>)
  }
  else return (
    <section className="section">
      Loading Project ...
    </section>
  )
}

const MapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project : project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(MapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)

