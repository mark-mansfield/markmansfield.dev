import React from 'react'
import project1 from '../../../images/food-cost-io.png'
import project2 from '../../../images/order-io.png'
import project3 from '../../../images/static-web-combo.png'
import project4 from '../../../images/portfoli-dummy-image-4.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
const projects = () => {
  return (
    <section id="section" className="container-full-width work ">
      <div className="projects">
        <br />
        <br />
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              margin: '20px 0',
              padding: '20px',
              backgroundColor: '#f8f8f8',
            }}
          >
            <h1>Portfolio</h1>
            Below you can see some projects I've been working on lately.
            <br />
            As I am starting out all of these projects are personal projects.
          </div>

          <div className="project">
            <div className="description">
              <div className="title">
                <h1>food-costs.io</h1>
                <small>personal project</small>
              </div>
              <div className="project-type">
                <small>angular / node.js / express / mongodb</small>
              </div>
              <br />
              <div className="project-text">
                <p>
                  The Problem: It takes a lot of time to gather data for costing
                  a menu. There is no office space usually perform this work in
                  a restaurant. Chefs need instant access to all their costings.
                  Paperless solutions are a necessity.
                </p>
                <p>
                  Solution: Web app delivering features for detailed data
                  gathering, food costing, menu management.
                </p>
              </div>
              <div className="toolbar">
                <a
                  className="button"
                  href="http://food.cost.io.s3-website-ap-southeast-2.amazonaws.com/login"
                  alt="link to project"
                  title="link to project"
                  target="_blank"
                >
                  View project
                </a>

                <a
                  className="button"
                  href="https://github.com/mark-mansfield/food-cost.io-v2/tree/develop"
                  alt="link to git hub"
                  title="link to git hub"
                  target="_blank"
                >
                  GIT HUB
                </a>
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
                <h1>orders.io</h1>
                <small>personal project</small>
              </div>
              <div className="project-type">
                <small>angular / node.js / express / mongodb</small>
              </div>
              <div className="project-text">
                <p>
                  The Problem: Back of house tools for catering management to
                  order production in small businesses are limited, time
                  consuming and error prone.
                </p>
                <p>
                  Solution: Web app delivering features for order creation, and
                  building production run-sheets in a paperless way.
                </p>
              </div>
              <div className="toolbar">
                <a
                  className="button"
                  href="http://orders-project.s3-website-ap-southeast-2.amazonaws.com/login"
                  alt="link to project"
                  title="link to project"
                  target="_blank"
                >
                  View Project
                </a>
                {/* https://github.com/mark-mansfield/orders-io */}
                <a
                  className="button"
                  href="https://github.com/mark-mansfield/orders-io/tree/develop"
                  alt="link to git hub"
                  title="link to git hub"
                  target="_blank"
                >
                  GIT HUB
                </a>
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
                <h1>static website</h1>
                <small>fictitious static website project</small>
              </div>
              <div className="project-type">
                <small>gatsby / react </small>
              </div>
              <div className="project-text">
                <p>An example of a static website built for a restaurant.</p>
              </div>
              <div className="toolbar">
                <a
                  className="button"
                  href="https://mark-mansfield.github.io/portfolio-static-website/"
                  alt="link to project"
                  title="link to project"
                  target="_blank"
                >
                  View Project
                </a>
                {/* https://github.com/mark-mansfield/portfolio-static-website */}
                <a
                  className="button"
                  href="https://github.com/mark-mansfield/portfolio-static-website/tree/develop"
                  alt="link to git hub"
                  title="link to git hub"
                  target="_blank"
                >
                  Git Hub
                </a>
              </div>
              <img src={project3} alt="project3" />
            </div>
            <img src={project3} alt="project3" />
          </div>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
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
        </ScrollAnimation> */}
      </div>
    </section>
  )
}
export default projects
