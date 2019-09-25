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
          <a className="simple-a">contact</a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/mark-mansfield-20128837/"
            target="new"
            alt="visit my linked in profile"
            title="visit my linked in profile"
            style={{ marginLeft: '20px' }}
          >
            <i
              className="fab fa-linkedin-in fa-1x icon"
              style={{ color: 'dodgerBlue' }}
            />
          </a>
          <a
            href=" https://github.com/mark-mansfield"
            target="new"
            alt="visit my github profile"
            title="visit my github profile"
            style={{ marginLeft: '20px' }}
          >
            <i
              className="fab fa-github fa-1x icon"
              style={{ color: 'dodgerBlue' }}
            />
          </a>
        </div>
      </div>
    )
  }
}

export default StickyNav
