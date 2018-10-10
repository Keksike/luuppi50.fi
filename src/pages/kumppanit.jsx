import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Content from '../components/Content'

const AlignCenter = styled.div`
  text-align: center;
`

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
  margin: 0 auto;
  margin-bottom: 1rem;

  img {
    width: 30rem !important;
    object-fit: contain !important;
  }
`

const MultipleSponsors = styled.div`
  display: flex;
  justify-content: space-evenly;
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

        eatech: file(relativePath: { eq: "eatech.png" }) {
          ...companyImage
        }

        futurice: file(relativePath: { eq: "futurice.png" }) {
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

        <AlignCenter>
          <a href="http://gofore.com">
            <MainSponsor sizes={data.gofore.childImageSharp.sizes} />
          </a>
        </AlignCenter>

        <MultipleSponsors>
          <a href="http://futurice.com">
            <Sponsor sizes={data.futurice.childImageSharp.sizes} />
          </a>
          <a href="http://eatech.com">
            <Sponsor sizes={data.eatech.childImageSharp.sizes} />
          </a>
        </MultipleSponsors>

        <AlignCenter>
          <a href="http://eatech.com">
            <Sponsor sizes={data.reaktor.childImageSharp.sizes} />
          </a>
        </AlignCenter>

        <h4>Edut</h4>
        <p>Tietoa eduista tulossa myöhemmin.</p>
      </Content>
    )}
  />
)

export default partnersPage
