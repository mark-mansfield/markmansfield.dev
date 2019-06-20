import React, { Component } from 'react'
const SimpleBanner = props => (
  <section
    id="section"
    className={props.scrollTarget + ' container-full-width'}
  >
    <div className="simple-banner">
      <div className="simple-banner-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  </section>
)
export default SimpleBanner
