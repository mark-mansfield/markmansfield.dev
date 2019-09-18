import React from 'react'

import Scroll from './Scroll'

class StickyNav extends React.Component {
  showModal() {
    this.props.modalState()
  }

  render() {
    return (
      <div
        id="sub-nav"
        // className={'alt  animated fadeInDown'}
        className={this.props.sticky ? 'alt  animated fadeInDown' : 'hidden'}
      >
        <div>
          <Scroll type="class" element="about_me">
            <a className="simple-a">
              <small>about</small>
            </a>
          </Scroll>
        </div>
        <div>
          <Scroll type="class" element="projects">
            <a className="simple-a">
              <small>portfolio</small>
            </a>
          </Scroll>
        </div>
        <div onClick={this.props.modalState.bind(this)}>
          <a className="simple-a">Contact</a>
        </div>
      </div>
    )
  }
}

export default StickyNav
