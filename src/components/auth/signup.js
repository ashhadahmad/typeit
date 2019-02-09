import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {signup} from '../../store/actions/authActions'

class Signup extends Component {
  constructor(props){
      super(props)
      this.state = {
          email: '',
          password: '',
          firstname: '',
          lastname: '',
      }
  }

  handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state)
  }

  render() {
    const {auth, authError, authErrorMessage} = this.props
    if(auth.uid) return <Redirect to= '/' />
    const formInput = authError ? 'is-danger' : '';
    return (
      <div>
          <section className="section">
              <div className="container">
                  <div className="columns is-centered">
                    <div className="column is-half">
                        <form onSubmit={this.handleSubmit}>
                        <h1 className="title">Sign Up</h1>

                            <div className="field">
                              <label className="label">First Name</label>
                              <div className="control has-icons-left">
                                <input className={`input ${formInput}`} type="text" id="firstname" placeholder="e.g Alex" onChange={this.handleChange}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                                </span>
                              </div>
                            </div>

                            <div className="field">
                              <label className="label">Last Name</label>
                              <div className="control has-icons-left">
                                <input className={`input ${formInput}`} type="text" id="lastname" placeholder="e.g Smith" onChange={this.handleChange}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                                </span>
                              </div>
                           </div>

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
      auth: state.firebase.auth,
      authError: state.auth.authError, 
      authErrorMessage: state.auth.authErrorMessage
  }
}
const MapDispatchToProps = (dispatch) => {
  return {
      signup: (newUser) => dispatch(signup(newUser)) 
  }
}



export default connect(MapStateToProps, MapDispatchToProps)(Signup)