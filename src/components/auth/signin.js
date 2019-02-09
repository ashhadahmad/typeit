import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signin} from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class Signin extends Component {
  constructor(props){
      super(props)
      this.state = {
          email: '',
          password: '',
      }
  }

  handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signin(this.state)
  }

  render() {
    const {authErrorMessage, authError, auth} = this.props
    if(auth.uid) return <Redirect to= '/' />
    const formInput = authError ? 'is-danger' : '';
  return (
      <div>
          <section className="section">
              <div className="container">
                  <div className="columns is-centered">
                    <div className="column is-half">
                        <form onSubmit={this.handleSubmit}>
                        <h1 className="title">Sign In</h1>
                        
                            <div className="field">
                            <label className="label">Email</label>
                                <div className="control has-icons-left">
                                <input className={`input ${formInput}`} type="email" id="email" placeholder="Enter your email address" onChange={this.handleChange}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                                </span>
                                </div>
                                
                            </div>

                            <div className="field">
                            <label className="label">Password</label>
                                <div className="control has-icons-left">
                                <input className={`input ${formInput}`} type="password" id="password" placeholder="Enter your password" onChange={this.handleChange}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                                </span>
                                </div>
                            </div>

                            {authError ? <div className="field"><p className="has-text-danger">{authErrorMessage}</p></div>: null}

                            <div className="control">
                              <button className="button is-primary" onClick={this.handleSubmit}>Submit</button>
                            </div>


                        </form>
                    </div>
                </div>
              </div>
          </section>
      </div>
    )
  }
}

const MapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        authErrorMessage: state.auth.authErrorMessage,
        auth: state.firebase.auth 
    }
}

const MapDispatchToProps = (dispatch) => {
    return{
        signin: (creds) => dispatch(signin(creds))
    }
  }

export default connect(MapStateToProps, MapDispatchToProps)(Signin)