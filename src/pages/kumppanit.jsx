import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Center from '../components/Center'
import { Pair, Text, Image } from '../components/Pair'

const partnersPage = () => (

  <Center>
    <Helmet>
      <title>Kumppanit ja edut</title>
    </Helmet>

    <h3>Kumppanit ja edut</h3>

    <p>
    Luupin 50-vuotis vuosijuhlia sponsoroivat:
    </p>

    <h4>Edut</h4>
    <p>Tietoa eduista tulossa myöhemmin.</p>

  </Center>
)

export default partnersPage