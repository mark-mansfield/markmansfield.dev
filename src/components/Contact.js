import React from 'react'
class Contact extends React.Component {
  render() {
    return (
      <section id="section" className="contact set-height">
        <div className="container-partial-width">
          <div style={{ textAlign: 'center' }}>
            <h1>Contact Me</h1>
            <p>You know you want to!</p>
          </div>
          <div className="contact-layout">
            <img
              className="contact-layout-item-1"
              src={require('../images/linkedin.svg')}
              alt="linkedin link"
              title="contact me on linkedin"
            />

            <img
              src={require('../images/gmail.svg')}
              alt="email me here"
              title="contact me via email"
              onClick={this.props.modalState.bind(this)}
            />

            <img
              src={require('../images/facebook.svg')}
              alt="facebook link"
              title="contact me on facebook"
            />
            <img
              src={require('../images/instagram.svg')}
              alt="instagram link"
              title="contact me on instagram"
            />
          </div>
        </div>
      </section>
    )
  }
}
export default Contact
