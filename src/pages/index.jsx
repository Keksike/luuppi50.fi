import React from 'react'

import Center from '../components/Center'
import { SkewedContrast, AfterSkewedContrast } from '../components/Skewed'
import { Pair, Text, Image } from '../components/Pair'

const IndexPage = () => (
  <>
    <Center>
      <p>
        Luuppi on perustettu vuonna 1969 matematiikan ja tietojenkäsittelyn
        oppiaineiden ainejärjestöksi. Tätä 50-vuotista taivalta Luuppi juhlistaa{' '}
        <b>23.&nbsp;helmikuuta&nbsp;2019</b> järjestettävillä vuosijuhlillaan.
      </p>

      <p>
        Inasen verran täytettä vielä tänne! Inasen verran täytettä vielä tänne!
        Inasen verran täytettä vielä tänne! Inasen verran täytettä vielä tänne!
        Inasen verran täytettä vielä tänne!
      </p>

      <p>Luupin historiaan mahtuu paljon tapahtumia: …</p>
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
        <p>
          50-vuotisjuhlia vietetään ennennäkemättömällä tavalla. Tapahtumaa
          riittää koko vuosijuhlaviikon, jonka ohjelma löytyy TÄÄLTÄ. Itse
          pääjuhla järjestetään 23.2. Paja Kongressissa aivan Torni-hotellin
          juuressa. Lippu juhliin maksaa 100 euroa jäsenille (120 euroa
          ei-jäsenille) ja se sisältää pääsyn pääjuhlaan, pääjuhlan jatkoille,
          pääjuhlan jatkojen jatkoille, seuraavan päivän sillikselle sekä
          silliksen jatkoille.
        </p>

        <p>
          Ilmoittautuminen vuosijuhlille tapahtuu Luupin verkkosivuilta sekä
          jäsenille että jäsenten aveceille. Kutsuvieraille on lähetetty oma
          ilmoittautumislinkki. Yleinen ilmoittautuminen kaikille luuppilaisille
          alkaa marraskuussa.
        </p>
      </Center>
    </AfterSkewedContrast>
  </>
)

export default IndexPage
