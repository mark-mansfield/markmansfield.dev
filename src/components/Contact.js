import React from 'react'
const Contact = () => {
  return (
    <section id="section" className="contact set-height">
      <div className="container-partial-width">
        <h1>Contact Me</h1>
        <p>Contact me here</p>
        <img
          src={require('../images/linkedin.svg')}
          alt="facebook link"
          title="contact me on facebook"
        />
        <img
          src={require('../images/facebook.svg')}
          alt="facebook link"
          title="contact me on facebook"
        />
        <img
          src={require('../images/instagram.svg')}
          alt="facebook link"
          title="contact me on facebook"
        />
      </div>
    </section>
  )
}
export default Contact
