import React from 'react'
import SimpleBanner from '../../presentation-components/simple-banner/SimpleBanner'
const PortfolioDescription = props => {
  return (
    <SimpleBanner
      scrollTarget={props.scrollTarget}
      title="Portfolio"
      text="Below you can see some projects I've been working on lately. As I am
    starting out all of these projects are either non paid or fictitious
    projects."
    />
  )
}
export default PortfolioDescription
