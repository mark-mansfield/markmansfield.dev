import React from 'react'
class SimpleBanner extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return (
      <section
        id="section"
        className={this.props.scrollTarget + ' container-full-width'}
      >
        <div className="simple-banner">
          <div className="simple-banner-text">
            <h1>{this.props.title}</h1>
            <p>{this.props.children}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default SimpleBanner
