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

  img {
    width: 15rem !important;
    object-fit: contain;
    height: auto !important;
  }
`

const MainSponsor = styled(Image)`
  width: 30rem !important;
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
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
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
            <MainSponsor fixed={data.gofore.childImageSharp.fixed} />
          </a>
        </AlignCenter>

        <MultipleSponsors>
          <a href="http://futurice.com">
            <Sponsor fixed={data.futurice.childImageSharp.fixed} />
          </a>
          <a href="http://eatech.com">
            <Sponsor fixed={data.eatech.childImageSharp.fixed} />
          </a>
        </MultipleSponsors>

        <AlignCenter>
          <a href="http://eatech.com">
            <Sponsor fixed={data.reaktor.childImageSharp.fixed} />
          </a>
        </AlignCenter>

        <h4>Edut</h4>
        <p>Tietoa eduista tulossa myöhemmin.</p>
      </Content>
    )}
  />
)

export default partnersPage
