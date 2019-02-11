import React , {Component} from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        const {project, auth, notifications} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <section id="main" className="section">
            <div className="dashboard container">
                <div className="columns">
                    <div className="column is-two-fifths">
                    <div className="notification">
                        <Notification notifications = {notifications}/>
                        </div>
                    </div>
                    <div className="column">
                    <ProjectList projects={project}/>
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
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}


export default compose(
    connect(MapStateToProps),
    firestoreConnect([
      { collection: 'projects', orderBy: ['createdAt', 'desc']},
      { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
    ])
  )(Dashboard)