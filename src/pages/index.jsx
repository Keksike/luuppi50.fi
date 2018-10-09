import React from 'react'

import Content from '../components/Content'
import { SkewedContrast, AfterSkewedContrast } from '../components/Skewed'
import { Pair, Text, Image } from '../components/Pair'

const IndexPage = () => (
  <>
    <Content>
      <p>
        Luuppi ry on toiminut Tampereen yliopiston tietojenkäsittelijöiden, matemaatikkojen ja
        tilastotieteilijöiden ainejärjestönä jo puoli vuosisataa. Vuonna 1969 perustetun Luupin 50-vuotista
        taivalta juhlistetaan ennennäkemättömällä tavalla koko viikon 8 ajan, joka huipentuu <b>23.&nbsp;helmikuuta&nbsp;2019</b>
        { ' ' }Paja Kongressissa järjestettävään pääjuhlaan. Juhlaviikon ohjelman kokonaisuudessaan pääset näkemään
        <a href="/vuosijuhlaviikko"> TÄÄLTÄ</a>.
      </p>

      <p>
        Lippu juhliin maksaa Luuppi ry:n jäsenille 100€ (muut 120€) sisältäen
        pääjuhlan, pääjuhlan jatkot, pääjuhlan jatkojen jatkot, seuraavan päivän
        silliksen sekä silliksen jatkot. Ilmoittautuminen vuosijuhlille tapahtuu
        Luupin verkkosivuilta sekä jäsenille että jäsenten aveceille.
        Kutsuvieraille on lähetetty oma ilmoittautumislinkki. Yleinen
        ilmoittautuminen kaikille luuppilaisille alkaa marraskuussa.
      </p>

    </Content>
  </>
)

export default IndexPage
