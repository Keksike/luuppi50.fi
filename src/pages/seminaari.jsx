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
      Seminaarissa puhuvat seuraavat yhteistyöyritykset: Gofore, Etteplan MORE,
      Cybercom, Futurice ja Symbio.
    </p>

    <p>Seminaarin tarkka aikataulu ilmoitetaan myöhemmin.</p>
  </Content>
)

export default Seminar
