import React from 'react'
import mark from '../images/Mark-4.jpg'
import Skills from '../components/Skills'
import ScrollAnimation from 'react-animate-on-scroll'
const About = () => {
  return (
    <div className="main-col-width section-container">
      <div className="about-profile-layout">
        <div className="about-profile-img-container">
          <img src={mark} />
          <a
            className="button"
            href=" https://docs.google.com/document/d/1BgilYzMs2l_exfV8wzZbcN9_SFWfrIj28FQzTm2qmuA/edit?usp=sharing"
            alt="link to my current cv"
            title="link to my current cv"
            target="_blank"
          >
            checkout my cv here
          </a>
        </div>
        <div className="about-profile-text">
          <h1>My name is Mark, nice to meet you!</h1>
          <p>I am a web developer living in the Eastern Suburbs of Sydney.</p>
          <p>
            I am obsessed with coding and building things for the web. I love to
            follow along with the progressions of my fave javascript frameworks,
            javascript evolutions, and web development. Along with coffee, I
            enjoy reading other people's thoughts on coding, navigating the
            industry, and the future in tech. Lets chat about how I can help you
            in your next or current project.
          </p>

          <div className="skills-container">
            <ScrollAnimation
              className="skills_list"
              animateIn="fadeIn"
              animateOnce={true}
              delay={300}
            >
              <Skills />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
