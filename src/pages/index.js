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
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
)

export default IndexPage
