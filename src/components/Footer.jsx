import React from 'react'
import styled from 'styled-components'

import { media } from '../theme'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  z-index: 2;
  border-top: 1px solid ${props => props.theme.secondaryGreyLightest};

  ${media.desktop`
    margin: 0 1rem;
  `};
`

const SponsorsWrapper = styled.div`
  text-align: center;
  display: inline-block;
`

const SponsorsText = styled.div`
  font-size: 12px;
  color: ${props => props.theme.secondaryGreyLight};
`

const ContactsWrapper = styled.div`
  text-align: right;
  color: ${props => props.theme.secondaryGreyLight};
`

const Footer = () => (
  <FooterWrapper>
    <SponsorsWrapper>
      <SponsorsText>Yhteistyössä</SponsorsText>
    </SponsorsWrapper>
    <ContactsWrapper>
      <div>
        <a href="https://www.luuppi.fi/">luuppi.fi</a>
      </div>
      © Luuppi ry 2018
    </ContactsWrapper>
  </FooterWrapper>
)

export default Footer
