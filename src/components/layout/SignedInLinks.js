import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {signout} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    const {act} = props;
    return(
    <div id="navbarBasicExample" className={`navbar-menu ${act}`}>
        <div className="navbar-end">
            <NavLink to='/create' className="navbar-item">
                New Post
            </NavLink>
            <a onClick={props.signout} className = "navbar-item">
                Logout
            </a>
            <a className="navbar-item">
            <span className="icon"><i className="far fa-user"> </i></span>
            {props.name}
            </a>
        </div>
      </div>
    )
}

const MapDispatchToProps = (dispatch) => {
    return {
        signout : () => dispatch(signout())
    }
}

export default connect(null, MapDispatchToProps)(SignedInLinks);
