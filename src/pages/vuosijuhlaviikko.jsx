import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Content from '../components/Content'
import { media } from '../theme'
import facebookLogo from '../static/images/facebook.png'

const Pair = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  min-height: 15rem;
  text-align: right;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem;

  ${media.smallMobile`
    border: none;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    text-align: left;
    padding: 0;
  `};
`

const EventTitle = styled.h3`
  line-height: 1;
  margin-bottom: 1.5rem;
`

const Text = styled.div`
  width: 100%;
  margin-right: 2rem;
`

const Link = styled.a`
  opacity: 0.48;
  color: black;
`

const Time = styled.h4`
  margin-top: -1em;
  font-family: 'Crimson Text', serif;
  font-size: 1.3rem;
`

const Img = styled(Image)`
  height: auto !important;
  width: 55rem !important;
  opacity: 0.79;

  ${media.smallMobile`
    height: 17rem !important;
    width: auto !important;
    margin-bottom: 1rem;
  `};
`

const Wrapper = styled.div`
  margin-bottom: 2rem;
`

const FacebookImg = styled.img`
  color: #7e7e7e;
  height: 15px;
`

const FacebookLink = ({ url }) => (
  <Link target="_blank" href={url}>
    <FacebookImg src={facebookLogo} /> Facebook tapahtuma
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
      <EventTitle>Vuosijuhlaviikon ohjelma</EventTitle>
      <p>
        Vuosijuhlaviikolle mahtuu paljon ohjelmaa. Lippu juhliin sisältää pääsyn
        pääjuhlaan, pääjuhlan jatkoille, pääjuhlan jatkojen jatkoille, seuraavan
        päivän sillikselle sekä silliksen jatkoille.
      </p>
    </Wrapper>

    <Pair>
      <Text>
        <EventTitle>Vuosijuhlaseminaari</EventTitle>
        <Time>18. helmikuuta kello 12:00</Time>
        <p>
          IT-alan ajankohtaisiin kysymyksiin pureutuva vuosijuhlaseminaari
          järjestetään yhteistyöyritystemme kanssa Tampereen yliopiston
          tiloissa. Seminaarista lisätietoa löytyy{' '}
          <a href="/seminaari">täältä</a>.
        </p>
        <FacebookLink url="https://www.facebook.com/events/618532605266285" />
      </Text>
      <Img fixed={data.seminaari.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <EventTitle>Vuosijuhlasitsit</EventTitle>
        <Time>19. helmikuuta kello 18:00</Time>
        <p>
          Kyllähän opiskelijan pitää sitsata kunnolla vuosijuhlien kunniaksi!
          Vuosijuhlasitsit järjestetään Hatanpään soutupaviljongilla
          (Hatanpäänkatu 6) ja mukaan mahtuu noin sata henkilöä!
          Ilmoittautuminen ja lisätietoa{' '}
          <a
            href="https://www.luuppi.fi/tapahtumat/tapahtuma?id=1752"
            target="_blank"
          >
            Luupin nettisivuilta
          </a>.
        </p>
        <FacebookLink url="https://www.facebook.com/events/392701934814750/" />
      </Text>
      <Img fixed={data.unknown.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <EventTitle>Tanssikurssi</EventTitle>
        <Time>20. helmikuuta</Time>
        <p>
          Tanssikurssi palauttaa vuosijuhlaosallistujien mieleen perinteisten
          paritanssien salat. Lisätietoa tapahtumasta ja ilmoittautumisesta
          tulee myöhemmin.
        </p>
        <FacebookLink url="https://www.facebook.com/events/1992141447569579/" />
      </Text>
      <Img fixed={data.tanssi.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <EventTitle>Kolmiot</EventTitle>
        <Time>21. helmikuuta kello 21:00</Time>
        <p>
          Komioilla pääset laittamaan tanssijalan koreaksi ja virittäytymään jo
          vuosijuhlatunnelmaan. Lisätietoa tapahtumasta ja lipunmyynnistä tulee
          myöhemmin.
        </p>
        <FacebookLink url="https://www.facebook.com/events/968047883405234/" />
      </Text>
      <Img fixed={data.kolmiot.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <EventTitle>Cocktail-tilaisuus</EventTitle>
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
        <EventTitle>Luupin 50-vuotisvuosijuhlat</EventTitle>
        <Time>23. helmikuuta kello 18:00</Time>
        <p>
          Vuosijuhlaviikon kohokohta on Paja Kongressissa järjestettävä arvokas
          iltajuhla. Lisätietoa iltajuhlasta löytyy{' '}
          <a href="/paajuhla">täältä</a>.
        </p>
        <FacebookLink url="https://www.facebook.com/events/1099146036894490/" />
      </Text>
      <Img fixed={data.paajuhla.childImageSharp.fixed} />
    </Pair>

    <Pair>
      <Text>
        <EventTitle>Sillis</EventTitle>
        <Time>24. helmikuuta kello 12:00</Time>
        <p>
          Vuosijuhlaviikon päättää rento silliaamiainen, jota monet nimittävät
          juhlien pääpäiväksi. Lisätietoa silliaamiaisesta löytyy{' '}
          <a href="/paajuhla">täältä</a>.
        </p>
        <FacebookLink url="https://www.facebook.com/events/370511576866704/" />
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

        unknown: file(relativePath: { eq: "sitsit.png" }) {
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

        sillis: file(relativePath: { eq: "sillis.png" }) {
          ...partyImage
        }
      }
    `}
    render={data => <ScheduleContent data={data} />}
  />
)

export default SchedulePage
