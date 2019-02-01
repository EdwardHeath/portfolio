import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Grid, Cell } from 'styled-css-grid'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `red`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Grid style={{ marginTop: '20px' }} columns={'1fr 1fr 1fr'}>
        <Cell center={true}>
          <Link style={{ color: `white`, textDecoration: `none` }} to="/">
            Home
          </Link>
        </Cell>
        <Cell center={true}>
          <Link
            style={{ color: `white`, textDecoration: `none` }}
            to="/projects"
          >
            Projects
          </Link>
        </Cell>
        <Cell center={true}>
          <Link style={{ color: `white`, textDecoration: `none` }} to="/about">
            About
          </Link>
        </Cell>
      </Grid>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
