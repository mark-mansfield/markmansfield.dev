import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import axios from 'axios'
import { MdClose } from 'react-icons/md'
import Modal from 'react-modal'
import 'animate.css/animate.min.css'
import Header from '../components/Header'
import SayHello from '../components/SayHello'
import About from '../components/About'
import Ethos from '../components/Ethos'
import Skills from '../components/Skills'
import PortfolioDescription from '../components/portfolio/description/Description'
import Projects from '../components/portfolio/projects/Projects'
import ContactForm from '../components/ContactForm'

import Footer from '../components/Footer'

import ScrollAnimation from 'react-animate-on-scroll'
Modal.setAppElement('#___gatsby')

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
    }
    this._handleShowModal = this._handleShowModal.bind(this)
  }

  _handleShowModal = () => {
    console.log('Setting state of isOpen')
    this.setState({
      modalIsOpen: true,
    })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    // modal styling
    // transition styling found in ../styles/global.css
    const style = {
      content: {
        position: 'relative',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        border: '0',
        borderRadius: '4px',
        background: 'white',
        width: '100%',
        height: '100vh',
      },

      overlay: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 100000,
      },
    }

    return (
      <Layout location={this.props.location}>
        <div id="wrapper">
          <div id="hero" className="aboveFoldHeight">
            <Modal
              closeTimeoutMS={300}
              style={style}
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
            >
              <div
                ref={close => (this.close = close)}
                onClick={this.closeModal}
              >
                <MdClose className="modal__close" style={{ color: 'black' }} />
              </div>
              <section
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                }}
              >
                <div style={{ width: '50%' }}>
                  <div
                    className="modal__toolbar"
                    ref={toolbar => (this.toolbar = toolbar)}
                  />

                  <ContactForm
                    env={this.props.env}
                    closeModalRef={this.closeModal}
                  />
                </div>
              </section>
            </Modal>

            <Header modalState={this._handleShowModal} />
          </div>

          <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay={300}>
            <Skills />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce="true" delay={300}>
            <Ethos />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce="true" delay={400}>
            <SayHello />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce="true" delay={400}>
            <About />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce="true"
            delay={200}
          >
            <PortfolioDescription scrollTarget="portfolio" />
          </ScrollAnimation>

          <Projects />
        </div>
        {/* <div id="bg" /> */}
        {/* </div> */}
      </Layout>
    )
  }
}

export default IndexPage
