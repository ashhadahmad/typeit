import React , { Component } from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


class Navbar extends Component{
    state = {active: false}

    toggleActive = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        const activity = this.state.active ? 'is-active' : '';
        return(
            <nav className="navbar is-primary">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                        <h1 className="title has-text-white	">Typeit</h1>
                        </Link>
                        <a role="button" className={`navbar-burger ${activity}`} aria-label="menu" onClick={this.toggleActive} aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <SignedInLinks act = {activity}/>
                    <SignedOutLinks act = {activity} />
                </div>
            </nav>
        )
    }
}

export default Navbar;

