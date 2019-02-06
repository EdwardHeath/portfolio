import React from 'react'

const BlogEntry = props => (
  <div>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <h6>{props.date}</h6>
  </div>
)

export default BlogEntry
