import React , { Component } from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

class Navbar extends Component{
    state = {active: false}

    toggleActive = () => {
        this.setState({
            active: !this.state.active
        })
    }

    renderlinks() {
        const activity = this.state.active ? 'is-active' : '';
        if(this.props.auth.uid){
            return <SignedInLinks act={activity} name={this.props.profile.firstname}/>
        }
        else {
            return <SignedOutLinks act={activity} />
        }
    }

    render() {
        const activity = this.state.active ? 'is-active' : '';
        return(
            <nav className="navbar is-dark">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                        <h1 className="title has-text-white	">Typeit</h1>
                        </Link>
                        <a href='#' role="button" className={`navbar-burger ${activity}`} aria-label="menu" onClick={this.toggleActive} aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>
                    {this.renderlinks()}
                </div>
            </nav>
        )
    }
}

const MapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(MapStateToProps)(Navbar);

