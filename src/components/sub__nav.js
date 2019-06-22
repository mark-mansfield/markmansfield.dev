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
          <Scroll type="class" element="skills">
            <a className="simple-a">
              <small>skills</small>
            </a>
          </Scroll>
        </div>
        <div>
          <Scroll type="class" element="portfolio">
            <a className="simple-a">
              <small>portfolio</small>
            </a>
          </Scroll>
        </div>
        <div>
          <Scroll type="class" element="about_me">
            <a className="simple-a">
              <small>about</small>
            </a>
          </Scroll>
        </div>
        <div>
          <Scroll type="id" element="contact">
            <a className="simple-a">Contact</a>
          </Scroll>
        </div>
      </div>
    )
  }
}

export default StickyNav
