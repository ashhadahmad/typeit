import React from 'react'

export default function ProjectDetails(props) {
  const id = props.match.params.id
  return (
    <div>
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                  <h1 className="title">
                  Project Title - {id}
                  </h1>
                  <h2 className="subtitle">
                  Author
                  </h2>
                </div>
              </div>
            </div>
            </div>
        </section>

        <section className="section">
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">
              <article>
                <p className="is-justified">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda facere corporis qui aperiam ipsum voluptatum eligendi saepe! Veritatis, nulla quidem non unde iste doloremque soluta eius possimus amet voluptatum.</p>
              </article>
            </div>
          </div>
        </section>
    </div>
  )
}
