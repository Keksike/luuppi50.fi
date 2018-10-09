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
      Vuosijuhlaviikon avaa vuosijuhlaseminaari, joka järjestetään maanantaina
      18.2. Tampereen yliopistolla. Seminaarissa yhteistyöyrityksiemme edustajat
      luennoivat IT-maailman ajankohtaisista aiheista. Seminaari on kaikille
      avoin tapahtuma.
    </p>

    <p>Seminaarin luennoitsijat ja tarkka aikataulu ilmoitetaan myöhemmin.</p>
  </Content>
)

export default Seminar
