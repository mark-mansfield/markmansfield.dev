import React from 'react'

const Ethos = () => {
  return (
    <section id="section" className="">
      <div className="container-full-width ethos">
        <ul className="ethos-list">
          <li>
            <i className="fas fa-code fa-3x" />
            <p>I passionate about writing clean self documenting code</p>
          </li>
          <li>
            <i className="fas fa-universal-access fa-3x" />
            <p>I strive to make all of my work as accessible as possible</p>
          </li>
          <li>
            <i className="fas fa-wrench fa-3x" />
            <p>
              I love my tool belt and am always looking to update my toolchain
            </p>
          </li>
          <li>
            <i className="fas fa-ruler-combined fa-3x" />
            <p>Cross browser pixel perfect layouts are no problem.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Ethos
