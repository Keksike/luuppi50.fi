import React from 'react'
import styled from 'styled-components'

import { media } from '../theme'

import goforeLogo from '../static/images/gofore.png'
import futuriceLogo from '../static/images/futurice.png'
import eatechLogo from '../static/images/eatech.png'
import cybercomLogo from '../static/images/cybercom.png'
import symbioLogo from '../static/images/symbio.png'
import reaktorLogo from '../static/images/reaktor.png'
import wapiceLogo from '../static/images/wapice.png'
import digiaLogo from '../static/images/digia.png'
import tekLogo from '../static/images/tek2.png'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
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

const SponsorLink = styled.a`
  display: inline-block;
`

const SponsorImage = styled.img`
  height: 20px;
  opacity: 0.48;
  margin-right: 1.4rem;
`

const SponsorImages = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: baseline;
  margin-top: 0.5em;

  ${media.mobile`
    flex-direction: column;
  `};
`

const Footer = () => (
  <FooterWrapper>
    <SponsorsWrapper>
      <SponsorsText>Yhteistyössä</SponsorsText>
      <SponsorImages>
        <SponsorLink href="https://gofore.com/">
          <SponsorImage src={goforeLogo} />
        </SponsorLink>
        <SponsorLink href="https://www.futurice.com/">
          <SponsorImage src={futuriceLogo} />
        </SponsorLink>
        <SponsorLink href="https://www.etteplanmore.com/">
          <SponsorImage src={eatechLogo} />
        </SponsorLink>
        <SponsorLink href="https://www.cybercom.fi/">
          <SponsorImage src={cybercomLogo} />
        </SponsorLink>
        <SponsorLink href="https://www.symbio.com/">
          <SponsorImage src={symbioLogo} />
        </SponsorLink>
        <SponsorLink href="https://www.reaktor.com/">
          <SponsorImage src={reaktorLogo} />
        </SponsorLink>
        <SponsorLink href="https://www.wapice.com/">
          <SponsorImage src={wapiceLogo} />
        </SponsorLink>
        <SponsorLink href="https://www.digia.com/">
          <SponsorImage src={digiaLogo} />
        </SponsorLink>
        <SponsorLink href="https://www.tek.fi/">
          <SponsorImage src={tekLogo} />
        </SponsorLink>
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
