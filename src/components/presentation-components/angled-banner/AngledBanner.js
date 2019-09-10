import React from 'react'
class AngledBanner extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return (
      <section
        id="section"
        className={this.props.scrollTarget + ' container-full-width'}
      >
        <div className="angled-banner">
          <div className="angled-banner-text">
            <h1>{this.props.title}</h1>
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
}

export default AngledBanner
