import React, { Component } from 'react'

class Signup extends Component {
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
                        <h1 className="title">Sign In</h1>
                        
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

export default Signup