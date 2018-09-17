import React from 'react'
import styled from 'styled-components'

import { media } from '../theme'
import Layout, { Center } from '../components/Layout'

const Bigger = styled.p`
  font-size: 1.2rem;
`

const SkewedContrast = styled.div`
  background: ${props => props.theme.contrastBackground};
  transform: skewY(3deg);
  position: relative;
  color: ${props => props.theme.contrastText};
  z-index: 100;
  padding-bottom: 3rem;
  overflow: hidden;
  margin-top: 3rem;
  margin-bottom: 6rem;

  > ${Center} {
    transform: skewY(-3deg);
    padding: 0;
  }
`

const AfterSkewedContrast = styled.div`
  margin-top: -3rem;
`

const Pair = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-top: 2rem;
  }

  &:last-child {
    margin-bottom: -5rem;
  }

  ${media.smallMobile`
    flex-wrap: wrap;
  `};
`

const Text = styled.div`
  padding: 2rem 0;
  margin: 0 2rem;

  p {
    font-size: 1.2rem;
  }

  h3 {
    color: #aa8c3e;
  }

  ${Pair}:last-child & {
    padding-bottom: 5rem;
  }

  ${media.mobile`
    max-width: 50%;
  `};

  ${media.smallMobile`
    max-width: none;
  `};
`

const Image = styled.div`
  background-image: url('https://comic-news.com/wp-content/uploads/2017/05/99a2ea397db015a4d30362f16151ff73.jpg');
  background-size: cover;
  width: 50rem;

  ${media.smallMobile`
    width: 100%;
    height: 20rem;
    order: -1;
    margin-top: -1rem;
  `};
`

const IndexPage = () => (
  <Layout disableCenter>
    <Center>
      <Bigger>
        Luuppi on perustettu vuonna 1969 matematiikan ja tietojenkäsittelyn
        oppiaineiden ainejärjestöksi. Tätä 50-vuotista taivalta Luuppi juhlistaa{' '}
        <b>23.&nbsp;helmikuuta&nbsp;2019</b> järjestettävillä vuosijuhlillaan.
      </Bigger>

      <Bigger>
        Inasen verran täytettä vielä tänne! Inasen verran täytettä vielä tänne!
        Inasen verran täytettä vielä tänne! Inasen verran täytettä vielä tänne!
        Inasen verran täytettä vielä tänne!
      </Bigger>

      <Bigger>Luupin historiaan mahtuu paljon tapahtumia: …</Bigger>
    </Center>

    <SkewedContrast>
      <Center>
        <Pair>
          <Text>
            <h3>Luupin pikkujoulut</h3>
            <p>
              Luuppi on perustettu vuonna 1969 matematiikan ja
              tietojenkäsittelyn oppiaineiden ainejärjestöksi. Tätä 50-vuotista
              taivalta Luuppi juhlistaa <b>23.&nbsp;helmikuuta&nbsp;2019</b>{' '}
              järjestettävillä vuosijuhlillaan.
            </p>
          </Text>

          <Image />
        </Pair>

        <Pair>
          <Image />

          <Text>
            <h3>Luupin pikkujoulujen jatkot</h3>
            <p>
              Luuppi on perustettu vuonna 1969 matematiikan ja
              tietojenkäsittelyn oppiaineiden ainejärjestöksi. Tätä 50-vuotista
              taivalta Luuppi juhlistaa <b>23.&nbsp;helmikuuta&nbsp;2019</b>{' '}
              järjestettävillä vuosijuhlillaan.
            </p>
          </Text>
        </Pair>

        <Pair>
          <Text>
            <h3>Luupin pikkujoulujen jatkojen jatkot</h3>
            <p>
              Luuppi on perustettu vuonna 1969 matematiikan ja
              tietojenkäsittelyn oppiaineiden ainejärjestöksi. Tätä 50-vuotista
              taivalta Luuppi juhlistaa <b>23.&nbsp;helmikuuta&nbsp;2019</b>{' '}
              järjestettävillä vuosijuhlillaan.
            </p>
          </Text>

          <Image />
        </Pair>
      </Center>
    </SkewedContrast>

    <AfterSkewedContrast>
      <Center>
        <Bigger>
          50-vuotisjuhlia vietetään ennennäkemättömällä tavalla. Tapahtumaa
          riittää koko vuosijuhlaviikon, jonka ohjelma löytyy TÄÄLTÄ. Itse
          pääjuhla järjestetään 23.2. Paja Kongressissa aivan Torni-hotellin
          juuressa. Lippu juhliin maksaa 100 euroa jäsenille (120 euroa
          ei-jäsenille) ja se sisältää pääsyn pääjuhlaan, pääjuhlan jatkoille,
          pääjuhlan jatkojen jatkoille, seuraavan päivän sillikselle sekä
          silliksen jatkoille.
        </Bigger>

        <Bigger>
          Ilmoittautuminen vuosijuhlille tapahtuu Luupin verkkosivuilta sekä
          jäsenille että jäsenten aveceille. Kutsuvieraille on lähetetty oma
          ilmoittautumislinkki. Yleinen ilmoittautuminen kaikille luuppilaisille
          alkaa marraskuussa.
        </Bigger>
      </Center>
    </AfterSkewedContrast>
  </Layout>
)

export default IndexPage
