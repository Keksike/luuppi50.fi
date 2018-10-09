import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import { Pair, Text } from '../components/Pair'

const ContactPage = () => (
  <Content>
    <Helmet>
      <title>Yhteystiedot</title>
    </Helmet>

    <h3>Yhteystiedot</h3>

    <Pair>
      <Text>
        <h4>Tuomas Himmanen</h4>
        <p>Vuosijuhlakoordinaattori</p>
        <p>vuosijuhlat@luuppi.fi</p>
      </Text>

      <Text>
        <h4>Jonna Paksunen</h4>
        <p>Pääjuhlavastaava</p>
      </Text>
    </Pair>
    <Pair>
      <Text>
        <h4>Cihan Bebek</h4>
        <p>Jatkovastaava</p>
      </Text>

      <Text>
        <h4>Niko Ruotsalainen</h4>
        <p>Sillisvastaava</p>
      </Text>
    </Pair>
    <Pair>
      <Text>
        <h4>Akseli Koskela</h4>
        <p>Cocktailtilaisuus- ja tiedotusvastaava</p>
      </Text>

      <Text>
        <h4>Loviisa Hurme</h4>
        <p>Yritysvastaava</p>
        <p>loviisa.hurme@luuppi.fi</p>
      </Text>
    </Pair>

    <Text>
      <h4>Lydia Isokallio</h4>
      <p>Grafiikkavastaava</p>
    </Text>
  </Content>
)

export default ContactPage
