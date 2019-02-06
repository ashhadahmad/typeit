import React, { Component } from 'react'

class Signin extends Component {
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
    console.log(this.state)
  }

  render() {
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
                                <input className="input" type="text" id="firstname" placeholder="e.g Alex" onChange={this.handleChange}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                                </span>
                              </div>
                            </div>

                            <div className="field">
                              <label className="label">Last Name</label>
                              <div className="control has-icons-left">
                                <input className="input" type="text" id="lastname" placeholder="e.g Smith" onChange={this.handleChange}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                                </span>
                              </div>
                           </div>

                            <div className="field">
                            <label className="label">Email</label>
                                <div className="control has-icons-left">
                                <input className="input" type="email" id="email" placeholder="Enter your email address" onChange={this.handleChange}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                                </span>
                                </div>
                            </div>

                            <div className="field">
                            <label className="label">Password</label>
                                <div className="control has-icons-left">
                                <input className="input" type="password" id="password" placeholder="Enter your password" onChange={this.handleChange}/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                                </span>
                                </div>
                            </div>

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

export default Signin