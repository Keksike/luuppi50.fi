import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../static/images/eventtikuva3.png'

const LogoContainer = styled.div`
  flex: 1;
  justify-self: center;
  align-self: center;
  padding: 0 20px;
`;

const Logo = styled.img`
  width: 100%;
`;

const IndexPage = () => (
  <LogoContainer>
    <Logo src={logo} alt="logo"/>
  </LogoContainer>
)

export default IndexPage
