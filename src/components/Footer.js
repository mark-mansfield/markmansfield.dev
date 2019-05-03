import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">&copy;markmansfield.dev</p>
    <div className="copyright">
      Icons made by &nbsp;
      <a href="https://www.freepik.com/" title="Freepik">
        Freepik
      </a>
      <br />
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
      <br />
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
      >
        CC 3.0 BY
      </a>
    </div>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
