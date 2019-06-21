import React from 'react'
import SimpleBanner from './presentation-components/simple-banner/SimpleBanner'
import ScrollAnimation from 'react-animate-on-scroll'
const Skills = () => {
  return (
    <SimpleBanner scrollTarget="skills" title="Skills">
      <ul id="skills_list">
        <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
          <li>html</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
          <li>css</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
          <li>javascript</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400} animateOnce={true}>
          <li>typescript</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true}>
          <li>angular</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={600} animateOnce={true}>
          <li>node</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={700} animateOnce={true}>
          <li>express</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={800} animateOnce={true}>
          <li>php</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={900} animateOnce={true}>
          <li>react</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1000} animateOnce={true}>
          <li>gatsby</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1100} animateOnce={true}>
          <li>github</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1200} animateOnce={true}>
          <li>mongodb</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1300} animateOnce={true}>
          <li>wordpress</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1400} animateOnce={true}>
          <li>mailchimp</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1500} animateOnce={true}>
          <li>photoshop</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1600} animateOnce={true}>
          {' '}
          <li>excel</li>
        </ScrollAnimation>
      </ul>
    </SimpleBanner>
  )
}
export default Skills
