import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { media } from '../theme'
import Content from '../components/Content'

const ContentRow = styled.div`
  display: flex;

  ${media.smallMobile`
    display: block;
  `};
`

const Half = styled.div`
  flex: 1;
  text-align: center;
`

const Text = styled.div`
  padding: 2rem 0;
  min-width: 60%;
  margin: 0;
  ${media.smallMobile`
    max-width: none;
    padding: 1rem 0;
  `};
`

const ContactPage = () => (
  <Content>
    <Helmet>
      <title>Yhteystiedot</title>
    </Helmet>
    <h3>Yhteystiedot</h3>
    <p>
      Otathan yhteyttä vuosijuhliin liittyvissä tiedusteluissa
      vuosijuhlat@luuppi.fi
    </p>
    <ContentRow>
      <Half>
        <Text>
          <h4>Tuomas Himmanen</h4>
          <p>Vuosijuhlakoordinaattori</p>
          <p>vuosijuhlat@luuppi.fi</p>
        </Text>
      </Half>
      <Half>
        <Text>
          <h4>Jonna Paksunen</h4>
          <p>Pääjuhlavastaava</p>
        </Text>
      </Half>
    </ContentRow>
    <ContentRow>
      <Half>
        <Text>
          <h4>Cihan Bebek</h4>
          <p>Jatkovastaava</p>
        </Text>
      </Half>
      <Half>
        <Text>
          <h4>Niko Ruotsalainen</h4>
          <p>Sillisvastaava</p>
        </Text>
      </Half>
    </ContentRow>
    <ContentRow>
      <Half>
        <Text>
          <h4>Akseli Koskela</h4>
          <p>Cocktailtilaisuus- ja tiedotusvastaava</p>
        </Text>
      </Half>
      <Half>
        <Text>
          <h4>Loviisa Hurme</h4>
          <p>Yritysvastaava</p>
          <p>loviisa.hurme@luuppi.fi</p>
        </Text>
      </Half>
    </ContentRow>
    <ContentRow>
      <Half>
        <Text>
          <h4>Lydia Isokallio</h4>
          <p>Grafiikkavastaava</p>
        </Text>
      </Half>
    </ContentRow>
  </Content>
)

export default ContactPage
