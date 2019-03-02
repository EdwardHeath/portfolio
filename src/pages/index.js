import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Welcome</h1>
    <p>Welcome to my personal web development portfolio.</p>
    <p>
      Established in February 2019, this is a work in progress and{' '}
      <em>should</em> be updated fairly frequently. Check back regularly for
      fresh content. Most pages are full of placeholder content currently and
      are being updated with real content as I go.
    </p>
    <div>
      <h3>Latest Update 3/1/19:</h3>
      <p>
        I have refactored my blog to utilize the power of Gatsby! Now my site will
        autmatically query content and create slugs, allowing me to chronicle my 
        journey even easier. <Link to='./blog.js'>Enjoy!</Link>
      </p>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default IndexPage
