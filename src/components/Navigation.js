import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import pages from '../pages'
import luuppiLogo from '../static/images/luuppi-logo.png'

const NavigationWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1050px) {
    margin: 1rem;
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${props => props.theme.secondaryGreyLightest};

    > * {
      display: none;
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Crimson Text', serif;
  font-size: 18px;
  margin-right: 1rem;
  padding: 0.5rem;
  color: #1A1A1A;
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
  width: 100px;
  opacity: 0.58;

  @media (max-width: 1050px) {
    display: inline-block;
  }
`;

const renderNavigationLink = (page, idx) => (
  <StyledLink
    key={idx}
    exact
    to={page.link}
    activeStyle={{ borderBottom: `1px solid ${props => props.theme.textBlack}` }}
  >
    {page.text}
  </StyledLink>
)

const Navigation = ({ siteTitle }) => (
  <NavigationWrapper>
    <Logo src={luuppiLogo} />
    {pages.map((page, idx) => renderNavigationLink(page, idx))}
  </NavigationWrapper>
)
export default Navigation
