import React from 'react'

const Ethos = () => {
  return (
    <section id="section" className="">
      <div className="container-full-width">
        <div className="">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space around',
              height: '200px',
              backgroundColor: '#666',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '200px',
                margin: '20px',
              }}
            >
              <div>
                <i
                  className="fas fa-code fa-2x"
                  style={{ fontWeight: 'regular' }}
                />
              </div>

              <p>I passionate about writing clean self documenting code</p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '200px',
                margin: '20px',
              }}
            >
              <div />

              <i className="fas fa-universal-access fa-2x" />
              <p>I strive to make all of my work as accessible as possible</p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '200px',
                margin: '20px',
              }}
            >
              <div />
              <i className="fas fa-wrench fa-2x" />
              <p>
                I love my tool belt and am always looking to update my toolchain
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '200px',
                margin: '20px',
              }}
            >
              <div />
              <i className="fas fa-ruler-combined fa-2x" />
              <p>Cross browser pixel perfect layouts are no problem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Ethos
