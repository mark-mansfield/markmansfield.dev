import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import { MdClose } from 'react-icons/md'
import Modal from 'react-modal'
import 'animate.css/animate.min.css'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import Scroll from '../components/Scroll'
import Header from '../components/Header'
import SayHello from '../components/SayHello'
import About from '../components/About'
import Ethos from '../components/Ethos'
import Skills from '../components/Skills'
import PortfolioDescription from '../components/portfolio/description/Description'
import Projects from '../components/portfolio/projects/Projects'
import ContactForm from '../components/ContactForm'
import SubNav from '../components/sub__nav'
import Waypoint from 'react-waypoint'
import Hamburger from '../components/hamburgerButton'

import ScrollAnimation from 'react-animate-on-scroll'
Modal.setAppElement('#___gatsby')
const drawStyles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      stickySubNav: false,
      enableWaypoint: false,
      showHamburger: false,
      left: false,
    }
    this._handleShowModal = this._handleShowModal.bind(this)
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({ enableWaypoint: true })
    }
  }

  _handleSubNavWaypointEnter = () => {
    this.setState(() => ({ stickySubNav: true, showHamburger: true }))
  }

  _handleSubNavWaypointLeave = () => {
    this.setState(() => ({ stickySubNav: false, showHamburger: false }))
  }

  _handleBurgerNavWaypointEnter = () => {
    this.setState(() => ({ showHamburger: true }))
    console.log('entering waypoint')
  }

  _handleBurgerNavWaypointLeave = () => {
    this.setState(() => ({ showHamburger: false }))
    console.log('leaving waypoint')
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

  toggleDrawer = (side, open) => () => {
    console.log('opening drawer')
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes } = this.props
    const sideList = (
      <div className={classes.list}>
        <List>
          <Scroll type="class" element="skills">
            <ListItem button key="skills" style={{ textAlign: 'center' }}>
              <ListItemText primary="Skills" />
            </ListItem>
          </Scroll>
          <Scroll type="class" element="portfolio">
            <ListItem button key="portfolio" style={{ textAlign: 'center' }}>
              <ListItemText primary="portfolio" />
            </ListItem>
          </Scroll>

          <ListItem button key="contact" style={{ textAlign: 'center' }}>
            <ListItemText primary="Contact" onClick={this._handleShowModal} />
          </ListItem>

          <Scroll type="class" element="about_me">
            <ListItem button key="about" style={{ textAlign: 'center' }}>
              <ListItemText primary="About Mark" />
            </ListItem>
          </Scroll>
        </List>
        <Divider />
        <List>
          <ListItem style={{ flexFlow: 'column' }}>
            <div className="phone_number">PH: (+61) 0400 218 337</div>
            <br />
            {/* eslint-disable jsx-a11y/anchor-has-content */}
            <a
              href="tel:+0400218337"
              id="callnowbutton"
              title="call now"
              aria-label="call me button"
            />
          </ListItem>
        </List>
      </div>
    )
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
        <Waypoint
          scrollableAncestor={null}
          onEnter={this._handleSubNavWaypointLeave}
          onLeave={this._handleSubNavWaypointEnter}
        />
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
          <Drawer
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </Drawer>

          <Hamburger
            sticky={this.state.showHamburger}
            sideDrawerState={this.toggleDrawer}
          />

          <SubNav sticky={this.state.stickySubNav} />

          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
            <Skills />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={800}>
            <Ethos />
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
            duration={0.5}
            delay={500}
          >
            <SayHello modalState={this._handleShowModal} />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
            <About />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
            <PortfolioDescription scrollTarget="portfolio" />
          </ScrollAnimation>

          <Projects />
        </div>
      </Layout>
    )
  }
}
IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(drawStyles)(IndexPage)
