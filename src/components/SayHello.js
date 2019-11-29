import React from 'react'
import SimpleBanner from './presentation-components/angled-banner/AngledBanner'
import ScrollAnimation from 'react-animate-on-scroll'

class SayHello extends React.Component {
  render() {
    return (
      <SimpleBanner scrollTarget="about_me" title="" text="">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={400}>
          <div
            className="code-image"
            style={{
              display: 'grid',
              placeItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* <img
              src={codeImage}
              alt="decorative image"
              style={{ width: '100%' }}
            /> */}
            <h1>My name is Mark, nice to meet you!</h1>
            Lets chat about how the role you are looking to fill.
            <br />
            <br />
            <a onClick={this.props.modalState.bind(this)}>Contact</a>
          </div>
        </ScrollAnimation>
      </SimpleBanner>
    )
  }
}
export default SayHello
