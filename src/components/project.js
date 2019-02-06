import React from 'react'
import logo from '../images/gatsby-icon.png'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ProjectWrapper = styled.div`
  display: flex;
`

const Title = styled.h2``

const Description = styled.p``

const Preview = styled.img`
  height: 100px;
  width: 100px;
  padding: 15px;
`

const Information = styled.div``

const Project = ({ title }) => (
  <ProjectWrapper>
    <Preview src={logo} alt="placeholder image" />
    <Information>
      <Link to='./game-suite'>
      <Title>{title}</Title>
      </Link>
      <Description>This is my {title} project.</Description>
    </Information>
  </ProjectWrapper>
)

export default Project
