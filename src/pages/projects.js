import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Project from '../components/project'

const Projects = () => (
  <Layout>
    <h1>Projects</h1>
    <p>My projects will go here.</p>
    <p>All I have to do is add them.</p>
    <Project title='calculator' />
    <Project title='tic-tac-toe'/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default Projects
