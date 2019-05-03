import React from 'react'
import project1 from '../../../images/portfoli-dummy-image-1.jpg'
import project2 from '../../../images/portfoli-dummy-image-2.jpg'
import project3 from '../../../images/portfoli-dummy-image-3.jpg'
import project4 from '../../../images/portfoli-dummy-image-4.jpg'
const projects = () => {
  return (
    <section id="section" className="container-full-width work ">
      <div className="projects">
        <div className="project">
          <div className="description">
            <h1>Project 1</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nesciunt molestiae deleniti iste! Nemo ducimus a dicta, deleniti
              est adipisci ab ipsa. Eaque suscipit enim, sit repellat velit
              assumenda molestiae, ratione officia voluptate natus ut asperiores
              dicta ducimus sapiente mollitia accusantium adipisci? Fuga minima
              possimus omnis beatae soluta, quos labore!
            </p>
            <div className="toolbar">
              <button>View project</button>
              <button>GIT HUB</button>
            </div>
          </div>
          <img style={{ width: '40%' }} src={project1} alt="project1" />
        </div>
        <div className="project">
          <div className="description">
            <h1>Project 2</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nesciunt molestiae deleniti iste! Nemo ducimus a dicta, deleniti
              est adipisci ab ipsa. Eaque suscipit enim, sit repellat velit
              assumenda molestiae, ratione officia voluptate natus ut asperiores
              dicta ducimus sapiente mollitia accusantium adipisci? Fuga minima
              possimus omnis beatae soluta, quos labore!
            </p>
            <div className="toolbar">
              <button>View project</button>
              <button>GIT HUB</button>
            </div>
          </div>
          <img style={{ width: '40%' }} src={project2} alt="project1" />
        </div>
        <div className="project">
          <div className="description">
            <h1>Project 3</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nesciunt molestiae deleniti iste! Nemo ducimus a dicta, deleniti
              est adipisci ab ipsa. Eaque suscipit enim, sit repellat velit
              assumenda molestiae, ratione officia voluptate natus ut asperiores
              dicta ducimus sapiente mollitia accusantium adipisci? Fuga minima
              possimus omnis beatae soluta, quos labore!
            </p>
            <div className="toolbar">
              <button>View project</button>
              <button>GIT HUB</button>
            </div>
          </div>
          <img style={{ width: '40%' }} src={project3} alt="project1" />
        </div>
        <div className="project">
          <div className="description">
            <h1>Project 4</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nesciunt molestiae deleniti iste! Nemo ducimus a dicta, deleniti
              est adipisci ab ipsa. Eaque suscipit enim, sit repellat velit
              assumenda molestiae, ratione officia voluptate natus ut asperiores
              dicta ducimus sapiente mollitia accusantium adipisci? Fuga minima
              possimus omnis beatae soluta, quos labore!
            </p>
            <div className="toolbar">
              <button>View project</button>
              <button>GIT HUB</button>
            </div>
          </div>
          <img style={{ width: '40%' }} src={project4} alt="project1" />
        </div>
      </div>
    </section>
  )
}
export default projects
