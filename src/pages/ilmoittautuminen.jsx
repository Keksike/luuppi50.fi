import React from 'react'

import Layout, { Center } from '../components/Layout'
import SignupForm from '../components/SignupForm'

const SignupPage = () => (
  <Layout title="Ilmottautuminen">
    <Center>
      <h3>Luuppi ry:n jäsenet</h3>

      <p>
        <b>Luupin jäsenet</b> voivat ilmottautua vuosijuhlaan{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luuppi.fi/tapahtumat"
        >
          Luupin tapahtumakalenterista
        </a>.
      </p>

      <h3>Kutsuvieras&shy;ilmoittautuminen</h3>

      <SignupForm />
    </Center>
  </Layout>
)

export default SignupPage
