import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedOutLinks = ({act}) => {
    return(
    <div id="navbarBasicExample" className={`navbar-menu ${act}`}>
        <div className="navbar-end">
            <NavLink to='/signup' className="navbar-item">
                Sign Up
            </NavLink>
            <NavLink to='/signin' className = "navbar-item">
                Sign In
            </NavLink>

        </div>
      </div>
    )
}

export default SignedOutLinks;
