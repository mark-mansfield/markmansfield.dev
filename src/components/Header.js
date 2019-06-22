import React from 'react'
import PropTypes from 'prop-types'
import Scroll from './Scroll'
class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="logo">
          <span className="icon fa-code" />
        </div>
        <div className="content">
          <div className="inner">
            <h1>Mark Mansfield</h1>
            <p>Front-end Developer - Sydney</p>
            <div />
            <div className="contact-layout">
              <a
                href="https://www.linkedin.com/in/mark-mansfield-20128837/"
                target="new"
                alt="visit my linked in profile"
                title="visit my linked in profile"
              >
                <i className="fab fa-linkedin-in fa-2x icon" />
              </a>
              <a
                href=" https://github.com/mark-mansfield"
                target="new"
                alt="visit my github profile"
                title="visit my github profile"
              >
                <i className="fab fa-github fa-2x icon" />
              </a>

              <a
                href="https://www.facebook.com/mmansfield"
                alt="marks facebook page"
                target="new"
                title="contact me via this platform"
              >
                <i className="fab fa-facebook fa-2x icon" />
              </a>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Scroll type="class" element="skills">
                <a>skills</a>
              </Scroll>
            </li>
            <li>
              <Scroll type="class" element="portfolio">
                <a>portfolio</a>
              </Scroll>
            </li>
            <li>
              <Scroll type="class" element="about_me">
                <a>about</a>
              </Scroll>
            </li>
            <li>
              <a onClick={this.props.modalState.bind(this)}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
