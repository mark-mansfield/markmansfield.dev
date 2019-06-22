import React from 'react'

class hamburgerButton extends React.Component {
  render() {
    return (
      <div
        id="burger-button"
        className={
          this.props.sticky ? 'burger-button alt  animated fadeIn' : 'hidden'
        }
        // className={this.props.className}
        onClick={this.props.sideDrawerState('left', true)}
      >
        <span className="burger-nav">
          <span className="burger-nav-bun burger-nav-bun--top" />
          <span className="burger-nav-meat" />
          <span className="burger-nav-bun burger-nav-bun--bottom" />
        </span>
      </div>
    )
  }
}

export default hamburgerButton
