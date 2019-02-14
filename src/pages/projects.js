import React from 'react'

import Layout from '../components/layout'
import Project from '../components/project'

const Projects = () => (
  <Layout>
    <h1>Projects</h1>    
    <Project title="JavaClock" logo={require('../images/javaclock.png')} href='https://edwardheath.github.io/JavaClock/' desc="Inspired by Wes Bos' JavaScript30 course, I created an analog clock with a few new bells and whistles including a dynamically changing background, a digital clock with date (toggled by clicking on the clock itself), and a few tweaks to make the clock more like a real clock."/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default Projects
