import React from 'react'
import Helmet from 'react-helmet'

import Center from '../components/Center'
import SignupForm from '../components/SignupForm'

const SignupPage = () => (
  <Center>
    <Helmet>
      <title>Ilmottautuminen</title>
    </Helmet>

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
)

export default SignupPage
