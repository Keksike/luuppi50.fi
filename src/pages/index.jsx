import React from 'react'
import styled from 'styled-components'

import Layout, { Center } from '../components/Layout'

const Bigger = styled.p`
  font-size: 1.4rem;
`

const SkewedContrastWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  margin-bottom: 6rem;
`

const SkewedContrast = styled.div`
  background: ${props => props.theme.contrastBackground};
  transform: skewY(3deg);
  position: relative;
  color: ${props => props.theme.contrastText};
  z-index: 100;
  padding-bottom: 3rem;
  overflow: hidden;

  > ${Center} {
    transform: skewY(-3deg);
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

    div {
      padding-bottom: 5rem;
    }
  }
`

const Left = styled.div`
  padding: 2rem 0;
  margin-right: 2rem;
  max-width: 60%;

  p {
    font-size: 1.2rem;
  }
`

const Right = styled(Left)`
  margin-right: 0;
  margin-left: 2rem;
`

const FirstImage = styled.div`
  background-image: url('https://comic-news.com/wp-content/uploads/2017/05/99a2ea397db015a4d30362f16151ff73.jpg');
  background-size: cover;
  width: 30rem;
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

    <SkewedContrastWrapper>
      <SkewedContrast>
        <Center>
          <Pair>
            <Left>
              <h3>Luupin pikkujoulut</h3>
              <p>
                Luuppi on perustettu vuonna 1969 matematiikan ja
                tietojenkäsittelyn oppiaineiden ainejärjestöksi. Tätä
                50-vuotista taivalta Luuppi juhlistaa{' '}
                <b>23.&nbsp;helmikuuta&nbsp;2019</b> järjestettävillä
                vuosijuhlillaan.
              </p>
            </Left>

            <FirstImage />
          </Pair>

          <Pair>
            <FirstImage />

            <Right>
              <h3>Luupin pikkujoulujen jatkot</h3>
              <p>
                Luuppi on perustettu vuonna 1969 matematiikan ja
                tietojenkäsittelyn oppiaineiden ainejärjestöksi. Tätä
                50-vuotista taivalta Luuppi juhlistaa{' '}
                <b>23.&nbsp;helmikuuta&nbsp;2019</b> järjestettävillä
                vuosijuhlillaan.
              </p>
            </Right>
          </Pair>

          <Pair>
            <Left>
              <h3>Luupin pikkujoulujen jatkojen jatkot</h3>
              <p>
                Luuppi on perustettu vuonna 1969 matematiikan ja
                tietojenkäsittelyn oppiaineiden ainejärjestöksi. Tätä
                50-vuotista taivalta Luuppi juhlistaa{' '}
                <b>23.&nbsp;helmikuuta&nbsp;2019</b> järjestettävillä
                vuosijuhlillaan.
              </p>
            </Left>

            <FirstImage />
          </Pair>
        </Center>
      </SkewedContrast>
    </SkewedContrastWrapper>

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
