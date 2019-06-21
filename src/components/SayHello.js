import React from 'react'
import SimpleBanner from '../components/presentation-components/simple-banner/SimpleBanner'
import ScrollAnimation from 'react-animate-on-scroll'
class SayHello extends React.Component {
  render() {
    return (
      <SimpleBanner scrollTarget="about_me" title="" text="">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={400}>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <h1>My name is Mark, nice to meet you!</h1>
            Lets chat about how I can fill the role you are looking for.
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
