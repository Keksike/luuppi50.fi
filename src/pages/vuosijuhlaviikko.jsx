import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import { Pair, Text, Image } from '../components/Pair'
import Seminaari from '../static/images/light.jpg'
import Unknown from '../static/images/unknown.jpg'
import Tanssi from '../static/images/tanssi.jpg'
import Kolmiot from '../static/images/kolmiot.jpg'
import Cocktail from '../static/images/cocktail.jpg'
import Paajuhla from '../static/images/paajuhla.jpg'
import Sillis from '../static/images/sillis.jpg'

const Link = styled.a`
  font-size: 1.5rem;
  color: #000;
`

const Time = styled.h4`
  margin-top: -1em;
  font-family: 'Crimson Text', serif;
  font-size: 1.3rem;
`

const FacebookLink = ({ url }) => (
  <Link href={url}>
    <FaFacebookF />
  </Link>
)

FacebookLink.propTypes = {
  url: PropTypes.string.isRequired,
}

const SchedulePage = () => (
  <Content>
    <Helmet>
      <title>Vuosijuhlaviikko</title>
    </Helmet>

    <h3>Vuosijuhlaviikon ohjelma</h3>
    <p>
      Vuosijuhlaviikolle mahtuu paljon ohjelmaa. Lippu juhliin sisältää pääsyn
      pääjuhlaan, pääjuhlan jatkoille, pääjuhlan jatkojen jatkoille, seuraavan
      päivän sillikselle sekä silliksen jatkoille.
    </p>

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
      <Image src={Seminaari}/>
    </Pair>

    <Pair>
      <Text>
        <h3>Myöhemmin ilmoitettava tapahtuma</h3>
        <Time>19. helmikuuta kello 18:00</Time>
        <p>...</p>

      </Text>
      <Image src={Unknown}/>
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
      <Image src={Tanssi}/>
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
      <Image src={Kolmiot}/>
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
      <Image src={Cocktail}/>
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
      <Image src={Paajuhla}/>
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
      <Image src={Sillis}/>
    </Pair>

    <br/>
    <br/>
  </Content>
)

export default SchedulePage
