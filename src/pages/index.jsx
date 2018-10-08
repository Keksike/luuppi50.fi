import React from 'react'

import Center from '../components/Center'
import { SkewedContrast, AfterSkewedContrast } from '../components/Skewed'
import { Pair, Text, Image } from '../components/Pair'

const IndexPage = () => (
  <>
    <Center>
      <p>
      Luuppi ry on toiminut Tampereen yliopiston tietojenkäsittelijöiden, matemaatikkojen ja
      tilastotieteilijöiden ainejärjestönä jo puoli vuosisataa. Vuonna 1969 perustetun Luupin 50-vuotista
      taivalta juhlistetaan ennennäkemättömällä tavalla koko viikon 8 ajan, joka huipentuu <b>23.&nbsp;helmikuuta&nbsp;2019</b>
      { ' ' }Paja Kongressissa järjestettävään pääjuhlaan. Juhlaviikon ohjelman kokonaisuudessaan pääset näkemään täältä.
      </p>

      <p>
        Lippu juhliin maksaa Luuppi ry:n jäsenille 100€ (muut 120€) sisältäen pääjuhlan, pääjuhlan jatkot, pääjuhlan
        jatkojen jatkot, seuraavan päivän silliksen sekä silliksen jatkot. Ilmoittautuminen vuosijuhlille tapahtuu Luupin
        verkkosivuilta sekä jäsenille että jäsenten aveceille. Kutsuvieraille on lähetetty oma ilmoittautumislinkki.
        Yleinen ilmoittautuminen kaikille luuppilaisille alkaa marraskuussa.
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
          Tähän jotain?
        </p>
      </Center>
    </AfterSkewedContrast>

  </>
)

export default IndexPage
