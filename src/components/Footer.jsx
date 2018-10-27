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
  text-align: left;
  color: ${props => props.theme.contrastText};
`

const ContactsWrapper = styled.div`
  text-align: right;
  color: ${props => props.theme.contrastText};
  width: 80em;
`

const Link3 = styled.a`
  text-decoration: none;
  color: ${props => props.theme.contrastHighlight};
  &:hover: text-decoration: underline;
`

const SponsorImage = styled.img`
  width: 10%;
  height: auto;
  margin-right: 1em;
`

const SponsorImages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5em;
`

const Footer = () => (
  <FooterWrapper>
    <SponsorsWrapper>
      <SponsorsText>Yhteistyössä</SponsorsText>
      <SponsorImages>
        <SponsorImage src={require('../static/images/gofore.png')} />
        <SponsorImage src={require('../static/images/futurice.png')} />
        <SponsorImage src={require('../static/images/eatech.png')} />
        <SponsorImage src={require('../static/images/reaktor.png')} />
      </SponsorImages>
    </SponsorsWrapper>
    <ContactsWrapper>
      <div>
        <Link3 href="https://www.luuppi.fi/">luuppi.fi</Link3>
      </div>
      © Luuppi ry 2018
    </ContactsWrapper>
  </FooterWrapper>
)

export default Footer
