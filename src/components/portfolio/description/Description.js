import React from 'react'
import SimpleBanner from '../../presentation-components/simple-banner/SimpleBanner'
import ScrollAnimation from 'react-animate-on-scroll'
const PortfolioDescription = props => {
  return (
    <SimpleBanner scrollTarget={props.scrollTarget} title="Portfolio" text="">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={400}>
        <p>
          Below you can see some projects I've been working on lately.
          <br />
          As I am starting out all of these projects are either
          <br />
          non paid or fictitious projects.
        </p>
      </ScrollAnimation>
    </SimpleBanner>
  )
}
export default PortfolioDescription
