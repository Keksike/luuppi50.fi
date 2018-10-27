import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Content from '../components/Content'
import { media } from '../theme'

const Pair = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  min-height: 15rem;

  ${media.smallMobile`
    flex-wrap: wrap;
    flex-direction: column-reverse;
  `};
`

const Text = styled.div`
  width: 100%;
  margin-right: 2rem;
`

const Link = styled.a`
  font-size: 1.5rem;
  color: #000;
`

const Time = styled.h4`
  margin-top: -1em;
  font-family: 'Crimson Text', serif;
  font-size: 1.3rem;
`

const Img = styled(Image)`
  height: auto !important;
  min-width: 20rem;

  ${media.smallMobile`
    height: 17rem !important;
    width: auto !important;
    margin-bottom: 1rem;
  `};
`

const Wrapper = styled.div`
  margin-bottom: 2rem;
`

const FacebookLink = ({ url }) => (
  <Link href={url}>
    <FaFacebookF />
  </Link>
)

FacebookLink.propTypes = {
  url: PropTypes.string.isRequired,
}

// eslint-disable-next-line react/prop-types
const ScheduleContent = ({ data }) => (
  <Content>
    <Helmet>
      <title>Vuosijuhlaviikko</title>
    </Helmet>

    <Wrapper>
      <h3>Vuosijuhlaviikon ohjelma</h3>
      <p>
        Vuosijuhlaviikolle mahtuu paljon ohjelmaa. Lippu juhliin sisältää pääsyn
        pääjuhlaan, pääjuhlan jatkoille, pääjuhlan jatkojen jatkoille, seuraavan
        päivän sillikselle sekä silliksen jatkoille.
      </p>
    </Wrapper>

    <Pair>
      <Text>
        <h3>Vuosijuhlaseminaari</h3>
        <Time>18. helmikuuta kello 16:00</Time>
        <p>
          IT-alan ajankohtaisiin kysymyksiin pureutuva vuosijuhlaseminaari
          järjestetään yhteistyöyritystemme kanssa Tampereen yliopiston
          tiloissa. Seminaarista lisätietoa löytyy{' '}
          <a href="/seminaari">TÄÄLTÄ.</a>
        </p>
      </Text>
      <Img fixed={data.seminaari.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <h3>Myöhemmin ilmoitettava tapahtuma</h3>
        <Time>19. helmikuuta kello 18:00</Time>
        <p>...</p>
      </Text>
      <Img fixed={data.unknown.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <h3>Tanssikurssi</h3>
        <Time>20. helmikuuta</Time>
        <p>
          Tanssikurssi palauttaa vuosijuhlaosallistujien mieleen perinteisten
          paritanssien salat. Lisätietoa tapahtumasta ja ilmoittautumisesta
          tulee myöhemmin.
        </p>
      </Text>
      <Img fixed={data.tanssi.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <h3>Kolmiot</h3>
        <Time>21. helmikuuta kello 21:00</Time>
        <p>
          Komioilla pääset laittamaan tanssijalan koreaksi ja virittäytymään jo
          vuosijuhlatunnelmaan. Lisätietoa tapahtumasta ja lipunmyynnistä tulee
          myöhemmin.
        </p>
      </Text>
      <Img fixed={data.kolmiot.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <h3>Cocktail-tilaisuus</h3>
        <Time>23. helmikuuta kello 15:30</Time>
        <p>
          Ennen iltajuhlaa järjestetään kutsuvieraille cocktail-tilaisuus, jonka
          aikana kutsuvieraiden on mahdollisuus muistaa 50-vuotiasta Luuppia.{' '}
        </p>
      </Text>
      <Img fixed={data.cocktail.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <h3>Luupin 50-vuotis vuosijuhlat</h3>
        <Time>23. helmikuuta kello 18:00</Time>
        <p>
          Vuosijuhlaviikon kohokohta on Paja Kongressissa järjestettävä arvokas
          iltajuhla. Lisätietoa iltajuhlasta löytyy{' '}
          <a href="/paajuhla">TÄÄLTÄ</a>
        </p>
      </Text>
      <Img fixed={data.paajuhla.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <h3>Sillis</h3>
        <Time>24. helmikuuta kello 12:00</Time>
        <p>
          Vuosijuhlaviikon päättää rento silliaamiainen, jota monet nimittävät
          juhlien pääpäiväksi. Lisätietoa silliksestä löytyy{' '}
          <a href="/paajuhla">TÄÄLTÄ</a>
        </p>
      </Text>
      <Img fixed={data.sillis.childImageSharp.fixed} />
    </Pair>
  </Content>
)

const SchedulePage = () => (
  <StaticQuery
    query={graphql`
      fragment partyImage on File {
        childImageSharp {
          fixed(width: 640) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      query {
        seminaari: file(relativePath: { eq: "hand.jpg" }) {
          ...partyImage
        }

        unknown: file(relativePath: { eq: "question.jpg" }) {
          ...partyImage
        }

        tanssi: file(relativePath: { eq: "tanssi.jpg" }) {
          ...partyImage
        }

        kolmiot: file(relativePath: { eq: "kolmiot.jpg" }) {
          ...partyImage
        }

        cocktail: file(relativePath: { eq: "cocktail.jpg" }) {
          ...partyImage
        }

        paajuhla: file(relativePath: { eq: "paajuhla.jpg" }) {
          ...partyImage
        }

        sillis: file(relativePath: { eq: "sillis.jpg" }) {
          ...partyImage
        }
      }
    `}
    render={data => <ScheduleContent data={data} />}
  />
)

export default SchedulePage
