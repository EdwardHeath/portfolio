import React from 'react'
import styled from 'styled-components'

const Entry = styled.div`
  border-top: 2px solid black;
  padding-top: 10px;
`

const BlogEntry = props => (
  <Entry>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <h6>{props.date}</h6>
  </Entry>
)

export default BlogEntry
