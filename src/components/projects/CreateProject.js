import React, { Component } from 'react'

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
    console.log(this.state)
  }

  render() {
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

export default CreateProject