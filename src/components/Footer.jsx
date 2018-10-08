import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  z-index: 2;
  background: ${props => props.theme.contrastBackground};
`

const SponsorsWrapper = styled.div`
  text-align: center;
  display: inline-block;
`

const SponsorsText = styled.div`
  font-size: 12px;
  color: ${props => props.theme.contrastText};
`

const ContactsWrapper = styled.div`
  text-align: right;
  color: ${props => props.theme.contrastText};
`

const Link3 = styled.a`
  text-decoration: none;
  color: ${props => props.theme.contrastHighlight};
  &:hover: text-decoration: underline;
`

const Footer = () => (
  <FooterWrapper>
    <SponsorsWrapper>
      <SponsorsText>Yhteistyössä</SponsorsText>
    </SponsorsWrapper>
    <ContactsWrapper>
      <div>
        <Link3 href="https://www.luuppi.fi/" >luuppi.fi</Link3>
      </div>
      © Luuppi ry 2018
    </ContactsWrapper>
  </FooterWrapper>
)

export default Footer
