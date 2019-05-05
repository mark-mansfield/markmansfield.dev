import React from 'react'
import PropTypes from 'prop-types'
import Scroll from './Scroll'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Mark Mansfield</h1>
        <p>Front-end Developer - Sydney</p>
      </div>
    </div>
    <nav>
      <ul>
        {/* <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li> */}
        <li>
          <Scroll type="class" element="portfolio">
            <a>portfolio</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="class" element="about_me">
            <a>About</a>
          </Scroll>
        </li>
        <li>
          <Scroll type="class" element="contact">
            <a>Contact</a>
          </Scroll>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
