import React, { Fragment } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'
const Skills = () => {
  return (
    <Fragment>
      <h1>Skills</h1>
      <h3>Langauges</h3>
      <ul>
        <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
          <li>Html</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
          <li>Css</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
          <li>Javascript</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400} animateOnce={true}>
          <li>Typescript</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400} animateOnce={true}>
          <li>JSON</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400} animateOnce={true}>
          <li>Php</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400} animateOnce={true}>
          <li>Xml / Svg</li>
        </ScrollAnimation>
      </ul>
      <br />
      <h3>Frameworks</h3>
      <ul>
        <ScrollAnimation animateIn="fadeInUp" delay={900} animateOnce={true}>
          <li>React</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true}>
          <li>Angular</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1000} animateOnce={true}>
          <li>Gatsby</li>
        </ScrollAnimation>
      </ul>
      <br />
      <h3>Backend</h3>
      <ul>
        <ScrollAnimation animateIn="fadeInRight" delay={500} animateOnce={true}>
          <li>Node.js</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={750} animateOnce={true}>
          <li>Express</li>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          delay={1000}
          animateOnce={true}
        >
          <li>Nosql / MongoDb</li>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          delay={1250}
          animateOnce={true}
        >
          <li>Mysql</li>
        </ScrollAnimation>
      </ul>
      <br />
      <h3>CMS / E-commerce </h3>
      <ul>
        <ScrollAnimation animateIn="fadeInUp" delay={600} animateOnce={true}>
          <li>Wordpress</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={700} animateOnce={true}>
          <li>Shopify</li>
        </ScrollAnimation>
      </ul>
      <br />
      <h3>Soft Skills</h3>
      <ul>
        <ScrollAnimation animateIn="fadeInUp" delay={1100} animateOnce={true}>
          <li>Leadership</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1200} animateOnce={true}>
          <li>Communication</li>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1300} animateOnce={true}>
          <li>Teambuilding</li>
        </ScrollAnimation>
      </ul>
    </Fragment>
  )
}
export default Skills
