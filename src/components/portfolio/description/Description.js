import React from 'react'
import SimpleBanner from '../../presentation-components/simple-banner/SimpleBanner'
import ScrollAnimation from 'react-animate-on-scroll'
const PortfolioDescription = props => {
  return (
    <SimpleBanner scrollTarget={props.scrollTarget} title="Portfolio" text="">
      <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" delay={400}>
        Below you can see some projects I've been working on lately. As I am
        starting out all of these projects are either non paid or fictitious
        projects.
      </ScrollAnimation>
    </SimpleBanner>
  )
}
export default PortfolioDescription
