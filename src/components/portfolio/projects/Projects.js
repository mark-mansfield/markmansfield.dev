import React from 'react'
import project1 from '../../../images/portfoli-dummy-image-1.jpg'
import project2 from '../../../images/portfoli-dummy-image-2.jpg'
import project3 from '../../../images/static-web-combo.png'
import project4 from '../../../images/portfoli-dummy-image-4.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
const projects = () => {
  return (
    <section id="section" className="container-full-width work ">
      <div className="projects">
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
          <div className="project">
            <div className="description">
              <div className="title">
                <h1>FoodCosts.io</h1>
                <small>personal project</small>
              </div>
              <div className="project-type">
                <small>angular / node.js / express / mongodb</small>
              </div>

              <div className="project-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nesciunt molestiae deleniti iste! Nemo ducimus a
                  dicta, deleniti est adipisci ab ipsa. Eaque suscipit enim, sit
                  repellat velit assumenda molestiae, ratione officia voluptate
                  natus ut asperiores dicta ducimus sapiente mollitia
                  accusantium adipisci? Fuga minima possimus omnis beatae
                  soluta, quos labore!
                </p>
              </div>
              <div className="toolbar">
                <button>View project</button>
                <button>GIT HUB</button>
              </div>
              <img src={project1} alt="project1" />
            </div>
            <img src={project1} alt="project1" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
          <div className="project">
            <div className="description">
              <div className="title">
                <h1>catering.io</h1>
                <small>personal project</small>
              </div>
              <div className="project-type">
                <small>gatsby / react / node / webpack</small>
              </div>
              <div className="project-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nesciunt molestiae deleniti iste! Nemo ducimus a
                  dicta, deleniti est adipisci ab ipsa. Eaque suscipit enim, sit
                  repellat velit assumenda molestiae, ratione officia voluptate
                  natus ut asperiores dicta ducimus sapiente mollitia
                  accusantium adipisci? Fuga minima possimus omnis beatae
                  soluta, quos labore!
                </p>
              </div>
              <div className="toolbar">
                <button>View project</button>
                <button>GIT HUB</button>
              </div>
              <img src={project2} alt="project2" />
            </div>
            <img src={project2} alt="project2" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
          <div className="project">
            <div className="description">
              <div className="title">
                <h1>Brown Sugar</h1>
                <small>fictitious static website project</small>
              </div>
              <div className="project-type">
                <small>gatsby / react / node / webpack</small>
              </div>
              <div className="project-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nesciunt molestiae deleniti iste! Nemo ducimus a
                  dicta, deleniti est adipisci ab ipsa. Eaque suscipit enim, sit
                  repellat velit assumenda molestiae, ratione officia voluptate
                  natus ut asperiores dicta ducimus sapiente mollitia
                  accusantium adipisci? Fuga minima possimus omnis beatae
                  soluta, quos labore!
                </p>
              </div>
              <div className="toolbar">
                <a href="https://mark-mansfield.github.io/portfolio-static-website/">
                  View project
                </a>
                <button>GIT HUB</button>
              </div>
              <img src={project3} alt="project3" />
            </div>
            <img src={project3} alt="project3" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
          <div className="project">
            <div className="description">
              <div className="title">
                <h1>SharkData</h1>
                <small>ficticious project</small>
              </div>
              <div className="project-type">
                <small>angular / node / express / mongoDb</small>
              </div>
              <div className="project-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias nesciunt molestiae deleniti iste! Nemo ducimus a
                  dicta, deleniti est adipisci ab ipsa. Eaque suscipit enim, sit
                  repellat velit assumenda molestiae, ratione officia voluptate
                  natus ut asperiores dicta ducimus sapiente mollitia
                  accusantium adipisci? Fuga minima possimus omnis beatae
                  soluta, quos labore!
                </p>
              </div>
              <div className="toolbar">
                <button>View project</button>
                <button>GIT HUB</button>
              </div>
              <img src={project3} alt="project3" />
            </div>
            <img src={project3} alt="project3" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
export default projects
