import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import PropTypes from 'prop-types'

import Layout, { Center } from '../components/Layout'
import { Pair, Text, Image } from '../components/Pair'
import ribbon from '../static/images/logonauha2.png'

const Ribbon = styled.div`
  background: url(${ribbon});
  background-size: cover;
  background-repeat: repeat-x;
  background-position: 30%;
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
`

const Link = styled.a`
  font-size: 1.5rem;
  color: #000;
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
  <Layout title="Vuosijuhlaviikko">
    <Center>
      <h3>Vuosijuhlaviikon ohjelma</h3>
      <p>
        Vuosijuhlaviikolle mahtuu paljon ohjelmaa. Lippu juhliin sisältää pääsyn
        pääjuhlaan, pääjuhlan jatkoille, pääjuhlan jatkojen jatkoille, seuraavan
        päivän sillikselle sekä silliksen jatkoille.
      </p>
    </Center>

    <Center>
      <Ribbon />

      <Pair>
        <Text>
          <h3>5. maaliskuuta 2019</h3>
          <p>Juhlaviikon Avajaiset ft. GASELLIT (Olympia)</p>
          <p>
            <FacebookLink url="https://www.facebook.com/events/919508404878025/" />
          </p>
        </Text>
        <Image />
      </Pair>

      <Ribbon />

      <Pair>
        <Text>
          <h3>6. maaliskuuta 2019</h3>
          <p>BOSAn kuohuviini-tasting (Deli 1909 & Wine Bar)</p>
          <p>
            <FacebookLink url="https://www.facebook.com/events/919508404878025/" />
          </p>
        </Text>
        <Image />
      </Pair>

      <Ribbon />

      <Pair>
        <Text>
          <h3>7. maaliskuuta 2019</h3>
          <p>Boomi Poker Championship (Feel Vegas)</p>
          <p>
            <FacebookLink url="https://www.facebook.com/events/919508404878025/" />
          </p>
        </Text>
        <Image />
      </Pair>

      <Ribbon />

      <Pair>
        <Text>
          <h3>8. maaliskuuta 2019</h3>
          <p>Haalaribileet 25 vuotta (Viihdemaailma Ilona)</p>
          <p>
            <FacebookLink url="https://www.facebook.com/events/919508404878025/" />
          </p>
        </Text>
        <Image />
      </Pair>

      <Ribbon />

      <Pair>
        <Text>
          <h3>9. maaliskuuta 2019</h3>
          <p>Tulevaisuusareena (Tampereen Yliopisto)</p>
          <p>
            <FacebookLink url="https://www.facebook.com/events/919508404878025/" />
          </p>
        </Text>
        <Image />
      </Pair>

      <Ribbon />

      <Pair>
        <Text>
          <h3>10. maaliskuuta 2019</h3>
          <p>Tulevaisuusareena (Tampereen Yliopisto)</p>
          <p>
            <FacebookLink url="https://www.facebook.com/events/919508404878025/" />
          </p>
        </Text>
        <Image />
      </Pair>

      <Ribbon />

      <Pair>
        <Text>
          <h3>11. maaliskuuta 2019</h3>
          <p>Tulevaisuusareena (Tampereen Yliopisto)</p>
          <p>
            <FacebookLink url="https://www.facebook.com/events/919508404878025/" />
          </p>
        </Text>
        <Image />
      </Pair>

      <Ribbon />
    </Center>
  </Layout>
)

export default SchedulePage
