import React , {Component} from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const {project, auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <section id="main" className="section">
            <div className="dashboard container">
                <div className="columns">
                    <div className="column is-three-fifths">
                            <ProjectList projects={project}/>
                    </div>
                    <div className="column">
                        <div className="notification">
                        <Notification />
                        </div>
                        
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        project: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}


export default compose(
    connect(MapStateToProps),
    firestoreConnect([
      { collection: 'projects' }
    ])
  )(Dashboard)