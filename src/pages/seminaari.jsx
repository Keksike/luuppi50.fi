import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Center from '../components/Center'
import { Pair, Text, Image } from '../components/Pair'

const seminar = () => (

  <Center>
    <Helmet>
      <title>Vuosijuhlaseminaari</title>
    </Helmet>

    <h3>Vuosijuhlaseminaari</h3>

    <p>
    Vuosijuhlaviikon avaa vuosijuhlaseminaari, joka järjestetään maanantaina 18.2. Tampereen yliopistolla.
    Seminaarissa yhteistyöyrityksiemme edustajat luennoivat IT-maailman ajankohtaisista aiheista.
    Seminaari on kaikille avoin tapahtuma.
    </p>

    <p>
    Seminaarin luennoitsijat ja tarkka aikataulu ilmoitetaan myöhemmin.
    </p>

  </Center>
)

export default seminar
