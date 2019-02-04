import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'

const Seminar = () => (
  <Content>
    <Helmet>
      <title>Vuosijuhlaseminaari</title>
    </Helmet>

    <h3>Vuosijuhlaseminaari</h3>

    <p>
      Vuosijuhlaviikon avaa vuosijuhlaseminaari, joka järjestetään{' '}
      <b>maanantaina 18.2.2019</b> Tampereen yliopiston päätalon juhlasalissa.
      Seminaarissa yhteistyöyrityksiemme edustajat luennoivat IT-maailman
      ajankohtaisista aiheista. Seminaari on kaikille avoin tapahtuma.
    </p>

    <p>
      Seminaarissa puhuvat seuraavat yhteistyöyritykset: Gofore, Futurice,
      Etteplan MORE, Symbio ja Cybercom.
    </p>

    <h4>Aikataulu</h4>

    <p>12:00 Seminaari alkaa</p>
    <p>
      12:05 - 13:05 Gofore: Netin varjopuoli. / Tapio Vuorinen ja Akseli
      Piilola.
    </p>
    <p>
      13:10 - 14:10 Futurice: Kuinka tehdä elääkseen sitä mitä haluaa, kun
      kaikki on mahdollista? / Antti Pitkänen.
    </p>
    <p>
      14:15 - 15:15 Etteplan MORE: IT-alan ikuisuuskysymykset. / Elice Pynninen.
    </p>
    <p>15:20 - 15:50 Symbio: Tekoäly ja Vision AI. / Ville Kankainen.</p>
    <p>
      15:55 - 16:25 Cybercom: Aurora A.I- julkissektorin hyppy kohti
      proaktiivista yhteiskuntaa tekoälyn avustamana. / Antti Hahto
    </p>
    <p>16:30 Seminaari päättyy.</p>

    <h4>Aiheista lyhyesti</h4>

    <p>
      <b>Gofore</b> <br />Goforen asiantuntijat näyttävät livenä, kuinka helppoa
      tietojärjestelmiin murtautuminen parhaimmillaan on.
    </p>

    <p>
      <b>Futurice</b> <br />Miksi Patrik Laine on hyvä jääkiekkoilija? Miksi
      Steve Wozniak on hyvä insinööri? Miten olla hyvä työssään ja onnellinen
      työtä tekiessään?
    </p>

    <p>
      <b>Etteplan MORE</b> <br />IT-alan ikuisuuskysymykset.
    </p>

    <p>
      <b>Symbio</b> <br />Tekoäly ja Vision AI.
    </p>

    <p>
      <b>Cybercom</b> <br />Aurora A.I. on Suomen julkisen sektorin tähän asti
      kunnianhimoisin tekoälyhanke, joka pyrkii vastaamaan uudenlaisiin
      haasteisiin modernissa, digitalisoituvassa yhteiskunnassa. Sen sijaan että
      meillä olisi yksittäinen tekoäly, joka tekniikaltaan vanhentuisi joka
      tapauksessa muutamassa vuodessa, on tavoitteena muodostaa kokonainen
      verkosto älykkäitä palveluita, joita sekä julkiset instanssit, yritykset -
      ehkäpä jopa yksittäiset kansalaiset - voivat rinta rinnan yhdessä
      rakentaa.
    </p>
  </Content>
)

export default Seminar
