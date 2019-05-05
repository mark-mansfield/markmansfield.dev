import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import axios from 'axios'
import { MdClose } from 'react-icons/md'
import Modal from 'react-modal'

import Header from '../components/Header'
// import Main from '../components/Main'
import SayHello from '../components/SayHello'
import About from '../components/About'
import Ethos from '../components/Ethos'
import Skills from '../components/Skills'
import PortfolioDescription from '../components/portfolio/description/Description'
import Projects from '../components/portfolio/projects/Projects'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

Modal.setAppElement('#___gatsby')

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      modalIsOpen: false,
    }
    // this.handleOpenArticle = this.handleOpenArticle.bind(this)
    // this.handleCloseArticle = this.handleCloseArticle.bind(this)
    // this.setWrapperRef = this.setWrapperRef.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
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

  // setWrapperRef(node) {
  //   this.wrapperRef = node
  // }

  // handleOpenArticle(article) {
  //   this.setState({
  //     isArticleVisible: !this.state.isArticleVisible,
  //     article,
  //   })

  //   setTimeout(() => {
  //     this.setState({
  //       timeout: !this.state.timeout,
  //     })
  //   }, 325)

  //   setTimeout(() => {
  //     this.setState({
  //       articleTimeout: !this.state.articleTimeout,
  //     })
  //   }, 350)
  // }

  // handleCloseArticle() {
  //   this.setState({
  //     articleTimeout: !this.state.articleTimeout,
  //   })

  //   setTimeout(() => {
  //     this.setState({
  //       timeout: !this.state.timeout,
  //     })
  //   }, 325)

  //   setTimeout(() => {
  //     this.setState({
  //       isArticleVisible: !this.state.isArticleVisible,
  //       article: '',
  //     })
  //   }, 350)
  // }

  // handleClickOutside(event) {
  //   if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
  //     if (this.state.isArticleVisible) {
  //       this.handleCloseArticle()
  //     }
  //   }
  // }

  static childContextTypes = {
    reactIconBase: PropTypes.object,
  }

  getChildContext() {
    return {
      reactIconBase: {
        fill: 'tomato',
        size: 24,
        style: {},
      },
    }
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
        <div
          className={`body ${this.state.loading} ${
            this.state.isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <div className="contact-layout">
              <a
                href="https://www.facebook.com/mmansfield"
                alt="marks facebook page"
                title="contact me via this platform"
              >
                <i className="fab fa-facebook fa-2x icon-color" />
              </a>

              <i className="fab fa-linkedin-in fa-2x icon-color" />
              <i className="fab fa-github fa-2x icon-color" />
            </div>
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
                  className="modal__toolbar"
                  ref={toolbar => (this.toolbar = toolbar)}
                >
                  <div
                    ref={close => (this.close = close)}
                    onClick={this.closeModal}
                  >
                    <MdClose
                      className="modal__close"
                      style={{ color: 'black' }}
                    />
                  </div>
                </div>

                <ContactForm />
              </Modal>

              <Header
                onOpenArticle={this.handleOpenArticle}
                timeout={this.state.timeout}
              />
            </div>

            {/* <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            /> */}
            {/* <SayHello />
            <About />
            <Skills />
            <Ethos />
            <PortfolioDescription scrollTarget="portfolio" />
            <Projects />

            <Footer timeout={this.state.timeout} /> */}
          </div>
          {/* <div id="bg" /> */}
        </div>
      </Layout>
    )
  }
}

export default IndexPage
