import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { themeColors } from '../layouts/themeStyles';

const pages = [
  {
    text: 'Etusivu',
    link: '',
  },
  {
    text: 'Vuosijuhlaviikko',
    link: '/vuosijuhlaviikko',
  },
  {
    text: 'Seminaari',
    link: '/seminaari',
  },
  {
    text: 'Pääjuhla & sillis',
    link: '/paajuhla',
  },
  {
    text: 'Etiketti',
    link: '/etiketti',
  },
  {
    text: 'Kumppanit & edut',
    link: '/kumppanit',
  },
  {
    text: 'Ilmoittautuminen',
    link: '/ilmoittautuminen',
  },
]

const NavigationWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Crimson Text', serif;
  font-size: 18px;
  margin-right: 1rem;
  padding: 0.5rem;
  color: #1A1A1A;
  white-space: nowrap;


  &:hover {
    text-decoration: none;
    border-bottom: 1px solid ${themeColors.secondaryGreyLighter};
  }

  &:last-child {
    margin: 0;
  }
`

const renderNavigationLink = (page, idx) => (
  <StyledLink
    key={idx}
    exact
    to={page.link}
    activeStyle={{ borderBottom: `1px solid ${themeColors.textBlack}` }}
  >
    {page.text}
  </StyledLink>
)

const Navigation = ({ siteTitle }) => (
  <NavigationWrapper>
    {pages.map((page, idx) => renderNavigationLink(page, idx))}
  </NavigationWrapper>
)
export default Navigation
