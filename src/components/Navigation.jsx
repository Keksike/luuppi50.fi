import React from 'react'
import { Link } from 'gatsby'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import pages from '../pages'
import { media } from '../theme'
import luuppiLogo from '../static/images/header3.png'

const NavigationWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.desktop`
    margin: 1rem;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${props => props.theme.secondaryGreyLightest};

    > a {
      display: none;
    }
  `};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Crimson Text', serif;
  font-size: 18px;
  margin-right: 1rem;
  padding: 0.5rem;
  color: #1a1a1a;
  white-space: nowrap;
  border-bottom: 1px solid transparent;

  &:hover {
    text-decoration: none;
    border-bottom: 1px solid ${props => props.theme.secondaryGreyLighter};
  }

  &:last-child {
    margin: 0;
  }
`

const Logo = styled.img`
  display: none;
  width: 155px;
  opacity: 0.70;

  ${media.desktop`
    display: inline-block;
  `};
`

const renderNavigationLink = (page, activeStyle) => (
  <StyledLink key={page.text} exact to={page.link} activeStyle={activeStyle}>
    {page.text}
  </StyledLink>
)

const Navigation = ({ theme }) => (
  <NavigationWrapper>
    <Logo src={luuppiLogo} />
    {pages.map(page =>
      renderNavigationLink(page, {
        borderBottom: `1px solid ${theme.textBlack}`,
      })
    )}
  </NavigationWrapper>
)

Navigation.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default withTheme(Navigation)
