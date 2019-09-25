import React from 'react'
import mark from '../images/Mark-4.jpg'
import Skills from '../components/Skills'
import ScrollAnimation from 'react-animate-on-scroll'
const About = () => {
  return (
    <section id="section">
      <div className="flex-row container-partial-width section-container">
        <h1>About</h1>
        <br />
        <br />
        <div>
          <ul className="ethos-list">
            <li>
              <i className="fas fa-tachometer-alt fa-3x" />
              <h2>Fast</h2>
              <span>
                Fast load times and lag free interaction, my highest priority.
              </span>
            </li>
            <li>
              <i className="fas fa-mobile fa-3x" />
              <h2>Responsive</h2>
              My layouts will work on any device, big or small.
            </li>
            <li>
              <i className="fas fa-lightbulb fa-3x" />
              <h2>Intuitive</h2>
              Strong preference for easy to use, intuitive UX/UI.
            </li>
            <li>
              <i className="fas fa-rocket fa-3x" />
              <h2>Dynamic</h2>
              Websites don't have to be static, I love making pages come to
              life.
            </li>
          </ul>
        </div>
        <div className="about-profile-layout">
          <div className="about-profile-img">
            <div>
              <img style={{ width: '100%' }} src={mark} />
            </div>
            <div>
              I'm a Front-End Developer located in Bondi Beach Sydney Australia.
              I have serious passion for creating intuitive, dynamic user
              experiences. Let's make something special.
              <br />
              <br />
              <a
                className="button"
                href="https://drive.google.com/file/d/1yqEJgbRlkhsKLB7oIBT8VMuqvCNDFK7S/view"
                alt="link my current cv"
                title="link to my current cv"
                target="_blank"
              >
                checkout my cv here
              </a>
            </div>
          </div>

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
    </section>
  )
}
export default About
