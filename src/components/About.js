import React from 'react'

const About = () => {
  return (
    <section id="section" className="about_me set-height">
      <div className="container">
        <h1>Who is Mark?</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <div
              className="profile-img"
              style={{
                position: 'relative',
                width: '600px',
                height: '600px',
                backgroundColor: '#ccc',
              }}
            />
          </div>
          <div className="profile-info" style={{ maxWidth: '50%' }}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
