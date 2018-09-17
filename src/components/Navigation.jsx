import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import pages from '../pages'
import { media } from '../theme'
import luuppiLogo from '../static/images/header3_white.png'

const NavigationWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.mobile`
    margin: 1rem;

    > a {
      display: none;
    }
  `};
`

const Separator = styled.div`
  height: 1px;
  background: #ebebeb;
  transform: scaleX(0) translateY(10px);
  transform-origin: 0;
  transition: all 80ms linear;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Crimson Text', serif;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0.5rem;
  color: ${props => props.theme.contrastText};
  white-space: nowrap;
  border-bottom: 1px solid transparent;

  &:hover {
    text-decoration: none;

    ${Separator} {
      transform: scaleX(1) translateY(10px);
    }
  }

  &:active,
  &.activeLink {
    ${Separator} {
      transform: scaleX(1) translateY(10px);
    }
  }

  &.activeLink {
    color: ${props => props.theme.contrastHighlight};
  }

  &:last-child {
    margin: 0;
  }
`

const Logo = styled.img`
  display: none;
  width: 155px;
  opacity: 0.95;

  ${media.mobile`
    display: inline-block;
  `};
`

const NavigationLink = ({ page }) => (
  <StyledLink key={page.text} exact to={page.link} activeClassName="activeLink">
    {page.text}
    <Separator />
  </StyledLink>
)

NavigationLink.propTypes = {
  page: PropTypes.oneOf(pages).isRequired,
}

const Navigation = () => (
  <NavigationWrapper>
    <Logo src={luuppiLogo} />
    {pages.map(page => <NavigationLink page={page} />)}
  </NavigationWrapper>
)

export default Navigation
