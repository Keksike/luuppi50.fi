import React from 'react';

import Layout from '../components/Layout';
import SignupForm from '../components/SignupForm';

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
    <SignupForm />
  </Layout>
);

export default SignupPage;
