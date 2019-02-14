import React from 'react'
import styled from 'styled-components'

const ProjectWrapper = styled.div`
  display: flex;
`

const Title = styled.h2``

const Description = styled.p``

const Preview = styled.img`
  height: 150px;
  width: 150px;
  padding: 15px;
`
const Information = styled.div`
  
`

const Link = styled.a`
  text-decoration: none;
  color: black;
`


const Project = ({ title, logo, href, desc }) => (
  <ProjectWrapper>
    <Preview src={logo} alt={`${title} screenshot`} />
    <Information>
      <Link href={href}>
        <Title>{title}</Title>
      </Link>
      <Description>{desc}</Description>
    </Information>
  </ProjectWrapper>
)

export default Project
