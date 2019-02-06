import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import BlogEntry from '../components/blog-entry'

const Blog = () => (
  <Layout>
    <h1>Blog</h1>
    <BlogEntry
      title="My First Post"
      content="My blog is now officially live! I hope to add more features to it eventually. I plan to use it to chronicle my progress in my website as well as in my personal journey to learning web development. I'm slowly adding content to all of my pages to get something substantial on each page. There's so many things to do and so many directions to go in, it's hard to know what to tackle first."
      date="February 5, 2019"
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default Blog
