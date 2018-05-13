import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

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
    text: 'Pääjuhla',
    link: '/paajuhla',
  },
  {
    text: 'Sillis',
    link: '/sillis',
  },
  {
    text: 'Kumppanit',
    link: '/kumppanit',
  },
  {
    text: 'Yhteystiedot',
    link: '/yhteystiedot',
  },
]

const NavigationWrapper = styled.div`
  height: 100px;
`

const StyledLink = styled(Link)`
  background-color: white;
`

const renderNavigationLink = page => (
  <StyledLink exact to={page.link} activeStyle={{ backgroundColor: 'grey' }}>
    {page.text}
  </StyledLink>
)

const Navigation = ({ siteTitle }) => (
  <NavigationWrapper>
    {pages.map(page => renderNavigationLink(page))}
  </NavigationWrapper>
)
export default Navigation
