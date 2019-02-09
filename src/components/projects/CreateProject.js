import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectAction'
import {Redirect} from 'react-router-dom'

class CreateProject extends Component {
  constructor(props){
      super(props)
      this.state = {
          title: '',
          content: '',
      }
  }

  handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
        
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title !== '' && this.state.content !== '') {
        this.props.createProject(this.state);
        this.props.history.push('/')
    }
    else {
        console.log("EMPTY")
    }    
  }

  render() {
    const {auth} = this.props
    if(!auth.uid) return <Redirect to= '/signin' />
    return (
      <div>
          <section className="section">
              <div className="container">
                  <div className="columns is-centered">
                    <div className="column is-8">
                        <form onSubmit={this.handleSubmit}>
                        <h1 className="title">New Post</h1>

                            
                            <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input className="input" id="title" type="text" placeholder="Post Title" onChange = {this.handleChange}/>
                            </div>
                            </div>

                            <div className="field">
                            <label className="label">Story</label>
                            <div className="control">
                                <textarea className="textarea" id="content" placeholder="Tell your story" onChange={this.handleChange}></textarea>
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

const MapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(CreateProject)