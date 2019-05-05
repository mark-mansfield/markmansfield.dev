import React from 'react'

const About = () => {
  return (
    <section id="section">
      <div className="flex-row container-partial-width section-container">
        <div className="about-profile-layout">
          <div
            className="about-profile-img"
            style={{
              position: 'relative',
              width: '30%',
              height: '500px',
              backgroundColor: '#ccc',
            }}
          />

          <div
            className="profile-info"
            style={{ maxWidth: '80%', textAlign: 'center' }}
          >
            I like to code things from scratch, <br />
            and enjoy bringing ideas to life in the browser.
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
