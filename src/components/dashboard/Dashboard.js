import React , {Component} from 'react'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
class Dashboard extends Component {
    render() {
        return (
            <section id="main" className="section">
            <div className="dashboard container">
                <div className="columns">
                    <div className="column is-three-fifths">
                            <ProjectList />
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

export default Dashboard