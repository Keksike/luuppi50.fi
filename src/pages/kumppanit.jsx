import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import gloLogo from '../static/images/glohair.png'

import Content from '../components/Content'
import { media } from '../theme'

// !important is needed to overwrite gatsby-image styles
const Sponsor = styled(Image)`
  width: 15rem !important;
  height: 4rem !important;
  margin: 0 auto;

  img {
    width: 15rem !important;
    object-fit: contain;
    height: auto !important;
  }
`

const MainSponsor = styled(Image)`
  width: 30rem !important;
  max-width: 100% !important;
  margin: 2rem auto;

  img {
    width: 30rem !important;
    max-width: 100%;
    object-fit: contain !important;
  }
`

const MultipleSponsors = styled.div`
  display: flex;
  justify-content: space-evenly;

  a {
    margin: 1rem 1rem;
  }

  ${media.smallMobile`
    flex-wrap: wrap;
  `};
`

const OfferContainer = styled.div`
  display: flex;
  align-items: center;
`

const MoreSponsor = styled(Sponsor)`
  padding-bottom: 2rem;
`

const CybercomSponsor = styled(Sponsor)`
  padding-bottom: 0.6rem;
`

const DigiaSponsor = styled(Image)`
  height: 5rem;
  width: 5rem;
  margin: 0 auto;
  margin-left: 4rem;
  margin-right: 4rem;
`

const GlohairLogo = styled.img`
  height: 3rem;
  width: auto;
  margin-right: 1.5rem;
`

const partnersPage = () => (
  <StaticQuery
    query={graphql`
      fragment companyImage on File {
        childImageSharp {
          sizes(maxWidth: 600) {
            ...GatsbyImageSharpSizes
          }
        }
      }

      query {
        gofore: file(relativePath: { eq: "gofore.png" }) {
          ...companyImage
        }

        reaktor: file(relativePath: { eq: "reaktor.png" }) {
          ...companyImage
        }

        more: file(relativePath: { eq: "eatech.png" }) {
          ...companyImage
        }

        futurice: file(relativePath: { eq: "futurice.png" }) {
          ...companyImage
        }

        symbio: file(relativePath: { eq: "symbio.png" }) {
          ...companyImage
        }

        cybercom: file(relativePath: { eq: "cybercom.png" }) {
          ...companyImage
        }

        wapice: file(relativePath: { eq: "wapice.png" }) {
          ...companyImage
        }

        digia: file(relativePath: { eq: "digia.png" }) {
          ...companyImage
        }

        tek: file(relativePath: { eq: "tek.png" }) {
          ...companyImage
        }
      }
    `}
    render={data => (
      <Content>
        <Helmet>
          <title>Kumppanit ja edut</title>
        </Helmet>

        <h3>Kumppanit ja edut</h3>

        <p>Luupin 50-vuotis vuosijuhlia sponsoroivat:</p>

        <a href="http://gofore.com">
          <MainSponsor sizes={data.gofore.childImageSharp.sizes} />
        </a>

        <MultipleSponsors>
          <a href="http://futurice.com">
            <Sponsor sizes={data.futurice.childImageSharp.sizes} />
          </a>
          <a href="http://reaktor.com">
            <Sponsor sizes={data.reaktor.childImageSharp.sizes} />
          </a>
        </MultipleSponsors>

        <MultipleSponsors>
          <a href="http://cybercom.fi">
            <CybercomSponsor sizes={data.cybercom.childImageSharp.sizes} />
          </a>
          <a href="http://symbio.com">
            <Sponsor sizes={data.symbio.childImageSharp.sizes} />
          </a>
        </MultipleSponsors>

        <MultipleSponsors>
          <a href="http://tek.fi">
            <Sponsor sizes={data.tek.childImageSharp.sizes} />
          </a>
          <a href="http://wapice.com">
            <Sponsor sizes={data.wapice.childImageSharp.sizes} />
          </a>
        </MultipleSponsors>

        <MultipleSponsors>
          <a href="https://www.etteplanmore.com/">
            <MoreSponsor sizes={data.more.childImageSharp.sizes} />
          </a>
          <a href="http://digia.com">
            <DigiaSponsor sizes={data.digia.childImageSharp.sizes} />
          </a>
        </MultipleSponsors>

        <h4>Edut</h4>

        <OfferContainer>
          <GlohairLogo src={gloLogo} />
          <p>
            Glohair Satamakatu ja Glohair Tammela tarjoavat kampaukset hintaan
            30 min 30€ ja 60 min 60€, kun mainitset loop-50 varatessasi aikaa.
          </p>
        </OfferContainer>
      </Content>
    )}
  />
)

export default partnersPage
