import React , {Component} from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'

class Dashboard extends Component {
    render() {
        const {project} = this.props
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
        project: state.project.projects
    }
}

export default connect(MapStateToProps)(Dashboard)