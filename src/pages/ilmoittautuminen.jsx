import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import SignupForm from '../components/SignupForm'

const SignupPage = () => (
  <Content>
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
  </Content>
)

export default SignupPage
