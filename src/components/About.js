import React from 'react'

const About = () => {
  return (
    <section id="section">
      <div className="flex-row container-partial-width section-container">
        <div className="about-profile-layout">
          <div className="about-profile-img">
            <img
              style={{ borderRadius: '50%' }}
              src="https://media.licdn.com/dms/image/C5603AQFQ07OWcfmPMQ/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=6cmSglfdVv_cWqWIkD-MPSbHYfqPDH8E6010-3dRvfY"
            />
          </div>
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
