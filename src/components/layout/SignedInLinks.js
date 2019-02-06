import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedInLinks = ({act}) => {
    return(
    <div id="navbarBasicExample" className={`navbar-menu ${act}`}>
        <div className="navbar-end">
            <a className="navbar-item">
                New Post
            </a>
            <a className = "navbar-item">
                Logout
            </a>
            <a className="navbar-item">
            <span className="icon"><i className="far fa-user"> </i></span>
            Hello
            </a>
        </div>
      </div>
    )
}

export default SignedInLinks;
