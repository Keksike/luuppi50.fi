import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const FormWrapper = styled.div`
  width: 100%;
`

const SignupPage = () => (
  <Layout title="Ilmottautuminen">
    <p>
      <b>Luuppi ry:n jäsenet</b> voivat ilmoittautua vuosijuhlaan{' '}
      <a href="https://www.luuppi.fi/tapahtumat">
        Luupin tapahtumakalenterista
      </a>. <b>Kutsuvieraat</b> voivat ilmoittautua vuosijuhlaan alla olevalla
      lomakkeella.
    </p>
    <h3>Kutsuvierasilmoittautuminen</h3>
    <FormWrapper />
  </Layout>
)

export default SignupPage
