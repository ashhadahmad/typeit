import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedInLinks = ({act}) => {
    return(
    <div id="navbarBasicExample" className={`navbar-menu ${act}`}>
        <div className="navbar-end">
            <NavLink to='/create' className="navbar-item">
                New Post
            </NavLink>
            <NavLink to='/' className = "navbar-item">
                Logout
            </NavLink>
            <a className="navbar-item">
            <span className="icon"><i className="far fa-user"> </i></span>
            Hello
            </a>
        </div>
      </div>
    )
}

export default SignedInLinks;
